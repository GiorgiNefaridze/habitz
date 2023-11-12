import MaleImg from "../../assets/male.png";
import FemaleImg from "../../assets/female.png";
import DrinkWater from "../../assets/drinkWater.png";
import Run from "../../assets/run.png";
import ReadBook from "../../assets/readBook.png";
import Meditate from "../../assets/meditate.png";
import Study from "../../assets/study.png";
import Sleep from "../../assets/sleep.png";

export type dataType = {
  name: string;
  img: ReturnType<typeof MaleImg>;
};

const genders: dataType[] = [
  {
    name: "Male",
    img: MaleImg,
  },
  {
    name: "Female",
    img: FemaleImg,
  },
];

const habits: dataType[] = [
  {
    name: "Drink water",
    img: DrinkWater,
  },
  {
    name: "Run",
    img: Run,
  },
  {
    name: "Read books",
    img: ReadBook,
  },
  {
    name: "Meditate",
    img: Meditate,
  },
  {
    name: "Study",
    img: Study,
  },
  {
    name: "Sleep",
    img: Sleep,
  },
];

export { genders, habits };
