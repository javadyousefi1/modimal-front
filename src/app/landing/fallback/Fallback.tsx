import { LoadingOutlined } from "@ant-design/icons";
import loading from ""
const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-4 min-h-[500px]">
      <img src="public\loading.gif"/>
    </div>
  );
};

export default Fallback;
