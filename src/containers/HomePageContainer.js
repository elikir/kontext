import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePageComponent from "../components/HomePageComponent";


class HomePageContainer extends React.Component {



    render() {
        return(
            <div>
            <Router>
                <Route path="/"
                           exact={true}
                           render={(props) =>
                               <HomePageComponent
                                   {...props}/>
                           }/>
            </Router>
            </div>
            )
        
    }

}


export default HomePageContainer