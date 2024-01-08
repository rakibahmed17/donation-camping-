import PropTypes from "prop-types";
import swal from "sweetalert";

const Card3 = ({cards}) => {
    const {id, cover, category, description} = cards;
    const handleAddToDonate = () => {
        const addToDonateArray = [];
        const DonateItems = JSON.parse(localStorage.getItem("donate"));

        if (!DonateItems) {
            addToDonateArray.push(cards);
            localStorage.setItem("donate", JSON.stringify(addToDonateArray));
            swal("Success!", "Donation complete!", "success");
        } else {
            const isExits = DonateItems.find((cards) => cards.id === id);
            if (!isExits) {
                addToDonateArray.push(...DonateItems, cards);
                localStorage.setItem("donate", JSON.stringify(addToDonateArray));
            }
            swal("Success!", "Donation complete!", "success");
        }
    };
    return (
        <div>
            <div className=" lg:h-[100vh] flex items-center justify-center my-10 ]">
                <div className="card lg: h-full w-full p-10 m-0 bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-[100%] rounded-lg" src={cover} alt="" />
                    </figure>
                    <div className="py-3">
                        <button
                            onClick={handleAddToDonate}
                            className="py-3 px-8 bg-red-500 rounded-lg text-white  font-extrabold"
                        >
                            Donate $290
                        </button>
                    </div>
                    <div className="flex items-center gap-2 pb-8">
                        <h1 className="font-bold text-3xl">{category}:</h1>
                        <span>
                            <p>{description}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card3.propTypes = {
    cards: PropTypes.object,
};

export default Card3;
