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

    doSomething() {
        console.log("Fuck this shit");
            // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ api_key: "d-O8SB-JQ76esEky1qs0OQ", api_secret: "TqxqygO5akXhzlD4LVrRQBYRUBwL3TSAAeho", host_id: "MigGUNgKSFKsmATXRoB22A", type: 1, topic: "Test" })
        };
        fetch('https://api.zoom.us/v1/meeting/create', requestOptions)
            .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));
            // var Zoom = require("zoomus")({
            //     "key": "d-O8SB-JQ76esEky1qs0OQ",
            //     "secret": "TqxqygO5akXhzlD4LVrRQBYRUBwL3TSAAeho"
            // });
            // console.log("Fuck this shit");
            // var meeting = {
            //     "host_id": "MigGUNgKSFKsmATXRoB22A",
            //     "type": 1,
            //     "topic": "Test"
            // }
            // Zoom.meeting.create(meeting, function(res){
            //     if(res.error){
            //         console.log("Fuck you")
            //     } else {
            //         console.log(res)
            //         console.log("1")
            //     }
            // });
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
                        <button crossorigin src="..." onClick={this.doSomething} type="button" className = "button btn-primary form-control">Submit That Shit</button>
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