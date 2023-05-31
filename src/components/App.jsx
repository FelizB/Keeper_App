import React from 'react';
import Note from "./Note";
import {SignUp, Signin} from './Sign';

function App(){
        return(
            <Note />
    )};

 function Signed(){
    return(  
            <Signin />
    )
 }  

export  {App, Signed};