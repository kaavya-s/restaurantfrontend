import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import OrderList from "./Components/OrderList";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/list" element={<OrderList/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;