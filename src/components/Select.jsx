import { Select } from "antd";

const obj = [
  { value: "nima", label: <span>nima</span> },
  { value: "nima", label: <span>nima</span> },
  { value: "nima", label: <span>nima</span> },
];
export default function MySelect() {
  return <Select options={obj} />;
}
