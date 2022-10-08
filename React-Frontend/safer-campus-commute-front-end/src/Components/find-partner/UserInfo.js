import UserDemographics from "./UserDemographics";

import humanface from "../../images/face.jpg";

export default function UserInfo() {
  return (
    <>
      <div className="row mb-1">
        <h3>Name Placeholder</h3>
      </div>
      <div className="row g-3 mb-3 align-items-center ">
        <div className="col">
          <img className="w-75 rounded" src={humanface} alt="Photo of Buckid" />
        </div>
        <div className="col">
          <UserDemographics />
        </div>
      </div>
    </>
  );
}
