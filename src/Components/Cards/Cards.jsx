import Card from "../Card/Card";
import PropTypes from "prop-types";
const Cards = ({cards}) => {
    return (
        <div className="py-8 pt-10">
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
                {cards?.map((card) => (
                    <Card key={card.id} card={card}></Card>
                ))}
            </div>
        </div>
    );
};
Cards.propTypes = {
 cards: PropTypes.object,
              };

export default Cards;
