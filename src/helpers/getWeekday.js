const { DateTime } = require("luxon");

const weekdayArr = [];
const now = DateTime.now();

for (let i = 0; i < 3; i++) {
  let day = now.plus({ days: i }).toFormat("ccc");
  weekdayArr.push(day);
}

export default weekdayArr;
