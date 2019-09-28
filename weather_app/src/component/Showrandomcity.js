import React, { Component } from "react";

class Showrandomcity extends Component {
    render() {
        let result = this.props.data;
        if (result) {
            let list = result.map(item => {
                return (
                    <li className="cityname__item">
                        <div className="ca-content">
                            <div className="ca-main">{item}</div>
                        </div>
                    </li>
                );
            });
            return (
                <div className="ca-menu">
                    {list}
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    
    }
}
export default Showrandomcity;