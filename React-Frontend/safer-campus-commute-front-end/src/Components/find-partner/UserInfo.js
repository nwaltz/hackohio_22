import UserDemographics from "./UserDemographics";

export default function UserInfo({ src }) {
  return (
    <>
      <div className="row mb-1">
        <h3>Name Placeholder</h3>
      </div>
      <div className="row g-3 mb-3 align-items-center ">
        <div className="col-12 col-sm-12 col-md-6 ">
          <img
            className="img-fluid w-75 rounded border border-dark"
            src={src}
            alt="Person Face"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <UserDemographics />
        </div>
      </div>
    </>
  );
}
