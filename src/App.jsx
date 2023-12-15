import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={HomePage}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App