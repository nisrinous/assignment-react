import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import { AppProvider } from "./providers/app";

import { Provider } from "react-redux";

import "./App.css";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <div>
            <Toaster />
          </div>
          <AppRoute />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
