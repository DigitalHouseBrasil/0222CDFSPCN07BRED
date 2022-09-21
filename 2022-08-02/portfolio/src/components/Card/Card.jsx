import './Card.scss';

function Card({ title, image, language }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card--image">
        <img src={image} alt={title} />
        <span>{language}</span>
      </div>
    </div>
  );
}

export default Card;
