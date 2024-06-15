import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateNewAccount from "./pages/CreateNewAccount";


export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/createnewaccount' element={<CreateNewAccount />} />
      </Routes>
    </Router>
    </>
  );
}