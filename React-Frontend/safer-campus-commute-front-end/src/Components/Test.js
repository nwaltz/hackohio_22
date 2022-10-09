import React, { Component } from "react";
import axios from "axios";

function Test() {

    try {
        axios.get(`//localhost:5000`)
        .then(res => {
            console.log(res.data);
        })
    } catch (error) {
        console.log("Error");
    }

    return <>
        <h1>Test</h1>
    </>
}

export default Test;