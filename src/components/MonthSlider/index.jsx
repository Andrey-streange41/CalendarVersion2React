import React from "react";
import { ReactDOM } from "react";
import chevronLeft from "../MonthSlider/images/chevron-left.png";
import chevronRight from "../MonthSlider/images/chevron-right.png";
import calendar from "../MonthSlider/images/calendar-month-outline.png";
import "../MonthSlider/style.css";

class MonthSlider extends React.Component{
    constructor(props){
        super(props);
        
    }

    changeDate = ()=>{
        this.props.changeMonth();  
    }

    nextMonth = () =>{
        this.props.nextMonth();
    }

    render(){
        return <section className="sliderBackground"> 
            <img onClick={this.changeDate} src={chevronLeft} alt="chevronLeft" />
            <img src={calendar} alt="calendar" /> 
            <img onClick={this.nextMonth} src={chevronRight} alt="chevronRight" />
        </section>
    }
}

export default MonthSlider;