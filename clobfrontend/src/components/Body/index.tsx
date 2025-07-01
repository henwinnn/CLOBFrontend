import "tailwindcss";
import Left from "./left";
import Right from "./right";
import History from "./History";

function Body() {
  return (
    <div className="px-13">
      <div className=" flex justify-between px-4">
        <Left />
        <Right />
      </div>
      <History />
    </div>
  );
}

export default Body;
