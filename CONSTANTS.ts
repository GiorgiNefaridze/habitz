const colors = {
  primary: "#6B73FF",
  secondary: "#CDCDD0",
};

const paddingHorizontal = 25;

type Habit = {
  habit: string;
  icon: string;
};

const emojiCollection: Habit[] = [
  {
    habit: "Exercise",
    icon: "🏋️‍♂️",
  },
  {
    habit: "Eat",
    icon: "🍴",
  },
  {
    habit: "Stay Hydrated",
    icon: "💧",
  },
  {
    habit: "Read",
    icon: "📕",
  },
  {
    habit: "Sleep",
    icon: "😴",
  },
  {
    habit: "Run",
    icon: "🏃🏽‍♂️",
  },
  {
    habit: "Rest",
    icon: "🛏️",
  },
  {
    habit: "Learn Something",
    icon: "🎓",
  },
  {
    habit: "Travel and Explore",
    icon: "🌎",
  },
  {
    habit: "Focus",
    icon: "🧘🏽",
  },
  {
    habit: "Listening",
    icon: "🎧",
  },
  {
    habit: "Gaming",
    icon: "🖥️",
  },
  {
    habit: "Meeting",
    icon: "🗣️",
  },
  {
    habit: "Beach",
    icon: "🏖️",
  },
];

const dateIntervals: Record<"value", string>[] = [
  { value: "Once in a day" },
  { value: "Twice a day" },
  { value: "Every day" },
  { value: "Once in a month" },
  { value: "Twice a month" },
  { value: "Every month" },
  { value: "Once in a year" },
  { value: "Twice a year" },
  { value: "Every year" },
];

const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export { dateIntervals, emojiCollection, paddingHorizontal, colors, days };
