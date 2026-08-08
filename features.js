/* ===== Cream It Bakery — Interactive Features ===== */

// ─── Product Data (Expanded Catalog) ───
const PRODUCTS = [
  // ═══ CAKES ═══
  { id: 1,  name: 'Chocolate Truffle Cake',  category: 'cakes', price: 25, image: 'images/chocolate-cake.png', images: ['images/chocolate-cake.png','images/chocolate-cake.png'], desc: 'Rich chocolate layers with silky ganache, gold leaf, and Belgian chocolate shavings', tag: 'Bestseller', flavor: 'chocolate', eggless: false, occasion: ['birthday','celebration','corporate'], bestseller: true,  trending: false, newArrival: false, rating: 4.9, reviewCount: 234, deliveryTime: '2h',  sizes: [{label:'500g',price:25},{label:'1kg',price:45},{label:'2kg',price:85}] },
  { id: 2,  name: 'Butter Croissant',         category: 'pastries', price: 4,  image: 'images/croissant.png',  images: ['images/croissant.png'],  desc: 'Flaky, golden, buttery perfection baked fresh every morning',  tag: '', flavor: 'butter', eggless: false, occasion: [], bestseller: true,  trending: false, newArrival: false, rating: 4.7, reviewCount: 189, deliveryTime: '1h',  sizes: [{label:'1pc',price:4},{label:'4pc Box',price:14}] },
  { id: 3,  name: 'Artisan Sourdough',         category: 'breads',  price: 8,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Handcrafted sourdough with a crispy crust and airy crumb — 48h ferment', tag: 'Fresh Daily', flavor: 'classic', eggless: true, occasion: [], bestseller: false, trending: true,  newArrival: false, rating: 4.8, reviewCount: 145, deliveryTime: '2h',  sizes: [{label:'Small',price:8},{label:'Large',price:14}] },
  { id: 4,  name: 'Vanilla Cupcakes',          category: 'cakes',   price: 3.50, image: 'images/cupcakes.png', images: ['images/cupcakes.png'],  desc: 'Gourmet cupcakes with silky vanilla buttercream in seasonal flavors', tag: '', flavor: 'vanilla', eggless: false, occasion: ['birthday','baby-shower'], bestseller: false, trending: true,  newArrival: false, rating: 4.6, reviewCount: 167, deliveryTime: '1h',  sizes: [{label:'1pc',price:3.50},{label:'Box of 6',price:18},{label:'Box of 12',price:34}] },
  { id: 5,  name: 'Classic Apple Pie',          category: 'pastries', price: 15, image: 'images/apple-pie.png', images: ['images/apple-pie.png'], desc: 'Cinnamon-spiced apples in a flaky, buttery double crust — served warm', tag: 'Seasonal', flavor: 'fruit', eggless: false, occasion: ['festival','celebration'], bestseller: false, trending: false, newArrival: false, rating: 4.5, reviewCount: 98,  deliveryTime: '3h',  sizes: [{label:'6 inch',price:15},{label:'9 inch',price:24}] },
  { id: 6,  name: 'Chocolate Chip Cookies',     category: 'pastries', price: 2.50, image: 'images/cookies.png', images: ['images/cookies.png'],  desc: 'Chewy cookies loaded with premium 72% dark chocolate chunks', tag: '', flavor: 'chocolate', eggless: false, occasion: [], bestseller: true,  trending: false, newArrival: false, rating: 4.8, reviewCount: 312, deliveryTime: '1h',  sizes: [{label:'1pc',price:2.50},{label:'Box of 6',price:13},{label:'Box of 12',price:24}] },
  { id: 7,  name: 'Strawberry Dream Cake',      category: 'cakes',   price: 28, image: 'images/birthday-cake.png', images: ['images/birthday-cake.png'], desc: 'Fresh strawberries layered with vanilla swiss meringue buttercream', tag: 'New', flavor: 'fruit', eggless: false, occasion: ['birthday','anniversary'], bestseller: false, trending: true,  newArrival: true,  rating: 4.7, reviewCount: 56,  deliveryTime: '3h',  sizes: [{label:'500g',price:28},{label:'1kg',price:50},{label:'2kg',price:95}] },
  { id: 8,  name: 'Red Velvet Cake',            category: 'cakes',   price: 26, image: 'images/red-velvet.png', images: ['images/red-velvet.png'], desc: 'Classic red velvet with tangy cream cheese frosting and velvet crumb coat', tag: '', flavor: 'vanilla', eggless: false, occasion: ['birthday','anniversary','wedding'], bestseller: true,  trending: false, newArrival: false, rating: 4.8, reviewCount: 203, deliveryTime: '3h',  sizes: [{label:'500g',price:26},{label:'1kg',price:48},{label:'2kg',price:90}] },
  { id: 9,  name: 'French Baguette',            category: 'breads',  price: 5,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Traditional French baguette with a crispy golden crust and open crumb', tag: '', flavor: 'classic', eggless: true, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.4, reviewCount: 87,  deliveryTime: '1h',  sizes: [{label:'1pc',price:5},{label:'3pc Bundle',price:13}] },
  { id: 10, name: 'Whole Wheat Bread',          category: 'breads',  price: 7,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Healthy whole grain bread baked with organic flour — no preservatives', tag: 'Healthy', flavor: 'classic', eggless: true, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.3, reviewCount: 64,  deliveryTime: '2h',  sizes: [{label:'400g',price:7},{label:'800g',price:12}] },
  { id: 11, name: 'Cinnamon Rolls',             category: 'pastries', price: 5,  image: 'images/croissant.png', images: ['images/croissant.png'],  desc: 'Warm, gooey cinnamon rolls with cream cheese glaze — best served warm', tag: 'Popular', flavor: 'caramel', eggless: false, occasion: [], bestseller: true,  trending: true,  newArrival: false, rating: 4.9, reviewCount: 276, deliveryTime: '1h',  sizes: [{label:'1pc',price:5},{label:'Box of 4',price:18}] },
  { id: 12, name: 'Tiramisu Cake',              category: 'cakes',   price: 32, image: 'images/chocolate-cake.png', images: ['images/chocolate-cake.png'], desc: 'Coffee-soaked ladyfinger layers with mascarpone cream and cocoa dusting', tag: 'Premium', flavor: 'coffee', eggless: false, occasion: ['anniversary','corporate','celebration'], bestseller: false, trending: false, newArrival: false, rating: 4.9, reviewCount: 178, deliveryTime: '4h',  sizes: [{label:'500g',price:32},{label:'1kg',price:58},{label:'2kg',price:110}] },

  // ═══ NEW — CAKES ═══
  { id: 13, name: 'Black Forest Cake',          category: 'cakes',   price: 28, image: 'images/black-forest.png', images: ['images/black-forest.png'], desc: 'Chocolate sponge with whipped cream, cherries, and dark chocolate shavings', tag: '', flavor: 'chocolate', eggless: false, occasion: ['birthday','celebration'], bestseller: false, trending: true,  newArrival: false, rating: 4.7, reviewCount: 142, deliveryTime: '3h',  sizes: [{label:'500g',price:28},{label:'1kg',price:52},{label:'2kg',price:98}] },
  { id: 14, name: 'Pineapple Cake',             category: 'cakes',   price: 22, image: 'images/pineapple-cake.png', images: ['images/pineapple-cake.png'], desc: 'Light vanilla sponge with caramelized pineapple and whipped cream', tag: '', flavor: 'fruit', eggless: true, occasion: ['birthday','celebration'], bestseller: false, trending: false, newArrival: false, rating: 4.5, reviewCount: 118, deliveryTime: '2h',  sizes: [{label:'500g',price:22},{label:'1kg',price:40},{label:'2kg',price:75}] },
  { id: 15, name: 'New York Cheesecake',         category: 'cakes',   price: 30, image: 'images/cheesecake.png', images: ['images/cheesecake.png'], desc: 'Creamy baked cheesecake with buttery graham crust and berry compote', tag: 'Premium', flavor: 'vanilla', eggless: false, occasion: ['anniversary','celebration'], bestseller: false, trending: true,  newArrival: true,  rating: 4.8, reviewCount: 95,  deliveryTime: '4h',  sizes: [{label:'6 inch',price:30},{label:'8 inch',price:48}] },
  { id: 16, name: 'Wedding Elegance Cake',       category: 'cakes',   price: 120, image: 'images/wedding-cake.png', images: ['images/wedding-cake.png'], desc: '3-tier white fondant cake with fresh flowers and elegant sugar work', tag: 'Premium', flavor: 'vanilla', eggless: false, occasion: ['wedding'], bestseller: false, trending: false, newArrival: false, rating: 5.0, reviewCount: 47,  deliveryTime: '24h', sizes: [{label:'2-Tier',price:120},{label:'3-Tier',price:200},{label:'4-Tier',price:320}] },
  { id: 17, name: 'Birthday Sprinkle Cake',      category: 'cakes',   price: 24, image: 'images/birthday-cake.png', images: ['images/birthday-cake.png'], desc: 'Fun rainbow sprinkle cake with buttercream swirls — includes candles!', tag: 'Popular', flavor: 'vanilla', eggless: false, occasion: ['birthday'], bestseller: true,  trending: true,  newArrival: false, rating: 4.8, reviewCount: 321, deliveryTime: '2h',  sizes: [{label:'500g',price:24},{label:'1kg',price:44},{label:'2kg',price:82}] },
  { id: 18, name: 'Baby Shower Cake',            category: 'cakes',   price: 35, image: 'images/baby-shower-cake.png', images: ['images/baby-shower-cake.png'], desc: 'Adorable pastel cake with fondant baby booties and stars decoration', tag: 'New', flavor: 'vanilla', eggless: false, occasion: ['baby-shower'], bestseller: false, trending: false, newArrival: true,  rating: 4.9, reviewCount: 38,  deliveryTime: '6h',  sizes: [{label:'1kg',price:35},{label:'2kg',price:65},{label:'3kg',price:95}] },
  { id: 19, name: 'Graduation Cap Cake',         category: 'cakes',   price: 30, image: 'images/graduation-cake.png', images: ['images/graduation-cake.png'], desc: 'Elegant graduation-themed cake with gold accents and fondant cap topper', tag: '', flavor: 'chocolate', eggless: false, occasion: ['graduation'], bestseller: false, trending: false, newArrival: true,  rating: 4.7, reviewCount: 29,  deliveryTime: '6h',  sizes: [{label:'1kg',price:30},{label:'2kg',price:55}] },
  { id: 20, name: 'Eggless Chocolate Cake',      category: 'cakes',   price: 24, image: 'images/chocolate-cake.png', images: ['images/chocolate-cake.png'], desc: '100% eggless rich chocolate cake — same indulgent taste, no eggs!', tag: 'Eggless', flavor: 'chocolate', eggless: true, occasion: ['birthday','celebration'], bestseller: false, trending: true,  newArrival: false, rating: 4.6, reviewCount: 156, deliveryTime: '2h',  sizes: [{label:'500g',price:24},{label:'1kg',price:44},{label:'2kg',price:82}] },
  { id: 21, name: 'Butterscotch Crunch Cake',    category: 'cakes',   price: 26, image: 'images/pineapple-cake.png', images: ['images/pineapple-cake.png'], desc: 'Butterscotch sponge with caramel praline crunch and toffee drizzle', tag: '', flavor: 'caramel', eggless: false, occasion: ['birthday','celebration'], bestseller: false, trending: false, newArrival: false, rating: 4.6, reviewCount: 89,  deliveryTime: '3h',  sizes: [{label:'500g',price:26},{label:'1kg',price:48},{label:'2kg',price:88}] },
  { id: 22, name: 'Mango Mousse Cake',           category: 'cakes',   price: 28, image: 'images/pineapple-cake.png', images: ['images/pineapple-cake.png'], desc: 'Light mango mousse on vanilla sponge — a tropical summer delight', tag: 'Seasonal', flavor: 'fruit', eggless: true, occasion: ['birthday','celebration','festival'], bestseller: false, trending: true,  newArrival: true,  rating: 4.7, reviewCount: 67,  deliveryTime: '3h',  sizes: [{label:'500g',price:28},{label:'1kg',price:50}] },
  { id: 23, name: 'Corporate Celebration Cake',   category: 'cakes',   price: 45, image: 'images/chocolate-cake.png', images: ['images/chocolate-cake.png'], desc: 'Sleek modern design cake perfect for office parties and milestones', tag: '', flavor: 'chocolate', eggless: false, occasion: ['corporate'], bestseller: false, trending: false, newArrival: false, rating: 4.6, reviewCount: 42,  deliveryTime: '6h',  sizes: [{label:'1kg',price:45},{label:'2kg',price:85},{label:'3kg',price:120}] },
  { id: 24, name: 'Festival Special Cake',        category: 'cakes',   price: 30, image: 'images/birthday-cake.png', images: ['images/birthday-cake.png'], desc: 'Festive themed cake with seasonal decorations — Diwali, Christmas, Eid & more', tag: 'Seasonal', flavor: 'vanilla', eggless: true, occasion: ['festival'], bestseller: false, trending: true,  newArrival: true,  rating: 4.8, reviewCount: 73,  deliveryTime: '4h',  sizes: [{label:'500g',price:30},{label:'1kg',price:55},{label:'2kg',price:100}] },

  // ═══ NEW — PASTRIES ═══
  { id: 25, name: 'French Macarons',             category: 'pastries', price: 12, image: 'images/macarons.png', images: ['images/macarons.png'], desc: 'Delicate almond meringue shells with assorted premium ganache fillings', tag: 'Premium', flavor: 'assorted', eggless: false, occasion: ['wedding','anniversary','baby-shower'], bestseller: false, trending: true,  newArrival: true,  rating: 4.9, reviewCount: 134, deliveryTime: '2h',  sizes: [{label:'Box of 6',price:12},{label:'Box of 12',price:22},{label:'Box of 24',price:40}] },
  { id: 26, name: 'Fudge Brownies',              category: 'pastries', price: 8,  image: 'images/brownies.png', images: ['images/brownies.png'], desc: 'Rich, fudgy brownies with a crackly top and gooey chocolate center', tag: 'Bestseller', flavor: 'chocolate', eggless: false, occasion: [], bestseller: true,  trending: false, newArrival: false, rating: 4.8, reviewCount: 289, deliveryTime: '1h',  sizes: [{label:'Box of 4',price:8},{label:'Box of 8',price:14},{label:'Box of 12',price:20}] },
  { id: 27, name: 'Glazed Donuts',               category: 'pastries', price: 3,  image: 'images/donuts.png', images: ['images/donuts.png'], desc: 'Light, fluffy donuts with colorful glazes — chocolate, strawberry, caramel', tag: '', flavor: 'assorted', eggless: false, occasion: ['birthday','baby-shower'], bestseller: false, trending: true,  newArrival: false, rating: 4.5, reviewCount: 198, deliveryTime: '1h',  sizes: [{label:'1pc',price:3},{label:'Box of 6',price:16},{label:'Box of 12',price:30}] },
  { id: 28, name: 'Danish Pastry',               category: 'pastries', price: 5,  image: 'images/danish-pastry.png', images: ['images/danish-pastry.png'], desc: 'Flaky Danish with custard cream filling and fresh seasonal berries', tag: 'New', flavor: 'fruit', eggless: false, occasion: [], bestseller: false, trending: false, newArrival: true,  rating: 4.6, reviewCount: 45,  deliveryTime: '2h',  sizes: [{label:'1pc',price:5},{label:'Box of 4',price:18}] },
  { id: 29, name: 'Blueberry Muffins',           category: 'pastries', price: 4,  image: 'images/muffins.png', images: ['images/muffins.png'], desc: 'Fresh-baked muffins bursting with plump blueberries and streusel topping', tag: '', flavor: 'fruit', eggless: false, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.5, reviewCount: 112, deliveryTime: '1h',  sizes: [{label:'1pc',price:4},{label:'Box of 4',price:14},{label:'Box of 6',price:20}] },
  { id: 30, name: 'Chocolate Eclair',            category: 'pastries', price: 5,  image: 'images/croissant.png', images: ['images/croissant.png'], desc: 'Choux pastry filled with vanilla cream and topped with rich chocolate glaze', tag: '', flavor: 'chocolate', eggless: false, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.6, reviewCount: 78,  deliveryTime: '2h',  sizes: [{label:'1pc',price:5},{label:'Box of 4',price:18}] },
  { id: 31, name: 'Eggless Cookies',             category: 'pastries', price: 3,  image: 'images/cookies.png', images: ['images/cookies.png'], desc: 'Crunchy butter cookies made without eggs — just as delicious!', tag: 'Eggless', flavor: 'butter', eggless: true, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.4, reviewCount: 93,  deliveryTime: '1h',  sizes: [{label:'Box of 6',price:3},{label:'Box of 12',price:5.50}] },
  { id: 32, name: 'Almond Croissant',            category: 'pastries', price: 5.50, image: 'images/croissant.png', images: ['images/croissant.png'], desc: 'Classic croissant filled with almond cream and topped with sliced almonds', tag: '', flavor: 'nuts', eggless: false, occasion: [], bestseller: false, trending: false, newArrival: true,  rating: 4.7, reviewCount: 61,  deliveryTime: '1h',  sizes: [{label:'1pc',price:5.50},{label:'Box of 4',price:20}] },

  // ═══ NEW — BREADS ═══
  { id: 33, name: 'Focaccia Bread',              category: 'breads',  price: 9,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Italian herb focaccia with rosemary, olive oil, and sea salt flakes', tag: '', flavor: 'classic', eggless: true, occasion: ['corporate'], bestseller: false, trending: false, newArrival: false, rating: 4.6, reviewCount: 56,  deliveryTime: '2h',  sizes: [{label:'Small',price:9},{label:'Large',price:16}] },
  { id: 34, name: 'Multigrain Loaf',             category: 'breads',  price: 8,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Packed with 7 grains and seeds — the perfect healthy daily bread', tag: 'Healthy', flavor: 'classic', eggless: true, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.4, reviewCount: 72,  deliveryTime: '2h',  sizes: [{label:'400g',price:8},{label:'800g',price:14}] },
  { id: 35, name: 'Garlic Bread',                category: 'breads',  price: 6,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Toasty garlic butter bread with herbs — the ultimate comfort side', tag: 'Popular', flavor: 'butter', eggless: true, occasion: ['corporate'], bestseller: true,  trending: false, newArrival: false, rating: 4.7, reviewCount: 201, deliveryTime: '1h',  sizes: [{label:'4pc',price:6},{label:'8pc',price:10}] },
  { id: 36, name: 'Brioche Buns',                category: 'breads',  price: 4,  image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Soft, rich, buttery brioche buns — perfect for burgers or just butter', tag: '', flavor: 'butter', eggless: false, occasion: [], bestseller: false, trending: false, newArrival: false, rating: 4.5, reviewCount: 48,  deliveryTime: '2h',  sizes: [{label:'Pack of 4',price:4},{label:'Pack of 8',price:7}] },
  { id: 37, name: 'Banana Walnut Bread',         category: 'breads',  price: 10, image: 'images/artisan-bread.png', images: ['images/artisan-bread.png'], desc: 'Moist banana bread studded with crunchy walnuts — comfort in every slice', tag: 'New', flavor: 'fruit', eggless: false, occasion: [], bestseller: false, trending: true,  newArrival: true,  rating: 4.7, reviewCount: 34,  deliveryTime: '2h',  sizes: [{label:'Small Loaf',price:10},{label:'Large Loaf',price:16}] },

  // ═══ NEW — CUSTOM / OCCASION ═══
  { id: 38, name: 'Photo Print Cake',            category: 'cakes',   price: 35, image: 'images/birthday-cake.png', images: ['images/birthday-cake.png'], desc: 'Customizable cake with your edible photo print — perfect for any occasion!', tag: 'Custom', flavor: 'vanilla', eggless: false, occasion: ['birthday','anniversary','graduation','corporate'], bestseller: false, trending: true,  newArrival: true,  rating: 4.8, reviewCount: 87,  deliveryTime: '8h',  sizes: [{label:'1kg',price:35},{label:'2kg',price:65}] },
  { id: 39, name: 'Anniversary Heart Cake',      category: 'cakes',   price: 32, image: 'images/red-velvet.png', images: ['images/red-velvet.png'], desc: 'Heart-shaped red velvet cake with rose buttercream — romance on a plate', tag: '', flavor: 'vanilla', eggless: false, occasion: ['anniversary'], bestseller: false, trending: false, newArrival: false, rating: 4.9, reviewCount: 65,  deliveryTime: '4h',  sizes: [{label:'500g',price:32},{label:'1kg',price:58}] },
  { id: 40, name: 'Dessert Platter',             category: 'pastries', price: 45, image: 'images/macarons.png', images: ['images/macarons.png','images/brownies.png','images/cookies.png'], desc: 'Curated assortment of brownies, cookies, macarons, and mini pastries', tag: 'Popular', flavor: 'assorted', eggless: false, occasion: ['corporate','celebration','festival'], bestseller: true,  trending: false, newArrival: false, rating: 4.8, reviewCount: 115, deliveryTime: '3h',  sizes: [{label:'Small (12pc)',price:45},{label:'Large (24pc)',price:80}] },
];

// ─── Occasion Collections Data ───
const OCCASIONS = [
  { id: 'birthday',    name: 'Birthday',         emoji: '🎂', image: 'images/birthday-cake.png',     desc: 'Make their day special',   color: '#FF6B9D' },
  { id: 'wedding',     name: 'Wedding',          emoji: '💒', image: 'images/wedding-cake.png',      desc: 'Elegant & unforgettable',  color: '#F8E8D8' },
  { id: 'anniversary', name: 'Anniversary',      emoji: '💕', image: 'images/red-velvet.png',        desc: 'Celebrate your love',      color: '#E8B4B8' },
  { id: 'baby-shower', name: 'Baby Shower',      emoji: '👶', image: 'images/baby-shower-cake.png',  desc: 'Sweet little surprises',   color: '#B8D4E8' },
  { id: 'graduation',  name: 'Graduation',       emoji: '🎓', image: 'images/graduation-cake.png',   desc: 'You did it!',              color: '#FFD700' },
  { id: 'corporate',   name: 'Corporate Events', emoji: '🏢', image: 'images/chocolate-cake.png',    desc: 'Impress your team',        color: '#4A6FA5' },
  { id: 'festival',    name: 'Festivals',        emoji: '🎊', image: 'images/birthday-cake.png',     desc: 'Festive flavors',          color: '#FF8C42' },
];

// SVG Icons
const ICONS = {
  heart: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  eye: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  compare: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg>',
  cart: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  mic: '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>',
  x: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  moon: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
  sun: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
};

// ─── Cart System ───
const Cart = {
  items: JSON.parse(localStorage.getItem('sc-cart') || '[]'),

  add(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = this.items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ ...product, qty });
    }
    this.save();
    this.updateUI();
    Toast.show(`${product.name} added to cart!`, 'success');
  },

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
    this.updateUI();
  },

  updateQty(productId, qty) {
    const item = this.items.find(i => i.id === productId);
    if (!item) return;
    item.qty = Math.max(1, qty);
    this.save();
    this.updateUI();
  },

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  save() {
    localStorage.setItem('sc-cart', JSON.stringify(this.items));
  },

  updateUI() {
    // Update badge
    const badges = document.querySelectorAll('#cart-count');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.classList.toggle('show', count > 0);
    });

    // Update cart sidebar
    const itemsContainer = document.querySelector('.cart-sidebar__items');
    if (itemsContainer) {
      if (this.items.length === 0) {
        itemsContainer.innerHTML = `
          <div class="cart-empty">
            <div class="cart-empty__icon">🛒</div>
            <p>Your cart is empty</p>
          </div>`;
      } else {
        itemsContainer.innerHTML = this.items.map(item => `
          <div class="cart-item">
            <div class="cart-item__image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item__info">
              <div class="cart-item__name">${item.name}</div>
              <div class="cart-item__price">$${(item.price * item.qty).toFixed(2)}</div>
              <div class="cart-item__qty">
                <button class="cart-item__qty-btn" onclick="Cart.updateQty(${item.id}, ${item.qty - 1})">−</button>
                <span>${item.qty}</span>
                <button class="cart-item__qty-btn" onclick="Cart.updateQty(${item.id}, ${item.qty + 1})">+</button>
              </div>
            </div>
            <button class="cart-item__remove" onclick="Cart.remove(${item.id})">✕</button>
          </div>
        `).join('');
      }
    }

    // Update total
    const totalEl = document.querySelector('.cart-sidebar__total-value');
    if (totalEl) totalEl.textContent = `$${this.getTotal().toFixed(2)}`;

    // Sticky cart bar
    const stickyCart = document.querySelector('.sticky-cart');
    if (stickyCart) {
      stickyCart.classList.toggle('show', count > 0);
      const stickyCount = stickyCart.querySelector('.sticky-cart__count');
      const stickyTotal = stickyCart.querySelector('.sticky-cart__total');
      if (stickyCount) stickyCount.textContent = `${count} item${count !== 1 ? 's' : ''}`;
      if (stickyTotal) stickyTotal.textContent = `$${this.getTotal().toFixed(2)}`;
    }
  },

  toggleSidebar() {
    const sidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.cart-overlay');
    if (sidebar) {
      sidebar.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    }
  },

  init() {
    this.updateUI();

    document.querySelectorAll('#cart-toggle').forEach(btn => {
      btn.addEventListener('click', () => this.toggleSidebar());
    });
  }
};

// ─── Wishlist System ───
const Wishlist = {
  items: JSON.parse(localStorage.getItem('sc-wishlist') || '[]'),

  toggle(productId) {
    const index = this.items.indexOf(productId);
    if (index > -1) {
      this.items.splice(index, 1);
      Toast.show('Removed from wishlist', 'info');
    } else {
      this.items.push(productId);
      Toast.show('Added to wishlist! ❤️', 'success');
    }
    this.save();
    this.updateUI();
  },

  has(productId) {
    return this.items.includes(productId);
  },

  save() {
    localStorage.setItem('sc-wishlist', JSON.stringify(this.items));
  },

  updateUI() {
    // Update badge
    const badges = document.querySelectorAll('#wishlist-count');
    badges.forEach(b => {
      b.textContent = this.items.length;
      b.classList.toggle('show', this.items.length > 0);
    });

    // Update heart buttons
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
      const id = parseInt(btn.dataset.wishlist);
      const isWished = this.has(id);
      btn.classList.toggle('wishlisted', isWished);
      btn.innerHTML = isWished ? ICONS.heartFill : ICONS.heart;
    });
  },

  init() {
    this.updateUI();
  }
};

