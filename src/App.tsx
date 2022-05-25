import {Route, Routes} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<FirstPage/>}/>
                <Route path={"/second_page"} element={<SecondPage/>}/>
            </Routes>
        </>
    )
}
export default App;