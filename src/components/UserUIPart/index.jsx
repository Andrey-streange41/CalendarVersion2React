import React from "react";
import YearMonth from "../YearMonth";
import "../UserUIPart/style.css";
import WeekDays from "../WeekDays";
import DaysOfMonth from "../DaysOfMonth";
import { getDate, getDaysInMonth } from "date-fns";

class UserUIPart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const date = this.props.myDate;
        
        const startDay = date.getDay(); // start day of week in month sartuday
        const currentDay = date.getDate() // current day of month
        const amountDaysInMonth = getDaysInMonth(new Date(date.getFullYear(), date.getMonth())); 
        console.log(currentDay);
        
        const year = date.getFullYear();

        return <section className="backgroundPart">
                <YearMonth year={year} month={date.getMonth()}/>
                <WeekDays/>
                <DaysOfMonth startDayWeek={startDay} currentDay={currentDay} amountDaysInMonth={amountDaysInMonth} year={year}/>
                
        </section>
    }
}

export default UserUIPart;