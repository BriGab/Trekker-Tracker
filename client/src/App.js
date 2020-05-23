import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import Hike from "./pages/Hike";



function App () {


    return (<>
    <Router>
        <Nav />
        <Switch>
        <Route exact path={["/signup", "logout"]} component={SignUp}/>

        <Route exact path={["/", "/explore"]}component={Explore}/>

        <Route exact path={"/hike"}component={Hike}/>

        <Route exact path={"/hike"} component={Hike}/>

        </Switch>
    </Router>
   </> )
}

export default App;