import './css/authpage.css';
import logo from '../assets/logo/Apex_Assets_Logo.svg';
import heroImage from '../assets/auth_page_hero_image.png';
import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

const AuthPage = ({ type }) => {
    const isSignIn = type === 'signin';
    const [showPassword, setShowPassword] = useState(false)
    const [userRole, setUserRole] = useState('Buyer');

    return (
        <div className="auth-container">
            {/* Left Side: Hero Image */}
            <div className="auth-image" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImage})` }}>
                <div className="overlay-text">
                    <h1>CLOSE TO YOUR DREAM</h1>
                    <p>find your perfect property match</p>
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="auth-content">
                <div className="form-box">
                    <div className="logo-container">
                        <img src={logo} alt="Apex Assets Logo" className="logo" />
                    </div>

                    <h2 className='typography' >{isSignIn ? 'Welcome Back' : 'Create Account'}</h2>
                    <p className="subtitle">
                        {isSignIn ? 'Please enter your details to sign in.' : 'Join Apex Assets and start browsing your dream.'}
                    </p>

                    <form onSubmit={(e) => e.preventDefault()}>
                        {!isSignIn && (
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                                {/* ================================================= */}
                                <div className="role-selection-group">
                                    <label className="input-label">I am a / an:</label>
                                    <div className="role-options">
                                        {[ 'Buyer', 'Owner', 'Agent', 'Business'].map((role) => (
                                            <label
                                                key={role}
                                                className={`role-tile ${userRole === role ? 'active' : ''}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="userRole"
                                                    value={role}
                                                    checked={userRole === role}
                                                    onChange={(e) => setUserRole(e.target.value)}
                                                />
                                                <span className="role-text">{role}</span>
                                                {userRole === role && <i className="bi bi-check-circle-fill"></i>}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="password-field-container">
                                <input type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                                <button type="button" className="eye-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="form-options">
                            {isSignIn && (
                                <>
                                    <label><input type="checkbox" /> Remember me</label>
                                    <a href="#forgot" className="forgot-link">Forgot password?</a>
                                </>
                            )}
                        </div>

                        <button type="submit" className="btn-primary">
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <p className="foot-text">
                        {isSignIn ? "Don't have an account?" : "Already have an account?"}{' '}
                        <a href={isSignIn ? "/signup" : "/signin"}>
                            {isSignIn ? 'Sign Up' : 'Sign In'}
                        </a>
                    </p>
                    <div className="separator">
                        <span>or</span>
                    </div>

                    <div className="social-auth">
                        <button type="button" className="social-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
                            Continue with Google
                        </button>

                        <button type="button" className="social-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" />
                            Continue with Facebook
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;