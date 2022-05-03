import React from  "react";
import {Link } from "react-router-dom";
import './registerbody.css'
import bg from './images/bg.jpeg';

function RegisterBody() {
    return (
      <div className="setmaxwidth">
          <div className="linkdiv">
            <h1>Welcome:</h1>
            <p>If you are not already registered, please click register. Once you are 
              successfully registered, feel free to login and explore. You can ask questions
              or answer any question. Each question can be voted on as well.
            </p>
              <Link to="/login"><button className="button">
                  Login
                </button>
              </Link>

              <Link to="register"><button className="button">
                Register
              </button>
              </Link>
          </div>
        </div>
      )
}

export default RegisterBody