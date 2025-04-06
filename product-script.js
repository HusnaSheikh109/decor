const products = [
    {
      id: 1,
      name: "Modern Vase",
      price: "₹499",
      rating: "⭐ 4.5",
      reviews: "45 reviews",
      image: "modernvase.jpg",
      description: "Elegant ceramic vase for living rooms. Stylish vase for your fresh flowers."
    },
    {
      id: 2,
      name: "Wall Art Canvas",
      price: "₹899",
      rating: "⭐ 4.8",
      reviews: "32 reviews",
      image: "wallartcanva.jpg",
      description: "Floral 3D canvas wall art."
    },
    {
      id: 3,
      name: "Decorative Lamp",
      price: "₹799",
      rating: "⭐ 4.6",
      reviews: "58 reviews",
      image: "decorativelamp.jpg",
      description: "Golden floral desk lamp. Elegant lamp to light up your evenings."
    },
    {
      id: 4,
      name: "Cushion Set",
      price: "₹499",
      rating: "⭐ 4.6",
      reviews: "424 reviews",
      image: "cushionset.jpg",
      description: "Soft and stylish cushions for your living room."
    },
    {
     id: 5,
     name: "Wall Art",
     price: "₹4099",
    rating: "⭐ 4.6",
    reviews: "424 reviews",
    image: "wallart.jpg",
    description: "Crafted from UV-engraved acrylic and high-definition crystal porcelain, this elegant wall art boasts a water and oil-proof finish with exquisite detailing.Featuring a 3D ginkgo leaf design, detachable metal accents, and unique craftsmanship that enhances any room with a luxurious texture.Integrated LED soft light adds warmth and depth, transforming any space into a serene retreat.Ideal for living rooms, offices, bedrooms, or TV background walls, offering sophisticated appeal to various interiors.A refined decorative piece that serves as both art and functional wall decor for lasting impressions."
  }

  ];
  
  function displayProducts(filter = '') {
    const container = document.getElementById("productList");
    container.innerHTML = '';
    const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick='viewDetails(${JSON.stringify(product)})'>View Details</button>
        <button onclick="Buy(${product.id})">Buy Now</button>
        <button onclick="addToCart(${product.id})">🛒 Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
      `;
      container.appendChild(card);
    });
  }
  
  function viewDetails(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'index1.html';
  }
  
  function Buy(productId) {
    const selected = products.find(p => p.id === productId);
    if (selected) {
      localStorage.setItem('selectedProduct', JSON.stringify(selected));
      window.location.href = "buy.html";
    }
  }
  
  function addToCart(id) {
    alert("Product " + id + " added to cart!");
  }
  
  function addToWishlist(id) {
    alert("Product " + id + " added to wishlist!");
  }
  
  document.getElementById("searchBar").addEventListener("input", (e) => {
    displayProducts(e.target.value);
  });
  
  window.onload = () => displayProducts();
  