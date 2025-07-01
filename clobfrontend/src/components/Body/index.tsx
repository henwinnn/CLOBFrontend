import "tailwindcss";
import Left from "./left";
import Right from "./right";
import History from "./History";

function Body() {
  return (
    <div className=" bg-amber-950">
      <div className=" flex items-center justify-between px-4">
        <Left />
        <Right />
      </div>
      <History />
    </div>
  );
}

export default Body;
