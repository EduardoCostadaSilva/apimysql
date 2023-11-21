import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";
import AboutScreen from "../screens/AboutScreen";

export default function RouterRoot(){
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Body />}>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="sobre" element={<AboutScreen/>}></Route>
            </Route>
         </Routes>
        </BrowserRouter>
    )
}