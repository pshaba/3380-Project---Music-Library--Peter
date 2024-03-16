import React from 'react'

function Signup(){
    return(
        <div className = 'd-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className = 'bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form>
                    <div className = 'mv-3'>
                        <label htmlFor = "name"><strong>Name</strong></label>
                        <input type = "text" placeholder = 'Enter Name' name = 'name'
                        classname = 'form-control rounded-0' />
                    </div>
                    <div className = 'mv-3'>
                        <label htmlFor = "email"><strong>Email</strong></label>
                        <input type = "email" placeholder = 'Enter Email' name = 'email'
                        classname = 'form-control rounded-0' />
                    </div>
                    <div className = 'mv-3'>
                        <label htmlFor = "password"><strong>Password</strong></label>
                        <input type = "password" placeholder = 'Enter Password' name = 'password'
                        classname = 'form-control rounded-0' />
                    </div>
                    <button type = 'submit' className = 'btn btn--success w-100 rounded-0'> Signup</button>
                    <p>You are agree to our terms and policies</p>
                    

                </form>
            </div>
        </div>
    )
}
export default Signup