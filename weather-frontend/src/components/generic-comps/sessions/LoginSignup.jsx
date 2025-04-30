import React from 'react'

function LoginSignup() {
  return (

    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <i class="bi bi-person"></i>
                <div className='fname'>Firstname: 
                    <input type='text'></input>
                </div>
                <div className='lname'>Lastname: 
                    <input type='text'></input>
                </div>
            </div>
            <div className='input'>
                <i class="bi bi-envelope"></i>
                <div className='email'>Email:
                    <input type='text'></input>
                </div>
            </div>
            <div className='input'>
                <i class="bi bi-lock-fill"></i>
                <div className='passw'>Password: </div>
                <input type='text'></input>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup