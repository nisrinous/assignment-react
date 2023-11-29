import { AuthProvider } from '../stores/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return <AuthProvider>{children}</AuthProvider>;
};
