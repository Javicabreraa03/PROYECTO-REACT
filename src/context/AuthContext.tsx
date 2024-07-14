import { createContext, useEffect, useRef, useState } from "react"
import { useLocalStorage } from "../hooks";
import { type AuthContextProps, type AuthContextProviderProps, type UserDataProps } from "../types";

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export default function AuthContextProvider({children}: AuthContextProviderProps) {
  const { setItem, getItem, removeItem } = useLocalStorage("userData");
  const getItemRef = useRef(getItem);
  
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<UserDataProps>({
    username: "",
    email: "",
    role: "notAsigned",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userDataWithRole = {
      ...userData,
      role: userData.email.includes("@admin") ? userData.role = "admin" : "user"}
    setItem(userDataWithRole);
    setIsLogged(true);
  };

  const handleLogout = () => {
    removeItem();
    setUserData({ username: "", email: "", role: "notAsigned" });
    setIsLogged(false);
  };
    
    useEffect(() => {
        const userInLocalStorage: UserDataProps | undefined = getItemRef.current();
        if (userInLocalStorage && userInLocalStorage.username && userInLocalStorage.email) {
          setUserData({
            username: userInLocalStorage.username,
            email: userInLocalStorage.email,
            role: userInLocalStorage.role
          });
          setIsLogged(true);
        }
      }, []);

    
  return (
    <AuthContext.Provider value={{userData, isLogged, handleChange, handleLogout, handleLogin  }}>{children}</AuthContext.Provider>
  )
}
