

const Navber = ({route}) => {
    const {name,path} =route
    return (
        <li className="mr-10">
            <a href={path} >{name}</a>
        </li>
    );
};

export default Navber;