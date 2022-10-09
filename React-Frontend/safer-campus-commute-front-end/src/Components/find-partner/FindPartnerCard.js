import CustomCollapse from "./CustomCollapse";
import UserInfo from "./UserInfo";

import buckid from "../../images/buckid-card-male-with-buckid-original.jpg";
import CustomMap from "../maps/CustomMap";

export default function FindPartnerCard({ src, button }) {
  return (
    <>
      <div className="shadow-lg container text-center bg-light rounded p-3 w-75">
        <UserInfo src={src} />
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
              element={<CustomMap />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
