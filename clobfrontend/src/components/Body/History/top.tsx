import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "tailwindcss";

function Top() {
  return (
    <div className="flex items-center justify-between rounded">
      <FormGroup className="w-fit ">
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "white",
              }}
            />
          }
          label="Current Market"
        />
      </FormGroup>

      <div className="h-9 rounded10px border border-white  flex items-center px-2">
        <SearchIcon className="text-white mr-1.5" />
        <input className="bg-transparent outline-none" placeholder="Search" />
      </div>
    </div>
  );
}

export default Top;
