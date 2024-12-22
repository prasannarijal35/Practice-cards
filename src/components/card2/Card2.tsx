import Image from "next/image";
import "@/styles/card2.css";
export default function Card2() {
  return (
    <div className="main">
      <div className="container">
        <div className="card">
          <div className="upper">
            <div className="heading">
              <h2>go wild tote</h2>
            </div>
          </div>
          <div className="lower">
            <div className="image">
              <Image src="/image.png" alt="image" height={130} width={150} />
            </div>
            <div className="price">
              <h3>$25.8</h3>
              <del>$30.00</del>
            </div>
            <div className="description">
              <p>fashion has been creating well-design collections</p>
            </div>
            <div className="button">
              <button>buy now</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <div className="heading">
              <h2>go wild tote</h2>
            </div>
          </div>
          <div className="lower">
            <div className="image">
              <Image src="/image.png" alt="image" height={130} width={150} />
            </div>
            <div className="price">
              <h3>$25.8</h3>
              <del>$30.00</del>
            </div>
            <div className="description">
              <p>fashion has been creating well-design collections</p>
            </div>
            <div className="button">
              <button>buy now</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <div className="heading">
              <h2>go wild tote</h2>
            </div>
          </div>
          <div className="lower">
            <div className="image">
              <Image src="/image.png" alt="image" height={130} width={150} />
            </div>
            <div className="price">
              <h3>$25.8</h3>
              <del>$30.00</del>
            </div>
            <div className="description">
              <p>fashion has been creating well-design collections</p>
            </div>
            <div className="button">
              <button>buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
