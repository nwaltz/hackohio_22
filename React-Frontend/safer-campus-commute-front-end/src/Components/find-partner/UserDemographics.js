export default function UserDemographics() {
  const tmp = {
    age: 100,
    gender: "male",
  };
  return (
    <>
      {Object.keys(tmp).map((demographic, i) => {
        return (
          <div key={i}>
            {demographic}: {tmp[demographic]}
          </div>
        );
      })}
    </>
  );
}
