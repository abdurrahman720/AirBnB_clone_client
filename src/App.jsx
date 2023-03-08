import { Route, Routes } from "react-router-dom";
import Main from "./Page/Main";


function App() {
  return (
    <Routes>
      <Route index element={<Main/>}></Route>
   </Routes>
  );
}

export default App;
