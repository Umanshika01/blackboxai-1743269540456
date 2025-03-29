// Sample restaurant data
const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: 4.5,
    deliveryTime: "20-30 min",
    categories: ["Burgers", "Fast Food"]
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    rating: 4.7,
    deliveryTime: "25-35 min",
    categories: ["Pizza", "Italian"]
  },
  {
    id: 3,
    name: "Sushi World",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    rating: 4.8,
    deliveryTime: "30-40 min",
    categories: ["Japanese", "Sushi"]
  }
];

// Display restaurants
function displayRestaurants() {
  const restaurantList = document.getElementById('restaurant-list');
  
  restaurants.forEach(restaurant => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow overflow-hidden';
    card.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-bold text-lg">${restaurant.name}</h3>
        <div class="flex items-center mt-1">
          <span class="text-yellow-500">${'★'.repeat(Math.floor(restaurant.rating))}${'☆'.repeat(5-Math.floor(restaurant.rating))}</span>
          <span class="ml-2 text-gray-600">${restaurant.rating}</span>
        </div>
        <p class="text-gray-600 mt-1">${restaurant.deliveryTime}</p>
        <div class="mt-2">
          ${restaurant.categories.map(cat => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${cat}</span>`).join('')}
        </div>
        <button class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          View Menu
        </button>
      </div>
    `;
    restaurantList.appendChild(card);
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', displayRestaurants);