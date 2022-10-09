import FindPartnerCard from "./find-partner/FindPartnerCard";

export default function WalkRequest() {
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

  const acceptRequest = () => {};

  return (
    <>
      {faceImage.map((src, i) => {
        return (
          <>
            <div className="container overflow-hidden text-center">
              <div className="row mb-5">
                <FindPartnerCard
                  src={src}
                  button={
                    <button
                      className="btn btn-lg btn-dark mb-3"
                      onClick={acceptRequest}
                    >
                      Accept
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
