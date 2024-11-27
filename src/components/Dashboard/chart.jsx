/* eslint-disable react/prop-types */
import { Progress } from "antd";

const twoColors = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

const Chart = ({ percent }) => (
  <Progress
    type="circle"
    percent={percent}
    format={(percent) => `${percent}%`}
    strokeColor={twoColors}
    status="active"
    width={70}
  />
);
export default Chart;
