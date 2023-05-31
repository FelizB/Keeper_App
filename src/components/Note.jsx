import React from 'react';
import Footer from "./Footer";
import Card from "./Cards";
import Header from "./Header";
import contacts from './contacts';
import "./css/styles.css";

function Note(){
    return(
      <>
        <Header />
         <div className='note'>
            <h1>Note number 1</h1>
              <p>This is my first note to make as a project that will stand on its own</p>
            <h1>Note number 2</h1>
              <p>This is my first note to make as a project that will stand on its own</p>
        </div>
        <Card items={contacts}/>
        <Footer />
      </>
    )
}
export default Note;