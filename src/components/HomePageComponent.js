import React from "react";

class HomePageComponent extends React.Component {


    shit = () => {
        var options = {
            method: 'GET',
            // Use the `me` keyword for the request below. 
            url: 'https://api.zoom.us/v2/users/me',
            headers: {
                authorization: 'Bearer {yourtokenhere}' // Do not publish or share your token with anyone.
            }
        };
        fetch('https://api.zoom.us/v2/users/me')
            .then(response => response.json())
            .then(response => console.log(response))

    }


    render() {
        this.shit();
        return (    
            <div className="container">

                <div className="row">
                    <div className="col-4"><h1>kontext</h1></div>
                    <div className="col-8"></div>
                </div>


                <div className="row">
                    <div className="col-4">
                        <h3>Enter Zoom User ID</h3>
                        <input type="text" className="form-control"/>
                        <button type="button" className = "button btn-primary form-control">Submit</button>
                    </div>
                    <div className="col-8">
                        <h3>Join an Existing Room</h3>
                    </div>
                </div>

            </div>
            )
    }
}

export default HomePageComponent