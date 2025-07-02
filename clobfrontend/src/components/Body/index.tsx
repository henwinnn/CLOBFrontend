import "tailwindcss";
import Left from "./left";
import Right from "./right";
import History from "./History";

function Body() {
  return (
    <div>
      <div className=" flex justify-between px-12 py-4">
        <Left />
        <Right />
      </div>
      <History />
    </div>
  );
}

export default Body;
