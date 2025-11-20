<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upwise - Download APK</title>
    <meta name="description" content="Download aplikasi Upwise versi terbaru untuk Android">
    <link rel="stylesheet" href="{{ asset('css/landing.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Background overlay -->
    <div class="background-overlay"></div>
    
    <div class="hero-container">
        <div class="hero-content">
            <!-- App Title -->
            <h1 class="hero-title">UPWISE</h1>
            
            <!-- App Description -->
            <p class="hero-description">
                UPWISE — APLIKASI TERBAIK UNTUK MENINGKATKAN PRODUKTIVITAS DENGAN FITUR YANG MEMILIKI KEMAMPUAN UNIK
            </p>
            
            <!-- Download Button -->
            <a href="{{ asset('apk/app-release.apk') }}" 
               download="Upwise-v1.0.0.apk" 
               class="download-btn">
                DOWNLOAD GRATIS
            </a>
            
            <!-- App Details -->
            <div class="app-details">
                <div class="detail-item">
                    <span class="detail-label">Versi:</span>
                    <span class="detail-value">1.0.0</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Ukuran:</span>
                    <span class="detail-value">51,7 MB</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Optional JavaScript for enhanced functionality -->
    <script src="{{ asset('js/landing.js') }}"></script>
</body>
</html>