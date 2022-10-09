import { useState } from "react";
import FindPartnerCard from "./find-partner/FindPartnerCard";
import Field from "./login/Field";

//-- Define middle point function
function middlePoint(lat1, lng1, lat2, lng2) {
  //-- Longitude difference
  var dLng = ((lng2 - lng1) * Math.PI) / 180;

  //-- Convert to radians
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;
  lng1 = (lng1 * Math.PI) / 180;

  var bX = Math.cos(lat2) * Math.cos(dLng);
  var bY = Math.cos(lat2) * Math.sin(dLng);
  var lat3 = Math.atan2(
    Math.sin(lat1) + Math.sin(lat2),
    Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY)
  );
  var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

  //-- Return result
  return [lng3 * (180 / Math.PI), lat3 * (180 / Math.PI)];
}

export default function FindPartner() {
  const faceImage = [
    "../../images/face1.jpg",
    "../../images/face2.jpg",
    "../../images/face3.jpg",
    "../../images/face4.jpg",
    "../../images/face5.jpg",
    "../../images/face6.jpg",
    "../../images/face7.jpg",
    "../../images/face8.jpg",
    "../../images/face9.jpg",
    "../../images/face10.jpg",
  ];
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

  const renderMap = () => {
    const polyline = require("@mapbox/polyline");

    const fromLon = from[0],
      fromLat = from[1],
      toLon = to[0],
      toLat = to[1],
      zoom = 8,
      bearing = 0;
    const midPoint = middlePoint(fromLat, fromLon, toLat, toLon);

    const polylineEncoding = polyline.encode([
      [fromLon, fromLat],
      [toLon, toLat],
    ]);
    // console.log("encoding: " + polylineEncoding);

    const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/path-5+000-0.8(${polylineEncoding}),pin-l-a+9ed4bd(${fromLon},${fromLat}),pin-l-b+000(${toLon},${toLat})/${midPoint[0]},${midPoint[1]},${zoom},${bearing}/1000x400?before_layer=natural-line-label&access_token=pk.eyJ1IjoianVzdC16aiIsImEiOiJjbDkwMnJlcmwwbHI1M25vNXI4Y3Qyc25rIn0.Ep2w_2VsXfTdsbeBYikAXg`;
    // console.log(url);

    return polylineEncoding === "????" ? (
      <></>
    ) : (
      <img src={url} alt="Map of location" />
    );
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
        {renderMap()}
      </div>

      <div
        className={`container overflow-hidden text-center ${decideHidden(
          hide
        )}`}
      >
        {faceImage.map((src, i) => {
          return (
            <>
              <div className="row mb-5">
                <FindPartnerCard
                  src={src}
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
