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
        const amountDaysInMonth = getDaysInMonth(new Date(date.getFullYear(), this.props.month)); 
        
        
        const year = date.getFullYear();

        return <section className="backgroundPart">
                <YearMonth year={year} month={this.props.month}/>
                <WeekDays/>
                <DaysOfMonth startDayWeek={this.props.startDayWeek} currentDay={currentDay} amountDaysInMonth={amountDaysInMonth} year={year}/>
                
        </section>
    }
}

export default UserUIPart;