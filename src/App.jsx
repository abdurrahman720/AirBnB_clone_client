import { Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Main from "./Page/Main";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
      <Route path="/login" element={<LoginPage/>}/>
      </Route>
   </Routes>
  );
}

export default App;
