// Adisyo API Entegrasyon Yapılandırması
const ADISYO_CONFIG = {
  // Canlı Adisyo API anahtarınızı buraya girebilirsiniz (Adisyo Panel > Ayarlar > Entegrasyonlar)
  apiKey: 'ADISYO_DEMO_API_KEY_2026',
  apiUrl: 'https://api.adisyo.com/v1/orders',
  isDemoMode: true // Gerçek API anahtarı girildiğinde false yapılabilir
};

// URL'den Masa Numarasını Al (Örn: ?masa=7 veya ?table=7)
const urlParams = new URLSearchParams(window.location.search);
let currentTable = urlParams.get('masa') || urlParams.get('table') || '04';

// Menü Veritabanı (Kahve, Tatlı ve Kahvaltılık Kategorileri)
const MENU_DATA = [
  // ==========================================
  // --- ☕ KAHVELER (COFFEE) ---
  // ==========================================
  {
    id: 'cof-1',
    category: 'coffee',
    name: 'Bourbon Vanilla Smoked Flat White',
    price: 185,
    description: 'Etiyopya Yirgacheffe çekirdekleri, Madagaskar doğal bourbon vanilyası ve meşe talaşı dumanı ile infüze ipeksi mikro köpük.',
    origin: 'Etiyopya Yirgacheffe',
    tags: ['signature', 'hot'],
    badges: ['👑 Şefin İmzası', '✨ Özel Orijin'],
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cof-2',
    category: 'coffee',
    name: 'Kyoto Cold Drip Elixir',
    price: 195,
    description: 'Geleneksel Japon kule düzeneğinde 18 saat boyunca damla damla süzülmüş, bergamot ve berrak yasemin nüanslı soğuk kahve.',
    origin: 'Kenya Nyeri Peaberry',
    tags: ['signature', 'cold', 'vegan'],
    badges: ['👑 Şefin İmzası', '🌱 Vegan'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cof-3',
    category: 'coffee',
    name: 'Single Origin Cortado',
    price: 145,
    description: 'Eşit oranda yoğun espresso ve kadifemsi sıcak süt; fındık, esmer şeker ve kakao çekirdeği alt tonları.',
    origin: 'Guatemala Antigua',
    tags: ['hot'],
    badges: ['☕ Klasik Bar'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cof-4',
    category: 'coffee',
    name: 'Oat Milk Salted Caramel Latte',
    price: 175,
    description: 'İsveç yulaf sütü, el yapımı fleur de sel karamel sos ve çift shot dengeli espresso harmanı.',
    origin: 'Brezilya Santos',
    tags: ['hot', 'vegan'],
    badges: ['🌱 Vegan', '🌾 Glütensiz'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cof-5',
    category: 'coffee',
    name: 'Tonic & Yuzu Cold Brew',
    price: 180,
    description: 'Japon Yuzu narenciyesi, aromatik botanik tonik ve 14 saatlik soğuk filtre kahve katmanları.',
    origin: 'Ruanda Red Bourbon',
    tags: ['cold', 'vegan'],
    badges: ['❄️ Ferahlatıcı', '🌱 Vegan'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cof-6',
    category: 'coffee',
    name: 'Nitro Cold Brew on Tap',
    price: 165,
    description: 'Azot gazı ile fıçıdan servis edilen, kremamsı doğal köpüklü, stout dokusunda soğuk kahve.',
    origin: 'Etiyopya Guji',
    tags: ['cold', 'vegan'],
    badges: ['❄️ Nitro Bar', '🌱 Vegan'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cof-7',
    category: 'coffee',
    name: 'Uji Matcha Ceremonial Latte',
    price: 195,
    description: 'Kyoto Uji bölgesinden 1. hasat organik yeşil çay tozu, hafif hindistan cevizi sütü ve agave şurubu.',
    origin: 'Kyoto, Japonya',
    tags: ['hot', 'cold', 'vegan'],
    badges: ['🍵 Törensel Grade', '🌱 Vegan'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },

  // ==========================================
  // --- 🍰 TATLILAR (DESSERT) ---
  // ==========================================
  {
    id: 'des-1',
    category: 'dessert',
    name: 'San Sebastián Cheesecake & Dark Ganache',
    price: 210,
    description: 'İçi tam kıvamında akışkan yanık Bask peynirli kek, yanında ılık %70 Madagaskar bitter çikolata ganajı.',
    origin: 'Bask Usulü',
    tags: ['signature', 'dessert'],
    badges: ['👑 Şefin İmzası', '🌾 Glütensiz'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'des-2',
    category: 'dessert',
    name: 'Gold Leaf Pistachio Affogato',
    price: 240,
    description: 'Gaziantep boz fıstıklı artizan gelato üzerine taze çekilmiş çift shot Ristretto, 24 ayar yenilebilir altın yaprak.',
    origin: 'Kolombiya Huila & Antep',
    tags: ['signature', 'cold', 'dessert'],
    badges: ['👑 Şefin İmzası', '🌾 Glütensiz'],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'des-3',
    category: 'dessert',
    name: 'Valrhona Truffle Tartlet',
    price: 195,
    description: 'Çıtır tereyağlı kakao pâte sablée tabanı, Fransız Valrhona çikolatalı ipeksi krema ve deniz tuzu taneleri.',
    origin: 'Fransız Pastacılığı',
    tags: ['dessert'],
    badges: ['✨ El Yapımı'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'des-4',
    category: 'dessert',
    name: 'Pistachio Paris-Brest',
    price: 220,
    description: 'Geleneksel choux hamuru halkası arasında yoğun Antep fıstığı ezmeli muslin kreması ve karamelize fıstık pralini.',
    origin: 'Parisian Atelier',
    tags: ['dessert'],
    badges: ['✨ Taze Hazırlanır'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'des-5',
    category: 'dessert',
    name: 'Tiramisù Tradizionale al Mascarpone',
    price: 205,
    description: 'Savoiardi bisküvileri, özel espresso şurubu, otantik İtalyan mascarpone kreması ve Valrhona kakao tozu.',
    origin: 'Treviso Usulü',
    tags: ['dessert'],
    badges: ['✨ Klasik'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80'
  },

  // ==========================================
  // --- 🥐 KAHVALTILIK & FIRIN (BREAKFAST) ---
  // ==========================================
  {
    id: 'brk-1',
    category: 'breakfast',
    name: 'Truffle & Scrambled Croissant',
    price: 265,
    description: 'Saf Fransız tereyağlı çıtır kruvasan içinde trüf aromalı kremsi organik çırpılmış yumurta, gravyer ve frenk soğanı.',
    origin: 'Normandiya Tereyağı',
    tags: ['signature', 'food'],
    badges: ['👑 Şefin İmzası', '🍳 Sıcak Servis'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'brk-2',
    category: 'breakfast',
    name: 'Smoked Salmon Brioche Toast',
    price: 285,
    description: 'Kendi fırınımızdan tereyağlı taze briyoş dilimi üzerinde dereotlu labne kreması, Norveç somonu ve kapari meyveleri.',
    origin: 'Kuzey Denizi & Artisan Fırın',
    tags: ['food'],
    badges: ['✨ Taze Somon'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'brk-3',
    category: 'breakfast',
    name: 'Burrata & İncirli Ekşi Mayalı Ekmek',
    price: 270,
    description: 'Kızarmış taş değirmen ekşi mayalı ekmek üzerine taze İtalyan burrata peyniri, taze incir dilimleri, ceviz ve trüflü bal.',
    origin: 'Taş Değirmen & Puglia',
    tags: ['food'],
    badges: ['✨ Gurme'],
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'brk-4',
    category: 'breakfast',
    name: 'Acai & Orman Meyveli Granola Bowl',
    price: 215,
    description: 'Organik dondurulmuş acai püresi, fırınlanmış fındıklı glutensiz granola, taze böğürtlen, muz dilimleri ve chia tohumu.',
    origin: 'Amazon Havzası',
    tags: ['food', 'vegan'],
    badges: ['🌱 Vegan', '🌾 Glütensiz'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'brk-5',
    category: 'breakfast',
    name: 'Artisan Tereyağlı Kruvasan & Ev Reçeli',
    price: 145,
    description: 'Kat kat açılmış gerçek tereyağlı çıtır kruvasan; yanında ev yapımı vişne-vanilya reçeli ve kaymak.',
    origin: 'Fransız Pastane Fırını',
    tags: ['food'],
    badges: ['🥐 Fırından Taze'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  }
];

// Uygulama Durumu (State)
let currentCategory = 'all';
let currentTagFilter = 'all';
let searchQuery = '';
let selectedItems = []; // Kullanıcının masada seçtiği ürünler listesi (Seçtiklerim)
let placedOrders = []; // Adisyo'ya iletilen masa siparişleri (Masa Açık Adisyonu)

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  initTableContext();
  renderCategoryTabs();
  setupEventListeners();
  initQRCode(currentTable);
  updateSelectionUI();

  // Eğer URL'de önceden kategori seçilmişse (?kategori=coffee) doğrudan o kategoriyle menüyü aç
  const initialCat = urlParams.get('kategori') || urlParams.get('category');
  if (initialCat) {
    selectCategoryFromLanding(initialCat);
  } else {
    // Normal ilk açılışta 3 kartlı ekran kaydırılamasın
    document.body.classList.add('landing-active');
    renderMenuItems();
  }
});

// Masa Bilgisini Arayüzde Başlat
function initTableContext() {
  const headerTableEl = document.getElementById('header-table-number');
  const cartTableEl = document.getElementById('cart-table-badge');
  const qrTableSelect = document.getElementById('qr-table-select');
  const landingTableEl = document.getElementById('landing-table-number');
  const menuTableBadgeEl = document.getElementById('menu-table-badge');

  if (headerTableEl) headerTableEl.textContent = currentTable;
  if (cartTableEl) cartTableEl.textContent = currentTable;
  if (qrTableSelect) qrTableSelect.value = currentTable;
  if (landingTableEl) landingTableEl.textContent = currentTable;
  if (menuTableBadgeEl) menuTableBadgeEl.textContent = currentTable;
}

// 3 Kartlı Karşılama Ekranından Kategori Seçimi ve Ana Menüye Geçiş
window.selectCategoryFromLanding = function(categoryKey) {
  currentCategory = categoryKey || 'all';

  // Kaydırma kilidini kaldır (menüde kaydırılabilsin)
  document.body.classList.remove('landing-active');

  const landingView = document.getElementById('landing-view');
  const menuView = document.getElementById('menu-view');

  if (landingView) {
    landingView.classList.add('hidden');
    landingView.classList.remove('view-fade-in');
  }

  if (menuView) {
    menuView.classList.remove('hidden');
    menuView.classList.add('view-fade-in');
  }

  // Kategori Butonlarındaki Aktifliği Eşitle
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    if (tab.dataset.category === currentCategory) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderMenuItems();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Ana Menüden Tekrar 3 Kartlı Karşılama Ekranına Geri Dön
window.returnToLanding = function() {
  // Karşılama ekranında kaydırmayı tamamen kilitle
  document.body.classList.add('landing-active');

  const landingView = document.getElementById('landing-view');
  const menuView = document.getElementById('menu-view');

  if (menuView) {
    menuView.classList.add('hidden');
    menuView.classList.remove('view-fade-in');
  }

  if (landingView) {
    landingView.classList.remove('hidden');
    landingView.classList.add('view-fade-in');
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
};

// Kategori Butonlarının Olayları (Tüm Menü, Kahve, Tatlı, Kahvaltılık)
function renderCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderMenuItems();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Olay Dinleyicileri (Garson Çağır, QR Modal, Adisyo Sipariş)
function setupEventListeners() {
  // Garson Çağır Butonu
  const callWaiterBtn = document.getElementById('btn-call-waiter');
  if (callWaiterBtn) {
    callWaiterBtn.addEventListener('click', () => {
      showToast('🛎️ Masanıza garson yönlendirildi. Ekibimiz birazdan yanınızda olacaktır.');
    });
  }

  // QR Modal Aç/Kapat
  const qrTrigger = document.getElementById('btn-open-qr');
  const qrModal = document.getElementById('qr-modal');
  const qrClose = document.getElementById('btn-close-qr');

  if (qrTrigger && qrModal) {
    qrTrigger.addEventListener('click', () => {
      qrModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (qrClose && qrModal) {
    qrClose.addEventListener('click', () => {
      qrModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Sipariş Notu Sınırlaması (Maks 15 Karakter & Maks 4 Kelime)
  const orderNotesInput = document.getElementById('order-notes-input');
  const noteCharCount = document.getElementById('note-char-count');
  if (orderNotesInput) {
    orderNotesInput.addEventListener('input', (e) => {
      let text = e.target.value;

      // 15 Karakter Sınırı
      if (text.length > 15) {
        text = text.substring(0, 15);
      }

      // Maksimum 4 Kelime Sınırı
      let words = text.trim().split(/\s+/).filter(Boolean);
      if (words.length > 4) {
        text = words.slice(0, 4).join(' ');
        words = text.trim().split(/\s+/).filter(Boolean);
      }

      e.target.value = text;

      if (noteCharCount) {
        noteCharCount.textContent = `${text.length}/15 krkt · ${words.length}/4 kelime`;
      }
    });
  }



  // Üst Başlık Sipariş Butonu & Seçtiklerim Çekmecesi Aç/Kapat
  const cartTrigger = document.getElementById('btn-view-selection');
  const headerCartBtn = document.getElementById('btn-header-cart');
  const cartModal = document.getElementById('cart-modal');
  const cartClose = document.getElementById('btn-close-cart');
  const clearSelectionBtn = document.getElementById('btn-clear-selection');

  const openCartModal = () => {
    renderCartItems();
    if (cartModal) {
      cartModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  if (cartTrigger) {
    cartTrigger.addEventListener('click', openCartModal);
  }

  if (headerCartBtn) {
    headerCartBtn.addEventListener('click', openCartModal);
  }

  if (cartClose && cartModal) {
    cartClose.addEventListener('click', () => {
      cartModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener('click', () => {
      selectedItems = [];
      updateSelectionUI();
      renderCartItems();
      showToast('Seçim listeniz temizlendi.');
    });
  }

  // Adisyo Sipariş Gönderimi
  const submitAdisyoBtn = document.getElementById('btn-submit-adisyo');
  if (submitAdisyoBtn) {
    submitAdisyoBtn.addEventListener('click', handleAdisyoOrderSubmit);
  }

  // Başarılı Sipariş Modalını Kapat
  const closeSuccessBtn = document.getElementById('btn-close-success');
  const successModal = document.getElementById('adisyo-success-modal');
  if (closeSuccessBtn && successModal) {
    closeSuccessBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // QR Modalında Masa Seçici Değiştiğinde
  const qrTableSelect = document.getElementById('qr-table-select');
  if (qrTableSelect) {
    qrTableSelect.addEventListener('change', (e) => {
      initQRCode(e.target.value);
    });
  }
}

// Kategori Eşleştirme Yardımcısı (Hatasız filtreleme için)
function matchCategory(itemCategory, targetCategory) {
  if (!targetCategory || targetCategory === 'all') return true;
  const t = targetCategory.toLowerCase();
  const i = (itemCategory || '').toLowerCase();
  if (t === 'coffee' || t === 'kahve') return i === 'coffee' || i === 'kahve';
  if (t === 'dessert' || t === 'tatli') return i === 'dessert' || i === 'tatli';
  if (t === 'breakfast' || t === 'kahvalti' || t === 'kahvaltilik') return i === 'breakfast' || i === 'kahvalti' || i === 'kahvaltilik';
  return i === t;
}

// Menü Öğelerini Render Et
function renderMenuItems() {
  const container = document.getElementById('menu-items-grid');
  const emptyState = document.getElementById('empty-search-state');
  if (!container) return;

  const filtered = MENU_DATA.filter(item => {
    // Kategori Filtresi (Kusursuz Eşleştirme)
    if (!matchCategory(item.category, currentCategory)) {
      return false;
    }

    // Etiket Filtresi
    if (currentTagFilter !== 'all') {
      if (currentTagFilter === 'signature' && !item.tags.includes('signature')) return false;
      if (currentTagFilter === 'vegan' && !item.tags.includes('vegan')) return false;
      if (currentTagFilter === 'gluten_free' && !item.badges.some(b => b.includes('Glütensiz'))) return false;
      if (currentTagFilter === 'cold' && !item.tags.includes('cold')) return false;
    }

    // Arama Sorgusu
    if (searchQuery) {
      const matchName = item.name.toLowerCase().includes(searchQuery);
      const matchDesc = item.description.toLowerCase().includes(searchQuery);
      const matchOrigin = item.origin && item.origin.toLowerCase().includes(searchQuery);
      return matchName || matchDesc || matchOrigin;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  // "Tümü" seçiliyken ve arama yokken lezzetleri şık 3 kategori başlığıyla sun
  if (currentCategory === 'all' && !searchQuery && currentTagFilter === 'all') {
    const coffeeItems = filtered.filter(i => matchCategory(i.category, 'coffee'));
    const dessertItems = filtered.filter(i => matchCategory(i.category, 'dessert'));
    const breakfastItems = filtered.filter(i => matchCategory(i.category, 'breakfast'));

    container.innerHTML = `
      <!-- ☕ KAHVELER BÖLÜMÜ -->
      <div class="col-span-1 md:col-span-2 pt-2 pb-1">
        <div class="flex items-center gap-3">
          <h2 class="font-serif-luxury text-xl sm:text-2xl font-bold text-amber-950 flex items-center gap-2">
            <span>☕</span>
            <span class="text-gold-gradient">Kahveler</span>
          </h2>
          <div class="h-px flex-1 bg-gradient-to-r from-amber-700/25 to-transparent"></div>
          <span class="text-xs text-amber-900/70 font-semibold">${coffeeItems.length} Çeşit</span>
        </div>
      </div>
      ${coffeeItems.map(renderCardHtml).join('')}

      <!-- 🍰 TATLILAR BÖLÜMÜ -->
      <div class="col-span-1 md:col-span-2 pt-8 pb-1">
        <div class="flex items-center gap-3">
          <h2 class="font-serif-luxury text-xl sm:text-2xl font-bold text-amber-950 flex items-center gap-2">
            <span>🍰</span>
            <span class="text-gold-gradient">Tatlılar</span>
          </h2>
          <div class="h-px flex-1 bg-gradient-to-r from-amber-700/25 to-transparent"></div>
          <span class="text-xs text-amber-900/70 font-semibold">${dessertItems.length} Çeşit</span>
        </div>
      </div>
      ${dessertItems.map(renderCardHtml).join('')}

      <!-- 🥐 KAHVALTILIK BÖLÜMÜ -->
      <div class="col-span-1 md:col-span-2 pt-8 pb-1">
        <div class="flex items-center gap-3">
          <h2 class="font-serif-luxury text-xl sm:text-2xl font-bold text-amber-950 flex items-center gap-2">
            <span>🥐</span>
            <span class="text-gold-gradient">Kahvaltılık & Fırın</span>
          </h2>
          <div class="h-px flex-1 bg-gradient-to-r from-amber-700/25 to-transparent"></div>
          <span class="text-xs text-amber-900/70 font-semibold">${breakfastItems.length} Çeşit</span>
        </div>
      </div>
      ${breakfastItems.map(renderCardHtml).join('')}
    `;
    return;
  }

  // Belirli bir kategori veya filtre aktifken
  const categoryNames = {
    'coffee': '☕ Kahveler',
    'dessert': '🍰 Tatlılar',
    'breakfast': '🥐 Kahvaltılık'
  };

  const headerTitle = categoryNames[currentCategory] || 'Seçili Lezzetler';

  container.innerHTML = `
    <div class="col-span-1 md:col-span-2 pt-1 pb-1">
      <div class="flex items-center justify-between pb-2 border-b border-amber-900/10">
        <h2 class="font-serif-luxury text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
          ${headerTitle}
        </h2>
        <span class="text-xs text-amber-900 font-semibold">${filtered.length} Lezzet Listeleniyor</span>
      </div>
    </div>
    ${filtered.map(renderCardHtml).join('')}
  `;
}

// Tekil Ürün Kartı HTML Şablonu (Açık Lüks Porselen Kart)
function renderCardHtml(item) {
  const isSelected = selectedItems.some(i => i.id === item.id);
  const badgesHtml = item.badges.map(b => `
    <span class="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${b.includes('İmzası') ? 'badge-signature' : 'badge-diet'}">
      ${b}
    </span>
  `).join(' ');

  return `
    <article class="menu-card rounded-2xl p-4 flex flex-col justify-between gap-3 group">
      <div class="flex gap-4 items-start">
        <!-- Ürün Görseli -->
        <div class="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-amber-50 border border-amber-900/10 shadow-sm">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <!-- Ürün Bilgileri -->
        <div class="flex-1 min-w-0">
          <!-- Rozetler -->
          <div class="flex flex-wrap gap-1.5 mb-1.5">
            ${badgesHtml}
          </div>

          <!-- Başlık -->
          <h3 class="font-serif-luxury text-base sm:text-lg font-bold text-neutral-900 tracking-wide group-hover:text-amber-800 transition-colors leading-snug">
            ${item.name}
          </h3>

          <!-- Orijin Bilgisi -->
          ${item.origin ? `
            <p class="text-[11px] text-amber-800 uppercase tracking-widest mt-0.5 font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block"></span>
              ${item.origin}
            </p>
          ` : ''}

          <!-- Çok Kısa Rafine İçerik Açıklaması -->
          <p class="text-xs text-neutral-600 mt-1.5 line-clamp-2 leading-relaxed">
            ${item.description}
          </p>
        </div>
      </div>

      <!-- Fiyat ve Seçim Satırı -->
      <div class="flex items-center justify-between pt-2.5 border-t border-amber-900/10 mt-1">
        <div class="flex items-baseline gap-1">
          <span class="text-xs text-amber-800 font-serif font-semibold">₺</span>
          <span class="text-xl sm:text-2xl font-bold font-serif text-amber-900 tracking-tight">${item.price}</span>
          <span class="text-[10px] text-neutral-400 ml-1">KDV Dahil</span>
        </div>

        <button 
          onclick="toggleItemSelection('${item.id}')"
          class="px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
            isSelected 
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25' 
              : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80'
          }"
          aria-label="${isSelected ? 'Seçildi' : 'Seçimlerime Ekle'}"
        >
          ${isSelected ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Seçildi</span>
          ` : `
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>Ekle</span>
          `}
        </button>
      </div>
    </article>
  `;
}

// Seçim Listesi Yönetimi
window.toggleItemSelection = function(id) {
  const item = MENU_DATA.find(i => i.id === id);
  if (!item) return;

  const existingIndex = selectedItems.findIndex(i => i.id === id);
  if (existingIndex > -1) {
    selectedItems.splice(existingIndex, 1);
    showToast(`"${item.name}" listenizden çıkarıldı.`);
  } else {
    selectedItems.push({ ...item, quantity: 1 });
    showToast(`"${item.name}" seçtiklerinize eklendi.`);
  }

  updateSelectionUI();
  renderMenuItems();
};

// Seçim Çubuğu & Rozet Sayacını Güncelle (Toplam Sipariş Hesabı)
function updateSelectionUI() {
  const selectionBar = document.getElementById('floating-selection-bar');
  const countBadge = document.getElementById('selected-count-badge');
  const totalAmountEl = document.getElementById('selected-total-amount');
  const headerCartTotal = document.getElementById('header-order-total-text');

  const selectionCount = selectedItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const selectionPrice = selectedItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  
  const placedCount = placedOrders.reduce((acc, o) => acc + o.items.reduce((s, i) => s + i.quantity, 0), 0);
  const placedPrice = placedOrders.reduce((acc, o) => acc + o.totalAmount, 0);

  const grandTotal = selectionPrice + placedPrice;
  const grandCount = selectionCount + placedCount;

  // Üst Başlıktaki Sürekli Görünür Sipariş Göstergesi
  if (headerCartTotal) {
    headerCartTotal.textContent = `₺${grandTotal}`;
  }

  // Alt Yüzen Çubuk
  if (selectionBar) {
    if (selectionCount > 0) {
      if (countBadge) countBadge.textContent = selectionCount;
      if (totalAmountEl) totalAmountEl.textContent = `₺${selectionPrice}`;
      const titleEl = selectionBar.querySelector('.text-neutral-500');
      if (titleEl) titleEl.textContent = 'Seçilen Lezzetler';
      selectionBar.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
      selectionBar.classList.add('translate-y-0', 'opacity-100');
    } else if (placedPrice > 0) {
      // Masanın mutfakta bekleyen siparişi varsa da toplamı göster
      if (countBadge) countBadge.textContent = placedCount;
      if (totalAmountEl) totalAmountEl.textContent = `₺${placedPrice}`;
      const titleEl = selectionBar.querySelector('.text-neutral-500');
      if (titleEl) titleEl.textContent = 'Masa Siparişiniz (Adisyo)';
      selectionBar.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
      selectionBar.classList.add('translate-y-0', 'opacity-100');
    } else {
      selectionBar.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      selectionBar.classList.remove('translate-y-0', 'opacity-100');
    }
  }
}

// Seçtiklerim Modal İçeriğini Render Et (Mevcut Sepet + Masanın Açık Adisyonu)
function renderCartItems() {
  const cartList = document.getElementById('cart-items-list');
  const cartModalTotal = document.getElementById('cart-modal-total');
  const placedContainer = document.getElementById('placed-orders-container');
  const placedList = document.getElementById('placed-orders-list');
  const placedTotalEl = document.getElementById('placed-orders-total');
  const clearSelectionBtn = document.getElementById('btn-clear-selection');
  const submitBtn = document.getElementById('btn-submit-adisyo');
  const breakdownSubtext = document.getElementById('cart-breakdown-subtext');
  if (!cartList) return;

  const selectionPrice = selectedItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const placedPrice = placedOrders.reduce((acc, o) => acc + o.totalAmount, 0);
  const grandTotal = selectionPrice + placedPrice;

  // Toplam Tutar Alanı
  if (cartModalTotal) cartModalTotal.textContent = `₺${grandTotal}`;

  if (breakdownSubtext) {
    if (placedPrice > 0 && selectionPrice > 0) {
      breakdownSubtext.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> Mutfakta: ₺${placedPrice} + Yeni: ₺${selectionPrice}`;
    } else {
      breakdownSubtext.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> Adisyo Canlı Entegrasyon`;
    }
  }

  // Masaya Daha Önce Gönderilmiş Siparişler
  if (placedOrders.length > 0 && placedContainer && placedList) {
    placedContainer.classList.remove('hidden');
    if (placedTotalEl) placedTotalEl.textContent = `₺${placedPrice}`;
    
    placedList.innerHTML = placedOrders.map(order => `
      <div class="p-2.5 rounded-xl bg-white/95 border border-amber-900/10 shadow-sm space-y-1">
        <div class="flex items-center justify-between text-[11px] font-bold text-neutral-800">
          <span class="text-amber-900 font-mono">${order.code} · ${order.time}</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Mutfakta Hazırlanıyor</span>
        </div>
        <div class="text-[11px] text-neutral-600 font-medium">
          ${order.items.map(i => `${i.quantity}x ${i.name} (₺${i.price * i.quantity})`).join(', ')}
        </div>
        ${order.note ? `<div class="text-[10px] text-amber-800 italic">Not: "${order.note}"</div>` : ''}
      </div>
    `).join('');
  } else if (placedContainer) {
    placedContainer.classList.add('hidden');
  }

  // Yeni Seçilen Ürünler Listesi
  if (selectedItems.length === 0) {
    if (placedOrders.length > 0) {
      cartList.innerHTML = `
        <div class="py-4 text-center text-neutral-600 bg-amber-50/50 rounded-2xl border border-amber-900/10">
          <p class="text-xs font-semibold text-neutral-800">Sepetinizde yeni ürün yok.</p>
          <p class="text-[11px] text-neutral-500 mt-0.5">Önceki siparişleriniz mutfakta hazırlanıyor. Menüden ek lezzetler seçebilirsiniz.</p>
        </div>
      `;
    } else {
      cartList.innerHTML = `
        <div class="py-10 text-center text-neutral-500">
          <p class="text-sm font-medium">Henüz bir lezzet seçmediniz.</p>
          <p class="text-xs text-neutral-400 mt-1">Beğendiğiniz lezzetlerin yanındaki "Ekle" butonuna dokunabilirsiniz.</p>
        </div>
      `;
    }
    if (clearSelectionBtn) clearSelectionBtn.classList.add('hidden');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'pointer-events-none');
    }
    return;
  }

  if (clearSelectionBtn) clearSelectionBtn.classList.remove('hidden');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-50', 'pointer-events-none');
  }

  cartList.innerHTML = selectedItems.map(item => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-amber-900/10 shadow-sm">
      <div class="flex-1 min-w-0 pr-3">
        <h4 class="font-semibold text-sm text-neutral-900 truncate">${item.name}</h4>
        <p class="text-xs text-amber-900 font-serif font-bold">₺${item.price} <span class="text-neutral-400 font-sans font-normal">× ${item.quantity}</span></p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="changeQuantity('${item.id}', -1)" class="w-7 h-7 rounded-lg bg-amber-50 hover:bg-amber-100 text-neutral-800 border border-amber-200 flex items-center justify-center text-xs font-bold transition-colors">-</button>
        <span class="w-5 text-center text-xs font-bold text-neutral-900">${item.quantity}</span>
        <button onclick="changeQuantity('${item.id}', 1)" class="w-7 h-7 rounded-lg bg-amber-50 hover:bg-amber-100 text-neutral-800 border border-amber-200 flex items-center justify-center text-xs font-bold transition-colors">+</button>
      </div>
    </div>
  `).join('');
}

window.changeQuantity = function(id, delta) {
  const item = selectedItems.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    selectedItems = selectedItems.filter(i => i.id !== id);
  }

  updateSelectionUI();
  renderCartItems();
  renderMenuItems();
};

// QR Kod Üretici (Masa kartı için dinamik link)
function initQRCode(targetTable = currentTable) {
  const qrContainer = document.getElementById('qrcode-canvas');
  const targetUrlEl = document.getElementById('qr-target-url');
  if (!qrContainer) return;

  qrContainer.innerHTML = '';
  
  // Masaya özel URL oluştur: https://adres/?masa=04
  const urlObj = new URL(window.location.href);
  urlObj.searchParams.set('masa', targetTable);
  const fullMasaUrl = urlObj.toString();

  if (targetUrlEl) {
    targetUrlEl.textContent = fullMasaUrl;
  }

  try {
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrContainer, {
        text: fullMasaUrl,
        width: 180,
        height: 180,
        colorDark: "#0c0d10",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  } catch (err) {
    console.error('QR Kod oluşturulamadı:', err);
  }
}

// Adisyo Sipariş Gönderimi (API Entegrasyonu)
async function handleAdisyoOrderSubmit() {
  if (selectedItems.length === 0) {
    showToast('Lütfen önce menüden en az bir ürün seçiniz.');
    return;
  }

  const submitBtn = document.getElementById('btn-submit-adisyo');
  const noteInput = document.getElementById('order-notes-input');
  const customerNote = noteInput ? noteInput.value.trim() : '';

  const totalPrice = selectedItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  // Adisyo Standart Sipariş Payload Yapısı
  const adisyoPayload = {
    orderSource: "QR_MENU_ONLINE",
    tableId: currentTable,
    tableName: `Masa ${currentTable}`,
    status: "NEW_ORDER",
    customerNote: customerNote,
    currency: "TRY",
    totalAmount: totalPrice,
    items: selectedItems.map(item => ({
      productId: item.id,
      productName: item.name,
      quantity: item.quantity,
      unitPrice: item.price,
      totalPrice: item.price * item.quantity,
      category: item.category
    })),
    createdAt: new Date().toISOString()
  };

  console.log('[Adisyo API Entegrasyonu] Gönderilen Sipariş:', adisyoPayload);

  // Buton Yükleniyor Durumu
  const originalBtnHtml = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-black inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    <span>Adisyo'ya İletiliyor...</span>
  `;

  try {
    if (ADISYO_CONFIG.isDemoMode) {
      // Demo Simülasyonu (800ms gerçekçi ağ gecikmesi)
      await new Promise(resolve => setTimeout(resolve, 800));
    } else {
      // Gerçek Adisyo REST API Çağrısı
      const response = await fetch(ADISYO_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADISYO_CONFIG.apiKey}`
        },
        body: JSON.stringify(adisyoPayload)
      });
      if (!response.ok) {
        throw new Error('Adisyo API hatası: ' + response.statusText);
      }
    }

    // Başarılı Sipariş Modalı
    const randomOrderNum = Math.floor(10000 + Math.random() * 90000);
    const orderCodeEl = document.getElementById('adisyo-order-code');
    const tableTextEl = document.getElementById('success-table-text');
    const totalEl = document.getElementById('success-order-total');

    if (orderCodeEl) orderCodeEl.textContent = `#AD-${randomOrderNum}`;
    if (tableTextEl) tableTextEl.textContent = `Masa ${currentTable}`;
    if (totalEl) totalEl.textContent = `₺${totalPrice}`;

    // Ses Bildirimi (Zil)
    playChimeSound();

    // Başarılı siparişi masanın açık sipariş geçmişine kaydet
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    placedOrders.push({
      code: `#AD-${randomOrderNum}`,
      items: JSON.parse(JSON.stringify(selectedItems)),
      totalAmount: totalPrice,
      note: customerNote,
      time: nowTime
    });

    // Sepeti temizle & modalleri değiştir
    selectedItems = [];
    if (noteInput) noteInput.value = '';
    updateSelectionUI();
    renderMenuItems();

    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('adisyo-success-modal').classList.remove('hidden');

  } catch (error) {
    console.error('Adisyo sipariş hatası:', error);
    showToast('Adisyo bağlantısında hata oluştu. Garsona bildiriniz.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }
}

// Hafif Lüks Onay Zili (Web Audio API)
function playChimeSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {
    // Ses desteği yoksa sessiz geç
  }
}

// Lüks Bildirim Göstergesi (Toast)
function showToast(message) {
  let toastContainer = document.getElementById('toast-notification');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-notification';
    toastContainer.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none max-w-sm w-[90%]';
    document.body.appendChild(toastContainer);
  }

  toastContainer.innerHTML = `
    <div class="toast-notice px-4 py-3 rounded-2xl bg-neutral-900/95 border border-amber-400/40 text-amber-100 text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-xl flex items-center gap-3">
      <div class="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-ping"></div>
      <p class="flex-1">${message}</p>
    </div>
  `;

  setTimeout(() => {
    if (toastContainer) {
      toastContainer.innerHTML = '';
    }
  }, 3200);
}
