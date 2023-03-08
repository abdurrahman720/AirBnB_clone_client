import { Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Main from "./Page/Main";
import RegisterPage from "./Page/RegisterPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      </Route>
   </Routes>
  );
}

export default App;
