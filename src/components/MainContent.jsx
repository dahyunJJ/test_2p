import React from "react";
import AlarmTab from "./AlarmTab";
import ApiSection from "./ApiSection";

function MainContent() {
  return (
    <div className="mainContent">
      <h1>GreenON 환경&위생 통합관리 플랫폼</h1>
      <div className="flexWrap">
        <div className="realTimeInfo">
          <p>실시간정보</p>
        </div>
        <div className="dataByDate">
          <p>일/주/월/년</p>
        </div>
        <AlarmTab />
      </div>
      <ApiSection />
    </div>
  );
}

export default MainContent;
