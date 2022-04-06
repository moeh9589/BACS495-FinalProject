import React from  "react";
import {Link } from "react-router-dom";

import bg from './images/bg.jpeg';

function RegisterBody() {
    return (
        <div>
            <Link to="register"><button>
              Register
            </button>
            </Link>
        </div>
      )
}

export default RegisterBody