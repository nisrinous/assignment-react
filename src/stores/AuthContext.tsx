import { ReactNode, createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";
import { v4 as uuidv4 } from "uuid";

export interface AuthContextType {
  name: string | null;
  email: string | null;
  password: string | null;
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
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
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
      console.error("Error fetching users:", error);
      return [];
    }
  };

  const generateRandomToken = (): string => {
    const randomString = uuidv4();
    return randomString;
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const users = await fetchUsers();
      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (user) {
        setEmail(email);
        setPassword(password);
        setAuthToken("generatedToken");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }

    setIsLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const users = await fetchUsers();

      const existingUser = users.find((user: any) => user.email === email);

      if (existingUser) {
        throw new Error("Email already exists");
      } else {
        const newUserId = users.length + 1;
        const newUser = {
          id: newUserId,
          name: name,
          email: email,
          password: password,
          token: generateRandomToken(),
        };

        const response = await fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          setName(newUser.name);
          setEmail(newUser.email);
          setPassword(newUser.password);
          setAuthToken("generatedToken");
        } else {
          throw new Error("Failed to register user");
        }
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }

    setIsLoading(false);
  };

  const logout = () => {
    removeAuthToken();
    setName(null);
    setEmail(null);
    setPassword(null);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        name,
        password,
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
