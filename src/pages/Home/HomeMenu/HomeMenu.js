import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPositionb: "left",
  });

  const changeTabPosition = (e) => {
    setState({ tabPositionb: e.target.value });
  };

  const { tabPositionb } = state;

  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        <Radio.Group value={tabPositionb} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPositionb}>
        <TabPane
          tab={
            <img
              src="http://picsum.photos/200"
              className="rounded-full"
              width="50"
              alt="Tab 1"
            />
          }
          key="1"
        ></TabPane>
        <TabPane
          tab={
            <img
              src="http://picsum.photos/200"
              className="rounded-full"
              width="50"
              alt="Tab 2"
            />
          }
          key="2"
        >
          Content of Tab2
        </TabPane>
        <TabPane
          tab={
            <img
              src="http://picsum.photos/200"
              className="rounded-full"
              width="50"
              alt="Tab 3"
            />
          }
          key="3"
        >
          Content of Tab3
        </TabPane>
      </Tabs>
    </>
  );
}