// ─── Quick View Modal ───
const QuickView = {
  open(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('quickview-modal');
    if (!overlay) return;

    overlay.querySelector('.modal__image img').src = product.image;
    overlay.querySelector('.modal__image img').alt = product.name;
    overlay.querySelector('.modal__category').textContent = product.category;
    overlay.querySelector('.modal__title').textContent = product.name;
    overlay.querySelector('.modal__desc').textContent = product.desc;
    overlay.querySelector('.modal__price').textContent = `$${product.price.toFixed(2)}`;

    const qtyEl = overlay.querySelector('.modal__qty-value');
    qtyEl.textContent = '1';

    overlay.querySelector('.modal__qty-minus').onclick = () => {
      const val = Math.max(1, parseInt(qtyEl.textContent) - 1);
      qtyEl.textContent = val;
    };
    overlay.querySelector('.modal__qty-plus').onclick = () => {
      qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
    };

    overlay.querySelector('.modal__add-btn').onclick = () => {
      Cart.add(productId, parseInt(qtyEl.textContent));
      this.close();
    };

    // Review System Integration
    const reviewsContainer = overlay.querySelector('.modal__reviews');
    if (reviewsContainer && typeof ReviewSystem !== 'undefined') {
      reviewsContainer.innerHTML = `
        <h3 style="margin-bottom: var(--space-md); font-family: var(--font-heading);">Customer Reviews</h3>
        ${ReviewSystem.renderStarBreakdown(productId)}
        <div class="review-list">
          ${ReviewSystem.renderReviewList(productId, 'newest')}
        </div>
      `;
    }

    overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  },

  close() {
    const overlay = document.getElementById('quickview-modal');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  },

  init() {
    const overlay = document.getElementById('quickview-modal');
    if (!overlay) return;

    overlay.querySelector('.modal__close').addEventListener('click', () => this.close());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }
};

