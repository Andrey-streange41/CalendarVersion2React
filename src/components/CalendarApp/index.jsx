import React from "react";
import "../CalendarApp/style.css";
import CurrentDayDisplay from "../CurrentDayDisplay";
import UserUIPart from "../UserUIPart";
import MonthSlider from "../MonthSlider";

class CalendarApp extends React.Component{
    constructor(props){
        super(props);
      this.date = new Date("2022-03-16")
     
      this.state={
            myDate: this.date,
            month : this.date.getMonth(),
            startDayWeek: this.date.getDay()
            
      }
      
    }
    prevMonth=()=>{
                if(this.state.month <= 0){
                    this.setState((state)=>{
                        return{
                            ...state,
                            month: 11
                        }
                    })
                    return;
                }
                const newSetings = new Date(
                     this.state.myDate.getFullYear(),
                     this.state.myDate.getMonth()-1,
                     this.state.myDate.getDate());
                     console.log(newSetings)
                
                this.setState((state)=>{
                    return{
                        ...state,
                        month: this.state.month - 1,
                        myDate: new Date(newSetings),
                        startDayWeek: newSetings.getDay()
                    }
                })
    }
    nextMonth=()=>{
        if(this.state.month >= 11){
            this.setState((state)=>{
                return{
                    ...state,
                    month: 0
                }
            })
            return;
        }
        const newSetings = new Date(
             this.state.myDate.getFullYear(),
             this.state.myDate.getMonth()+1,
             this.state.myDate.getDate());
             console.log(newSetings)
        
        this.setState((state)=>{
            return{
                ...state,
                month: this.state.month + 1,
                myDate: new Date(newSetings),
                startDayWeek: newSetings.getDay()
            }
        })
    }

    render(){
        return <section className="appBackground"> 
        
            <CurrentDayDisplay myDate={this.state.myDate} />
            <UserUIPart month={this.state.month} myDate={this.state.myDate} startDayWeek={this.state.startDayWeek}/>
            <MonthSlider nextMonth={this.nextMonth} changeMonth={this.prevMonth}/>
        </section>
    }
}
export default CalendarApp;
