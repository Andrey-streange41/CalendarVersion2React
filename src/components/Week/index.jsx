import React from "react";
import "../Week/style.css";
import Day from "../Day";

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.daysList = [];

    if (this.props.weekCounter === 0) {
      for (let i = 0; i < 7; i++) {
        if (i < this.props.startDayWeek) {
          this.daysList.push(
            <Day
              currentDay={this.props.currentDay}
              key={(i + 1) * Math.random()}
            />
          );
          continue;
        }

        this.daysList.push(
          <Day
            currentDay={this.props.currentDay}
            key={(i + 1) * Math.random()}
            content={
              i + this.props.weekCounter * 7 - this.props.startDayWeek + 1
            }
          />
        );
      }
    } else {
      let lastDay = 0;

      for (let i = 0; i < 7; i++) {
        if (lastDay >= this.props.amountDaysInMonth) {
          this.daysList.push(
            <Day
              currentDay={this.props.currentDay}
              key={(i + 1) * Math.random()}
            />
          );
          continue;
        } else {
            if( i + this.props.weekCounter * 7 - this.props.startDayWeek + 1 <= this.props.amountDaysInMonth){

           
          this.daysList.push(
              
            <Day
              currentDay={this.props.currentDay}
              key={(i + 1) * Math.random()}
              content={
                i + this.props.weekCounter * 7 - this.props.startDayWeek + 1
              }
            />
          );
           }
          lastDay =
            i + this.props.weekCounter * 7 - this.props.startDayWeek + 1;
            if(this.props.weekCounter===5)
                console.log(lastDay)
        }
      }
      if (this.props.weekCounter === 5) {
          
          if(this.props.amountDaysInMonth > lastDay){
              while (this.props.amountDaysInMonth > lastDay) {
                  lastDay++;
          this.daysList.push(
            <Day
              currentDay={this.props.currentDay}
              key={1 * Math.random()}
              content={lastDay}
            />
          );
          
        }
          }
        
      }
    }
  }

  render() {
    return <section className="week-container">{this.daysList}</section>;
  }
}

export default Week;