// ─── Product Comparison ───
const Compare = {
  items: [],

  toggle(productId) {
    const index = this.items.indexOf(productId);
    if (index > -1) {
      this.items.splice(index, 1);
    } else {
      if (this.items.length >= 3) {
        Toast.show('You can compare up to 3 items', 'error');
        return;
      }
      this.items.push(productId);
      Toast.show('Added to comparison', 'success');
    }
    this.updateUI();
  },

  show() {
    if (this.items.length < 2) {
      Toast.show('Select at least 2 items to compare', 'error');
      return;
    }

    const products = this.items.map(id => PRODUCTS.find(p => p.id === id));
    const overlay = document.getElementById('compare-modal');
    if (!overlay) return;

    const table = overlay.querySelector('.compare-table');
    table.innerHTML = `
      <tr>
        <th></th>
        ${products.map(p => `<th><img src="${p.image}" alt="${p.name}"><br>${p.name}</th>`).join('')}
      </tr>
      <tr><td><strong>Category</strong></td>${products.map(p => `<td>${p.category}</td>`).join('')}</tr>
      <tr><td><strong>Price</strong></td>${products.map(p => `<td><strong>$${p.price.toFixed(2)}</strong></td>`).join('')}</tr>
      <tr><td><strong>Description</strong></td>${products.map(p => `<td>${p.desc}</td>`).join('')}</tr>
      <tr><td></td>${products.map(p => `<td><button class="btn btn--primary btn--sm" onclick="Cart.add(${p.id}); Compare.closeModal();">Add to Cart</button></td>`).join('')}</tr>
    `;

    overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  },

  closeModal() {
    const overlay = document.getElementById('compare-modal');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  },

  updateUI() {
    document.querySelectorAll('[data-compare]').forEach(btn => {
      const id = parseInt(btn.dataset.compare);
      btn.classList.toggle('active', this.items.includes(id));
    });

    const compareBtn = document.getElementById('compare-btn');
    if (compareBtn) {
      compareBtn.style.display = this.items.length >= 2 ? 'inline-flex' : 'none';
      compareBtn.querySelector('span').textContent = `Compare (${this.items.length})`;
    }
  },

  init() {
    const overlay = document.getElementById('compare-modal');
    if (!overlay) return;

    overlay.querySelector('.modal__close').addEventListener('click', () => this.closeModal());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeModal();
    });
  }
};

