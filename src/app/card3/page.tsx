import Card3 from "@/components/card3/Card3";
const serviceData = [
  {
    title: "Service One",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At impedit officiis ratione, quidem nihil, consequuntur sequi vitae quibusdam eaque dolorum nam dolores culpa illum rem, omnis officia nulla sint fugit.",
  },

  {
    title: "Servie Two",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At impedit officiis ratione, quidem nihil, consequuntur sequi vitae quibusdam eaque dolorum nam dolores culpa illum rem, omnis officia nulla sint fugit.",
  },
  {
    title: "Servie three",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At impedit officiis ratione, quidem nihil, consequuntur sequi vitae quibusdam eaque dolorum nam dolores culpa illum rem, omnis officia nulla sint fugit.",
  },
  {
    title: "Servie four",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At impedit officiis ratione, quidem nihil, consequuntur sequi vitae quibusdam eaque dolorum nam dolores culpa illum rem, omnis officia nulla sint fugit.",
  },
  {
    title: "Servie five",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At impedit officiis ratione, quidem nihil, consequuntur sequi vitae quibusdam eaque dolorum nam dolores culpa illum rem, omnis officia nulla sint fugit.",
  },
  {
    title: "Servie six",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At impedit officiis ratione, quidem nihil, consequuntur sequi vitae quibusdam eaque dolorum nam dolores culpa illum rem, omnis officia nulla sint fugit.",
  },
];
const page = () => {
  return (
    <>
      <div className="body">
        {serviceData.map((service) => (
          <Card3
            title={service.title}
            description={service.description}
            key={service.title}
          />
        ))}
      </div>
    </>
  );
};

export default page;
