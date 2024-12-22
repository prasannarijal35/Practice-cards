import "@/styles/card5.css";
export default function Card5({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div className="icondiv">
        <div className="icon">
          <i className="fa-solid fa-xmark text-red-500"></i>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button">
        <button>go to dashboard</button>
      </div>
    </div>
  );
}
