/**
 * MEYLICIOUS - Artisanal Dessert & Bakery
 * Interactive Application & WhatsApp Cart System
 */

// ==========================================
// STORE CONFIGURATION
// Ubah nomor WhatsApp dan data toko di bawah ini
// ==========================================
const STORE_CONFIG = {
  storeName: "Meylicious Patisserie",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp pemilik toko (tanpa simbol + atau spasi)
  currency: "IDR",
  currencySymbol: "Rp",
  promoCode: "MEYMANIS",
  promoDiscountPct: 10 // Diskon 10% untuk kode promo
};

// ==========================================
// PRODUCT CATALOG DATA
// ==========================================
const PRODUCTS = [
  {
    id: "bbc-original",
    name: "Original Basque Burnt Cheesecake",
    category: "cheesecake",
    badge: "Best Seller ⭐",
    badgeClass: "best-seller",
    description: "Permukaan karamel terpanggang sempurna dengan tekstur tengah yang luar biasa creamy, lumer di mulut, dan rasa keju gurih autentik.",
    details: "Dibuat dengan 100% cream cheese premium import dan heavy cream Prancis pilihan. Dipanggang pada suhu tinggi untuk menghasilkan kerak karamel khas Basque yang wangi dan lembut di dalam.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Personal Slice (1 Pcs)", price: 42000 },
      { name: "Whole Cake 16 cm (6-8 Porsi)", price: 215000 },
      { name: "Whole Cake 20 cm (10-14 Porsi)", price: 345000 }
    ]
  },
  {
    id: "bbc-biscoff",
    name: "Lotus Biscoff Burnt Cheesecake",
    category: "cheesecake",
    badge: "Favorit Pelanggan 🔥",
    badgeClass: "signature",
    description: "Perpaduan burnt cheesecake lumer dengan lelehan selai Lotus Biscoff karamel rempah dan topping biskuit renyah.",
    details: "Kombinasi manis legit biskuit rempah Belgia Biscoff yang berpadu dengan gurih lembutnya cheesecake khas Meylicious. Sangat cocok dinikmati bersama kopi atau teh hangat.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Personal Slice (1 Pcs)", price: 48000 },
      { name: "Whole Cake 16 cm (6-8 Porsi)", price: 245000 },
      { name: "Whole Cake 20 cm (10-14 Porsi)", price: 385000 }
    ]
  },
  {
    id: "bbc-dark-choco",
    name: "Belgian Dark Choco Burnt Cheesecake",
    category: "cheesecake",
    badge: "Chef's Signature 🍫",
    badgeClass: "signature",
    description: "Kaya akan rasa dark chocolate Callebaut 70% yang pekat, seimbang dengan kelembutan keju murni.",
    details: "Bagi pecinta cokelat sejati! Menggunakan cokelat murni Belgia tanpa perisa sintetis. Tekstur velvet yang intens dan tidak terlalu manis (less sweet).",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Personal Slice (1 Pcs)", price: 48000 },
      { name: "Whole Cake 16 cm (6-8 Porsi)", price: 250000 },
      { name: "Whole Cake 20 cm (10-14 Porsi)", price: 395000 }
    ]
  },
  {
    id: "bbc-ube",
    name: "Ube Velvet Burnt Cheesecake",
    category: "cheesecake",
    badge: "Menu Baru ✨",
    badgeClass: "new",
    description: "Inovasi spesial ubi ungu (ube) asli berpadu lembutnya cheesecake. Wangi aromatik dengan warna ungu elegan alami.",
    details: "Dibuat dari ekstrak ubi ungu pilihan tanpa pewarna buatan. Memberikan nuansa rasa manis lembut dan tekstur super creamy yang unik dan memanjakan lidah.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Whole Cake 16 cm (6-8 Porsi)", price: 235000 },
      { name: "Whole Cake 20 cm (10-14 Porsi)", price: 365000 }
    ]
  },
  {
    id: "tiramisu-classic",
    name: "Classic Italian Mascarpone Tiramisu",
    category: "tiramisu",
    badge: "Best Seller ⭐",
    badgeClass: "best-seller",
    description: "Ladyfinger renyah yang dicelup ke dalam espresso harum, dilapisi krim mascarpone lembut dan taburan cokelat kakao murni.",
    details: "Resep autentik Italia dengan keju Mascarpone segar dan seduhan kopi espresso arabika premium. Bebas alkohol (100% Halal Certified Ingredients). Dinginkan sebelum dinikmati.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Dessert Box 350ml (Personal)", price: 55000 },
      { name: "Family Sharing Box 750ml", price: 110000 },
      { name: "Party Tray 1500ml", price: 220000 }
    ]
  },
  {
    id: "tiramisu-matcha",
    name: "Kyoto Matcha Green Tea Tiramisu",
    category: "tiramisu",
    badge: "Favorit 🍵",
    badgeClass: "signature",
    description: "Sentuhan teh hijau Uji Kyoto berpadu dengan kelembutan mascarpone. Rasa earthy, creamy, dan tidak pahit.",
    details: "Menggunakan bubuk ceremonial grade Matcha yang diimpor langsung dari Jepang. Tekstur airy lembut dengan lapisan biskuit yang basah oleh matcha infusion.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Dessert Box 350ml (Personal)", price: 58000 },
      { name: "Family Sharing Box 750ml", price: 118000 }
    ]
  },
  {
    id: "pastry-choux",
    name: "Crispy Choux au Craquelin (Box of 6)",
    category: "pastry",
    badge: "Must Try 👑",
    badgeClass: "best-seller",
    description: "Kue sus modern khas Prancis dengan kulit renyah manis craquelin di luar, dan isian diplomat cream dingin melimpah di dalam.",
    details: "Box berisi 6 pcs aneka rasa favorit: 2x Tahitian Vanilla Bean, 2x Dark Chocolate Ganache, 2x Matcha Cream. Kulit tetap garing saat disajikan dingin.",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Box of 6 (Mix 3 Flavors)", price: 95000 },
      { name: "Box of 12 (Mix Party Box)", price: 180000 }
    ]
  },
  {
    id: "fudgy-brownies",
    name: "Shiny Crust Fudgy Brownies Box",
    category: "brownies",
    badge: "Super Fudgy 🍫",
    badgeClass: "signature",
    description: "Brownies panggang dengan lapisan atas tipis mengkilap (shiny crust), tekstur dalam super legit, padat dan kaya cokelat.",
    details: "Ukuran loyang 20x20cm dipotong menjadi 16 atau 25 bites. Diberi aneka topping premium: Roasted Almond Slice, Callebaut Chocochips, Lotus Biscoff, dan Cheese Cubes.",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Box 20x20 cm (Mix 4 Topping)", price: 85000 },
      { name: "Box 20x20 cm (Full Almond & Choco)", price: 95000 }
    ]
  },
  {
    id: "nyc-cookies",
    name: "Soft-Baked NYC Chunky Cookies",
    category: "brownies",
    badge: "Crispy & Gooey 🍪",
    badgeClass: "new",
    description: "Kue kering gaya New York berukuran tebal dan besar dengan bagian luar garing renyah serta bagian tengah meleleh.",
    details: "Satu kotak berisi pilihan rasa: Classic Chocolate Walnut, Red Velvet Cream Cheese, Dark Chocolate Hazelnut, dan Triple Lotus Biscoff.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Box of 4 Big Cookies", price: 75000 },
      { name: "Box of 6 Big Cookies", price: 110000 }
    ]
  },
  {
    id: "strawberry-shortcake",
    name: "Mini Strawberry Shortcake Bloom",
    category: "pastry",
    badge: "Cantik & Segar 🍓",
    badgeClass: "new",
    description: "Sponge cake vanila Jepang yang ekstra lembut dilapisi fresh cream ringan dan potongan buah stroberi segar melimpah.",
    details: "Sangat segar dan tidak bikin eneg berkat racikan light chantilly cream. Diameter 12cm, sangat pas untuk perayaan kecil atau hadiah spesial.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Mini Cake Diameter 12 cm", price: 145000 },
      { name: "Medium Cake Diameter 16 cm", price: 235000 }
    ]
  },
  {
    id: "hampers-sweet-box",
    name: "Meylicious Signature Gift Hampers",
    category: "hampers",
    badge: "Gift Special 🎁",
    badgeClass: "signature",
    description: "Paket bingkisan mewah berisi Basque Burnt Cheesecake 16cm, 1 Jar Soft Cookies, pita satin elegan, dan kartu ucapan custom.",
    details: "Dikemas rapi dalam hardbox exclusive Meylicious lengkap dengan tas spunbond/paper bag premium. Cocok untuk ulang tahun, anniversary, hari raya, atau kado rekan kerja.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Deluxe Sweet Hampers Set", price: 320000 },
      { name: "Grand Royal Hampers Set (+ Tiramisu)", price: 435000 }
    ]
  },
  {
    id: "bday-package",
    name: "Birthday Celebration Delight Package",
    category: "hampers",
    badge: "Ready Celebration 🎂",
    badgeClass: "best-seller",
    description: "Paket lengkap pesta ulang tahun: Whole Basque Cheesecake 16cm + Akrilik Cake Topper + Lilin Spiral Mewah + Pisau Kue & Greeting Card.",
    details: "Semua perlengkapan ulang tahun sudah siap dalam satu paket tanpa perlu repot membeli perlengkapan terpisah. Kartu ucapan bisa dicetak sesuai request Anda.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Package with Original Cheesecake 16cm", price: 245000 },
      { name: "Package with Biscoff Cheesecake 16cm", price: 275000 },
      { name: "Package with Choco Belgian 16cm", price: 280000 }
    ]
  }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
