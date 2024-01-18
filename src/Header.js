import React from 'react'

export default function header() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='card shadow col-md-6'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="nav-link" href="#">logo</a>
                        <ul className="navbar-nav mr-auto float-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Service</a>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>

        </div>

    )
}
