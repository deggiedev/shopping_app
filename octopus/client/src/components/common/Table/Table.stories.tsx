import { CustomTable as Table } from "./Table";
import { mockSpecifications } from "../../mockData";

export default {
  title: "Table",
  component: Table,
};

export const Default = () => <Table data={mockSpecifications} />;
