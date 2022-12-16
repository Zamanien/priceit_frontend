import * as yup from "yup";
import { FormValues } from "./FormValues";

export const validationSchema = yup.object({
  userName: yup
    //@ts-ignore
    .string("Enter your username")
    .min(3, "Username should be of minimum 3 characters length")
    .required("Username is required"),
  firstName: yup
    //@ts-ignore
    .string("Enter your username")
    .min(3, "Username should be of minimum 3 characters length")
    .required("Username is required"),
  lastName: yup
    //@ts-ignore
    .string("Enter your username")
    .min(3, "Username should be of minimum 3 characters length")
    .required("Username is required"),
  email: yup
    //@ts-ignore
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    //@ts-ignore
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    //@ts-ignore
    .string("Confirm your password")
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
