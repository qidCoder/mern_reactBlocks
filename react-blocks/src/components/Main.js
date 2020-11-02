import React, {Component} from "react";

export default class Main extends Component{
    render(){
        return(
            <div className="col-9 row p-4" style={{height: "500px", backgroundColor: "#e06666"}}>

                {/* need to import the Subcontents as a child of Main */}
                {this.props.children}
            </div>
        );
    }
}