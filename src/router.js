import React from "react";
import { Route, Routes } from "react-router-dom";
import BestFriend from "./pages/bestfriend";
import Calender from "./pages/Calender";
import CalenderDepth from "./pages/Calender2";
import FixSign from "./pages/FixSign";
import Friend from "./pages/friend";
import Info from "./pages/Info";
import Login from "./pages/login";
import Main from "./pages/main";
import MyPage from "./pages/mypage";
import Signin from "./pages/signin";
import Setting from "./pages/setting";

const RouterComponent = () => {
    return (
        <Routes>
          <Route path="/" element={<Setting />} />
          <Route path="/bestFriend" element={<BestFriend />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/calenderdepth" element={<CalenderDepth />} />
          <Route path="/fixsign" element={<FixSign />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
    );
  };
  
  export default RouterComponent;