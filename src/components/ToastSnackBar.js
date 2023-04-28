import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function ConsecutiveSnackbars() {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const [snackBarLocation, setSnackBarLocation] = React.useState({vertical: "bottom", horizontal: "right"});

  const { vertical, horizontal } = snackBarLocation;

  React.useEffect(() => {
    console.log(snackPack);
    console.log("messageInfo", messageInfo);
    console.log("open", open);

    if (snackPack.length && !messageInfo) {
      console.log("if is hit !!!");
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      console.log("else if is hit ~~~");
      // Close an active snack when a new one is added
      setMessageInfo(undefined);
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessageInfo(undefined);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick("Message A")}>Show message A</Button>
      <Button onClick={handleClick("Message B")}>Show message B</Button>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              Like
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </div>
  );
}