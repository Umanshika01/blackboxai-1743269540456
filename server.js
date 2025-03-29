const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Enhanced static file serving
app.use(express.static(path.join(__dirname), {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html', 'js', 'css'],
  index: 'index.html',
  maxAge: '1d',
  redirect: false
}));

// CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// API routes
app.get('/api/restaurants', (req, res) => {
  res.json([
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
    }
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Serving files from: ${__dirname}`);
});