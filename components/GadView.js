//call openai api and display the result
import React, { Component } from 'react';


import styles from '/pages/index.module.css';
import { useState } from "react";




export default function GadView(result) {
    const [adBox, setAdBox] = useState();

    


 const runGenerator = async (event) => {
    event.preventDefault();
    try {
       const response = await fetch("/api/build", {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
             },
                body: JSON.stringify({ buyv: result }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
                setAdBox(data.result); 
            } catch(error) {
                // error handling logic here
                console.error(error);
                alert(error.message);
                }
               
    }
    

    return (
        <>
            <div>
                
                <h3> Create some google ads</h3>
                <input onClick={runGenerator} type="submit" value="Generate ads" />
            <div>{adBox}</div>
        
        </div>
        </>
        )
   

    }
   