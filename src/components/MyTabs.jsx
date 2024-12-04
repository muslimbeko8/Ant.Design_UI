import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "1-tabdasiz",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "1-tabdasiz",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "3-tabdasiz",
  },
];
const MyTab = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
export default MyTab;
