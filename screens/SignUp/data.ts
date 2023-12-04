import MaleImg from "../../assets/male.png";
import FemaleImg from "../../assets/female.png";

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

const habits: Record<"name", string>[] = [
  {
    name: "Drink water",
  },
  {
    name: "Run",
  },
  {
    name: "Read books",
  },
  {
    name: "Meditate",
  },
  {
    name: "Study",
  },
  {
    name: "Sleep",
  },
];

export { genders, habits };
