import { useEffect } from "react";
import Home from "./pages/home/Home";

const App = () => {
    useEffect(() => {
        document.title = "Harsh Sharma";
    }, []);
    return ( 
    <div >
        <Home/>
        </div>
    );
};

export default App;