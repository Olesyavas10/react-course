import { useState } from 'react';
import './App.css'

function App() {
        const [showPassword, setShowPassword] = useState(true);

        return (
          <div>
            <div className="inputs">
              <input placeholder="Email" />
              <div className="password-container">
                <input
                  placeholder="Password"
                  type={showPassword ? "password" : "text"}
                />
                <button
                  className="password-btn"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  Show
                </button>
              </div>
            </div>
            <div className="buttons">
              <button className="login-btns">Login</button>
              <button className="login-btns">Sign up</button>
            </div>
          </div>
        );
      }

export default App
