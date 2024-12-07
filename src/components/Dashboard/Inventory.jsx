/* eslint-disable react/prop-types */
import { Progress } from "antd";

const Inventory = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl font-thin uppercase text-gray-500">Inventory</h1>
      <div>
        {data?.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <span style={{ width: "80px", textAlign: "left", fontSize: "14px" }}>{item.label}</span>
            <Progress
              percent={item.length.replace(/%$/, "")}
              showInfo={false}
              strokeColor="#52c41a" // Green color
              style={{ width: "120px" }}
            />
            <span style={{ width: "40px", textAlign: "right", fontSize: "14px" }}>{item.length}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
