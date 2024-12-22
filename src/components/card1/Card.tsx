import Image from "next/image";
import "@/styles/styles.css";
function Card1() {
  return (
    <div className="main">
      <div className="container">
        <div className="card">
          <div className="image">
            <Image src="/watch.png" alt="watch" height={210} width={90} />
          </div>
          <div className="heading">
            <h2>watch</h2>
          </div>
          <div className="paragarph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              ea!
            </p>
          </div>
          <div className="price">
            <h2>$100.55</h2>
          </div>
          <div className="button">
            <button>buy now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="image">
            <Image src="/watch.png" alt="watch" height={210} width={90} />
          </div>
          <div className="heading">
            <h2>watch</h2>
          </div>
          <div className="paragarph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              ea!
            </p>
          </div>
          <div className="price">
            <h2>$100.55</h2>
          </div>
          <div className="button">
            <button>buy now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="image">
            <Image src="/watch.png" alt="watch" height={210} width={90} />
          </div>
          <div className="heading">
            <h2>watch</h2>
          </div>
          <div className="paragarph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              ea!
            </p>
          </div>
          <div className="price">
            <h2>$100.55</h2>
          </div>
          <div className="button">
            <button>buy now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="image">
            <Image src="/watch.png" alt="watch" height={210} width={90} />
          </div>
          <div className="heading">
            <h2>watch</h2>
          </div>
          <div className="paragarph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              ea!
            </p>
          </div>
          <div className="price">
            <h2>$100.55</h2>
          </div>
          <div className="button">
            <button>buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card1;