// ─── Search with Voice ───
const Search = {
  open() {
    const overlay = document.querySelector('.search-overlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.classList.add('no-scroll');
      setTimeout(() => overlay.querySelector('.search-box__input')?.focus(), 300);
    }
  },

  close() {
    const overlay = document.querySelector('.search-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
    this.stopVoice();
  },

  filter(query) {
    if (!query.trim()) return;
    const q = query.toLowerCase();
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );

    // Render search results
    const container = document.querySelector('.search-results');
    if (container) {
      if (results.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:var(--space-lg);">No products found 😔</p>';
      } else {
        container.innerHTML = results.map(p => `
          <div class="search-result" onclick="Search.close(); QuickView.open(${p.id});" style="display:flex;gap:var(--space-sm);padding:var(--space-sm);border-radius:var(--radius-md);cursor:pointer;transition:background 0.2s;">
            <img src="${p.image}" alt="${p.name}" style="width:50px;height:50px;object-fit:cover;border-radius:var(--radius-sm);">
            <div>
              <div style="font-weight:600;font-size:var(--fs-small);">${p.name}</div>
              <div style="color:var(--accent);font-weight:700;font-size:var(--fs-small);">$${p.price.toFixed(2)}</div>
            </div>
          </div>
        `).join('');
      }
      container.style.display = 'block';
    }
  },

  startVoice() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      Toast.show('Voice search not supported in this browser', 'error');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;

    const voiceBtn = document.querySelector('.search-box__voice');

    this.recognition.onstart = () => {
      if (voiceBtn) voiceBtn.classList.add('listening');
      Toast.show('Listening... 🎤', 'info');
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const input = document.querySelector('.search-box__input');
      if (input) {
        input.value = transcript;
        this.filter(transcript);
      }
    };

    this.recognition.onend = () => {
      if (voiceBtn) voiceBtn.classList.remove('listening');
    };

    this.recognition.onerror = () => {
      if (voiceBtn) voiceBtn.classList.remove('listening');
      Toast.show('Could not understand, try again', 'error');
    };

    this.recognition.start();
  },

  stopVoice() {
    if (this.recognition) {
      this.recognition.stop();
    }
  },

  init() {
    const overlay = document.querySelector('.search-overlay');
    if (!overlay) return;

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    document.querySelectorAll('#search-toggle').forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    const closeBtn = overlay.querySelector('.search-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    const input = overlay.querySelector('.search-box__input');
    if (input) {
      let debounce;
      input.addEventListener('input', (e) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => this.filter(e.target.value), 300);
      });
    }

    const voiceBtn = overlay.querySelector('.search-box__voice');
    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => this.startVoice());
    }
  }
};

