import React from "react";
import "../YearMonth/style.css";
import MonthSlider from "../MonthSlider";

class YearMonth extends React.Component{
    constructor(props){
        super(props);
       this.month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

       this.currentMonth = this.props.month;
    }

    render(){
        return <section className="container">
            <section id="month"><span >{this.month[this.props.month]}</span></section>
            <section><span>{this.props.year}</span></section>
        </section>
    }
}

export default YearMonth;