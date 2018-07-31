import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to='/'>Articles</Link>
                        </li>
                    </ul>
                    <Link to='/register'><div className="btn btn-outline-success my-2 my-sm-0">Crée un compte</div></Link>
                    <Link to='/login'><div className="btn btn-outline-success my-2 my-sm-0">Se Connecter</div></Link>
                </div>
            </nav>
        </div>
    )
}

export default Header