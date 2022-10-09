import { useState } from "react";
import FindPartnerCard from "./find-partner/FindPartnerCard";
import Field from "./login/Field";
import CustomMap from "./maps/CustomMap";

export default function FindPartner() {
  const test = [{}, {}, {}, {}, {}, {}, {}, {}];
  const [from, setFrom] = useState({});
  const [to, setTo] = useState({});
  const [hide, setHide] = useState(true);

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

  const onClickEvent = () => {
    setHide(false);
  };

  const decideHidden = (value) => {
    return value ? "hide" : "";
  };

  const sendWalkRequest = () => {};

  return (
    <>
      <div
        className={`container overflow-hidden text-center ${decideHidden(
          !hide
        )}`}
      >
        <div className="row align-items-center mb-5">
          <div className="col-9">
            <Field
              type={"text"}
              name={"fromLocation"}
              placeholder={"From Location (Enter Full Address)"}
              onFormEntry={updateFrom}
            />
            <Field
              type={"text"}
              name={"toLocation"}
              placeholder={"To Location (Enter Full Address)"}
              onFormEntry={updateTo}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={onClickEvent}>
              Go
            </button>
          </div>
        </div>
        <CustomMap />
      </div>

      <div
        className={`container overflow-hidden text-center ${decideHidden(
          hide
        )}`}
      >
        {test.map((i) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </>
  );
}
