import React from 'react'

const Login = () => {
    return (
        <div>
            <h1> Se connecter </h1>
            <form className="col-md-5" method="POST" action="http://localhost:5678/api/user/login" >
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password"></input>
                </div>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login