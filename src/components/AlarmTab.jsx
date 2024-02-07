import React from "react";
import AlarmBtn from "./AlarmBtn";

function AlarmTab() {
  return (
    <div className="AlarmTab">
      <AlarmBtn text="위험 알림정보" />
      <AlarmBtn text="고장 알림정보" />
      <AlarmBtn text="보충수 알림정보" />
      <AlarmBtn text="소모품 교체정보" />
      <AlarmBtn text="+" />
    </div>
  );
}

export default AlarmTab;
