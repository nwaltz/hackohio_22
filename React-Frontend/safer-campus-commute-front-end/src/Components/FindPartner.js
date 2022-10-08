import FindPartnerCard from "./find-partner/FindPartnerCard";

export default function FindPartner() {
  const test = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <>
      {test.map((i) => {
        return (
          <>
            <div className="container overflow-hidden text-center">
              <div className="row mb-5">
                <FindPartnerCard />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
