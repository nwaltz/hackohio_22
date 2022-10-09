import FindPartnerCard from "./find-partner/FindPartnerCard";

export default function YourRequest() {
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

  const deleteRequest = () => {};

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
                      onClick={deleteRequest}
                    >
                      Delete
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
