import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";

import FormRedux from "./pages/Form/FormRedux";
import Counter from "./pages/Counter/Counter";
import Header from './components/Header/Header'
import Alert from "./components/Alert/Alert";
import { useSelector } from "react-redux";

function App() {

  const isOpen = useSelector(state => state.login.isOpen)


  return (


    <>
      <Header />

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<FormRedux />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {isOpen && <Alert />}


    </>
  );
}

export default App;
