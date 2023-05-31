import React from 'react';
import "./css/styles.css";

function Footer(){
    var date = new Date();
    var year = date.getFullYear;

    return(
        <footer>
            <p>copyright @{year}</p>
        </footer>
    );
}
export default Footer;