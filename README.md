# 💍 Royal Floral Wedding E-Invite

A lightweight, mobile-first, luxury wedding e-invitation crafted with pure **HTML5, CSS3, and Vanilla JavaScript**. Recreated faithfully from [riya-abhishek-wedding.vercel.app](https://riya-abhishek-wedding.vercel.app/) with high performance, smooth mobile touch/swipe gestures, romantic floating petals, background music player, photo slideshow, and multi-language support (English & Gujarati / Hindi).

---

## ✨ Features

- **⚡ Ultra-Lightweight & Fast**: Zero external frameworks, zero bundlers, pure native CSS/JS. Loads in milliseconds even on 3G/4G connections.
- **📱 Mobile-First Touch & Swipe UX**:
  - Full-screen snap scroll (`100dvh` card presentation).
  - Native swipe up/down gesture support to navigate cards smoothly.
  - Horizontal swipeable photo slideshow.
  - Side progress indicator dots & scroll bounce cues.
- **🎵 Romantic Background Music**:
  - Unlocked automatically via the "Tap to Open Invitation" gesture (compliant with modern iOS Safari & Android Chrome autoplay policies).
  - Floating top-left audio controller with live animated sound equalizer bars.
  - Configurable song start offset (e.g. skip instrumental intro to start right at the vocal hook).
- **🌸 Visual Aesthetics**:
  - Warm Alabaster background (`#FAF9F6`) with animated floating ambient glow blobs (Rose Gold, Champagne, Blush).
  - Organic falling rose petals that sway and rotate 360° with device-aware performance throttling.
  - Frosted glassmorphism cards (`backdrop-filter: blur(14px)`).
  - Luxury typography: *Luxurious Script* for romantic titles and *Playfair Display* for classic serif headings.
- **🌐 1-Click Language Switcher**:
  - Seamlessly switch between English and Gujarati (or Hindi) instantly without reloading or interrupting music.
- **💬 Direct WhatsApp RSVP**:
  - Floating WhatsApp button with pre-filled confirmation message and direct link to the host.
- **📍 Venue & Navigation**:
  - Embedded responsive Google Map iframe and 1-tap "Open in Google Maps" button.
- **🗂️ 100% Modifiable via Configuration**:
  - All written content, names, dates, quotes, events, and family trees are kept in `data.js`.
  - All images and audio reside cleanly in the `assets/` folder.

---

## 📁 Project Structure

```
wedding-e-invite/
├── index.html          # Clean semantic HTML5 layout
├── style.css           # Pure modern CSS design & animations
├── app.js              # Vanilla JS engine (swipe, audio, petals, render)
├── data.js             # Central data file (edit all text/names/dates here!)
├── README.md           # Documentation & song recommendations
└── assets/             # Replaceable media assets
    ├── logo.png        # Monogram / Ganesh / Couple logo
    ├── couple1.jpeg    # Couple photo 1 (slideshow)
    ├── couple2.jpeg    # Couple photo 2 (slideshow)
    ├── couple3.jpeg    # Couple photo 3 (slideshow)
    └── wedding_song.mp3 # Background audio track (Din Shagna Da)
```

---

## 🚀 Quick Start & Preview

You can preview the e-invite immediately using Python's built-in web server:

```bash
cd /Users/heetgala/.gemini/antigravity/scratch/wedding-e-invite
python3 -m http.server 8080
```

Open your browser at:
👉 **`http://localhost:8080`**

*(Or if using VS Code, right-click `index.html` and click "Open with Live Server".)*

---

## ✏️ How to Customize Names and Content

Open **`data.js`**. You will find clean configuration objects for `config`, `en` (English), and `gu` (Gujarati):

### 1. General Settings (`config`):
```javascript
config: {
  title: "Riya & Abhishek Wedding Invitation",
  logoImage: "assets/logo.png",
  photos: [
    "assets/couple1.jpeg",
    "assets/couple2.jpeg",
    "assets/couple3.jpeg"
  ],
  music: {
    src: "assets/wedding_song.mp3",
    startTimeSeconds: 8, // Timestamp in seconds to start playing
    volume: 0.6          // Volume from 0.0 to 1.0
  },
  rsvp: {
    whatsappNumber: "919757396440", // Your country code + 10-digit number
    defaultMessage: "Hello! We will gladly be attending the wedding!"
  },
  venueMap: {
    embedUrl: "https://www.google.com/maps/embed?...",
    directMapUrl: "https://maps.app.goo.gl/..."
  },
  defaultLanguage: "gu" // "en" for English or "gu" for Gujarati
}
```

### 2. Modifying Couple & Family Details (`en` / `gu`):
- **Couple Details**: Change bride & groom names, parents' names, grandparents, and native village.
- **Inspirational Quote / Shloka**: Modify or translate the introductory poetic quote.
- **Schedule of Events**: Add, remove, or edit events (e.g., Mehendi, Sangeet, Haldi, Samaiyu, Hast Melap, Reception) with custom timings and dietary/chauvihar notes.
- **Darshanabhilashi & Well-Wishers**: Update the lists of welcoming family members, elders, aunts, uncles, and cousins.
- **Venue**: Change banquet hall name, street address, and contact numbers.

---

## 🖼️ How to Replace Photos & Images

Simply add or overwrite your images in the `assets/` directory:

1. **Logo / Monogram**:
   - Save your logo as `assets/logo.png` (Square 1:1 ratio, 500x500px recommended).
2. **Couple Photos**:
   - Save your photos as `assets/couple1.jpeg`, `assets/couple2.jpeg`, etc.
   - You can add more photos by simply listing them in the `config.photos` array in `data.js`.
3. **Optimization Tip**:
   - Compress your photos using [tinypng.com](https://tinypng.com) or Squoosh to keep each image under **150 KB**. This guarantees instantaneous loading on mobile data.

---

## 🎶 Suggestions for Background Hindi Wedding Songs

Here are the top-rated Hindi wedding songs that evoke emotion, royalty, and celebration for an e-invite. Choose the one that matches your wedding vibe!

| Song Name | Movie / Artist | Vibe & Mood | Recommended Start Offset (`startTimeSeconds`) |
| :--- | :--- | :--- | :---: |
| **Din Shagna Da** *(Included)* | *Phillauri* (Jasleen Royal) | Pure emotional, soulful, quintessential bridal elegance | `8` |
| **Madhanya** | Rahul Vaidya & Asees Kaur | Traditional folk emotion, tears of joy, heartfelt blessings | `15` |
| **Kudmayi** (Film Version) | *Rocky Aur Rani* (Shahid Mallya) | Grand royal Punjabi/Hindi wedding celebration | `24` |
| **Kabira (Encore) / Mangalyam** | *Yeh Jawaani Hai Deewani* (Harshdeep Kaur) | Soul-stirring nostalgia, warm family love | `12` |
| **Ranjha** (Sid-Kiara Wedding Version)| Jasleen Royal & B Praak | Dreamy modern romance, fairy-tale wedding feel | `0` |
| **Peer Vi Tu** | Sachin-Jigar & Harshdeep Kaur | Divine spiritual romance, Sufi love | `10` |
| **Mast Magan** | *2 States* (Arijit Singh & Chinmayi) | Sweet, uplifting romantic melody | `18` |
| **Kesariya** (Wedding Acoustic / Flute) | Arijit Singh / Instrumental | Melodious, universally recognized, joyful | `14` |
| **Mangalyam Tantunanena** | Traditional Shehnai / Flute Instrumental | Auspicious sacred Vedic muhurat feel | `0` |
| **Aaj Sajeya** | Alistair & Goldie Sohel / Shenaz | Vibrant, sweet and modern bridal celebration | `10` |

### 💡 How to Change the Song:
1. Obtain your desired MP3 song track.
2. *(Recommended)* Trim or compress it to ~2 MB (using free tools like [AudioMass](https://audiomass.co/) or [FreeConvert](https://www.freeconvert.com/audio-compressor)).
3. Place the `.mp3` file into `assets/` (e.g. `assets/my_wedding_song.mp3`).
4. In `data.js`, update:
   ```javascript
   music: {
     src: "assets/my_wedding_song.mp3",
     title: "Your Song Name",
     startTimeSeconds: 15,
     volume: 0.6
   }
   ```

---

## 🌐 Free 1-Click Deployment (Vercel, Netlify, or GitHub Pages)

### Option 1: Deploy with Vercel (Fastest & Free)
1. Install Vercel CLI: `npm i -g vercel` (or drag & drop the folder at [vercel.com](https://vercel.com)).
2. Run `vercel` inside the `wedding-e-invite` folder.
3. Your invite is live with a custom HTTPS URL in 30 seconds!

### Option 2: Deploy with Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `wedding-e-invite` folder into the browser window.
3. Done! You get an instant shareable link.

### Option 3: GitHub Pages
1. Push this folder to a GitHub repository.
2. In repository **Settings** -> **Pages**, set branch to `main` and folder to `/ (root)`.
3. Save, and your invite will be published at `https://<username>.github.io/<repo-name>/`.

