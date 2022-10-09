import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {

    // new line start
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get("//localhost:5000").then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if(!post){
        return <>
        <h1>empty test</h1>
        </>
    }

    function clickHandle(){
        console.log("hi");
    }

    return <>
        <h1>{post}</h1>
        <button onClick={()=>clickHandle()}>click me</button>
    </>
}

export default Test;