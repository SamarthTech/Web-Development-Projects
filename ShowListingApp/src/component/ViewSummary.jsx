import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import { Paper, TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "100px",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ViewSummary = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);


  

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setAlertOpen(true);
    setOpen(false);
  };


  const [summary, setSummary] = useState();
  let { id } = useParams();
  useEffect(() => {
    let url = `https://api.tvmaze.com/shows/${id}`;
    fetch(url)
      .then((res) =>
        res
          .json()
          .then((result) => {
            setSummary(result);
            console.log(result);
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));
    console.log("summary", summary);
  }, []);
  return (
    <>
      <div className="" style={{ display: "flex" }}>
        <div className="" style={{ display: "inline" }}>
          <img src={summary?.image?.original} alt="" height="500px" />
        </div>
        <div className="" style={{ display: "inline", margin: "5% 5% 5% 10%" }}>
          <h1>{summary?.name}</h1>
          <br />
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            {summary?.summary.replace(/<\/?[^>]+>/gi, "")}
          </p>
          <div style={{ textAlign: "center", marginTop: "20%" }}>
            <button onClick={handleOpen} style={{ border: "none" }}>
              <Button buttonName="Book ticket" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper elevation={0} />
          <TextField
            id="outlined-disabled"
            label="Movie Name"
            defaultValue={summary?.name}
            sx={{ margin: "20px 80px" }}
          />
          <div className="">
            <TextField
              id="outlined-disabled"
              label="First Name"
              variant="outlined"
              sx={{ margin: "20px 80px" }}
            />
            <TextField
              id="outlined-disabled"
              label="Last Name"
              variant="outlined"
              sx={{ margin: "20px 80px" }}
            />
            <TextField
              id="outlined-disabled"
              label="Email"
              variant="outlined"
              sx={{ margin: "20px 80px" }}
            />
          </div>
          <Paper />
          <div
            className="buttons"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button
              className="button"
              onClick={handleClick}
              style={{ margin: "20px" }}
            >
              Submit
            </button>
            <button
              className="button"
              onClick={handleClose}
              style={{ margin: "20px" }}
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
        Thank You For Purchasing Ticket
        </Alert>
      </Snackbar>
    </>
  );
};

export default ViewSummary;
