import { Button, TextField, Alert, Stack, Snackbar } from "@mui/material/";
import { validationSchema } from "../../../validationSchema";
import { useFormik } from "formik";
import { User } from "../../../types/user";
import UserDataService from "../../../services/UserDataService";
import { useEffect, useState } from "react";
export const SignUpUser = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const user: User = {
        userName: values.userName,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        repeatPassword: values.confirmPassword,
      };

      await UserDataService.SignUp(user)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            setSuccessMessage(response.data);
            setOpenSuccess(true);
          }
        })
        .catch(function (error) {
          console.log(error);
          if (error.response) {
            setErrorMessage(error.response.data);
            setOpenError(true);
            // Request made and server responded
            console.log(error.response.data.error);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
      resetForm({
        values: {
          userName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });
    },
  });
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const handleCloseSuccess = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  return (
    <>
      <div className="container_signup">
        <h1>SignUp</h1>
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <Snackbar
            open={openError}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleClose}
            sx={{ width: "100%" }}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              {errorMessage}
            </Alert>
          </Snackbar>
          <Snackbar
            open={openSuccess}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleCloseSuccess}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              {successMessage}
            </Alert>
          </Snackbar>
        </Stack>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="userName"
            label="username"
            type="text"
            margin="normal"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            fullWidth
            id="firstName"
            label="first name"
            type="text"
            margin="normal"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            fullWidth
            id="lastName"
            label="last name"
            type="text"
            margin="normal"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.firstName && formik.errors.lastName}
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            autoComplete="off"
          />
          <TextField
            fullWidth
            margin="normal"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.password && Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.password && formik.errors.confirmPassword
            }
            autoComplete="off"
          />
          <Stack spacing={2} sx={{ maxWidth: 400, m:"auto" }}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
            <Button color="primary" variant="outlined" fullWidth type="button">
              Log In
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};
