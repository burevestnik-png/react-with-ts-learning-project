import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";


const App: React.FC = () =>
    <BrowserRouter>
        <Navbar/>
        <div className="container">
            <Switch>
                <Route component={ TodosPage }
                       path="/"
                       exact
                />
                <Route component={ AboutPage }
                       path="/about"
                />
            </Switch>
        </div>
    </BrowserRouter>

export default App;
