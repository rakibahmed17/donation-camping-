import {useParams} from "react-router-dom";

const Card2 = () => {
                  const params = useParams();
                  console.log(params);

    return <div> card</div>;
};

export default Card2;
