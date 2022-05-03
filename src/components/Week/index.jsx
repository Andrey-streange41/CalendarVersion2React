import React from 'react';
import '../Week/style.css';
import Day from '../Day';

class Week extends React.Component {

  calcDay = (i) => (i + this.props.weekCounter * 7 - this.props.startDayWeek + 1);

  render() {
    this.daysList = [];

    // первая неделя
    if (this.props.weekCounter === 0) {
      // пройтись по 7ми дням
      for (let i = 0; i < 7; i++) {
        // если месяц еще не начался
        if (i < this.props.startDayWeek) {
          // вставить дни-пустышки
          this.daysList.push(
            {
              currentDay: this.props.currentDay,
              key: (i + 1) * Math.random(),
            }
          );
          // пойти дальше
          continue;
        }

        // иначе
        // вставить день с текстом (content)
        this.daysList.push(
          {
            currentDay: this.props.currentDay,
            key: (i + 1) * Math.random(),
            content: this.calcDay(i),
          }
        );
      }
    } else {
      // остальные недели
      let lastDay = 0;
      // debugger

      // для 7ми дней
      for (let i = 0; i < 7; i++) {
        // если предыдущий день больше или равен последнего числа месяца
        if (lastDay >= this.props.amountDaysInMonth) {
          // значит последняя неделя
          // вставляем дни-пустышки
          this.daysList.push(
            {
              currentDay: this.props.currentDay,
              key: (i + 1) * Math.random(),
            }
          );
          continue;
        } else {
          // иначе
          // если расч-мый день меньше посл числа в месяце
          if (
            this.calcDay(i) <=
            this.props.amountDaysInMonth
          ) {
            // вставляем обычные дни
            this.daysList.push(
              {
                currentDay: this.props.currentDay,
                key: (i + 1) * Math.random(),
                content: this.calcDay(i),
              }
            );
          }

          // предыдущий день для след расчетов
          lastDay = this.calcDay(i);
        }
      }

      // для пятой недели
      if (this.props.weekCounter === 5) {
        if (this.props.amountDaysInMonth > lastDay) {
          while (this.props.amountDaysInMonth > lastDay) {
            lastDay++;
            this.daysList.push({
              currentDay: this.props.currentDay,
              key: 1 * Math.random(),
              content: lastDay,
            });
          }
        }
      }
    }
    console.log(this.daysList);

    return <section className="week-container">
      {this.daysList.map(d => <Day {...d} />)}
    </section>;
  }
}

export default Week;
