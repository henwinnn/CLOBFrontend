import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputBase,
  Paper,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "tailwindcss";

function Top() {
  return (
    <div className="flex items-center justify-between rounded p-4 shadow-md">
      <FormGroup className="w-fit ">
        <FormControlLabel control={<Checkbox />} label="Current Market" />
      </FormGroup>

      <div className="material-icons-outlined mr-70">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 216,
            height: 28,
            backgroundColor: "rgba(13, 122, 176, 0.3)",
          }}
        >
          <IconButton disabled sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Top;
