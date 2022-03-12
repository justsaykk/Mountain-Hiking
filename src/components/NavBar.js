import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link className="button" to="/home">
        Home
      </Link>

      <Link className="button" to="/inspired">
        Get Inspired!
      </Link>

      <Link className="button" to="/itinerary">
        Itineraries (WIP)
      </Link>

      <Link className="button" to="/cart">
        My Cart (WIP)
      </Link>
    </div>
  );
}
