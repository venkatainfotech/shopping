import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-tile">
                <h1 className="text-capitalize font-weigth-bold">
                    {/* {name} <strong className="text-blue">{title}</strong> */}
                </h1>
            </div>
        </div>
        );
    }
}

export default Title;