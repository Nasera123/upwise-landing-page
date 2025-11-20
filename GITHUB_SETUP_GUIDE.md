# 📚 Panduan Setup GitHub Repository

Panduan lengkap untuk membuat dan mengelola repository GitHub untuk project Upwise Landing Page.

## 🚀 Langkah 1: Buat Repository di GitHub

### Melalui Website GitHub:

1. **Login ke GitHub**
   - Buka [github.com](https://github.com)
   - Login dengan akun Anda

2. **Buat Repository Baru**
   - Klik tombol **"New"** atau **"+"** di pojok kanan atas
   - Pilih **"New repository"**

3. **Isi Detail Repository**
   ```
   Repository name: upwise-landing-page
   Description: Landing page bergaya hero untuk download APK aplikasi Upwise
   Visibility: ✅ Public (atau Private jika ingin private)
   
   ❌ JANGAN centang "Add a README file"
   ❌ JANGAN centang "Add .gitignore"  
   ❌ JANGAN centang "Choose a license"
   ```

4. **Klik "Create repository"**

## 🔗 Langkah 2: Hubungkan Local Repository ke GitHub

Setelah repository GitHub dibuat, Anda akan melihat halaman dengan instruksi. Jalankan command berikut di terminal:

### Set Remote Origin:
```bash
git remote add origin https://github.com/USERNAME/upwise-landing-page.git
```
*Ganti `USERNAME` dengan username GitHub Anda*

### Rename Branch ke Main (Opsional):
```bash
git branch -M main
```

### Push ke GitHub:
```bash
git push -u origin main
```

## 🔐 Langkah 3: Authentication (Jika Diperlukan)

Jika diminta username/password saat push:

### Opsi 1: Personal Access Token (Recommended)
1. Buka GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Klik "Generate new token (classic)"
3. Pilih scope: `repo` (Full control of private repositories)
4. Copy token yang dihasilkan
5. Gunakan token sebagai password saat push

### Opsi 2: SSH Key
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to SSH agent
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
```
Kemudian tambahkan public key ke GitHub Settings → SSH and GPG keys

## 📝 Langkah 4: Update Repository Info

### Edit README.md:
Ganti placeholder di README.md:
```markdown
# Ganti ini:
[Live Demo](https://your-domain.com)
git clone https://github.com/username/upwise-landing-page.git

# Dengan:
[Live Demo](https://yourdomain.com)
git clone https://github.com/YOURUSERNAME/upwise-landing-page.git
```

### Commit dan Push Update:
```bash
git add README.md
git commit -m "Update repository URLs and demo link"
git push
```

## 🏷️ Langkah 5: Buat Release (Opsional)

1. **Buka repository di GitHub**
2. **Klik "Releases" → "Create a new release"**
3. **Isi detail release:**
   ```
   Tag version: v1.0.0
   Release title: Initial Release - Upwise Landing Page
   Description: 
   - ✨ Hero layout dengan background image
   - 🔴 Tombol download merah dengan efek hover
   - 📱 Responsive design untuk mobile dan desktop
   - 🎭 Background overlay dengan blur effect
   - ⚡ Smooth animations
   ```

## 🌟 Langkah 6: Setup GitHub Pages (Hosting Gratis)

Untuk hosting gratis di GitHub Pages:

### Opsi 1: Dari Branch Main
1. Repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save

### Opsi 2: GitHub Actions (Recommended untuk Laravel)
Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '8.1'
        
    - name: Install dependencies
      run: composer install --no-dev --optimize-autoloader
      
    - name: Copy public folder
      run: |
        mkdir -p dist
        cp -r public/* dist/
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔄 Langkah 7: Workflow Development

### Untuk Update Selanjutnya:
```bash
# 1. Edit file
# 2. Add changes
git add .

# 3. Commit dengan pesan yang jelas
git commit -m "feat: add new animation to download button"

# 4. Push ke GitHub
git push
```

### Pesan Commit yang Baik:
```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve mobile responsive issue"
git commit -m "style: update button colors"
git commit -m "docs: update README with new instructions"
```

## 🛡️ Langkah 8: Security & Best Practices

### File yang TIDAK boleh di-commit:
- `.env` (sudah ada di .gitignore)
- File APK yang besar (>100MB)
- Credential atau API keys
- File temporary

### Jika Accidentally Commit Sensitive Data:
```bash
# Remove file from git history
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch path/to/file' --prune-empty --tag-name-filter cat -- --all

# Force push
git push origin --force --all
```

## 📊 Langkah 9: Add Badges & Stats

Tambahkan badges ke README.md:
```markdown
![GitHub stars](https://img.shields.io/github/stars/USERNAME/upwise-landing-page)
![GitHub forks](https://img.shields.io/github/forks/USERNAME/upwise-landing-page)
![GitHub issues](https://img.shields.io/github/issues/USERNAME/upwise-landing-page)
![GitHub license](https://img.shields.io/github/license/USERNAME/upwise-landing-page)
```

## 🤝 Langkah 10: Collaboration Setup

### Untuk Tim Development:
1. **Settings → Manage access → Invite a collaborator**
2. **Branch protection rules** (Settings → Branches):
   - Require pull request reviews
   - Require status checks
   - Restrict pushes to matching branches

### Issue Templates:
Buat `.github/ISSUE_TEMPLATE/bug_report.md`:
```markdown
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior.

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.
```

## ✅ Checklist Final

- [ ] Repository dibuat di GitHub
- [ ] Local repository terhubung ke GitHub
- [ ] README.md sudah diupdate dengan info yang benar
- [ ] File placeholder sudah diganti dengan file asli
- [ ] .gitignore sudah sesuai
- [ ] First commit sudah di-push
- [ ] Repository URL sudah benar di README
- [ ] GitHub Pages setup (jika diperlukan)
- [ ] Release pertama sudah dibuat

## 🆘 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/upwise-landing-page.git
```

### Error: "Authentication failed"
- Gunakan Personal Access Token sebagai password
- Atau setup SSH key

### Error: "Large file detected"
```bash
# Remove large file from staging
git reset HEAD path/to/large/file

# Add to .gitignore
echo "path/to/large/file" >> .gitignore
```

---

🎉 **Selamat! Repository GitHub Anda sudah siap!**

Akses repository di: `https://github.com/USERNAME/upwise-landing-page`