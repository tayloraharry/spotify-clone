import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./components/main";
import './index.css'

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return (
    <Provider store={store}>{code ? <Main code={code} /> : <Login />}</Provider>
  );
}

export default App;
