import { useToken } from "../auth/useToken";
import { httpAuth } from "../http-common";
import { User } from "../types/user.js";
import { ProductData } from "../types";
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

  GetUser(userId: string) {
    return httpAuth.get("/users/me", { data: { id: userId } });
  }

  UpdateUser(userId:string, searches:string[], items: ProductData[] | undefined)  {
    return httpAuth.patch(`/users/me/${userId}` ,{ data: { 
      // id:product.id,
      // title:product.title,
      // price: product.price,
      // image:product.image,
      // itemRef:product.itemRef
      searches:searches,
      items: items
  }});
  
}
}


export default new UserAuthService();
