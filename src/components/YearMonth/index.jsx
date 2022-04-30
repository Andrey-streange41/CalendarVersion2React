import React from "react";
import "../YearMonth/style.css";

class YearMonth extends React.Component{
    constructor(props){
        super(props);
       this.month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    }

    render(){
        return <section className="container">
            <section><span>{this.month[this.props.month]}</span></section>
            <section><span>{this.props.year}</span></section>
        </section>
    }
}

export default YearMonth;