import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const Card = ({card}) => {
    const {id,cover, title, category} = card;
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div className="card bg-base-100 shadow-lg">
                    <figure className="p-3">
                        <img src={cover} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{category}</h2>
                        <p className=" font-extrabold">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
};

export default Card;
