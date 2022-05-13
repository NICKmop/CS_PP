import React from "react";
import './layoutMain.css';
import SideHeader from "./header/header";
import Aboutme from "./section/aboutme/aboutme";
import Contact from "./section/Contact/Contact";
import Work from "./section/Work/Work";
import Myskills from "./section/Myskills/Myskills";

const Layout = () => {
    return (
        <div style={{height :'934px'}}>
            <SideHeader/>
            <div id="layout_content">
                <div className="layoutContent">
                    <h1>안녕하세요. (HI)</h1>
                    <h1>저는 이창섭 입니다! (I'm changseopLee)</h1>
                    <h1>웹 개발자 포트폴리오 입니다! (Web Developer Page!)</h1>
                </div>
                <div className="layoutContent">
                    <h1>사진 정보 등록.</h1>
                </div>
            </div>
            <Aboutme/>
            <Myskills/>
            <Work/>
            <Contact/>
        </div>
    )
}
export default Layout;