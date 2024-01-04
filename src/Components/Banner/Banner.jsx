import images from "../../assets/Resources/Education.png";
const Banner = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "[70vh]",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${images})`,
                borderRadius: "10px",
            }}
            className="h-[70vh] mt-10 "
        >
            <div className="flex items-center justify-center h-[45vh] pt-10">
                <h1 className="text-5xl text font-extrabold ">I Grow By Helping People In Need</h1>
            </div>
            <div className="text-center pb-10 ">
                <input className="w-[35%] py-3 px-10 border font-bold" type="text" placeholder="searching....." />{" "}
                <button className="bg-red-500 py-3 px-10 font-bold text-white">Search</button>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;
