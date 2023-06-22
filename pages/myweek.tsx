import Layout from "@/components/Layout";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";

export default function Myweek() {
  const [acknowledgement, setAcknowledgement] = useState({
    ack1: { Value: "", Error: false, ErrorMessage: "" },
    ack2: { Value: "", Error: false, ErrorMessage: "" },
    ack3: { Value: "", Error: false, ErrorMessage: "" },
  });
  const [accomplishment, setAccomplishment] = useState({
    acc1: { Value: "", Error: false, ErrorMessage: "" },
    acc2: { Value: "", Error: false, ErrorMessage: "" },
    acc3: { Value: "", Error: false, ErrorMessage: "" },
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ open: false, message: "", severity: "success" });
  };

  // Handles the change event for the accomplishments input fields
  // Determine the status based on the length of the input value
  // Update the acknowledgement state with the new value and status
  const handleAccChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const status =
      value.length > 0 ? (value.length > 150 ? true : false) : true;
    const message =
      value.length < 1
        ? "This field is required"
        : value.length > 150
        ? "This field cannot exceed 150 characters"
        : "";
    setAccomplishment((prevData) => ({
      ...prevData,
      [name]: { Value: value, Error: status, ErrorMessage: message },
    }));
  };

  const handleAckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const status =
      value.length > 0 ? (value.length > 150 ? true : false) : true;
    setAcknowledgement((prevData) => ({
      ...prevData,
      [name]: { Value: value, Error: status },
    }));
  };

  let hasErrors = false;

  // This function checks for errors in the acknowledgement and accomplishment fields.
  function checkErrors() {
    Object.entries(acknowledgement).forEach(async ([inputName, input]) => {
      if (input.Value.length < 1 || input.Value.length >= 150) {
        const message =
          input.Value.length < 1
            ? "This field is required"
            : input.Value.length > 150
            ? "This field cannot exceed 150 characters"
            : "";
        setAcknowledgement((prevData) => ({
          ...prevData,
          [inputName]: {
            Value: input.Value,
            Error: true,
            ErrorMessage: message,
          },
        }));
        hasErrors = true;
      }
    });
    Object.entries(accomplishment).forEach(async ([inputName, input]) => {
      if (input.Value.length < 1 || input.Value.length >= 150) {
        const message =
          input.Value.length < 1
            ? "This field is required"
            : input.Value.length > 150
            ? "This field cannot exceed 150 characters"
            : "";
        setAccomplishment((prevData) => ({
          ...prevData,
          [inputName]: {
            Value: input.Value,
            Error: true,
            ErrorMessage: message,
          },
        }));
        hasErrors = true;
      }
    });
  }

  // This function handles the submit event for the form.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkErrors();
    var createdDt = new Date()
    if (!hasErrors) {
      Object.entries(acknowledgement).forEach(async ([inputName, input]) => {
        const response = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            name: "Sergio Pinzon",
            comment: input.Value,
            createdAt: createdDt,
          }),
          headers: { "Content-Type": "application/json" },
        }).then(response => {
          if (response.ok) {
            // Successful request
            setAcknowledgement((prevData) => ({
              ...prevData,
              [inputName]: {
                Value: "",
                Error: input.Error,
                ErrorMessage: input.ErrorMessage,
              },
            }));
          } else {
            // Handle error cases
            throw new Error("Request failed with status " + response.status);
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error("Error:", error);
        });
      });
      Object.entries(accomplishment).forEach(async ([inputName, input]) => {
        const response = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            name: "Sergio Pinzon",
            comment: input.Value,
            createdAt: createdDt,
          }),
          headers: { "Content-Type": "application/json" },
        }).then(response => {
          if (response.ok) {
            // Successful request
            setAccomplishment((prevData) => ({
              ...prevData,
              [inputName]: {
                Value: "",
                Error: input.Error,
                ErrorMessage: input.ErrorMessage,
              },
            }));
          } else {
            // Handle error cases
            throw new Error("Request failed with status " + response.status);
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error("Error:", error);
        });
      });
      setSnackbar({
        open: true,
        message: "Accomplishments and Acknowledgments added!",
        severity: "success",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Please check all the inputs",
        severity: "warning",
      });
    }
  };

  return (
    <>
      <Layout>
        <h1 className="heading-2">My Week</h1>
        <h2 className="heading-3">Accomplishments</h2>
        <h3 className="block font-sans text-2xl leading-snug tracking-normal text-inherit antialiased text-opacity-50 text-slate-600">
          In the last week I am proud that I . . .
        </h3>
        <form action="#" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              label="In the last week I am proud that I . . ."
              variant="outlined"
              required
              type="text"
              size="medium"
              margin="normal"
              name="acc1"
              value={accomplishment.acc1.Value}
              onChange={handleAccChange}
              error={accomplishment.acc1.Error}
              helperText={accomplishment.acc1.ErrorMessage}
            ></TextField>
            <TextField
              label="In the last week I am proud that I . . ."
              variant="outlined"
              required
              type="text"
              size="medium"
              margin="normal"
              name="acc2"
              value={accomplishment.acc2.Value}
              onChange={handleAccChange}
              error={accomplishment.acc2.Error}
              helperText={accomplishment.acc2.ErrorMessage}
            ></TextField>
            <TextField
              label="In the last week I am proud that I . . ."
              variant="outlined"
              required
              type="text"
              size="medium"
              margin="normal"
              name="acc3"
              value={accomplishment.acc3.Value}
              onChange={handleAccChange}
              error={accomplishment.acc3.Error}
              helperText={accomplishment.acc3.ErrorMessage}
            ></TextField>
            <h3 className="heading-3">Acknowledgments</h3>
            <h3 className="block font-sans text-2xl leading-snug tracking-normal text-inherit antialiased text-opacity-50 text-slate-600">
              In the last week I appreciated that @teamMember . . .
            </h3>
            <TextField
              required
              name="ack1"
              size="medium"
              margin="normal"
              value={acknowledgement.ack1.Value}
              onChange={handleAckChange}
              error={acknowledgement.ack1.Error}
              helperText={acknowledgement.ack1.ErrorMessage}
            ></TextField>
            <TextField
              required
              name="ack2"
              size="medium"
              margin="normal"
              value={acknowledgement.ack2.Value}
              onChange={handleAckChange}
              error={acknowledgement.ack2.Error}
              helperText={acknowledgement.ack2.ErrorMessage}
            ></TextField>
            <TextField
              required
              name="ack3"
              size="medium"
              margin="normal"
              value={acknowledgement.ack3.Value}
              onChange={handleAckChange}
              error={acknowledgement.ack3.Error}
              helperText={acknowledgement.ack3.ErrorMessage}
            ></TextField>
            <Button
              type="submit"
              id="submit-btn"
              className="bg-blue-500 hover:bg-blue-700 py-2 my-5"
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
            >
              Submit!
            </Button>
          </FormControl>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={snackbar.severity as AlertColor}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Layout>
    </>
  );
}