let cart = [];
let appliedDiscount = 0; // percentage
let currentFilter = 'all';
let searchQuery = '';

// Inisialisasi dari LocalStorage
function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem('meylicious_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error("Gagal membaca cart dari localStorage", e);
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('meylicious_cart', JSON.stringify(cart));
  } catch (e) {
    console.error("Gagal menyimpan cart ke localStorage", e);
  }
}

// Format Rupiah
function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString('id-ID');
}

// ==========================================
// RENDERING CATALOG
// ==========================================
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = PRODUCTS.filter(product => {
    const matchCategory = currentFilter === 'all' || product.category === currentFilter;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #8d99ae;">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h4 style="color: #231917; margin-bottom: 0.5rem; font-size: 1.2rem;">Tidak ada menu yang cocok</h4>
        <p>Silakan coba kata kunci lain atau pilih kategori yang berbeda.</p>
        <button onclick="resetFilters()" class="btn btn-secondary" style="margin-top: 1rem;">Reset Filter</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const defaultVariant = product.variants[0];
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-badge-wrap">
          <span class="product-badge ${product.badgeClass}">${product.badge}</span>
        </div>

        <div class="product-thumb">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <button class="quick-view-btn" onclick="openQuickView('${product.id}')">
            <i class="fas fa-eye"></i> Detail
          </button>
        </div>

        <div class="product-body">
          <span class="product-category-tag">${formatCategoryName(product.category)}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>

          <div class="product-variant-select">
            <label for="variant-${product.id}">Pilih Ukuran / Porsi:</label>
            <select id="variant-${product.id}" class="variant-dropdown" onchange="handleVariantChange('${product.id}', this)">
              ${product.variants.map((v, idx) => `
                <option value="${idx}">${v.name} - ${formatRupiah(v.price)}</option>
              `).join('')}
            </select>
          </div>

          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-label">Harga</span>
              <span class="product-price" id="price-display-${product.id}">${formatRupiah(defaultVariant.price)}</span>
            </div>
            <button class="add-cart-btn" onclick="addToCartFromCard('${product.id}')" title="Tambah ke Keranjang">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function formatCategoryName(cat) {
  switch(cat) {
    case 'cheesecake': return 'Basque Burnt Cheesecake';
    case 'tiramisu': return 'Tiramisu Series';
    case 'pastry': return 'Pastry & Choux';
    case 'brownies': return 'Brownies & Cookies';
    case 'hampers': return 'Hampers & Celebration';
    default: return 'Artisanal Dessert';
  }
}

function handleVariantChange(productId, selectEl) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const selectedVariant = product.variants[selectEl.value];
  const priceDisplay = document.getElementById(`price-display-${productId}`);
  if (priceDisplay && selectedVariant) {
    priceDisplay.textContent = formatRupiah(selectedVariant.price);
  }
}

function resetFilters() {
  currentFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === 'all');
  });
  renderProducts();
}

