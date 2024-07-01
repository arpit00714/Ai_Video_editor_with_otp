import { Link, Outlet } from "react-router-dom";
import Fifteen from "./components/Fifteen";

const Layout=()=>{
    return(
    <>
    <div>
      <Fifteen/>
       <Outlet/>
    </div>
    </>
    )
}
export default Layout;
