import Navber from "./Navber/Navber";


const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
      ];
      
    return (
        <div>
            <ul className="md:flex justify-center items-center">

            {
                routes.map(route => <Navber key={route.id} route={route} ></Navber>)
            }
            </ul>
        </div>
    );
};

export default Navbar;