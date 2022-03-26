
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart)
    let product = []
    for (const glass of cart) {
        product = [...product, glass]
    }
    return (
        <div>
            <h2>Selected Glasses</h2>
            {
                product.map(details => <p key={details.id}>{details.name}</p>)
            }
            <button className='choose-btn'><h4>Choose 1 for me</h4></button>
        </div>
    );
};

export default Cart;