import { Link } from "react-router-dom";

import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <Link to={`/`} className="header-logo">
                        <img src="/img/logo.svg" alt="logo" />
                        <span>Buy It</span>
                    </Link>
                    
                    <div className="header-controls">
                        <button className="btn btn-outline">Login and registration</button>
                        <button className="btn btn-primary">Submit an announcement</button>
                    </div>

                    <div className="header-burger">
                        <img src="/img/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}