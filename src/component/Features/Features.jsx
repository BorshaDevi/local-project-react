import PropTypes from "prop-types"
import { ImPointRight } from "react-icons/im";

const Features = ({feature}) => {
    return (
        <div>
        <div className="text-xl text-blue-500  ">
            <p className="flex gap-2 "><ImPointRight className="bg-cyan-300"/>{feature}</p>
            
        </div>
       
        </div>

    );
};
Features.propTypes ={
    feature:PropTypes.string
}
export default Features;