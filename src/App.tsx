import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import { AppProvider } from "./providers/app";

import { Provider } from "react-redux";

import "./App.css";
import { store } from "./store/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
