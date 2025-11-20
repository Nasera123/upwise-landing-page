# Upwise - Landing Page Download APK

![Upwise Landing Page](https://img.shields.io/badge/Laravel-11-red?style=for-the-badge&logo=laravel)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ready-green?style=for-the-badge)

Landing page bergaya hero dengan background image untuk mengunduh file APK Android aplikasi Upwise, dibuat dengan Laravel 11.

## 🚀 Demo

[Live Demo](https://your-domain.com) *(Ganti dengan URL deployment Anda)*

## ✨ Fitur

- 🎮 **Hero Layout**: Design bergaya gaming dengan background image fullscreen
- 📱 **Responsive**: Tampil sempurna di mobile dan desktop
- 🔴 **Download Button**: Tombol download merah dengan efek hover menarik
- 🌟 **Glass Effect**: Detail aplikasi dengan efek kaca transparan
- 🎭 **Background Overlay**: Efek blur dan overlay untuk readability
- ⚡ **Animasi**: Smooth fade-in animation untuk semua elemen
- 🎨 **Modern Typography**: Font bold dan modern dengan letter-spacing
- 🔄 **Fallback**: Background SVG jika gambar utama tidak tersedia

## 🛠️ Teknologi

- **Framework**: Laravel 11
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS dengan Flexbox & Grid
- **Fonts**: Google Fonts (Inter)
- **Icons**: Custom SVG icons

## 📦 Instalasi

### Prerequisites
- PHP >= 8.1
- Composer
- Node.js & NPM (opsional)

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/username/upwise-landing-page.git
   cd upwise-landing-page
   ```

2. **Install dependencies**
   ```bash
   composer install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Ganti file placeholder**
   - Upload gambar background ke `public/images/app-preview.png` (minimal 1920x1080px)
   - Upload file APK ke `public/apk/app-release.apk`

5. **Jalankan server**
   ```bash
   php artisan serve
   ```

6. **Buka browser**
   ```
   http://localhost:8000
   ```

## 🎨 Customization

### Mengubah Konten Aplikasi

Edit file `resources/views/landing.blade.php`:

```html
<!-- Ubah nama aplikasi -->
<h1 class="hero-title">UPWISE</h1>

<!-- Ubah deskripsi -->
<p class="hero-description">
    UPWISE — APLIKASI TERBAIK UNTUK MENINGKATKAN PRODUKTIVITAS
</p>

<!-- Ubah detail versi dan ukuran -->
<div class="detail-item">
    <span class="detail-value">1.0.0</span> <!-- Versi -->
</div>
<div class="detail-item">
    <span class="detail-value">12 MB</span> <!-- Ukuran -->
</div>
```

### Mengubah Warna Tema

Edit file `public/css/landing.css`:

```css
/* Ubah warna tombol download */
.download-btn {
    background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
}

/* Ubah warna background overlay */
.background-overlay {
    background: rgba(0, 0, 0, 0.6);
}
```

## 📁 Struktur Project

```
├── public/
│   ├── css/
│   │   └── landing.css          # Stylesheet utama
│   ├── js/
│   │   └── landing.js           # JavaScript opsional
│   ├── images/
│   │   ├── app-preview.png      # Background image (ganti dengan file asli)
│   │   └── fallback-bg.svg      # Fallback background
│   └── apk/
│       └── app-release.apk      # File APK (ganti dengan file asli)
├── resources/views/
│   └── landing.blade.php        # Template halaman utama
├── routes/
│   └── web.php                  # Route definition
└── README.md                    # Dokumentasi ini
```

## 🚀 Deployment

### Hosting Statis (Netlify/Vercel)
1. Build project: `php artisan config:cache`
2. Upload folder `public/` ke hosting
3. Set document root ke folder `public/`

### VPS/Shared Hosting
1. Upload semua file ke server
2. Set document root ke folder `public/`
3. Jalankan `composer install --optimize-autoloader --no-dev`
4. Set permission untuk folder `storage/` dan `bootstrap/cache/`

### GitHub Pages (Static)
Untuk hosting statis, copy isi folder `public/` ke repository terpisah dan enable GitHub Pages.

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- ⚡ Target loading time: < 2 detik pada koneksi 4G
- 🎨 CSS dan font dioptimalkan untuk loading cepat
- 📱 Responsive images dengan fallback
- 🚀 Minimal JavaScript untuk performa maksimal

## 📝 License

Project ini menggunakan [MIT License](LICENSE).

## 🤝 Contributing

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

Jika Anda memiliki pertanyaan atau butuh bantuan:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/username/upwise-landing-page/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/username/upwise-landing-page/discussions)

## 🙏 Acknowledgments

- Design terinspirasi dari Valorant landing page
- Icons dari [Heroicons](https://heroicons.com/)
- Fonts dari [Google Fonts](https://fonts.google.com/)

---

⭐ **Jangan lupa berikan star jika project ini membantu Anda!**