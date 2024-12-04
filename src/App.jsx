import MyAvatar from "./components/MyAvatar";
import MySwitch from "./components/MySwitch";
import MySelect from "./components/Select";
import MyBadge from "./components/MyBadge";
import Mycalender from "./components/Mycalendar";
import MyCard from "./components/MyCard";
import MyCollapse from "./components/MyCollapse";
import MyPictures from "./components/MyPictures";
import MyPopoper from "./components/MyPopoper";
import MyAlert from "./components/MyAlert";
import MyTab from "./components/MyTabs";
import MyTour from "./components/MyTour";
import MyMessage from "./components/MyMessages";
import Resultt from "./components/Result";

export default function App() {
  return (
    <>
      <MySelect />
      <MySwitch />
      <MyAvatar />
      <MyBadge />
      <Mycalender />
      <MyCard />
      <MyCollapse />
      <MyPictures />
      <MyPopoper />
      {/* <MyToolTip /> */}
      <MyAlert />
      <MyTab />
      <MyTour />
      <MyMessage />
      <Resultt />
    </>
  );
}
