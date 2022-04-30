import React from "react";
import "../CalendarApp/style.css";
import CurrentDayDisplay from "../CurrentDayDisplay";
import UserUIPart from "../UserUIPart";

class CalendarApp extends React.Component{
    constructor(props){
        super(props);
        this.myDate =  new Date("2022-04-15");
        console.log(this.myDate.getDay())
    }

    render(){
        return <section className="appBackground"> 
            <CurrentDayDisplay myDate={this.myDate}/>
            <UserUIPart myDate={this.myDate}/>
        </section>
    }
}
export default CalendarApp;
