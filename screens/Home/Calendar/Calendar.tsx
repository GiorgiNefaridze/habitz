import { memo } from "react";

import Text from "../../../components/Text/Text";
import { CalendarType } from "../Home";
import { colors } from "../../../CONSTANTS";

import { DateBlock } from "./Calendar.style";

const Calendar = memo(
  ({ date, day, isCurrentDay, isCurrentMonth }: CalendarType) => {
    return (
      <DateBlock currentDay={isCurrentDay} currentMonth={isCurrentMonth}>
        <Text
          color="grey"
          text={date.toString()}
          fontSize={4}
          fontWeight={900}
          lineHeight={30}
          style={{ color: isCurrentDay ? colors.primary : "grey" }}
        />
        <Text
          color="grey"
          text={day?.slice(0, 3)?.toUpperCase()}
          fontSize={5}
          fontWeight={400}
          lineHeight={20}
          style={{ color: isCurrentDay ? colors.primary : "grey" }}
        />
      </DateBlock>
    );
  }
);

export default Calendar;
