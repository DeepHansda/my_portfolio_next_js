import { useAppContext } from "@/Context/AppContext";
import { Alert, CircularProgress, Fade, Snackbar } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [dis, setDis] = useState(false);
  const { contact, isLoading } = useAppContext();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      email: email,
      contactNumber: contactNumber,
      message: message,
    };

    contact(data)
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          setOpen(true);
          setDis(true);
        } else if (res.status !== 200) {
          setOpen(true);
          setDis(false);
          console.log(res);
        } else {
          setOpen(true);
          setDis(false);
        }
      })
      .catch((err) => {
        setOpen(true);
        setDis(false);
        console.log(err);
      });
  };
  // const data = useSelector(state=>state.contacts)
  // console.log(data)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="from-component">
      <Snackbar
        TransitionComponent={Fade}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={dis ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {dis ? "Message Sent !" : "Message Failed !"}
        </Alert>
      </Snackbar>
      <form onSubmit={submitHandler}>
        <div className="form">
          {isLoading && <CircularProgress />}
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <div className="cut"></div>
            <label for="firstname" className="placeholder">
              Full Name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="email"
              placeholder=" "
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="cut"></div>
            <label for="lastname" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="phone"
              className="input"
              type="number"
              placeholder=" "
              required
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
            />
            <div className="cut cut-short"></div>
            <label for="email" className="placeholder">
              Mobile Number
            </label>
          </div>

          <div
            className="input-container ic2"
            style={{ width: "100%", height: "150px" }}
          >
            <textarea
              id="message"
              className="input"
              placeholder=" "
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <div className="cut cut-short"></div>
            <label for="email" className="placeholder">
              Message
            </label>
          </div>
          <button type="text" className="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
