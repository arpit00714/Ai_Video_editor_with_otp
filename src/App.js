import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";

import First from "./components/First"
import Second from"./components/Second";
import Four from"./components/Four";
import Five from"./components/Five";
import Eight from"./components/Eight";
import Eight2 from "./components/Eight2";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import Eleven from "./components/Eleven";
import Twelve from "./components/Twelve";
import Thirteen from "./components/Thirteen";
import Fourteen from "./components/Fourteen";
import { RecoilRoot } from "recoil";
import Third from "./components/Third";
import Six from "./components/Six";
import Seven from "./components/Seven";
import SignUp from "./components/SignUp";
import PasswordReset from "./components/PasswordReset";
import Otp from "./components/Otp";


const App=()=>{
    return(
<>
<RecoilRoot>
<BrowserRouter>

<Routes>
<Route path="first" element={<First/>} />   
<Route path="second" element={<Second/>} /> 
<Route path="signup" element={<SignUp/>} /> 
<Route path="passwordreset" element={<PasswordReset/>} /> 
<Route path="otp" element={<Otp/>} /> 


<Route path="four" element={<Four/>} /> 
<Route path="five" element={<Five/>} />

 
<Route path="eight" element={<Eight/>} />
<Route path="" element={<First/>} /> 
<Route path="eight2" element={<Eight2/>} /> 
<Route path="nine" element={<Nine/>} />
<Route path="ten" element={<Ten/>} />
<Route path="eleven" element={<Eleven/>} /> 
<Route path="twelve" element={<Twelve/>} />


        <Route path="/" element={<Layout/>}>
        <Route path="third" element={<Third/>} /> 
        <Route path="six" element={<Six/>} /> 
        <Route path="seven" element={<Seven/>} />
        <Route path="thirteen" element={<Thirteen/>} />
        <Route path="fourteen" element={<Fourteen/>} /> 

    </Route>
</Routes>

</BrowserRouter>
</RecoilRoot>

</>
    );
}
export default App;
