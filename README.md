# Portfolio — M. Nur Ramadhan

Landing page portfolio statis (HTML, CSS, JavaScript tanpa framework) untuk GitHub Pages.
Dua bahasa (ID/EN), mode terang/gelap, dan responsif.

## Struktur

```
index.html            Kerangka halaman
assets/css/style.css  Tampilan
assets/js/data.js     ISI website — edit file ini
assets/js/main.js     Logika (bahasa, tema, render, repo GitHub)
```

## Mengubah isi

Semua isi ada di `assets/js/data.js`: nama, tagline, tentang, keahlian, dan proyek.
Kolom yang dikosongkan (`""`) otomatis tidak ditampilkan.

Untuk melihat hasilnya, buka `index.html` langsung di browser.

## Deploy ke GitHub Pages

1. Buat repository **public** di GitHub bernama `USERNAME.github.io`
   (ganti `USERNAME` dengan username GitHub Anda), tanpa README/.gitignore.
2. Jalankan di folder ini:

   ```bash
   git init
   git add .
   git commit -m "Portfolio pertama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   git push -u origin main
   ```

3. Di GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. Tunggu 1–2 menit, lalu buka `https://USERNAME.github.io`.

Setiap perubahan berikutnya cukup:

```bash
git add .
git commit -m "Update portfolio"
git push
```
