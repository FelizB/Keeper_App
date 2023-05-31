import React from "react";
import "./css/signin.css"

function Signin(){
  return (
    <div className='container'>
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Signin</button>
    </form>
    </div>
  );
}

export {Signin};
