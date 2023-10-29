import { CalendarType } from "../screens/Home/Home";

let daysArray: CalendarType[] = [];
let days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const year: number = currentDate.getFullYear();
const month: number = currentDate.getMonth();
const startingdDate: number = +new Date().toLocaleDateString().split("/")[1];

const getDays = (): CalendarType[] => {
  for (
    let i = startingdDate - 1;
    i <= (startingdDate > 20 ? startingdDate + 10 : startingdDate + 20);
    i++
  ) {
    const date = new Date(year, month, i);

    daysArray.push({
      date: +date.toLocaleDateString().split("/")[1],
      day: days[date.getDay()],
      isCurrentDay: +currentDate.toLocaleDateString().split("/")[1] === i,
      isCurrentMonth: month + 1 === +date?.toLocaleDateString().split("/")[0],
    });
  }

  return daysArray;
};

export { getDays };
