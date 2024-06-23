import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <p className="category">{category}</p>
        <p className="card-rating">Rating: {rating.rate} ({rating.count} reviews)</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
