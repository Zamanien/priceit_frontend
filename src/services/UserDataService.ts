import http from "../http-common";
import { User } from "../types/user.js"
class UserDataService {
    SignUp(user:User) {
      return http.post('/users/signUp', {
        user_name:user.userName,
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
        repeat_password: user.repeatPassword
      });
    }
  }
  export default new UserDataService();