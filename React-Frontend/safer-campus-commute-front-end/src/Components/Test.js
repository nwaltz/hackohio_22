import React, { useState } from "react";
import axios from "axios";

function Test() {

    // new line start
    const [data, setData] = useState([])

    function getData() {
        axios({
            method: "GET",
            url: "/",
        })
            .then((response) => {
                const res = response.data
                setData(({
                    data: res
                }))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }

    return <>
        <h1>Click button</h1>
        <button onClick={getData}>Open console</button>
    </>
}

export default Test;