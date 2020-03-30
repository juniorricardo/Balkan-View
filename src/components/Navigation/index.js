import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Sucursal bancario</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;