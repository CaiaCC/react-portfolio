import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <Router>
            <Sidebar />
            <Navbar />
        </Router>
    );
}

export default App;

