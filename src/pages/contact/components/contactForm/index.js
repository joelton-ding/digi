import React, { useState } from "react"
import axios from "axios"
import Fade from "react-reveal/Fade"
import useForm from "react-hook-form"
import Grid from "@material-ui/core/Grid"
import { Mail, AlertTriangle, Check } from "react-feather"
import SwitchButton from "./switchButton"
import styles from "./style.module.scss"
import { mailerEndpoint } from 'config'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ContactFormPage = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const [disableButton, setDisableButton] = useState(false)
  const [existing_client, setExistingClient] = useState(false)
  const [resetCheckBox, setResetCheckBox] = useState(false)
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //Function for submit button
  const onSubmit = data => {
    setDisableButton(true)    
    axios({
      method: "post",
      url: mailerEndpoint,
      data,
    })
      .then(function(response) {
        // console.log(response.data)
        let res = response.data
        if (res.success) {
          //TODO  display message
          // setSuccessNotify(true)
          // reset form when success
          reset({
            name: "",
            email: "",
            phone: "",
            enquiries: "",
            message: "",
            client_id: "",
          });
          setResetCheckBox(existing_client);
          setExistingClient(false);
          setOpen(true);
          setDisableButton(false);
        }
      })
      .catch(function(error) {
        setDisableButton(false);
      })
  }

  return (
    <Fade left>
      <div className={`clearfix ${styles.contact_form}`}>
        <h1>Submit a request</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name<sup>*</sup>
            <input
              className={`${errors.name && `${styles.input_errors}`}`}
              ref={register({ required: true })}
              type="name"
              name="name"
              placeholder="Enter Name"
            />
            {errors.name && (
              <div className={styles.error_msg}>
                <AlertTriangle size={18} /> Name field is required!
              </div>
            )}
          </label>

          <label>
            Email<sup>*</sup>
            <input
              className={`${errors.email && `${styles.input_errors}`}`}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            {errors.email && (
              <div className={styles.error_msg}>
                <AlertTriangle size={18} /> Enter a valid email address!
              </div>
            )}
          </label>

          <label>
            Phone Number<sup>*</sup>
            <input
              className={`${errors.phone && `${styles.input_errors}`}`}
              ref={register({ required: true, pattern: /^[0-9]+$/ })}
              type="phone"
              name="phone"
              placeholder=""
            />
            {errors.phone && (
              <div className={styles.error_msg}>
                <AlertTriangle size={18} /> Phone number is required.
              </div>
            )}
          </label>

          <div className="existing-client">
            <Grid container spacing={3}>
              <Grid item lg={4} xs={12}>
                <label className="clearfix">
                  Existing Client<sup>*</sup>
                  <SwitchButton
                    onChange={checked => setExistingClient(checked)}
                    reset={resetCheckBox}
                  />
                </label>
              </Grid>
              {existing_client && (
                <Grid item lg={8} xs={12}>
                  <label>
                    Client ID<sup>*</sup>
                    <input
                      type="client_id"
                      name="client_id"
                      className={`${errors.client_id &&
                        `${styles.input_errors}`}`}
                      ref={register({ required: true })}
                      placeholder="Enter your client ID"
                    />
                    {errors.client_id && (
                      <div className={styles.error_msg}>
                        <AlertTriangle size={18} /> Please enter the client
                        ID!
                      </div>
                    )}
                  </label>
                </Grid>
              )}
            </Grid>
          </div>

          <label>
            Enquiry<sup>*</sup>
            <div className={styles.select}>
              <select
                className={`${errors.enquiries && `${styles.input_errors}`}`}
                name="enquiries"
                ref={register({ required: true })}
              >
                <option value="">Please choose</option>
                <option value="account_opening">Account Opening</option>
                <option value="bank_card">Bank Card</option>
                <option value="incoming_transfer">Incoming Transfer</option>
                <option value="outgoing_transfer">Outgoing Transfer</option>
                <option value="term_deposit">Term Deposit</option>
                <option value="other">Other</option>
              </select>
              {errors.enquiries && (
                <div className={styles.error_msg}>
                  <AlertTriangle size={18} /> Please choose enquiry!
                </div>
              )}
            </div>
          </label>

          <label>
            Message<sup>*</sup>
            <textarea
              className={`${errors.message && `${styles.input_errors}`}`}
              ref={register({ required: true })}
              name="message"
              placeholder="Tell us what you are thinking about."
              rows="5"
            />
            {errors.message && (
              <div className={styles.error_msg}>
                <AlertTriangle size={18} /> Message field is required!
              </div>
            )}
          </label>
          <button type="submit" disabled={disableButton}>
            <Mail /> {disableButton ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
        <div className={styles.dialog_wrapper}>
        <DialogTitle className={styles.alert_dialog_title}>Your message has been sent!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={styles.success_msg}>
              <Check size={18} /> Thank you! We will get to you as soon as possible.
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    </Fade>
  )
}

export default ContactFormPage
