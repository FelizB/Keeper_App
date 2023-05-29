import React from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Card from "./Cards";
import contacts from './contacts';

function App(){
    return(
        <>
        <Header />
        <Note />
        <Card items={contacts}/>
        <Footer />
        </>
    )

}
export default App;