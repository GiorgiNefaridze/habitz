import { memo } from "react";

import { CalendarType } from "../../../utils/dateRecognizer";
import Text from "../../../components/Text/Text";
import { colors } from "../../../CONSTANTS";

import { DateBlock } from "./Calendar.style";

const Calendar = memo((props: CalendarType) => {
  const { date, day, isCurrentDay } = props;
  return (
    <DateBlock currentDay={isCurrentDay}>
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
});

export default Calendar;