// ─── AI Cake Recommendation Quiz ───
const CakeQuiz = {
  currentStep: 0,
  answers: {},

  questions: [
    {
      key: 'occasion',
      text: 'What\'s the occasion? 🎉',
      options: [
        { emoji: '🎂', label: 'Birthday', value: 'birthday' },
        { emoji: '💒', label: 'Wedding', value: 'wedding' },
        { emoji: '🎓', label: 'Celebration', value: 'celebration' },
        { emoji: '☕', label: 'Just Because', value: 'casual' },
      ]
    },
    {
      key: 'flavor',
      text: 'What flavors do you love? 😋',
      options: [
        { emoji: '🍫', label: 'Chocolate', value: 'chocolate' },
        { emoji: '🍓', label: 'Fruity', value: 'fruity' },
        { emoji: '🍦', label: 'Vanilla/Classic', value: 'classic' },
        { emoji: '☕', label: 'Coffee/Caramel', value: 'coffee' },
      ]
    },
    {
      key: 'dietary',
      text: 'Any dietary preferences? 🌿',
      options: [
        { emoji: '✅', label: 'No restrictions', value: 'none' },
        { emoji: '🌾', label: 'Gluten-free', value: 'gf' },
        { emoji: '🥛', label: 'Dairy-free', value: 'df' },
        { emoji: '🌱', label: 'Vegan', value: 'vegan' },
      ]
    },
    {
      key: 'budget',
      text: 'What\'s your budget? 💰',
      options: [
        { emoji: '💵', label: 'Under $10', value: 'low' },
        { emoji: '💳', label: '$10 – $25', value: 'mid' },
        { emoji: '💎', label: '$25 – $35', value: 'high' },
        { emoji: '👑', label: 'Sky\'s the limit', value: 'premium' },
      ]
    }
  ],

  recommendations: {
    default: { name: 'Chocolate Cake', emoji: '🍫', desc: 'Our bestselling rich chocolate masterpiece — perfect for any occasion!', id: 1 },
    birthday_chocolate: { name: 'Chocolate Cake', emoji: '🎂', desc: 'The ultimate birthday chocolate cake with layers of ganache!', id: 1 },
    birthday_fruity: { name: 'Strawberry Cake', emoji: '🍓', desc: 'Fresh strawberry cake — fruity, bright, and perfect for birthdays!', id: 7 },
    birthday_classic: { name: 'Red Velvet Cake', emoji: '❤️', desc: 'A classic red velvet birthday cake with cream cheese frosting!', id: 8 },
    wedding_classic: { name: 'Tiramisu Cake', emoji: '☕', desc: 'An elegant tiramisu cake, perfect for your special day!', id: 12 },
    celebration_chocolate: { name: 'Chocolate Cake', emoji: '🏆', desc: 'Celebrate in style with our showstopping chocolate cake!', id: 1 },
    casual_chocolate: { name: 'Chocolate Chip Cookies', emoji: '🍪', desc: 'For a cozy treat — our legendary chocolate chip cookies!', id: 6 },
    casual_fruity: { name: 'Apple Pie', emoji: '🥧', desc: 'Nothing says comfort like a warm slice of apple pie!', id: 5 },
    casual_classic: { name: 'Butter Croissant', emoji: '🥐', desc: 'Simple perfection — our flaky, golden butter croissant!', id: 2 },
    casual_coffee: { name: 'Cinnamon Roll', emoji: '🌀', desc: 'Pair with coffee for the ultimate casual indulgence!', id: 11 },
  },

  getRecommendation() {
    const { occasion, flavor } = this.answers;
    const key = `${occasion}_${flavor}`;
    return this.recommendations[key] || this.recommendations.default;
  },

  open() {
    this.currentStep = 0;
    this.answers = {};
    const overlay = document.getElementById('quiz-modal');
    if (overlay) {
      overlay.classList.add('open');
      document.body.classList.add('no-scroll');
      this.render();
    }
  },

  close() {
    const overlay = document.getElementById('quiz-modal');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  },

  selectOption(key, value) {
    this.answers[key] = value;
    this.currentStep++;

    if (this.currentStep >= this.questions.length) {
      this.showResult();
    } else {
      this.render();
    }
  },

  render() {
    const content = document.querySelector('.quiz__content');
    if (!content) return;

    const q = this.questions[this.currentStep];
    const progress = ((this.currentStep) / this.questions.length) * 100;

    content.innerHTML = `
      <div class="quiz__progress"><div class="quiz__progress-bar" style="width: ${progress}%"></div></div>
      <p class="quiz__question">${q.text}</p>
      <div class="quiz__options">
        ${q.options.map(opt => `
          <button class="quiz__option" onclick="CakeQuiz.selectOption('${q.key}', '${opt.value}')">
            <span class="quiz__option-emoji">${opt.emoji}</span>
            ${opt.label}
          </button>
        `).join('')}
      </div>
    `;
  },

  showResult() {
    const content = document.querySelector('.quiz__content');
    if (!content) return;

    const rec = this.getRecommendation();

    content.innerHTML = `
      <div class="quiz__progress"><div class="quiz__progress-bar" style="width: 100%"></div></div>
      <div class="quiz__result">
        <div class="quiz__result-emoji">${rec.emoji}</div>
        <h3 class="quiz__result-title">We recommend: ${rec.name}!</h3>
        <p class="quiz__result-desc">${rec.desc}</p>
        <div style="display:flex;gap:var(--space-sm);justify-content:center;flex-wrap:wrap;">
          <button class="btn btn--primary" onclick="Cart.add(${rec.id}); CakeQuiz.close();">Add to Cart</button>
          <button class="btn btn--secondary" onclick="CakeQuiz.open();">Try Again</button>
        </div>
      </div>
    `;
  },

  init() {
    const overlay = document.getElementById('quiz-modal');
    if (!overlay) return;

    overlay.querySelector('.modal__close')?.addEventListener('click', () => this.close());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });
  }
};

// ─── Category Filter (Menu Page) ───
const CategoryFilter = {
  currentCategory: 'all',
  currentOccasion: null,
  displayedCount: 0,
  batchSize: 9,

  init() {
    const tabs = document.querySelectorAll('.category-tab');
    const grid = document.getElementById('products-grid');
    if (!tabs.length || !grid) return;

    this.grid = grid;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (tab.dataset.occasion) {
          this.currentOccasion = tab.dataset.occasion;
          this.currentCategory = 'all';
        } else {
          this.currentCategory = tab.dataset.category;
          this.currentOccasion = null;
        }
        this.displayedCount = 0;
        this.loadMore();
      });
    });

    // Load initial batch
    this.loadMore();

    // Infinite scroll
    const sentinel = document.getElementById('scroll-sentinel');
    if (sentinel) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.loadMore();
        }
      }, { rootMargin: '200px' });
      observer.observe(sentinel);
    }
  },

  getFilteredProducts() {
    let results = PRODUCTS;
    if (this.currentCategory !== 'all') {
      results = results.filter(p => p.category === this.currentCategory);
    }
    if (this.currentOccasion) {
      results = results.filter(p => p.occasion && p.occasion.includes(this.currentOccasion));
    }
    // Chain through advanced filters if available
    if (typeof AdvancedFilter !== 'undefined') {
      results = AdvancedFilter.filterProducts(results);
    }
    return results;
  },

  loadMore() {
    if (!this.grid) return;

    const filtered = this.getFilteredProducts();
    const batch = filtered.slice(this.displayedCount, this.displayedCount + this.batchSize);

    if (this.displayedCount === 0) {
      this.grid.innerHTML = '';
    }

    batch.forEach((product, i) => {
      const card = this.createCard(product);
      card.style.animationDelay = `${i * 0.1}s`;
      this.grid.appendChild(card);
    });

    this.displayedCount += batch.length;

    // Update load more indicator
    const loadMore = document.getElementById('load-more');
    if (loadMore) {
      loadMore.style.display = this.displayedCount >= filtered.length ? 'none' : 'block';
    }

    // Re-init reveals (defer to allow layout)
    setTimeout(() => {
      if (typeof RevealManager !== 'undefined') RevealManager.init();
    }, 50);
  },

  createCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card reveal';
    div.innerHTML = `
      ${product.tag ? `<span class="product-card__tag">${product.tag}</span>` : ''}
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card__actions">
          <button class="product-card__action" data-wishlist="${product.id}" onclick="Wishlist.toggle(${product.id})" title="Wishlist">
            ${Wishlist.has(product.id) ? ICONS.heartFill : ICONS.heart}
          </button>
          <button class="product-card__action" onclick="QuickView.open(${product.id})" title="Quick View">
            ${ICONS.eye}
          </button>
          <button class="product-card__action" data-compare="${product.id}" onclick="Compare.toggle(${product.id})" title="Compare">
            ${ICONS.compare}
          </button>
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__desc">${product.desc}</p>
        <div class="product-card__footer">
          <span class="product-card__price">$${product.price.toFixed(2)}</span>
          <button class="product-card__add-btn" onclick="Cart.add(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    return div;
  }
};

// ─── Star Rating Renderer ───
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return `<span class="stars">${'★'.repeat(full)}${half ? '⯨' : ''}${'☆'.repeat(empty)}</span>`;
}

// ─── Compact Product Card (for horizontal scrollers) ───
function renderCompactCard(product) {
  return `
    <div class="compact-card" onclick="QuickView.open(${product.id})">
      ${product.tag ? `<span class="compact-card__tag">${product.tag}</span>` : ''}
      <div class="compact-card__image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="compact-card__wishlist" data-wishlist="${product.id}" onclick="event.stopPropagation(); Wishlist.toggle(${product.id})" title="Wishlist">
          ${Wishlist.has(product.id) ? ICONS.heartFill : ICONS.heart}
        </button>
      </div>
      <div class="compact-card__body">
        <h4 class="compact-card__title">${product.name}</h4>
        <div class="compact-card__rating">${renderStars(product.rating)} <span class="compact-card__review-count">(${product.reviewCount})</span></div>
        <div class="compact-card__footer">
          <span class="compact-card__price">$${product.price.toFixed(2)}</span>
          <button class="compact-card__add" onclick="event.stopPropagation(); Cart.add(${product.id})">+</button>
        </div>
      </div>
    </div>`;
}

// ─── Render Product Cards (Homepage — Signature Delights) ───
function renderHomeProducts() {
  const grid = document.getElementById('home-products-grid');
  if (!grid) return;

  const featured = PRODUCTS.filter(p => p.bestseller || p.rating >= 4.8).slice(0, 8);
  grid.innerHTML = featured.map(product => `
    <div class="product-card reveal">
      ${product.tag ? `<span class="product-card__tag">${product.tag}</span>` : ''}
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card__actions">
          <button class="product-card__action" data-wishlist="${product.id}" onclick="Wishlist.toggle(${product.id})" title="Wishlist">
            ${Wishlist.has(product.id) ? ICONS.heartFill : ICONS.heart}
          </button>
          <button class="product-card__action" onclick="QuickView.open(${product.id})" title="Quick View">
            ${ICONS.eye}
          </button>
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <h3 class="product-card__title">${product.name}</h3>
        <div class="product-card__rating">${renderStars(product.rating)} <span style="color:var(--text-muted);font-size:var(--fs-xs);">(${product.reviewCount})</span></div>
        <p class="product-card__desc">${product.desc}</p>
        <div class="product-card__footer">
          <span class="product-card__price">$${product.price.toFixed(2)}</span>
          <button class="product-card__add-btn" onclick="Cart.add(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ─── Horizontal Scroll Sections ───
