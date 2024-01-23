

const CoffeeCard = ({coffee}) => {

    const {name, quantity, supplier, taste, category, details, photo} = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;