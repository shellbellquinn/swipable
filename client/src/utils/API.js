import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchRestaurants: function() {
    return axios
      .get("api/restaurants")
      .then(res => {
        const restaurants = res.data.businesses;
        return restaurants.map(restaurant => {
          return {
            name: restaurant.name,
            rating: restaurant.rating,
            price: restaurant.price,
            image: restaurant.image_url,
            link: restaurant.url,
            closed: restaurant.is_closed,
            id: restaurant.id,
            display_phone: restaurant.phone,
            display_address: restaurant.location.display_address,
            catagory: restaurant.catagories,
          };
        });
      });
  }
};
