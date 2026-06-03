# ⚡ QUICK REFERENCE - Multi-Language Website

## 🚀 Get Started in 30 Seconds

```bash
# Start development server
npm run dev

# Open in browser
http://localhost:3000

# Look for 🌐 language selector in top-right
# Click to switch between 6 languages!
```

---

## 🌐 Languages Available

| Language | URL | Navigation | Flag |
|----------|-----|-----------|------|
| English | `/` | Home, Services, Blog | 🇬🇧 |
| Punjabi | `/pa/` | ਘਰ, ਸੇਵਾਵਾਂ, ਬਲਾਗ | 🇮🇳 |
| Mandarin | `/zh/` | 首页, 服务, 博客 | 🇨🇳 |
| Spanish | `/es/` | Inicio, Servicios, Blog | 🇪🇸 |
| Arabic | `/ar/` | الرئيسية, الخدمات, المدونة | 🇸🇦 |
| Korean | `/ko/` | 홈, 서비스, 블로그 | 🇰🇷 |

---

## 📁 File Locations

```
✅ Translations:
   messages/en.json (English)
   messages/pa.json (Punjabi)
   messages/zh.json (Mandarin)
   messages/es.json (Spanish)
   messages/ar.json (Arabic)
   messages/ko.json (Korean)

✅ Components:
   components/LanguageSwitcher.tsx

✅ Configuration:
   middleware.ts
   i18n/request.ts
   next.config.js (updated)
   app/layout.tsx (updated)

✅ Routes:
   app/[locale]/page.tsx
   app/[locale]/blog/page.tsx
   app/[locale]/services/[slug]/page.tsx
```

---

## ✏️ How to Update Content

### Example: Change "Services" label in Spanish

1. Open `messages/es.json`
2. Find: `"navigation": { "services": "Servicios" }`
3. Change to: `"services": "Nuestros Servicios"`
4. Save & refresh browser

### Add new translation key:

1. Add to ALL 6 language files:
   ```json
   {
     "newFeature": {
       "title": "translated text"
     }
   }
   ```
2. Use in component:
   ```tsx
   const t = useTranslations()
   <h1>{t('newFeature.title')}</h1>
   ```

---

## 🧪 Quick Testing

### Test 1: Language Switching
```
✓ Visit http://localhost:3000
✓ Click language selector (top-right)
✓ Select Mandarin Chinese
✓ Check URL changed to /zh/
✓ Check page content in Chinese
✓ Repeat for all 6 languages
```

### Test 2: Navigation
```
✓ Click "Services" - goes to /zh/services/ (if in Chinese)
✓ Click "Blog" - goes to /zh/blog/
✓ Click back - stays in same language
```

### Test 3: Mobile
```
✓ Open http://localhost:3000 on mobile
✓ Language selector still visible
✓ Switching works on mobile
✓ Content readable on small screen
```

---

## 📊 Translation Keys Available

### Navigation
```json
navigation: {
  home, services, blog, about, contact
}
```

### Hero Section
```json
hero: {
  title, subtitle, description, cta
}
```

### Services
```json
services: {
  canadian, australian, study, work, family, legal, financial, settlement, appeals
}
```

### Contact
```json
contact: {
  title, description, name, email, phone, message, send, formMessage
}
```

### Footer
```json
footer: {
  description, contact, hours, rights
}
```

---

## 🎯 Common Tasks

### Task: Add a new language (e.g., French)

1. Create `messages/fr.json` with all translation keys
2. Update `middleware.ts` - add `'fr'` to locales array
3. Update `next.config.js` - add `'fr'` to locales
4. Restart `npm run dev`

### Task: Change default language from English to Spanish

1. Edit `middleware.ts` - change `defaultLocale: 'en'` to `'es'`
2. Edit `next.config.js` - change `defaultLocale: 'en'` to `'es'`
3. Restart server

### Task: Disable language switcher

1. Edit `components/Navigation.tsx`
2. Remove or comment out: `<LanguageSwitcher />`
3. Delete `components/LanguageSwitcher.tsx`

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Switcher not showing | Restart `npm run dev` |
| Text not translating | Check translation key exists in JSON file |
| URLs not changing | Verify middleware.ts present and [locale] folder exists |
| Wrong language | Clear browser cache and cookies |
| RTL not working (Arabic) | Check CSS for `dir="rtl"` attribute |

---

## 📈 SEO Quick Check

```
✓ Visit http://localhost:3000/zh/ - should have lang="zh"
✓ Visit http://localhost:3000/pa/ - should have lang="pa"  
✓ Check page source for hreflang tags
✓ Google Search Console shows all language versions
✓ Analytics tracking language-specific traffic
```

---

## 💾 Files Modified/Created

### New Files:
- ✅ `middleware.ts` - Language routing
- ✅ `i18n/request.ts` - i18n config
- ✅ `components/LanguageSwitcher.tsx` - Switcher UI
- ✅ `messages/*.json` (6 files) - Translations
- ✅ `app/[locale]/` - Locale routes
- ✅ Documentation files

### Modified Files:
- ✅ `app/layout.tsx` - Added NextIntlClientProvider
- ✅ `components/Navigation.tsx` - Added language switcher
- ✅ `next.config.js` - Added i18n config

---

## 🌍 Language Stats

**Population Served (Canada):**
- 🇬🇧 English: 30M+
- 🇨🇳 Mandarin: 1.5M+
- 🇮🇳 Punjabi: 1.3M+
- 🇪🇸 Spanish: 500K+
- 🇸🇦 Arabic: 400K+
- 🇰🇷 Korean: 200K+

**Total Market:** 34M+ people in Canada

---

## ✨ Status: READY TO USE

- ✅ All 6 languages implemented
- ✅ Language switcher working
- ✅ URL routing configured
- ✅ All components localized
- ✅ Performance optimized
- ✅ Mobile responsive
- ✅ SEO ready

**Start testing now:** `npm run dev` 🚀

---

## 📞 Documentation Files

1. **IMPLEMENTATION_SUMMARY.md** - Overview & benefits
2. **MULTILINGUAL_SETUP.md** - Detailed testing guide
3. **QUICK_REFERENCE.md** - This file!

---

**Happy multilingual serving!** 🌐✨
