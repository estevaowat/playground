const moment = require('moment');

const getLastDayOfMonth = (date) => moment(date).endOf('month');
const getFirstDayOfMonth = (date) =>
  moment(date).startOf('month').startOf('day');
const startDate = '2020-01-01';
let currentDate = startDate;
let tenDaysCounter = 1;
const todaysDate = moment();
while (moment(currentDate).isBefore(todaysDate)) {
  let endDate = moment(currentDate).add(9, 'days');
  if (tenDaysCounter === 3) {
    endDate = getLastDayOfMonth(currentDate);
  }
  if (moment(endDate).isAfter(todaysDate)) {
    endDate = todaysDate;
  }
  console.log({
    startDate: moment(currentDate).format('YYYY-MM-DD'),
    endDate: moment(endDate).format('YYYY-MM-DD'),
  });
  currentDate = moment(currentDate).add(10, 'days');
  tenDaysCounter += 1;

  if (tenDaysCounter > 3) {
    const nextMonth = moment(endDate).add(1, 'day');
    currentDate = getFirstDayOfMonth(nextMonth);
    tenDaysCounter = 1;
  }
}
