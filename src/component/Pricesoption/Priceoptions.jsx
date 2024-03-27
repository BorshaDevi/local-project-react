import Priceoption from "../Priceoption/Priceoption";


const Priceoptions = () => {
    const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to gym facilities",
              "Standard workout equipment",
              "Locker room access",
              "Access to cardio machines",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to gym facilities",
              "Premium workout equipment",
              "Group fitness classes",
              "Locker room access",
              "Sauna and steam room access",
              "Access to swimming pool",
              "Towel service"
            ]
          },
          {
            "id": 3,
            "name": "Ultimate Membership",
            "price": 79.99,
            "features": [
              "Access to gym facilities",
              "Premium workout equipment",
              "Group fitness classes",
              "Personal trainer sessions (limited)",
              "Locker room access",
              "Sauna and steam room access",
              "Smoothie bar discounts",
              "Access to exclusive member events",
              "Free guest passes (monthly)"
            ]
          }
        ];
      
    return (
        <div >
          <div  className="grid md:grid-cols-3 mt-10 gap-10 ">
          {
            priceOptions.map(priceOption => <Priceoption key={priceOption.id} priceOption={priceOption}></Priceoption>)
           }
          </div>
        </div>
    );
};

export default Priceoptions;