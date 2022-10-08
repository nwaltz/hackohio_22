import MapBoxMap from "../maps/MapBoxMap";
import CustomCollapse from "./CustomCollapse";
import UserInfo from "./UserInfo";

import "./userinfo.css";

import buckid from "../../images/buckid-card-male-with-buckid-original.jpg";

export default function FindPartnerCard({ button }) {
  return (
    <>
      <div className="container w-75 text-center bg-light rounded p-3">
        <UserInfo />
        <div className="row">
          <div className="col">
            {button}
            <CustomCollapse
              description={"Show BuckID"}
              element={
                <img
                  className="w-100 rounded"
                  src={buckid}
                  alt="Photo of Buckid"
                />
              }
            />

            <CustomCollapse
              description={"Show Location"}
              element={<MapBoxMap />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