// ==========================================
// CART OPERATIONS
// ==========================================
function addToCart(productId, variantIndex = 0, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const variant = product.variants[variantIndex] || product.variants[0];
  const cartKey = `${productId}_${variant.name}`;

  const existingItem = cart.find(item => item.key === cartKey);
  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cart.push({
      key: cartKey,
      id: product.id,
      name: product.name,
      variantName: variant.name,
      price: variant.price,
      image: product.image,
      qty: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`✓ ${product.name} (${variant.name}) berhasil ditambahkan!`);
}

function addToCartFromCard(productId) {
  const selectEl = document.getElementById(`variant-${productId}`);
  const variantIndex = selectEl ? parseInt(selectEl.value, 10) : 0;
  addToCart(productId, variantIndex, 1);
}

function changeQty(cartKey, delta) {
  const itemIndex = cart.findIndex(item => item.key === cartKey);
  if (itemIndex > -1) {
    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(cartKey) {
  cart = cart.filter(item => item.key !== cartKey);
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  // Update badge counter
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount);

  // Update sticky mobile total
  const stickyTotal = document.getElementById('mobile-sticky-total-val');
  if (stickyTotal) {
    stickyTotal.textContent = formatRupiah(grandTotal);
  }

  // Render cart drawer items
  const cartBody = document.getElementById('cart-items-container');
  const cartEmpty = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-footer-block');

  if (cartBody && cartEmpty && cartFooter) {
    if (cart.length === 0) {
      cartEmpty.style.display = 'flex';
      cartBody.style.display = 'none';
      cartFooter.style.display = 'none';
    } else {
      cartEmpty.style.display = 'none';
      cartBody.style.display = 'block';
      cartFooter.style.display = 'block';

      cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-variant">${item.variantName}</div>
            <div class="cart-item-price">${formatRupiah(item.price)}</div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty('${item.key}', -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.key}')" title="Hapus">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      `).join('');

      // Update summary values
      document.getElementById('cart-subtotal').textContent = formatRupiah(subtotal);
      
      const discountRow = document.getElementById('cart-discount-row');
      if (appliedDiscount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('cart-discount-val').textContent = `- ${formatRupiah(discountAmount)} (${appliedDiscount}%)`;
      } else {
        discountRow.style.display = 'none';
      }

      document.getElementById('cart-grand-total').textContent = formatRupiah(grandTotal);
    }
  }
}

// Apply Promo Code
function applyPromoCode() {
  const codeInput = document.getElementById('promo-input');
  if (!codeInput) return;
  const val = codeInput.value.trim().toUpperCase();

  if (val === STORE_CONFIG.promoCode) {
    appliedDiscount = STORE_CONFIG.promoDiscountPct;
    showToast(`🎉 Kode promo berhasil! Diskon ${STORE_CONFIG.promoDiscountPct}% diaplikasikan.`);
    codeInput.disabled = true;
  } else if (val === "") {
    showToast("⚠️ Masukkan kode promo terlebih dahulu.");
  } else {
    showToast("❌ Kode promo tidak valid atau telah kedaluwarsa.");
  }
  updateCartUI();
}

// ==========================================
// DRAWER & MODAL TOGGLES
// ==========================================
function openCartDrawer() {
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  if (drawerOverlay) drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  if (drawerOverlay) drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("⚠️ Keranjang belanja Anda masih kosong.");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Set default delivery date to tomorrow
  const dateInput = document.getElementById('order-date');
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const container = document.getElementById('quick-view-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; align-items: start;">
      <div style="border-radius: 12px; overflow: hidden; max-height: 320px;">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div>
        <span class="product-badge ${product.badgeClass}" style="margin-bottom: 0.5rem; display: inline-block;">${product.badge}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--dark); margin-bottom: 0.5rem;">${product.name}</h2>
        <p style="color: var(--gray-600); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">${product.details}</p>

        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 0.4rem;">Pilihan Ukuran:</label>
          <select id="qv-variant-select" class="variant-dropdown" onchange="updateQvPrice('${product.id}', this)">
            ${product.variants.map((v, idx) => `
              <option value="${idx}">${v.name} - ${formatRupiah(v.price)}</option>
            `).join('')}
          </select>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem;">
          <div>
            <div style="font-size: 0.75rem; color: var(--gray-500);">Total Harga</div>
            <div id="qv-price-display" style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700; color: var(--primary-dark);">
              ${formatRupiah(product.variants[0].price)}
            </div>
          </div>
          <button class="btn btn-primary" onclick="addFromQuickView('${product.id}')">
            <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateQvPrice(productId, selectEl) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const variant = product.variants[selectEl.value];
  const display = document.getElementById('qv-price-display');
  if (display && variant) {
    display.textContent = formatRupiah(variant.price);
  }
}

function addFromQuickView(productId) {
  const select = document.getElementById('qv-variant-select');
  const variantIndex = select ? parseInt(select.value, 10) : 0;
  addToCart(productId, variantIndex, 1);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// WHATSAPP ORDER GENERATOR
// ==========================================
function submitOrderToWhatsApp(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("⚠️ Keranjang belanja Anda kosong.");
    return;
  }

  // Get Form Values
  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  const date = document.getElementById('order-date').value;
  const time = document.getElementById('order-time').value;
  const deliveryType = document.getElementById('order-courier').value;
  const address = document.getElementById('order-address').value.trim();
  const notes = document.getElementById('order-notes').value.trim();

  if (!name || !phone || !date || !address) {
    showToast("⚠️ Mohon lengkapi data pemesanan yang wajib diisi (*)");
    return;
  }

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount);

  // Generate unique order ID
  const orderId = "MEY-" + Math.floor(100000 + Math.random() * 900000);

  // Build WhatsApp Message
  let message = `*HALO MEYLICIOUS! SAYA INGIN MEMESAN KUE 🍰*\n\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 *NO. PESANAN:* #${orderId}\n`;
  message += `👤 *Nama Pemesan:* ${name}\n`;
  message += `📱 *No. WhatsApp:* ${phone}\n`;
  message += `📅 *Tgl Pengiriman:* ${date} (${time})\n`;
  message += `🚚 *Metode Pengiriman:* ${deliveryType}\n`;
  message += `📍 *Alamat Pengantaran:*\n${address}\n`;
  
  if (notes) {
    message += `💌 *Catatan / Ucapan:* ${notes}\n`;
  }
  
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛒 *RINCIAN MENU DIPESAN:*\n`;

  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    message += `${idx + 1}. *${item.name}*\n`;
    message += `   └ Varian: ${item.variantName}\n`;
    message += `   └ Jml: ${item.qty} x ${formatRupiah(item.price)} = ${formatRupiah(itemTotal)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: ${formatRupiah(subtotal)}\n`;
  if (appliedDiscount > 0) {
    message += `Diskon (${appliedDiscount}%): -${formatRupiah(discountAmount)}\n`;
  }
  message += `*TOTAL PEMBAYARAN: ${formatRupiah(grandTotal)}*\n\n`;
  message += `Mohon info ketersediaan stok & nomor rekening untuk pembayaran ya. Terima kasih Meylicious! ❤️`;

  // Encode URL
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedText}`;

  // Close modal and show success toast
  closeCheckoutModal();
  showToast("Mengalihkan ke WhatsApp...");

  // Open WhatsApp in new tab/app
  window.open(waUrl, '_blank');
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: #e2a84b;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const answer = parent.querySelector('.faq-answer');
      const isActive = parent.classList.contains('active');

      // Close other open FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const ans = item.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isActive) {
        parent.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ==========================================
// DOM READY & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Catalog & Cart
  renderProducts();
  loadCartFromStorage();
  initFaqAccordion();

  // 2. Filter tabs click
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.category;
      renderProducts();
    });
  });

  // 3. Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // 4. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // 5. Scroll Header styling
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // 6. Close Modals on Overlay Click
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  const quickViewModal = document.getElementById('quick-view-modal');
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }
});
