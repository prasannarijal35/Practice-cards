import Card4 from "@/components/card4/Card4";
const Nepal = [
  {
    title: "mero gedo",
    age: 20,
  },
];
const page = () => {
  return (
    <>
      <div>
        {Nepal.map((naya) => (
          <Card4 title={naya.title} age={naya.age} key={naya.title} />
        ))}
      </div>
    </>
  );
};
export default page;
