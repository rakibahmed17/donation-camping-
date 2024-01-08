import {useEffect, useState} from "react";
import Card3 from "../Card3/Card3";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsshow] = useState(false);
    useEffect(() => {
        const DonateItems = JSON.parse(localStorage.getItem("donate"));
        if (DonateItems) {
            setDonation(DonateItems);
        } else {
            setNoFound("No data Found");
        }
    }, []);

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] text-4xl font-bold flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                            {  
                             isShow?donation.map((cards) => (
                                <Card3 key={cards.id} cards={cards}></Card3>
                             ))
                            :donation.slice(0,4). map((cards) => (
                                <Card3 key={cards.id} cards={cards}></Card3>
                            ))        
                            }
                    </div>

                    <div className="text-center">
                        <button onClick={()=>setIsshow(!isShow)} className="px-5 py-2 text-2xl  bg-green-500 text-center rounded-xl text-white font-bold">
                        { isShow? 'See less': 'See All'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
