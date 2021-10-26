import "./assets/css/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import TodoList from "./pages/TodoList";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <MainLayout path="/" exact component={TodoList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
