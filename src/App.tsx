import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import { AppProvider } from "./providers/app";

import "./App.css";

function App(): JSX.Element {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
