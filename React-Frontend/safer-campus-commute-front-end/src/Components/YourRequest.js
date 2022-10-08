import FindPartnerCard from "./find-partner/FindPartnerCard";

export default function YourRequest() {
  const test = [{}, {}, {}, {}, {}, {}, {}, {}];

  const deleteRequest = () => {};

  return (
    <>
      {test.map((i) => {
        return (
          <>
            <div className="container overflow-hidden text-center">
              <div className="row mb-5">
                <FindPartnerCard
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
