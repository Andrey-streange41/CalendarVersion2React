import React from "react";
import Week from "../Week";

class DaysOfMonth extends React.Component {

  render() {
    const weeks = [];
    console.log(`start day of week ${this.props.startDayWeek}; amount daysInMonth:${this.props.amountDaysInMonth}`)
    for (let i = 0; i < 6; i++) {
      weeks.push(
            <Week
              amountDaysInMonth={this.props.amountDaysInMonth}
              startDayWeek={this.props.startDayWeek}
              key={(1 + i) * Math.random()}
              weekCounter={i}
              currentDay={this.props.currentDay}
            />
          );
        }

    return <section className="weeksSection">{weeks}</section>;
  }
}

export default DaysOfMonth;
