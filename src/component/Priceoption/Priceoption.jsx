import PropTypes from "prop-types"
import Features from "../Features/Features";

const Priceoption = ({priceOption}) => {
    const {name,price,features} =priceOption
    return (
        <div className="shadow-2xl text-blue-900 p-10  flex flex-col rounded-xl">
            <h2  className="font-bold text-2xl text-center">
                <span>${price}</span>
                <span>/mon</span>

            </h2>
            <h4 className="font-bold text-2xl text-center">{name}</h4>
            <div className="space-y-2 mt-3 flex-grow">
            {
                features.map((feature,index) => <Features key={index} feature={feature}></Features>)
            }
            </div>
            <button className="btn bg-blue-300 text-black font-bold w-full  hover:bg-blue-900 hover:text-white">Buy</button>
            
        </div>
    );
};
Priceoption.propTypes ={
    priceOption:PropTypes.object
}

export default Priceoption;