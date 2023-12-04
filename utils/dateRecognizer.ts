import { Platform } from "react-native";
import { days } from "../CONSTANTS";

export type CalendarType = {
  date: number;
  day: string;
  isCurrentDay: boolean;
};

const currentDate = new Date();
const year: number = currentDate.getFullYear();
const month: number = currentDate.getMonth();
const currentDay: number = Number(
  Platform.OS === "ios"
    ? new Date().toLocaleDateString().split(".")[0]
    : new Date().toLocaleDateString().split("/")[1]
);

const getDays = () => {
  let daysArray: CalendarType[] = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date(year, month, currentDay + i);

    daysArray.push({
      date: Number(
        Platform.OS === "ios"
          ? date.toLocaleDateString().split(".")[0]
          : date.toLocaleDateString().split("/")[1]
      ),
      day: days[date.getDay()],
      isCurrentDay:
        Number(
          Platform.OS === "ios"
            ? currentDate.toLocaleDateString().split(".")[0]
            : currentDate.toLocaleDateString().split("/")[1]
        ) ===
        Number(
          Platform.OS === "ios"
            ? date.toLocaleDateString().split(".")[0]
            : date.toLocaleDateString().split("/")[1]
        ),
    });
  }

  return daysArray;
};

export { getDays };
