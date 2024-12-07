/* eslint-disable react/prop-types */
import { Progress } from "antd";

const twoColors = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

const StatsOverview = ({ percent }) => {
  return (
    <Progress
      type="circle"
      percent={percent}
      format={(percent) => `${percent}`}
      strokeColor={twoColors}
      status="active"
      size={50}
    />
  );
};
export default StatsOverview;
