import axios from "axios";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Main from "./Page/Main";
import RegisterPage from "./Page/RegisterPage";
import IndexPage from "./Page/IndexPage";
import UserContextProvider from "./Page/UserContext";

axios.defaults.baseURL = `http://localhost:4000`;
// axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
       <Routes>
      <Route path="/" element={<Main />}>
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      </Route>
   </Routes>
   </UserContextProvider>
  );
}

export default App;
