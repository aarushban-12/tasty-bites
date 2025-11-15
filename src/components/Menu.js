import React from "react";
import Navbar from "./Navbar";
import "./menu.css"; // Import CSS for styling

// Individual food items
const individualItems = [
  { name: "Margherita Pizza", price: "$12.99", link: "https://i0.wp.com/tomatoestomahtos.com/wp-content/uploads/2021/06/bb-waffles-batter-1.jpg?fit=1200%2C1200&ssl=1" },
  { name: "BBQ Chicken Pizza", price: "$14.99", link: "https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-SQUARE.jpg" },
  { name: "Pepperoni Pizza", price: "$13.99", link: "https://www.hunts.com/sites/g/files/qyyrlu211/files/uploadedImages/img_6934_48664.jpg" },
  { name: "Veggie Delight Pizza", price: "$12.49", link: "https://7pie.pizza/wp-content/uploads/2023/03/veggie.png" },
  { name: "Garlic Bread", price: "$5.99", link: "https://thebusybaker.ca/wp-content/uploads/2018/08/easy-homemade-garlic-bread-fbig3.jpg" },
  { name: "Caesar Salad", price: "$8.99", link: "https://www.feastingathome.com/wp-content/uploads/2021/10/Caesar-salad_-4.jpg" },
  { name: "Greek Salad", price: "$9.49", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOMWg5Hp0tW8xZI5wcHGrUiBtEChxQdkiyQ&s" },
  { name: "Spaghetti Bolognese", price: "$14.99", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3V84SGZ7DraeVq_aMr8nJmLQbiGFPXS4nw&s" },
  { name: "Fettuccine Alfredo", price: "$13.99", link: "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/fettuccine-alfredo-with-creme-fraiche.jpg" },
  { name: "Lasagna", price: "$15.99", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR7ltcXfDUjQl0w1ZF8y6TgQptFryLqG9Iw&s"},
  { name: "Grilled Salmon", price: "$18.99", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iX670O6DIeeY3Dgv_MvIojmJIFozsJ4xiQ&s" },
  { name: "Chicken Parmesan", price: "$16.99", link: "https://preppykitchen.com/wp-content/uploads/2018/10/Chicken-Parmesan-Recipe-n.jpg"},
  { name: "Beef Burger", price: "$11.99", link: "https://reneenicoleskitchen.com/wp-content/uploads/2023/04/Bacon-Avocado-Ground-Beef-Burger-18-e1713444843311.jpg" },
  { name: "Veggie Burger", price: "$10.99", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKMNwZ-qtyVEnTebFCdVpiob63ipmeWTufw&s" },
  { name: "French Fries", price: "$4.99", link: "https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries-500x500.jpg" },
  { name: "Mozzarella Sticks", price: "$6.99", link: "https://static01.nyt.com/images/2024/02/08/multimedia/ND-mozzarella-sticks-pvfm/ND-mozzarella-sticks-pvfm-mediumSquareAt3X.jpg" },
  { name: "Chocolate Lava Cake", price: "$7.99", link: "https://sugarspunrun.com/wp-content/uploads/2019/01/Lava-Cakes-1-of-1-2.jpg" },
  { name: "Cheesecake", price: "$6.99", link: "https://www.recipetineats.com/tachyon/2024/09/No-bake-cheesecake_8.jpg?resize=500%2C500" },
  { name: "Strawberry Milkshake", price: "$5.99", link: "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg" },
  { name: "Iced Coffee", price: "$4.49", link: "https://www.tasteofhome.com/wp-content/uploads/2024/02/Copycat-McDonald-s-Iced-Coffee_EXPS_FT23_273351_ST_3_27_1.jpg" }
];

// Combo meals (bundles of items)
const comboMeals = [
  { name: "Lasagna + Salad Combo", price: "$24.99", link: "https://moonandspoonandyum.com/wp-content/uploads/2022/04/what-to-serve-with-lasagna-1-1024x1024.jpg" },
  { name: "Pizza + Garlic Bread Combo", price: "$17.99", link: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/177374/Christian-Petroni-Italian-Combos-6.21.22-31-72ppi-1x1.jpg?ixlib=react-9.9.0&ar=1%3A1&fit=crop&w=3840&auto=format" },
  { name: "Burger + Fries Combo", price: "$14.99", link: "https://inquiringchef.com/wp-content/uploads/2021/01/Smash-Burgers-1530-square.jpg" },
  { name: "Pizza + Soda Combo", price: "$15.99", link: "https://www.kalahariresorts.com/media/l4jpd3ii/pep-pizza-and-soda-small.jpg?width=500&height=500&v=1d9dd03d85d3dd0" },
  { name: "Spaghetti + Caesar Salad Combo", price: "$22.99", link: "https://themom100.com/wp-content/uploads/2020/05/spaghetti-with-tomato-sauce-116b-300x300.jpg" },
  { name: "Chicken Parmesan + Iced Coffee Combo", price: "$19.99", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRhJM9ME2aPdrBu8TDuGtiGH_J_lgGtNwzQ&s" },
  { name: "Veggie Burger + Fries Combo", price: "$13.99", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLM9VQqn4cnHM2qSPaSAtwxhAFc_pfrjDOw&s" }
];


function Menu({addToCart}) {

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Menu</h2>

        {/* Individual Items Section */}
        <h3>Individual Items</h3>
        <div className="row">
          {individualItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Meals Section */}
        <h3>Combo Meals</h3>
        <div className="row">
          {comboMeals.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
