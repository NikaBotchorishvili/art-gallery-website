const Button = () => {
    return ( 
        <button className="flex gap-x-4 w-fit items-center text-3xl bg-main pl-8 ">
        <small className="text-white tracking-widest ">
            OUR LOCATION
        </small>
        <div className="bg-secondary p-5">
            <img
                className=" "
                src="/assets/icon-arrow-right.svg"
                alt=""
            />
        </div>
    </button>
    );
}
 
export default Button;