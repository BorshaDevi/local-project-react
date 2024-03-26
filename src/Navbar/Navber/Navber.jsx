
import PropTypes from "prop-types"
const Navber = ({route}) => {
    const {name,path} =route
    return (
        <li className="mr-10">
            <a href={path} >{name}</a>
        </li>
    );
};
Navber.propTypes={
    route:PropTypes.object
}

export default Navber;