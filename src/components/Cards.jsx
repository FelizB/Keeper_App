import React from 'react';

function Card(props){
    
    return(
      /*------------------this code below filters one item from the array and maps data into a single cards-------------*/
      <>
          
      {/* {props.items.filter(contacts => (contacts.id===2)).map(contacts=>(

            <div className='card'>
            <div className='top'>
             <h2 className='name'>{contacts.name}</h2>
             <img
                className='circle-img'
                src={contacts.imgURL}
                alt="Avatar_img"
             />
            </div>
            <div className='bottom'>
                <p className='info'>{contacts.phone}</p>
                <p className='info'>{contacts.email}</p>
            </div>
         </div>
     
         ))} */}
       
         
         {props.items.map((contacts, index) =>

         <div className='card'>
         <div className='top'>
         <h2 className='name'>{contacts.name}</h2>
         <img
            className='circle-img'
            src={contacts.imgURL}
            alt="Avatar_img"
         />
         </div>
         <div className='bottom'>
         <p className='info'>{contacts.phone}</p>
          <p className='info'>{contacts.email}</p>
          <h4>Information</h4>
          <p className='info'>{contacts.info.substring(0, 100)}</p>
         </div>
         </div>

         )}
         </>
      /*------------------this code above maps all array data into cards-------------*/
       
    )
}
export default Card;