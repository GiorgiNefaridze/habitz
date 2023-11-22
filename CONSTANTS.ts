const colors = {
  primary: "#6B73FF",
  secondary: "#CDCDD0",
};

const colorsCollection = [
  "blue",
  "green",
  "red",
  "violet",
  "white",
  "grey",
  "purple",
  "orange",
  "black",
  "pink",
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

const paddingHorizontal = 25;

export { dateIntervals, colorsCollection, paddingHorizontal, colors };
