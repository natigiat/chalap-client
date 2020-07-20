import React from "react";
import "./Flowchart_Stations.css";
import { Divider, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Flowchart_Stations = () => {
  return (
    <div className="Flowchart_Stations">
      <Timeline mode="right">
        <Timeline.Item>
          <Divider orientation="left" plain>
            תחנת עפרה
          </Divider>
        </Timeline.Item>
        <Timeline.Item>step2 2015-09-01</Timeline.Item>

        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          color="red"
        >
          תחנת עליה של יוסף-חיים.
        </Timeline.Item>
        <Timeline.Item>step4 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Flowchart_Stations;
