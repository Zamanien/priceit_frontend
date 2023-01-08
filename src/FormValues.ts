import { User } from './types/user'

export type FormValues = {
    userName: User['userName'],
    firstName: User['firstName'],
    lastName: User['lastName'],
    email: User['email'],
    password: User['password'],
    passwordConfirm: User['passwordConfirm']
}