import React from "react";
import "../Day/style.css";

class Day extends React.Component{
    constructor(props){
        super(props);
        this.selectedDay = "day";
        if(this.props.content === this.props.currentDay){
            this.selectedDay = "day selectedDay";
        }
    }
    render(){
        return <section className={this.selectedDay}>
            {this.props.content}
        </section>
    }
}
export default Day;