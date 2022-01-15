import { Spin } from "antd";

function Loading() {
  return (
    <div className="w-full h-full grid place-items-center">
      <Spin size="large" />
    </div>
  );
}

export default Loading;