function renderHorizontalSection(containerId, filterFn, emptyMsg) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = PRODUCTS.filter(filterFn);
  if (items.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;">${emptyMsg}</p>`;
    return;
  }
  container.innerHTML = `<div class="scroll-row">${items.map(renderCompactCard).join('')}</div>`;
}

function renderBestSellers() {
  renderHorizontalSection('bestsellers-row', p => p.bestseller, 'No bestsellers yet');
}

function renderTrending() {
  renderHorizontalSection('trending-row', p => p.trending, 'Nothing trending right now');
}

function renderNewArrivals() {
  renderHorizontalSection('new-arrivals-row', p => p.newArrival, 'Check back soon for new items!');
}

// ─── Occasion Collections ───
function renderOccasionCollections() {
  const grid = document.getElementById('occasion-grid');
  if (!grid) return;

  grid.innerHTML = OCCASIONS.map(occ => {
    const count = PRODUCTS.filter(p => p.occasion && p.occasion.includes(occ.id)).length;
    return `
      <a href="menu.html?occasion=${occ.id}" class="occasion-card reveal" style="--occ-color: ${occ.color}">
        <div class="occasion-card__image">
          <img src="${occ.image}" alt="${occ.name}" loading="lazy">
          <div class="occasion-card__overlay"></div>
        </div>
        <div class="occasion-card__content">
          <span class="occasion-card__emoji">${occ.emoji}</span>
          <h3 class="occasion-card__title">${occ.name}</h3>
          <p class="occasion-card__desc">${occ.desc}</p>
          <span class="occasion-card__count">${count} item${count !== 1 ? 's' : ''}</span>
        </div>
      </a>`;
  }).join('');
}

// ─── Seasonal / Festive Banner ───
function renderSeasonalBanner() {
  const container = document.getElementById('seasonal-banner');
  if (!container) return;

  const seasonal = PRODUCTS.filter(p => p.tag === 'Seasonal' || p.occasion?.includes('festival'));
  if (seasonal.length === 0) return;

  const featured = seasonal[Math.floor(Math.random() * seasonal.length)];
  container.innerHTML = `
    <div class="seasonal-banner__bg">
      <img src="${featured.image}" alt="${featured.name}" loading="lazy">
    </div>
    <div class="seasonal-banner__content reveal">
      <span class="seasonal-banner__label">🌟 Limited Time</span>
      <h2 class="seasonal-banner__title">Seasonal Specials</h2>
      <p class="seasonal-banner__subtitle">${seasonal.length} festive treats available now — get them before they're gone!</p>
      <div class="seasonal-banner__items">
        ${seasonal.slice(0, 3).map(p => `<span class="seasonal-banner__chip">${p.name}</span>`).join('')}
      </div>
      <a href="menu.html?occasion=festival" class="btn btn--primary">Shop Seasonal →</a>
    </div>`;
}

// ─── Recently Viewed ───
const RecentlyViewed = {
  KEY: 'sc-recently-viewed',
  MAX: 10,

  get() {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  },

  add(productId) {
    let items = this.get().filter(id => id !== productId);
    items.unshift(productId);
    if (items.length > this.MAX) items = items.slice(0, this.MAX);
    localStorage.setItem(this.KEY, JSON.stringify(items));
  },

  render() {
    const container = document.getElementById('recently-viewed-row');
    if (!container) return;

    const ids = this.get();
    if (ids.length === 0) {
      container.closest('.section')?.style.setProperty('display', 'none');
      return;
    }

    const items = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    container.innerHTML = `<div class="scroll-row">${items.map(renderCompactCard).join('')}</div>`;
  }
};

// ─── Personalized Recommendations ───
const Recommendations = {
  get() {
    const viewed = RecentlyViewed.get();
    if (viewed.length === 0) return PRODUCTS.filter(p => p.bestseller).slice(0, 8);

    // Count category/flavor preferences from browsing history
    const prefs = { categories: {}, flavors: {} };
    viewed.forEach(id => {
      const p = PRODUCTS.find(pr => pr.id === id);
      if (!p) return;
      prefs.categories[p.category] = (prefs.categories[p.category] || 0) + 1;
      prefs.flavors[p.flavor] = (prefs.flavors[p.flavor] || 0) + 1;
    });

    const topCategory = Object.entries(prefs.categories).sort((a, b) => b[1] - a[1])[0]?.[0];
    const topFlavor = Object.entries(prefs.flavors).sort((a, b) => b[1] - a[1])[0]?.[0];

    // Score products by relevance
    const viewedSet = new Set(viewed);
    return PRODUCTS
      .filter(p => !viewedSet.has(p.id))
      .map(p => {
        let score = 0;
        if (p.category === topCategory) score += 3;
        if (p.flavor === topFlavor) score += 2;
        score += p.rating;
        return { ...p, recScore: score };
      })
      .sort((a, b) => b.recScore - a.recScore)
      .slice(0, 8);
  },

  render() {
    const container = document.getElementById('recommendations-row');
    if (!container) return;

    const items = this.get();
    container.innerHTML = `<div class="scroll-row">${items.map(renderCompactCard).join('')}</div>`;
  }
};

// ─── Surprise Me ───
const SurpriseMe = {
  pick() {
    const random = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    // Fun animation before revealing
    const btn = document.getElementById('surprise-btn');
    if (btn) {
      btn.classList.add('spinning');
      setTimeout(() => {
        btn.classList.remove('spinning');
        QuickView.open(random.id);
        Toast.show(`🎲 You got: ${random.name}!`, 'success');
      }, 800);
    } else {
      QuickView.open(random.id);
    }
  }
};

// ─── Occasion Filter for Menu Page ───
const OccasionFilter = {
  init() {
    const params = new URLSearchParams(window.location.search);
    const occasion = params.get('occasion');
    if (!occasion) return;

    // Activate occasion tab if it exists
    const tabs = document.querySelectorAll('.category-tab');
    const occasionTab = document.querySelector(`.category-tab[data-occasion="${occasion}"]`);
    if (occasionTab) {
      tabs.forEach(t => t.classList.remove('active'));
      occasionTab.classList.add('active');
    }


    // Filter products by occasion
    if (CategoryFilter.grid) {
      CategoryFilter.currentCategory = 'all';
      CategoryFilter.currentOccasion = occasion;
      CategoryFilter.displayedCount = 0;
      CategoryFilter.loadMore();
    }
  }
};

