export default function UserDemographics() {
  const tmp = {
    age: 100,
    gender: "male",
  };
  return (
    <>
      {Object.keys(tmp).map((demographic) => {
        return (
          <div>
            {demographic}: {tmp[demographic]}
          </div>
        );
      })}
    </>
  );
}
