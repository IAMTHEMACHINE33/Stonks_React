import {Routes, Route} from "react-router-dom";
// import Register from "./Register";
import Home from "./Home";
// import Login from "./Login";

import Login from "./login/Login"
import Register from "./register/Register";
import Logout from "./Logout";
import Portfolio from "./portfolio/portfolio_add";
import PortfolioShow from "./portfolio/portfolio_show";


const Mid = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Logout" element={<Logout/>}></Route>
            {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
            <Route path="/add_portfolio" element={<Portfolio/>}></Route>
            <Route path="/show_portfolio" element={<PortfolioShow/>}></Route>
        </Routes>
    );
};

export default Mid;