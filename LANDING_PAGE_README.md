# Landing Page Download APK - Upwise

Landing page bergaya hero dengan background image untuk mengunduh file APK Android, dibuat dengan Laravel 11 sesuai PRD.

## Setup dan Instalasi

1. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Ganti File Placeholder**
   - Ganti `public/images/app-preview.png` dengan gambar background aplikasi Anda (1920x1080px atau lebih besar)
   - Ganti `public/apk/app-release.apk` dengan file APK aplikasi Anda

4. **Update Informasi Aplikasi**
   Edit file `resources/views/landing.blade.php`:
   - Ubah nama aplikasi di `<title>` dan `.hero-title`
   - Ubah deskripsi aplikasi di `.hero-description`
   - Update versi dan ukuran file di bagian `.app-details`

5. **Jalankan Server**
   ```bash
   php artisan serve
   ```

## Struktur File

```
public/
├── css/
│   └── landing.css          # Stylesheet utama
├── images/
│   └── app-preview.png      # Gambar preview aplikasi (ganti dengan file asli)
└── apk/
    └── app-release.apk      # File APK aplikasi (ganti dengan file asli)

resources/views/
└── landing.blade.php        # Template halaman landing

routes/
└── web.php                  # Route definition
```

## Fitur yang Sudah Diimplementasi

✅ Halaman hero bergaya gaming dengan background image  
✅ Design responsif untuk mobile dan desktop  
✅ Tombol download merah dengan efek hover  
✅ Informasi versi dan ukuran file dengan glass effect  
✅ Background overlay dengan blur effect  
✅ Animasi fade-in untuk elemen  
✅ Fallback background SVG jika gambar utama tidak tersedia  
✅ Typography yang bold dan modern  
✅ SEO-friendly meta tags  

## Customization

### Mengubah Warna Tema
Edit file `public/css/landing.css`:
- Background gradient: ubah di selector `body`
- Warna tombol: ubah di selector `.download-btn`

### Mengubah Konten
Edit file `resources/views/landing.blade.php`:
- Nama aplikasi: ubah di `<title>` dan `.app-title`
- Deskripsi: ubah di `.app-description`
- Versi dan ukuran: ubah di `.app-details`

## Testing Checklist

- [ ] Gambar preview muncul dengan benar
- [ ] Tombol download berfungsi di Chrome/Firefox Android
- [ ] Halaman responsif di 360x800 (mobile) dan 1366x768 (desktop)
- [ ] File APK dapat diunduh
- [ ] Metadata versi dan ukuran sesuai file APK

## Deployment

### Hosting Statis (Recommended)
1. Build assets: `npm run build`
2. Upload folder `public/` ke hosting
3. Set document root ke folder `public/`

### Laravel Hosting
1. Upload semua file ke server
2. Set document root ke folder `public/`
3. Jalankan `composer install --optimize-autoloader --no-dev`
4. Set permission untuk folder `storage/` dan `bootstrap/cache/`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- CSS dan font dioptimalkan untuk loading cepat
- Gambar menggunakan lazy loading
- Minimal JavaScript untuk performa maksimal
- Target loading time: < 2 detik pada koneksi 4G