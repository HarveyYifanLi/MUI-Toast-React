import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { connect } from "react-redux";

import { saveLikedFormSubmission } from "../service/mockServer";

function ToastSnackBar(props) {
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  const [snackBarLocation, setSnackBarLocation] = useState({vertical: "bottom", horizontal: "right"});
  const { vertical, horizontal } = snackBarLocation;

  useEffect(() => {
    console.log("props.formData.id", props.formData.id);
    console.log("props.open", props.open);
    console.log("messageInfo", messageInfo);
    console.log("open", open);
    const propsFormData = props.formData.data;
    const messageInfoFromProps = propsFormData ? {message: `${propsFormData.firstName} ${propsFormData.lastName} \n ${propsFormData.email}`, key: new Date().getTime()} : undefined;

    if (props.open && propsFormData && !messageInfo && !open) {
        setMessageInfo(messageInfoFromProps);
        setOpen(props.open);
    }
  }, [props.formData.id, props.open]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    // reset states
    setMessageInfo(undefined);
    setOpen(false);
  };

  const handleLiked = () => {
    try {
        // firstly save/persist the liked formSubmission data to "server" DB
        // this operation needs to be within a try-catch block due to "server"'s likely failure
        saveLikedFormSubmission(props.formData);
    } catch(err) {
        console.error(err);
    }
    // then reset states
    setMessageInfo(undefined);
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleLiked}>
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

function mapStateToProps(state) {
    return {
      formData: state.currentForm.formData,
      open: state.toastNotification.open,
    };
}

export default connect(mapStateToProps, {})(ToastSnackBar);