import Card5 from "@/components/card5/Card5";

const Signs = [
  {
    title: "Danger",
    description:
      "here is something failed. Add the description to add the card",
  },
  {
    title: "Success",
    description:
      "here is something success. Add the description to add the card",
  },
  {
    title: "Warning",
    description:
      "here is something warning. Add the description to add the card",
  },
];

const page = () => {
  return (
    <>
      <div className="container">
        {Signs.map((warns) => (
          <Card5
            title={warns.title}
            description={warns.description}
            key={warns.title}
          />
        ))}
      </div>
    </>
  );
};
export default page;
