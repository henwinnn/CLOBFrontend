import "tailwindcss";
import Top from "./top";
import TableMarket from "./Table";

function History() {
  return (
    <>
      <div className="mx-12">
        <Top />
      </div>

      <div className="mx-12 my-4 rounded-2xl text-black bg-custom-grey">
        <TableMarket />
      </div>
    </>
  );
}

export default History;
