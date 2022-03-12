import NavBar from "../components/NavBar";

export default function Cart(props) {
  return (
    <div>
      <NavBar />
      <div className="cart-wrapper">
        {props.cart.map((el) => {
          console.log(el.peakName);
          console.log(el.price);
          return (
            <div className="cart-wrapper">
              <div className="item-holder">
                <h3>{el.peakName}</h3>
                <p>Price: USD{el.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
