import { useState } from "react";
import "./App.css";
import ListEmployees from "./componants/ListEmployess";
import HeaderComponant from "./componants/HeaderComponant";
import FooterComponent from "./componants/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./componants/EmployeeComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <HeaderComponant />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<ListEmployees />}></Route>
          {/* http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployees />}></Route>
          {/* http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>

          {/* http://localhost:3000/edit-employee/1 */}
          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
          <Route
            path="/delete-employee/:id"
            element={<ListEmployees />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
