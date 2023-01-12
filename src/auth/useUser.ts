import { useEffect, useState } from "react";
import { useToken } from "./useToken";
import { Buffer } from "buffer";



export const useUserId = () => {
  const [token] = useToken();

  const getPayLoadFromToken = (token: string) => {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(Buffer.from(encodedPayload, "base64").toString("ascii"));
  };
  const [userId, setUserId] = useState(() => {
    if (!token) return null;
    return getPayLoadFromToken(token);
  });

  useEffect(() => {
    if (!token) {
      setUserId(null);
    } else {
      setUserId(getPayLoadFromToken(token));
    }
  }, [token]);

  return userId;
};
export const useUser = () => {
    const [token] = useToken();
  
    const getPayLoadFromToken = (token: string) => {
      const encodedPayload = token.split(".")[1];
      return JSON.parse(Buffer.from(encodedPayload, "base64").toString("ascii"));
    };
    const [user, setUser] = useState(() => {
      if (!token) return null;
      return getPayLoadFromToken(token);
    });
  
    useEffect(() => {
      if (!token) {
        setUser(null);
      } else {
        setUser(getPayLoadFromToken(token));
      }
    }, [token]);
  
    return user;
  };