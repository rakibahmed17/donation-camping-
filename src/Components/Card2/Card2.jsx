import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import Card3 from "../Card3/Card3";

const Card2 = () => {
    
    const [cards, setCards] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id);
    const loadCards = useLoaderData();
    useEffect(() => {
        const findCads = loadCards?.find((card) => card.id === idInt);
        setCards(findCads);
    }, [id, cards]);
    //     console.log(cards);
    return (
        <div>
            <Card3 cards={cards}></Card3>
    </div>
    );
};

export default Card2;
