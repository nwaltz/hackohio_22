import { useState } from "react";
import FindPartnerCard from "./find-partner/FindPartnerCard";
import Field from "./login/Field";

export default function FindPartner() {
  const test = [{}, {}, {}, {}, {}, {}, {}, {}];
  const [from, setFrom] = useState({});
  const [to, setTo] = useState({});

  const updateFrom = (event) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoianVzdC16aiIsImEiOiJjbDkwMnJlcmwwbHI1M25vNXI4Y3Qyc25rIn0.Ep2w_2VsXfTdsbeBYikAXg`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "[longitude, latiitude]:" +
            responseJson.features[0].geometry.coordinates
        );
        setFrom(responseJson.features[0].geometry.coordinates);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateTo = (event) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoianVzdC16aiIsImEiOiJjbDkwMnJlcmwwbHI1M25vNXI4Y3Qyc25rIn0.Ep2w_2VsXfTdsbeBYikAXg`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "[longitude, latiitude]:" +
            responseJson.features[0].geometry.coordinates
        );
        setTo(responseJson.features[0].geometry.coordinates);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sendWalkRequest = () => {};

  return (
    <>
      <div>
        <Field
          type={"text"}
          name={"From Location (Enter Full Addrees)"}
          onFormEntry={updateFrom}
        />
        <Field
          type={"text"}
          name={"To Location (Enter Full Addrees)"}
          onFormEntry={updateTo}
        />
        <button className="btn btn-primary">Go</button>
      </div>
      {test.map((i) => {
        return (
          <>
            <div className="container overflow-hidden text-center">
              <div className="row mb-5">
                <FindPartnerCard
                  button={
                    <button
                      className="btn btn-lg btn-dark mb-3"
                      onClick={sendWalkRequest}
                    >
                      Send Walk Request
                    </button>
                  }
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
