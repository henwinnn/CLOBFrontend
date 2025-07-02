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

      <div className="material-icons-outlined">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 216,
            height: 28,
            backgroundColor: "#364153",
            color: "white",
          }}
        >
          <IconButton
            disabled
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Top;
