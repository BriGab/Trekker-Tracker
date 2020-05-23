import React, { useState } from "react";
import "../style/style.css"
import API from "../utils/API";


function SignUp () {
    const [signUp, setSignUp] = useState({
        first: "",
        last: "",
        email: "",
        password: ""
    })

    function handleFormChange (event) {
        const { name, value } = event.target
        setSignUp({...signUp, [name]: value})
        console.log(name, value)
    }

    function handleSubmit () {
        API.signUp({
            first: signUp.first,
            last: signUp.last,
            email: signUp.email,
            password: signUp.password
        })
        .then(res => {
            API.login({
                email: signUp.email,
                password: signUp.password
            })
            .then(res => {
                window.location.update("/explore")
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    }


    return (
        <form className="SignUp">
            <div className="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" onChange={handleFormChange} name="first" className="form-control" id="firstName" aria-describedby="fname" placeholder="First Name"/>
            </div>
            <div className="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" onChange={handleFormChange} name="last" className="form-control" id="lastName" aria-describedby="lname" placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" onChange={handleFormChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" onChange={handleFormChange} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button onClick={handleSubmit}type="submit" className="btn btn-primary">Submit</button>
      </form>
   )
}

export default SignUp;