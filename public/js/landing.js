// Landing Page JavaScript (Optional)
document.addEventListener('DOMContentLoaded', function() {
    
    // Track download button clicks
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Analytics tracking (uncomment if needed)
            // gtag('event', 'download', {
            //     'event_category': 'APK',
            //     'event_label': 'MyApp v1.0.0'
            // });
            
            console.log('APK download initiated');
            
            // Optional: Show download started message
            showDownloadMessage();
        });
    }
    
    // Handle image loading errors
    const appImage = document.querySelector('.preview-img');
    if (appImage) {
        appImage.addEventListener('error', function() {
            this.style.display = 'none';
            showImagePlaceholder();
        });
    }
    
    // Show download message
    function showDownloadMessage() {
        const message = document.createElement('div');
        message.className = 'download-message';
        message.innerHTML = '✅ Download dimulai! Periksa folder Download Anda.';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #4CAF50;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-size: 14px;
            animation: slideDown 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            message.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 3000);
    }
    
    // Show image placeholder if image fails to load
    function showImagePlaceholder() {
        const imageContainer = document.querySelector('.app-image');
        if (imageContainer) {
            imageContainer.innerHTML = `
                <div class="image-placeholder">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#cbd5e0" stroke-width="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21,15 16,10 5,21"/>
                    </svg>
                    <p style="color: #718096; font-size: 12px; margin-top: 8px;">Gambar tidak tersedia</p>
                </div>
            `;
        }
    }
});

// CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
    
    .image-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        border-radius: 20px;
        background: #f8f9fa;
        border: 2px dashed #e2e8f0;
        margin: 0 auto;
    }
`;
document.head.appendChild(style);