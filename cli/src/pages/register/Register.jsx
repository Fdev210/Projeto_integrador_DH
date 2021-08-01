import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <span className='registertitle'>Register</span>
            <form className="registerform">
                <label>Username</label>
                <input type="text" className='registerinput' placeholder='Enter your Username..' />
                <label>Email</label>
                <input type="text" className='registerinput' placeholder='Enter your email..' />
                <label>Phone</label>
                <input type="text" className='registerinput' placeholder='Enter your Phone numeber..' />
                <label>Birth</label>
                <input type="text" className='registerinput' placeholder='Enter your birth date..' />
                <label>Password</label>
                <input type="password" className='registerinput' placeholder='Enter your password..' />
                <label>Confirm Password</label>
                <input type="text" className='registerinput' placeholder='Enter your confirm password..' />
                <button className="registerbutton">Register</button>
            </form>
        <button className="registerlogin">Login</button>
            
        </div>
    )
}
