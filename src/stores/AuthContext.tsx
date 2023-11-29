import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface AuthContextType {
  email: string | null;
  user: string | null;
  password: string | null;
  walletId: number | null;
  walletNumber: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (email: string, username: string, password: string) => void;
  isLoading: boolean;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const [token, setToken] = useState<string | null>('');
  const [email, setEmail] = useState<string | null>(null);

  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [walletId, setWalletId] = useState<number | null>(null);
  const [walletNumber, setWalletNumber] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://ewallet-dockerize.fly.dev/auth/sessions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email: username,
            password: password,
          }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.message === 'success') {
          setUser(username);
          setPassword(password);
          setToken(data.data.token);
          localStorage.setItem('user', username);
          localStorage.setItem('token', data.data.token);
        } else {
          throw new Error(data.message);
        }
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }

    setIsLoading(false);
  };

  const register = async (
    email: string,
    username: string,
    password: string,
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://ewallet-dockerize.fly.dev/auth/users`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email: email,
            username: username,
            password: password,
          }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.message === 'success') {
          setEmail(data.data.email);
          setUser(data.data.username);
          setPassword(password);
          setWalletId(data.data.wallet_id);
          setWalletNumber(data.data.wallet_number);
          localStorage.setItem('user', username);
          localStorage.setItem('password', password);
        } else {
          throw new Error(data.message);
        }
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        user,
        password,
        walletId,
        walletNumber,
        login,
        logout,
        register,
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
    throw new Error('This is error');
  }
  return context;
};
