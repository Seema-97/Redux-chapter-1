import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import FormRedux from "./pages/Form/FormRedux";
import Counter from "./pages/Counter/Counter";
import Header from './components/Header/Header'

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn) 

  console.log(`isLogged in app ${isLoggedIn}`)
  return (

    <>
      <Header />
     
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<FormRedux />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <div className={`alert alert-${isLoggedIn === true ? 'success' : 'danger'}`} role="alert">
        {isLoggedIn ? "You are logged in successfully!" : "Please login to continue"}
      </div>
     
    </>
  );
}

export default App;
