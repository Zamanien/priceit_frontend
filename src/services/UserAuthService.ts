import { httpAuth } from "../http-common";
import { User } from "../types/user.js";
type UserLogin = Omit<
  User,
  'id' | 'userName' | 'firstName' | 'lastName' | 'passwordConfirm' | 'role' | 'createdAt' | 'updatedAt'
>;
type UserRgister = Omit<User, "id" | "role" | "createdAt" | "updatedAt">;
class UserAuthService {
  Register(user: UserRgister) {
    return httpAuth.post("/auth/register", {
      userName: user.userName,
      firstName:user.firstName,
      lastName:user.lastName,
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
    });
  }

  LogIn(user: UserLogin) {
    return httpAuth.post("/auth/login", {
      email: user.email,
      password: user.password,
    } );
  }

  GetUser(user: User) {
    return httpAuth.get<{ user: User }>("/users/me", { data: { id: user.id } });
  }

  UpdateUser(user: User) {
    return httpAuth.get<{ user: User }>("/users/me", { data: { id: user.id } });
  }
}

export default new UserAuthService();
