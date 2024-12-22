import "@/styles/card3.css";
const Card3 = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="card">
      <div className="icon-div">
        <div className="icon">
          <i className="fa-solid fa-hammer icon"></i>
        </div>
      </div>
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card3;
