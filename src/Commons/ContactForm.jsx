import React, { useState } from "react";
import axios from "axios";
//material ui
import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LoadingButton } from "@mui/lab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//react hook form
import { useForm } from "react-hook-form";

const ContactForm = () => {
  //loading button
  const [loading, setLoading] = useState(false);
  //dialog material
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //media query
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  //hook form
  const {
    handleSubmit,
    resetField,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/sendEmail", data);
      if (res.data.result === "success") {
        setMessage(
          "Thank you for reaching out! I'll get back to you as soon as possible!  😊"
        );
        handleClickOpen();
        resetField("name");
        resetField("email");
        resetField("message");
        setLoading(false);
      } else {
        setMessage("Oops ! Something went wrong.. please try again!");
        handleClickOpen();
        setLoading(false);
      }
    } catch {
      setMessage("Oops ! Something went wrong.. please try again!");
      handleClickOpen();
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        margin={isNotSmallerScreen ? "0 auto" : "20px auto"}
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "25px",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          height: "100%",
        }}
      >
        <TextField
          {...register("name", {
            required: { value: true, message: "Required field" },
            minLength: {
              value: 3,
              message: "It must be at least 3 characters",
            },
            maxLength: { value: 20, message: "No more than 20 characters" },
            pattern: { value: /^[a-zA-Z ]+$/, message: "Only letters" },
          })}
          {...(errors.name && {
            error: true,
            helperText: errors.name.message,
          })}
          fullWidth
          label="Name"
          name="name"
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <TextField
          {...register("email", {
            required: { value: true, message: "Required field" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email not valid",
            },
          })}
          {...(errors.email && {
            error: true,
            helperText: errors.email.message,
          })}
          fullWidth
          label="Email"
          name="email"
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <TextField
          {...register("message", {
            required: { value: true, message: "Required field" },
            minLength: { value: 10, message: "At least 10 characters" },
          })}
          {...(errors.message && {
            error: true,
            helperText: errors.message.message,
          })}
          fullWidth
          multiline
          rows={4}
          label="Message"
          name="message"
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <LoadingButton
          loading={loading}
          disabled={!isDirty || !isValid}
          variant="contained"
          type="submit"
          fullWidth
        >
          Send
        </LoadingButton>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // PaperProps={{
        //   style: { borderRadius: 0 }
        // }}
        PaperProps={{
          style: { padding: '0.5em'  }
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "#151314" }}>
          {"Send mail status"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{
              border: "1px solid #151314",
              borderRadius: 0,
              boxShadow: "3px 2px #151314",
              ":hover": { backgroundColor: "#FFB585", transition: "0.4s" },
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactForm;
