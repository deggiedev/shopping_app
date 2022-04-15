import { AddMinus } from "./AddMinus";

export default {
  title: "AddMinus",
  component: AddMinus,
};

export const Add = () => <AddMinus handleClick={() => null} variant="add" />;
export const Minus = () => (
  <AddMinus handleClick={() => null} variant="minus" />
);
