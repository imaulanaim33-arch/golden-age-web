// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://cwqusoegttzpwxigjmqh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cXVzb2VndHR6cHd4aWdqbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjEwODksImV4cCI6MjA4OTA5NzA4OX0.e3kFQQLfznCNwMEBriRsH0zT6chsZmGwugapoqtAOkQ';

async function supabaseInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Prefer': 'return=minimal' },
    body: JSON.stringify(data)
  });
  return res.ok;
}

async function supabaseSelect(table, params = '') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });
  return res.json();
}

async function supabaseUpdate(table, id, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Prefer': 'return=minimal' },
    body: JSON.stringify(data)
  });
  return res.ok;
}

async function supabaseDelete(table, id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: 'DELETE',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });
  return res.ok;
}

// ===== NAVBAR =====
function renderNavbar() {
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  const act = (p) => cur === p ? 'active' : '';
  const progPages = ['nursery.html','toddler.html','k1.html','k2.html'];
  const actPages = ['activities.html','afterschool.html'];

  document.getElementById('navbar').innerHTML = `
    <nav>
      <a href="index.html" class="logo">
        <img src="logo.png" alt="Golden Age" class="logo-img" onerror="this.style.display='none'"/>
        <div class="logo-text">Golden Age Islamic<span>School Montessori</span></div>
      </a>
      <button class="nav-toggle" onclick="toggleNav()">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="${act('index.html')}">Beranda</a></li>
        <li class="nav-dropdown">
          <a href="#" class="${progPages.includes(cur)?'active':''}">Program ▾</a>
          <div class="nav-dropdown-menu">
            <a href="nursery.html">🌱 Nursery Class</a>
            <a href="toddler.html">🐣 Toddler Class</a>
            <a href="k1.html">⭐ K1</a>
            <a href="k2.html">🚀 K2</a>
          </div>
        </li>
        <li class="nav-dropdown">
          <a href="#" class="${actPages.includes(cur)?'active':''}">Kegiatan ▾</a>
          <div class="nav-dropdown-menu">
            <a href="activities.html">🎨 Activities</a>
            <a href="afterschool.html">🌟 Afterschool</a>
          </div>
        </li>
        <li><a href="fasilitas.html" class="${act('fasilitas.html')}">Fasilitas</a></li>
        <li class="nav-dropdown">
          <a href="#" class="${['legalitas.html','galeri.html','berita.html'].includes(cur)?'active':''}">Tentang ▾</a>
          <div class="nav-dropdown-menu">
            <a href="legalitas.html">📋 Legalitas</a>
            <a href="galeri.html">📸 Galeri</a>
            <a href="berita.html">📰 Berita</a>
          </div>
        </li>
        <li><a href="kontak.html" class="${act('kontak.html')}">Kontak</a></li>
        <li><a href="ppdb.html" class="nav-btn">Daftar Sekarang</a></li>
      </ul>
    </nav>`;
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== FOOTER =====
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <div style="width:44px;height:44px;background:linear-gradient(135deg,var(--gold),#a8832a);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px">🕌</div>
            <div style="font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:var(--gold-light);line-height:1.2">Golden Age Islamic<br><span style="font-size:12px;font-weight:500;font-family:'Plus Jakarta Sans',sans-serif;opacity:0.8">School Montessori</span></div>
          </div>
          <p>Membangun generasi penerus yang cerdas, berkarakter Islami, dan berprestasi sejak usia dini dengan metode Montessori yang terbukti efektif.</p>
        </div>
        <div>
          <div class="footer-title">Program</div>
          <ul class="footer-links">
            <li><a href="nursery.html">🌱 Nursery Class</a></li>
            <li><a href="toddler.html">🐣 Toddler Class</a></li>
            <li><a href="k1.html">⭐ K1</a></li>
            <li><a href="k2.html">🚀 K2</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Informasi</div>
          <ul class="footer-links">
            <li><a href="fasilitas.html">🏫 Fasilitas</a></li>
            <li><a href="legalitas.html">📋 Legalitas</a></li>
            <li><a href="galeri.html">📸 Galeri</a></li>
            <li><a href="berita.html">📰 Berita</a></li>
            <li><a href="ppdb.html">📝 Pendaftaran</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Kontak</div>
          <ul class="footer-links">
            <li><a href="#">📍 [Alamat Sekolah]</a></li>
            <li><a href="#">📱 +62 8XX-XXXX-XXXX</a></li>
            <li><a href="#">📧 info@goldenage.sch.id</a></li>
            <li><a href="#">📸 @goldenage.montessori</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        © 2025 <span>Golden Age Islamic School Montessori</span>. Semua hak cipta dilindungi.
      </div>
    </footer>`;
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;background:${type==='success'?'#1a4d2e':'#c0392b'};color:white;padding:14px 24px;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:15px;box-shadow:0 8px 24px rgba(0,0,0,0.2);animation:fadeUp 0.4s ease`;
  t.textContent = (type==='success'?'✅ ':'❌ ') + msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
