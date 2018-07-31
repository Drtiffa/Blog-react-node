import React from 'react'

const Register = () => {
    return (
        <div>
            <h1> S'enregistrer </h1>
            <form className="col-md-5" method="POST" action="http://localhost:5678/api/user/signup" >
                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" name="firstName" className="form-control" id="firstName" placeholder="Prénom"></input>
                </div>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Nom"></input>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register