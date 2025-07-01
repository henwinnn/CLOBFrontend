import "tailwindcss";
import Left from "./left";
import Right from "./right";

function Body() {
  return (
    <div className=" bg-amber-950">
      <div className="container h-full flex items-center justify-between px-4">
        <Left />
        <Right />
      </div>
      <div className="px-4">History</div>
    </div>
  );
}

export default Body;