// ─── Advanced Filter Module ───
const AdvancedFilter = {
  isOpen: false,

  toggle() {
    this.isOpen = !this.isOpen;
    const sidebar = document.getElementById('filter-sidebar');
    if (sidebar) sidebar.classList.toggle('open', this.isOpen);
    document.body.classList.toggle('filter-open', this.isOpen);
  },

  getState() {
    const flavors = [...document.querySelectorAll('#flavor-filters input:checked')].map(i => i.value);
    const maxPrice = parseFloat(document.getElementById('price-range')?.value || 150);
    const eggless = document.getElementById('eggless-toggle')?.checked || false;
    const deliveryMax = document.querySelector('input[name="delivery"]:checked')?.value || '';
    const sort = document.getElementById('sort-select')?.value || 'default';
    return { flavors, maxPrice, eggless, deliveryMax: deliveryMax ? parseInt(deliveryMax) : null, sort };
  },

  apply() {
    // Update price label
    const priceSlider = document.getElementById('price-range');
    const priceLabel = document.getElementById('price-range-val');
    if (priceSlider && priceLabel) priceLabel.textContent = `$${priceSlider.value}`;

    // Store filters for CategoryFilter to use
    this._state = this.getState();

    // Reset and reload grid
    if (CategoryFilter.grid) {
      CategoryFilter.displayedCount = 0;
      CategoryFilter.loadMore();
    }

    // Update result count
    this.updateResultCount();
    // Update active chips
    this.updateChips();
  },

  filterProducts(products) {
    const s = this._state || this.getState();
    let results = products;

    if (s.flavors.length > 0) {
      results = results.filter(p => s.flavors.includes(p.flavor));
    }
    if (s.maxPrice < 150) {
      results = results.filter(p => p.price <= s.maxPrice);
    }
    if (s.eggless) {
      results = results.filter(p => p.eggless === true);
    }
    if (s.deliveryMax) {
      results = results.filter(p => {
        const hours = parseInt(p.deliveryTime);
        return hours <= s.deliveryMax;
      });
    }

    // Sort
    switch (s.sort) {
      case 'price-asc': results.sort((a, b) => a.price - b.price); break;
      case 'price-desc': results.sort((a, b) => b.price - a.price); break;
      case 'rating': results.sort((a, b) => b.rating - a.rating); break;
      case 'popular': results.sort((a, b) => b.reviewCount - a.reviewCount); break;
      case 'newest': results.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0)); break;
    }

    return results;
  },

  updateResultCount() {
    const el = document.getElementById('filter-results-count');
    if (!el) return;
    const filtered = CategoryFilter.getFilteredProducts();
    const total = PRODUCTS.length;
    el.textContent = filtered.length === total
      ? `Showing all ${total} items`
      : `Showing ${filtered.length} of ${total} items`;
  },

  updateChips() {
    const container = document.getElementById('active-filter-chips');
    const wrapper = document.getElementById('active-filters');
    if (!container || !wrapper) return;

    const s = this._state || this.getState();
    const chips = [];

    s.flavors.forEach(f => chips.push({ label: f, type: 'flavor', value: f }));
    if (s.maxPrice < 150) chips.push({ label: `Under $${s.maxPrice}`, type: 'price' });
    if (s.eggless) chips.push({ label: 'Eggless', type: 'eggless' });
    if (s.deliveryMax) chips.push({ label: `≤${s.deliveryMax}h delivery`, type: 'delivery' });

    if (chips.length === 0) {
      wrapper.style.display = 'none';
      return;
    }

    wrapper.style.display = 'block';
    container.innerHTML = chips.map(c =>
      `<span class="filter-chip">${c.label} <button onclick="AdvancedFilter.removeChip('${c.type}','${c.value || ''}')">✕</button></span>`
    ).join('');
  },

  removeChip(type, value) {
    if (type === 'flavor') {
      const cb = document.querySelector(`#flavor-filters input[value="${value}"]`);
      if (cb) cb.checked = false;
    } else if (type === 'price') {
      const slider = document.getElementById('price-range');
      if (slider) slider.value = 150;
    } else if (type === 'eggless') {
      const toggle = document.getElementById('eggless-toggle');
      if (toggle) toggle.checked = false;
    } else if (type === 'delivery') {
      const any = document.querySelector('input[name="delivery"][value=""]');
      if (any) any.checked = true;
    }
    this.apply();
  },

  clearAll() {
    document.querySelectorAll('#flavor-filters input').forEach(i => i.checked = false);
    const priceSlider = document.getElementById('price-range');
    if (priceSlider) priceSlider.value = 150;
    const eggless = document.getElementById('eggless-toggle');
    if (eggless) eggless.checked = false;
    const anyDelivery = document.querySelector('input[name="delivery"][value=""]');
    if (anyDelivery) anyDelivery.checked = true;
    const sort = document.getElementById('sort-select');
    if (sort) sort.value = 'default';
    this.apply();
  }
};

