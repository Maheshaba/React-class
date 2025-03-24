/*
 * Header
 * Logo
 * Nav Item
 * Body
 * Search
 * RestaurantContainer
 * RestaurantCard
 * Footer
 * Copyright
 *Links
 * Adress
 * Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJX-UmAFSMtyXCW1EjHFLq97QTMmtMfdWV8FurJp2DTWGs6_EY8M5ceig&usqp=CAE&s"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghna foods" cuisine="Biryani" />
        <RestaurantCard resName="KFC" cuisine="Burger,Pizza,Chowmin" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
