import React from "react";
import Week from "../Week";

class DaysOfMonth extends React.Component {
  constructor(props) {
    super(props);
    this.weeks = [];
    this.weekCounter = 0;
    
    
  }

  render() {
    console.log(`start day of week ${this.props.startDayWeek}; amount daysInMonth:${this.props.amountDaysInMonth}`)
    for (let i = 0; i < 6; i++) {
          this.weeks.push(
            <Week
              amountDaysInMonth={this.props.amountDaysInMonth}
              startDayWeek={this.props.startDayWeek}
              key={(1 + i) * Math.random()}
              weekCounter={this.weekCounter}
              currentDay={this.props.currentDay}
            />
          );
          this.weekCounter++;
        }

    return <section className="weeksSection">{this.weeks}</section>;
  }
}

export default DaysOfMonth;