// ─── Cake Builder Module ───
const CakeBuilder = {
  step: 0,
  config: { size: null, flavor: null, frosting: null, toppings: [], message: '' },
  options: {
    sizes: [
      { label: '6 inch (4-6 servings)', price: 25, icon: '🎂' },
      { label: '8 inch (8-10 servings)', price: 40, icon: '🎂' },
      { label: '10 inch (12-16 servings)', price: 55, icon: '🎂' },
      { label: '2-Tier (20-30 servings)', price: 90, icon: '🏰' },
      { label: '3-Tier (40-50 servings)', price: 150, icon: '🏰' },
    ],
    flavors: [
      { label: 'Classic Vanilla', price: 0, color: '#FFF8DC' },
      { label: 'Rich Chocolate', price: 0, color: '#3E2723' },
      { label: 'Red Velvet', price: 5, color: '#C62828' },
      { label: 'Lemon Zest', price: 3, color: '#FFF176' },
      { label: 'Strawberry', price: 5, color: '#E91E63' },
      { label: 'Coffee Mocha', price: 5, color: '#4E342E' },
      { label: 'Marble Swirl', price: 3, color: '#8D6E63' },
      { label: 'Pineapple', price: 3, color: '#FFD54F' },
    ],
    frostings: [
      { label: 'Buttercream', price: 0, color: '#FFFDE7' },
      { label: 'Cream Cheese', price: 3, color: '#FFF9C4' },
      { label: 'Chocolate Ganache', price: 5, color: '#3E2723' },
      { label: 'Fondant', price: 8, color: '#FAFAFA' },
      { label: 'Whipped Cream', price: 0, color: '#FFFFFF' },
      { label: 'Caramel Drizzle', price: 4, color: '#FF8F00' },
    ],
    toppings: [
      { label: 'Sprinkles', price: 2, icon: '🌈' },
      { label: 'Fresh Berries', price: 5, icon: '🍓' },
      { label: 'Chocolate Shavings', price: 3, icon: '🍫' },
      { label: 'Edible Flowers', price: 6, icon: '🌸' },
      { label: 'Gold Leaf', price: 8, icon: '✨' },
      { label: 'Macarons', price: 7, icon: '🧁' },
      { label: 'Candied Nuts', price: 4, icon: '🥜' },
      { label: 'Caramel Popcorn', price: 4, icon: '🍿' },
      { label: 'Cookie Crumbs', price: 3, icon: '🍪' },
      { label: 'Birthday Candles', price: 1, icon: '🕯️' },
    ]
  },

  getPrice() {
    let total = 0;
    if (this.config.size !== null) total += this.options.sizes[this.config.size].price;
    if (this.config.flavor !== null) total += this.options.flavors[this.config.flavor].price;
    if (this.config.frosting !== null) total += this.options.frostings[this.config.frosting].price;
    this.config.toppings.forEach(i => total += this.options.toppings[i].price);
    return total;
  },

  open() {
    this.step = 0;
    this.config = { size: null, flavor: null, frosting: null, toppings: [], message: '' };
    const overlay = document.getElementById('cake-builder-overlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.classList.add('no-scroll');
      this.render();
    }
  },

  close() {
    const overlay = document.getElementById('cake-builder-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  },

  next() {
    if (this.step < 4) { this.step++; this.render(); }
  },
  prev() {
    if (this.step > 0) { this.step--; this.render(); }
  },

  selectSize(i) { this.config.size = i; this.render(); },
  selectFlavor(i) { this.config.flavor = i; this.render(); },
  selectFrosting(i) { this.config.frosting = i; this.render(); },
  toggleTopping(i) {
    const idx = this.config.toppings.indexOf(i);
    if (idx >= 0) this.config.toppings.splice(idx, 1);
    else this.config.toppings.push(i);
    this.render();
  },
  setMessage(val) { this.config.message = val; },

  addToCart() {
    if (this.config.size === null || this.config.flavor === null || this.config.frosting === null) {
      Toast.show('Please complete all steps first!', 'error');
      return;
    }
    const summary = [
      this.options.sizes[this.config.size].label,
      this.options.flavors[this.config.flavor].label,
      this.options.frostings[this.config.frosting].label + ' frosting',
      this.config.toppings.length > 0 ? this.config.toppings.map(i => this.options.toppings[i].label).join(', ') : 'No toppings',
      this.config.message ? `"${this.config.message}"` : ''
    ].filter(Boolean).join(' • ');

    // Add a custom cake product to cart
    const customCake = {
      id: 1000 + Date.now() % 10000,
      name: 'Custom Cake',
      category: 'cakes',
      price: this.getPrice(),
      image: 'images/birthday-cake.png',
      desc: summary,
      tag: 'Custom',
    };

    // Push to cart directly
    const cartItems = JSON.parse(localStorage.getItem('sc-cart') || '[]');
    cartItems.push({ id: customCake.id, qty: 1, customData: customCake });
    localStorage.setItem('sc-cart', JSON.stringify(cartItems));

    Toast.show(`🎉 Custom Cake ($${this.getPrice().toFixed(2)}) added to cart!`, 'success');
    this.close();
    Cart.init(); // refresh cart
  },

  render() {
    const content = document.querySelector('#cake-builder-overlay .cake-builder__content');
    if (!content) return;

    const steps = ['Size', 'Flavor', 'Frosting', 'Toppings', 'Message'];
    const price = this.getPrice();

    // Step indicator
    const stepIndicator = `
      <div class="cake-builder__steps">
        ${steps.map((s, i) => `
          <div class="cake-builder__step ${i === this.step ? 'active' : ''} ${i < this.step ? 'done' : ''}">
            <span class="cake-builder__step-num">${i < this.step ? '✓' : i + 1}</span>
            <span class="cake-builder__step-label">${s}</span>
          </div>
        `).join('<div class="cake-builder__step-line"></div>')}
      </div>`;

    // Price bar
    const priceBar = `
      <div class="cake-builder__price-bar">
        <span>Your Cake</span>
        <span class="cake-builder__price">$${price.toFixed(2)}</span>
      </div>`;

    let stepContent = '';

    if (this.step === 0) {
      stepContent = `<h3 class="cake-builder__section-title">Choose Your Size</h3>
        <div class="cake-builder__options">
          ${this.options.sizes.map((s, i) => `
            <button class="cake-builder__option ${this.config.size === i ? 'selected' : ''}" onclick="CakeBuilder.selectSize(${i})">
              <span class="cake-builder__option-icon">${s.icon}</span>
              <span class="cake-builder__option-label">${s.label}</span>
              <span class="cake-builder__option-price">$${s.price}</span>
            </button>
          `).join('')}
        </div>`;
    } else if (this.step === 1) {
      stepContent = `<h3 class="cake-builder__section-title">Pick Your Flavor</h3>
        <div class="cake-builder__options cake-builder__options--grid">
          ${this.options.flavors.map((f, i) => `
            <button class="cake-builder__option cake-builder__option--color ${this.config.flavor === i ? 'selected' : ''}" onclick="CakeBuilder.selectFlavor(${i})" style="--opt-color: ${f.color}">
              <div class="cake-builder__color-swatch" style="background: ${f.color}"></div>
              <span class="cake-builder__option-label">${f.label}</span>
              ${f.price > 0 ? `<span class="cake-builder__option-price">+$${f.price}</span>` : '<span class="cake-builder__option-price">Included</span>'}
            </button>
          `).join('')}
        </div>`;
    } else if (this.step === 2) {
      stepContent = `<h3 class="cake-builder__section-title">Select Frosting</h3>
        <div class="cake-builder__options cake-builder__options--grid">
          ${this.options.frostings.map((f, i) => `
            <button class="cake-builder__option cake-builder__option--color ${this.config.frosting === i ? 'selected' : ''}" onclick="CakeBuilder.selectFrosting(${i})" style="--opt-color: ${f.color}">
              <div class="cake-builder__color-swatch" style="background: ${f.color}"></div>
              <span class="cake-builder__option-label">${f.label}</span>
              ${f.price > 0 ? `<span class="cake-builder__option-price">+$${f.price}</span>` : '<span class="cake-builder__option-price">Included</span>'}
            </button>
          `).join('')}
        </div>`;
    } else if (this.step === 3) {
      stepContent = `<h3 class="cake-builder__section-title">Add Toppings <span style="font-size:var(--fs-small);color:var(--text-muted);">(select any)</span></h3>
        <div class="cake-builder__options cake-builder__options--grid">
          ${this.options.toppings.map((t, i) => `
            <button class="cake-builder__option ${this.config.toppings.includes(i) ? 'selected' : ''}" onclick="CakeBuilder.toggleTopping(${i})">
              <span class="cake-builder__option-icon">${t.icon}</span>
              <span class="cake-builder__option-label">${t.label}</span>
              <span class="cake-builder__option-price">+$${t.price}</span>
            </button>
          `).join('')}
        </div>`;
    } else if (this.step === 4) {
      stepContent = `<h3 class="cake-builder__section-title">Add a Personal Message</h3>
        <div class="cake-builder__message">
          <textarea class="cake-builder__textarea" placeholder="Happy Birthday, Sarah! 🎂" maxlength="50" oninput="CakeBuilder.setMessage(this.value)">${this.config.message}</textarea>
          <p style="color:var(--text-muted);font-size:var(--fs-xs);margin-top:8px;">${50 - this.config.message.length} characters remaining</p>
        </div>
        <div class="cake-builder__summary">
          <h4>Your Cake Summary</h4>
          <ul>
            ${this.config.size !== null ? `<li>📏 ${this.options.sizes[this.config.size].label}</li>` : ''}
            ${this.config.flavor !== null ? `<li>🍰 ${this.options.flavors[this.config.flavor].label}</li>` : ''}
            ${this.config.frosting !== null ? `<li>🧁 ${this.options.frostings[this.config.frosting].label}</li>` : ''}
            ${this.config.toppings.length > 0 ? `<li>✨ ${this.config.toppings.map(i => this.options.toppings[i].label).join(', ')}</li>` : '<li>No toppings</li>'}
            ${this.config.message ? `<li>💬 "${this.config.message}"</li>` : ''}
          </ul>
        </div>`;
    }

    // Navigation buttons
    const nav = `
      <div class="cake-builder__nav">
        ${this.step > 0 ? `<button class="btn btn--ghost" onclick="CakeBuilder.prev()">← Back</button>` : '<div></div>'}
        ${this.step < 4
          ? `<button class="btn btn--primary" onclick="CakeBuilder.next()" ${this.step === 0 && this.config.size === null ? 'disabled' : ''} ${this.step === 1 && this.config.flavor === null ? 'disabled' : ''} ${this.step === 2 && this.config.frosting === null ? 'disabled' : ''}>Next →</button>`
          : `<button class="btn btn--primary" onclick="CakeBuilder.addToCart()">🛒 Add to Cart — $${price.toFixed(2)}</button>`
        }
      </div>`;

    content.innerHTML = stepIndicator + priceBar + stepContent + nav;
  }
};

// ─── Review System ───
const ReviewSystem = {
  // Mock reviews per product
  reviews: {},

  generateMockReviews(productId) {
    if (this.reviews[productId]) return this.reviews[productId];

    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return [];

    const names = ['Sarah J.', 'Mike C.', 'Emily D.', 'Raj P.', 'Lisa M.', 'Alex K.', 'Priya S.', 'Tom W.', 'Anna L.', 'David R.'];
    const comments = {
      5: ['Absolutely incredible!', 'Best I\'ve ever had!', 'Will order again!', 'Perfect for the occasion!', 'Exceeded expectations!'],
      4: ['Really good, loved it!', 'Great taste and quality.', 'Would recommend to friends.', 'Very fresh and delicious.'],
      3: ['Decent, nothing special.', 'Good but a bit pricey.', 'Average taste.'],
      2: ['Could be better.', 'Not what I expected.'],
      1: ['Disappointing.']
    };

    const count = Math.min(product.reviewCount, 8);
    const reviews = [];

    for (let i = 0; i < count; i++) {
      const rating = i < count * 0.6 ? 5 : i < count * 0.85 ? 4 : i < count * 0.95 ? 3 : 2;
      const pool = comments[rating];
      reviews.push({
        id: i,
        name: names[i % names.length],
        rating,
        text: pool[Math.floor(Math.random() * pool.length)],
        date: new Date(Date.now() - (i * 7 + Math.random() * 30) * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        verified: Math.random() > 0.3,
      });
    }

    this.reviews[productId] = reviews;
    return reviews;
  },

  renderStarBreakdown(productId) {
    const reviews = this.generateMockReviews(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return '';

    const counts = [0, 0, 0, 0, 0];
    reviews.forEach(r => counts[r.rating - 1]++);
    const total = reviews.length || 1;

    return `
      <div class="review-breakdown">
        <div class="review-breakdown__overall">
          <span class="review-breakdown__score">${product.rating}</span>
          <div>
            <div class="stars" style="font-size:1.2rem;">${renderStars(product.rating)}</div>
            <span class="review-breakdown__count">${product.reviewCount} reviews</span>
          </div>
        </div>
        <div class="review-breakdown__bars">
          ${[5,4,3,2,1].map(star => `
            <div class="review-bar">
              <span class="review-bar__label">${star}★</span>
              <div class="review-bar__track"><div class="review-bar__fill" style="width:${(counts[star-1]/total*100).toFixed(0)}%"></div></div>
              <span class="review-bar__count">${counts[star-1]}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  },

  renderReviewList(productId, sortBy = 'newest') {
    let reviews = [...this.generateMockReviews(productId)];

    if (sortBy === 'highest') reviews.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'lowest') reviews.sort((a, b) => a.rating - b.rating);

    return reviews.map(r => `
      <div class="review-card">
        <div class="review-card__header">
          <div class="review-card__avatar">${r.name.charAt(0)}</div>
          <div>
            <span class="review-card__name">${r.name} ${r.verified ? '<span class="review-card__badge">✓ Verified</span>' : ''}</span>
            <div class="review-card__meta">${renderStars(r.rating)} · ${r.date}</div>
          </div>
        </div>
        <p class="review-card__text">${r.text}</p>
      </div>
    `).join('');
  }
};

// ─── Initialize Features ───
document.addEventListener('DOMContentLoaded', () => {
  Cart.init();
  Wishlist.init();
  QuickView.init();
  Compare.init();
  Search.init();
  CakeQuiz.init();
  CategoryFilter.init();
  OccasionFilter.init();
  renderHomeProducts();
  renderBestSellers();
  renderTrending();
  renderNewArrivals();
  renderOccasionCollections();
  renderSeasonalBanner();
  RecentlyViewed.render();
  Recommendations.render();

  // Track product views in QuickView
  const origOpen = QuickView.open.bind(QuickView);
  QuickView.open = function(id) {
    RecentlyViewed.add(id);
    origOpen(id);
  };

  // Re-init scroll reveal for dynamically rendered products
  setTimeout(() => {
    if (typeof RevealManager !== 'undefined') RevealManager.init();
  }, 100);
});
