import { ReactNode, createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";
import { v4 as uuidv4 } from "uuid";

export interface AuthContextType {
  login: (email: string, password: string) => void;
  register: (email: string, username: string, password: string) => void;
  logout: () => void;
  isLoading: boolean;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const cookies = new Cookies();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setAuthToken = (token: string): void => {
    cookies.set("authToken", token, { path: "/" });
  };

  const removeAuthToken = (): void => {
    cookies.remove("authToken", { path: "/" });
    console.log(cookies.getAll());
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (response.ok) {
        const users = await response.json();
        return users;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      throw error;
    }
  };

  const generateRandomToken = (): string => {
    const randomString = uuidv4();
    return randomString;
  };

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const users = await fetchUsers();
      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (user) {
        setAuthToken("generatedToken");
        localStorage.setItem("token", user.token);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const users = await fetchUsers();

      const existingUser = users.find((user: any) => user.email === email);

      if (existingUser) {
        throw new Error("Email already exists");
      } else {
        const generatedToken = generateRandomToken();
        const newUser = {
          name: name,
          email: email,
          password: password,
          token: generatedToken,
        };

        const response = await fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          setAuthToken("generatedToken");
          localStorage.setItem("token", generatedToken);
        } else {
          throw new Error("Failed to register user");
        }
      }
    } catch (error) {
      throw error;
    }

    setIsLoading(false);
  };

  const logout = () => {
    removeAuthToken();
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("This is error");
  }
  return context;
};
