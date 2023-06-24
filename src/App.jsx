import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Comments from "./pages/Comments.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/comment/:postId'} element={<Comments/>}/>
            </Routes>
        </>
    )
}

export default App
