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
            <div className=" lg:flex items-center justify-center h-[45vh] pt-10">
                <h1 className=" text-center lg:text-5xl text font-extrabold">I Grow By Helping People In Need</h1>
            </div>
            <div className="text-center pb-10 ">
                <input className="pr-6 lg:w-[35%] py-3 px-10 border font-bold rounded-lg" type="text" placeholder="searching....." />
                <button className="bg-red-500 lg: py-3 px-10 font-bold text-white rounded-lg">Search</button>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;
