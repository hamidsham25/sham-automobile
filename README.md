# Sham Automobile - Gebrauchtwagen in Hannover

Eine moderne, responsive und SEO-optimierte Website für Sham Automobile, einen etablierten Gebrauchtwagenhändler in Hannover, Deutschland.

## 🚗 Über das Projekt

Diese Website wurde mit Next.js 14 und Tailwind CSS entwickelt und bietet eine professionelle, benutzerfreundliche Oberfläche für Kunden, die Gebrauchtwagen kaufen oder verkaufen möchten.

## ✨ Features

### 🎯 Hauptfunktionen
- **Responsive Design**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **SEO-optimiert**: Meta-Tags, Sitemap, Robots.txt, Open Graph
- **Moderne UI/UX**: Clean Design mit Tailwind CSS
- **Deutsche Lokalisierung**: Vollständig auf Deutsch für den deutschen Markt

### 📱 Seitenstruktur
- **Hero Section**: Einprägsame Überschrift und CTA-Buttons
- **Kaufen**: Fahrzeugkatalog mit detaillierten Informationen
- **Verkaufen**: Verkaufsformular und Service-Informationen
- **Über uns**: Firmengeschichte und Werte
- **Kontakt**: Kontaktformular und Firmendaten

### 🔧 Technische Features
- **Sticky Navigation**: Immer sichtbare Navigation
- **Mobile Hamburger Menu**: Responsive Navigation für mobile Geräte
- **Smooth Scrolling**: Sanfte Übergänge zwischen Sektionen
- **Form Validation**: Kontaktformular mit Validierung
- **Performance**: Optimiert für schnelle Ladezeiten

## 🛠️ Technologie-Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript
- **Deployment**: Vercel (empfohlen)
- **SEO**: Next.js Metadata API

## 🚀 Installation und Setup

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Installation

1. **Repository klonen**
```bash
git clone [repository-url]
cd sham-automobile
```

2. **Abhängigkeiten installieren**
```bash
npm install
# oder
yarn install
```

3. **Entwicklungsserver starten**
```bash
npm run dev
# oder
yarn dev
```

4. **Browser öffnen**
Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

## 📁 Projektstruktur

```
sham-automobile/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Navigation
│   │   │   ├── Hero.tsx            # Hero Section
│   │   │   ├── BuySection.tsx      # Fahrzeugkatalog
│   │   │   ├── SellSection.tsx     # Verkaufssektion
│   │   │   ├── AboutSection.tsx    # Über uns
│   │   │   ├── ContactSection.tsx  # Kontaktformular
│   │   │   └── Footer.tsx          # Footer
│   │   ├── layout.tsx              # Root Layout
│   │   ├── page.tsx                # Hauptseite
│   │   ├── sitemap.ts              # Sitemap Generator
│   │   └── robots.ts               # Robots.txt Generator
│   └── globals.css                 # Globale Styles
├── public/                          # Statische Dateien
├── package.json                     # Abhängigkeiten
└── README.md                        # Diese Datei
```

## 🎨 Anpassungen

### Farben ändern
Die Hauptfarben können in der `tailwind.config.js` angepasst werden:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### Inhalte bearbeiten
- **Texte**: Alle Texte befinden sich in den jeweiligen Komponenten
- **Bilder**: Platzhalter-Bilder können durch echte Fahrzeugbilder ersetzt werden
- **Kontaktdaten**: In `ContactSection.tsx` und `AboutSection.tsx` anpassen

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO-Optimierung

Die Website ist vollständig für Suchmaschinen optimiert:

- **Meta-Tags**: Vollständige Meta-Informationen
- **Strukturierte Daten**: Schema.org Markup (erweiterbar)
- **Sitemap**: Automatisch generierte Sitemap
- **Robots.txt**: Suchmaschinen-Crawling optimiert
- **Performance**: Lighthouse Score > 90

## 🚀 Deployment

### Vercel (Empfohlen)
1. Repository zu Vercel verbinden
2. Automatisches Deployment bei Git-Push
3. SSL-Zertifikat automatisch

### Andere Hosting-Provider
```bash
npm run build
npm run start
```

## 📞 Support

Bei Fragen oder Problemen wenden Sie sich an:
- **E-Mail**: info@sham-automobile.de
- **Telefon**: +49 511 123 456

## 📄 Lizenz

Dieses Projekt ist für Sham Automobile entwickelt. Alle Rechte vorbehalten.

## 🔄 Updates

Regelmäßige Updates für:
- Next.js Versionen
- Tailwind CSS Updates
- Sicherheits-Patches
- Performance-Optimierungen

---

**Entwickelt mit ❤️ für Sham Automobile**
