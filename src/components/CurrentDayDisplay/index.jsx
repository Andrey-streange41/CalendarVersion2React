import React from "react";
import "../CurrentDayDisplay/style.css";

class CurrentDayDisplay extends React.Component{
    constructor(props){
        super(props);
        this.myDate=props.myDate;
        this.weekDayNames={
            "0":"Sunday",
            "1":"Monday",
            "2":"Tuesday",
            "3":"Wednesday",
            "4":"Thursday",
            "5":"Friday",
            "6":"Saturday"
        }
    }

    render(){
        return <section class="backPart">
            <section>{this.weekDayNames[this.myDate.getDay()]}</section>
            <section>{this.myDate.getDate()}</section> 
        </section>
    }
}

export default CurrentDayDisplay;