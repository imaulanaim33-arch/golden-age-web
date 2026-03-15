-- ══════════════════════════════════════════════════════════════
--  SUPABASE SCHEMA — Golden Age Islamic School Montessori
--  Jalankan di: Supabase Dashboard → SQL Editor
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS pendaftaran (
  id              SERIAL PRIMARY KEY,
  nama_anak       TEXT NOT NULL,
  tanggal_lahir   TEXT,
  program         TEXT,
  nama_orangtua   TEXT NOT NULL,
  no_whatsapp     TEXT NOT NULL,
  pesan           TEXT,
  status          TEXT DEFAULT 'baru',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS kontak_pesan (
  id              SERIAL PRIMARY KEY,
  nama            TEXT NOT NULL,
  no_whatsapp     TEXT NOT NULL,
  subjek          TEXT,
  pesan           TEXT NOT NULL,
  status          TEXT DEFAULT 'baru',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS berita (
  id              SERIAL PRIMARY KEY,
  judul           TEXT NOT NULL,
  kategori        TEXT,
  ringkasan       TEXT,
  konten          TEXT,
  thumbnail       TEXT,
  is_featured     BOOLEAN DEFAULT FALSE,
  is_published    BOOLEAN DEFAULT TRUE,
  tanggal         TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS galeri (
  id              SERIAL PRIMARY KEY,
  judul           TEXT NOT NULL,
  kategori        TEXT,
  image_url       TEXT NOT NULL,
  is_active       BOOLEAN DEFAULT TRUE,
  sort_order      INT DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE pendaftaran   ENABLE ROW LEVEL SECURITY;
ALTER TABLE kontak_pesan  ENABLE ROW LEVEL SECURITY;
ALTER TABLE berita        ENABLE ROW LEVEL SECURITY;
ALTER TABLE galeri        ENABLE ROW LEVEL SECURITY;

-- Public dapat insert form
CREATE POLICY "pendaftaran_public_insert" ON pendaftaran FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "kontak_public_insert"      ON kontak_pesan FOR INSERT WITH CHECK (TRUE);
-- Public dapat baca berita & galeri
CREATE POLICY "berita_public_read"        ON berita FOR SELECT USING (is_published = TRUE);
CREATE POLICY "galeri_public_read"        ON galeri FOR SELECT USING (is_active = TRUE);
-- Admin saja yang bisa kelola
CREATE POLICY "pendaftaran_admin_read"    ON pendaftaran FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "pendaftaran_admin_update"  ON pendaftaran FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "kontak_admin_read"         ON kontak_pesan FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "berita_admin_write"        ON berita FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "berita_admin_update"       ON berita FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "berita_admin_delete"       ON berita FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "galeri_admin_write"        ON galeri FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "galeri_admin_update"       ON galeri FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "galeri_admin_delete"       ON galeri FOR DELETE USING (auth.role() = 'authenticated');
