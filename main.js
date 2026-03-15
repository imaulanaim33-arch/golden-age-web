// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://cwqusoegttzpwxigjmqh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cXVzb2VndHR6cHd4aWdqbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjEwODksImV4cCI6MjA4OTA5NzA4OX0.e3kFQQLfznCNwMEBriRsH0zT6chsZmGwugapoqtAOkQ';

async function supabaseInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method:'POST',
    headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Prefer':'return=minimal'},
    body:JSON.stringify(data)
  });
  return res.ok;
}
async function supabaseSelect(table, params='') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}
  });
  return res.json();
}
async function supabaseUpdate(table, id, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method:'PATCH',
    headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Prefer':'return=minimal'},
    body:JSON.stringify(data)
  });
  return res.ok;
}
async function supabaseDelete(table, id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method:'DELETE',
    headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}
  });
  return res.ok;
}

// ===== NAVBAR =====
function renderNavbar() {
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  const act = (p) => cur===p ? 'active' : '';
  const progPages = ['nursery.html','toddler.html','k1.html','k2.html'];
  const actPages = ['activities.html','afterschool.html'];
  const aboutPages = ['legalitas.html','galeri.html','berita.html'];

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
          <a href="#" class="${aboutPages.includes(cur)?'active':''}">Tentang ▾</a>
          <div class="nav-dropdown-menu">
            <a href="legalitas.html">📋 Legalitas</a>
            <a href="galeri.html">📸 Galeri</a>
            <a href="berita.html">📰 Berita</a>
          </div>
        </li>
        <li><a href="kontak.html" class="${act('kontak.html')}">Kontak</a></li>
        <li><a href="ppdb.html" class="nav-btn">Pendaftaran</a></li>
      </ul>
    </nav>`;
}

function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }

// ===== FOOTER =====
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-name">Golden Age Islamic</div>
          <div class="footer-brand-sub">School Montessori</div>
          <p>Membangun generasi penerus yang cerdas, berkarakter Islami, dan berprestasi sejak usia dini melalui metode Montessori yang terbukti efektif secara internasional.</p>
        </div>
        <div>
          <div class="footer-title">Program</div>
          <ul class="footer-links">
            <li><a href="nursery.html">Nursery Class</a></li>
            <li><a href="toddler.html">Toddler Class</a></li>
            <li><a href="k1.html">K1</a></li>
            <li><a href="k2.html">K2</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Informasi</div>
          <ul class="footer-links">
            <li><a href="fasilitas.html">Fasilitas</a></li>
            <li><a href="legalitas.html">Legalitas</a></li>
            <li><a href="galeri.html">Galeri</a></li>
            <li><a href="berita.html">Berita</a></li>
            <li><a href="ppdb.html">Pendaftaran</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Kontak</div>
          <ul class="footer-links">
            <li><a href="#">[Alamat Sekolah]</a></li>
            <li><a href="#">+62 8XX-XXXX-XXXX</a></li>
            <li><a href="#">info@goldenage.sch.id</a></li>
            <li><a href="#">@goldenage.montessori</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 <span>Golden Age Islamic School Montessori</span>. All rights reserved.</p>
        <p style="color:var(--text-muted);font-size:11px">Excellence in Early Childhood Education</p>
      </div>
    </footer>`;
}

// ===== TOAST =====
function showToast(msg, type='success') {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;background:${type==='success'?'var(--gold)':'#c0392b'};color:${type==='success'?'var(--black)':'white'};padding:14px 24px;border-radius:4px;font-family:'Inter',sans-serif;font-weight:500;font-size:14px;box-shadow:0 8px 32px rgba(0,0,0,0.4);letter-spacing:0.3px`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 3500);
}
