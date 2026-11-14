/**
 * Royal Floral Wedding E-Invite Engine (Vanilla JS)
 * Ultra-lightweight, high-performance, mobile-touch optimized
 * Sourced 100% dynamically from data.js
 */

(function () {
  'use strict';

  // 1. State Management
  const data = window.WEDDING_DATA;
  if (!data) {
    console.error('Wedding data not found! Ensure data.js is loaded.');
    return;
  }

  let currentLang = data.config.defaultLanguage || 'gu';
  let currentTheme = (data.config && data.config.theme) || 'rosegold';
  let isAudioPlaying = false;
  let currentSlideIndex = 0;
  let currentCardIndex = 0;
  let carouselTimer = null;
  let touchStartY = 0;
  let touchStartX = 0;

  // DOM Elements Cache
  const gateScreen = document.getElementById('gateScreen');
  const gateCard = document.getElementById('gateCard');
  const gateLogo = document.getElementById('gateLogo');
  const gateCoupleNames = document.getElementById('gateCoupleNames');
  const gateInviteType = document.getElementById('gateInviteType');
  const gateEnterText = document.getElementById('gateEnterText');

  const topControls = document.getElementById('topControls');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const soundBars = document.getElementById('soundBars');

  const slideIndicator = document.getElementById('slideIndicator');
  const slideDots = document.querySelectorAll('.slide-dot');
  const whatsappRsvpBtn = document.getElementById('whatsappRsvpBtn');
  const themePickerContainer = document.getElementById('themePickerContainer');
  const themePaletteBtn = document.getElementById('themePaletteBtn');
  const themePickerMenu = document.getElementById('themePickerMenu');
  const weddingAudio = document.getElementById('weddingAudio');
  const mainContainer = document.getElementById('mainContainer');
  const cardSections = document.querySelectorAll('.card-section');

  const petalsContainer = document.getElementById('petalsContainer');
  const photoCarousel = document.getElementById('photoCarousel');
  const carouselDots = document.getElementById('carouselDots');

  // Countdown Elements Cache
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');
  const cdDaysLabel = document.getElementById('cdDaysLabel');
  const cdHoursLabel = document.getElementById('cdHoursLabel');
  const cdMinutesLabel = document.getElementById('cdMinutesLabel');
  const cdSecondsLabel = document.getElementById('cdSecondsLabel');
  let countdownInterval = null;

  // 1.1 Theme Manager
  function applyTheme(themeName) {
    currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    document.querySelectorAll('.theme-swatch').forEach(swatch => {
      swatch.classList.toggle('active', swatch.getAttribute('data-theme') === themeName);
    });
  }

  // 1.2 Asset URL Resolver (cache-busting support)
  function resolveAsset(url) {
    if (!url) return '';
    const ver = (data.config && data.config.assetVersion) || '2.3';
    return url.includes('?') ? url : `${url}?v=${ver}`;
  }

  // 2. Single Top-Right Language Switcher Renderer (Dynamic from data.config.languages)
  function renderLanguageSwitchers() {
    const container = document.getElementById('topLangSwitch');
    if (!container) return;

    const languages = (data.config && data.config.languages) || [
      { code: 'gu', label: 'ગુજરાતી' },
      { code: 'en', label: 'English' }
    ];

    container.innerHTML = languages.map(lang => `
      <button type="button" class="lang-option-btn ${lang.code === currentLang ? 'active' : ''}" data-lang="${lang.code}">
        ${lang.label}
      </button>
    `).join('');

    // Attach click listener to buttons
    container.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== currentLang) {
          currentLang = selectedLang;
          renderAll();
        }
      });
    });
  }

  // 2.1 Live Wedding Countdown Engine
  function updateCountdown() {
    const elDays = document.getElementById('cdDays');
    const elHours = document.getElementById('cdHours');
    const elMinutes = document.getElementById('cdMinutes');
    const elSeconds = document.getElementById('cdSeconds');

    const targetStr = (data.config && data.config.countdown && data.config.countdown.targetDate) || '2026-12-05T16:15:00+05:30';
    const targetTime = new Date(targetStr).getTime();
    const now = Date.now();
    const diff = Math.max(0, targetTime - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (elDays) elDays.textContent = String(days).padStart(2, '0');
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, '0');
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  function startCountdown() {
    updateCountdown();
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
  }

// 3. Render All Content from data.js
function renderAll() {
  const langData = data[currentLang] || data.en;
  const cfg = data.config;

  // Page Title & Body Language Classes
  document.title = cfg.title;
  const pageTitleElem = document.getElementById('pageTitle');
  if (pageTitleElem) pageTitleElem.textContent = cfg.title;

  document.documentElement.lang = currentLang;
  document.body.classList.remove('lang-en', 'lang-gu');
  document.body.classList.add(`lang-${currentLang}`);

  // Gate Screen (Groom & Bride)
  gateLogo.src = resolveAsset(cfg.logoImage);
  gateCoupleNames.textContent = `${langData.couple.groom.name} & ${langData.couple.bride.name}`;
  gateInviteType.textContent = langData.invitationType;
  gateEnterText.textContent = langData.tapToEnter;

  // Render Language Switchers
  renderLanguageSwitchers();

  // WhatsApp RSVP Button & Label
  if (cfg.rsvp && cfg.rsvp.whatsappNumber) {
    const encodedMsg = encodeURIComponent(cfg.rsvp.defaultMessage);
    whatsappRsvpBtn.href = `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${encodedMsg}`;
  }
  const rsvpTextElem = document.getElementById('whatsappRsvpText');
  if (rsvpTextElem) {
    rsvpTextElem.textContent = langData.rsvpBtnText || 'RSVP';
  }

  // CARD 1: Hero & Save the Date (Groom & Bride)
  const invocationsBox = document.getElementById('heroInvocations');
  invocationsBox.innerHTML = langData.spiritualInvocations
    .map(line => `<div>${line}</div>`)
    .join('');

  document.getElementById('heroLogo').src = resolveAsset(cfg.logoImage);
  document.getElementById('heroCoupleNames').textContent = `${langData.couple.groom.name} & ${langData.couple.bride.name}`;
  document.getElementById('heroDate').textContent = langData.eventDetails.date;
  document.getElementById('heroHinduDate').textContent = langData.eventDetails.hinduCalendarDate;

  // Update Countdown Numbers and Labels dynamically from data.js
  updateCountdown();
  const elDaysLabel = document.getElementById('cdDaysLabel');
  const elHoursLabel = document.getElementById('cdHoursLabel');
  const elMinutesLabel = document.getElementById('cdMinutesLabel');
  const elSecondsLabel = document.getElementById('cdSecondsLabel');
  const cdLabels = langData.countdownLabels || {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Mins',
    seconds: 'Secs'
  };
  if (elDaysLabel) elDaysLabel.textContent = cdLabels.days;
  if (elHoursLabel) elHoursLabel.textContent = cdLabels.hours;
  if (elMinutesLabel) elMinutesLabel.textContent = cdLabels.minutes;
  if (elSecondsLabel) elSecondsLabel.textContent = cdLabels.seconds;

  const quoteBox = document.getElementById('heroQuote');
  if (langData.inspirationalQuote) {
    quoteBox.textContent = `"${langData.inspirationalQuote}"`;
    quoteBox.style.display = 'block';
  } else {
    quoteBox.style.display = 'none';
  }
  document.getElementById('heroSwipeHint').textContent = langData.swipeUpHint;

  // CARD 2: Couple Lineage (Groom first, then Bride)
  document.getElementById('groomName').textContent = langData.couple.groom.fullName;
  document.getElementById('groomVillage').textContent = langData.couple.groom.village;
  document.getElementById('groomParents').textContent = langData.couple.groom.parents;
  document.getElementById('groomGrandparents').textContent = langData.couple.groom.grandparents;

  document.getElementById('brideName').textContent = langData.couple.bride.fullName;
  document.getElementById('brideVillage').textContent = langData.couple.bride.village;
  document.getElementById('brideParents').textContent = langData.couple.bride.parents;
  document.getElementById('brideGrandparents').textContent = langData.couple.bride.grandparents;

  // CARD 3: Wedding Schedule
  document.getElementById('scheduleHeading').textContent = langData.eventDetails.scheduleTitle;
  const timelineList = document.getElementById('timelineList');
  timelineList.innerHTML = langData.eventDetails.schedule.map(item => `
      <div class="timeline-item">
        <div class="timeline-row">
          <span class="timeline-event">${item.event}</span>
          <span class="timeline-time">${item.time}</span>
        </div>
        ${item.notes ? `<div class="timeline-notes">${item.notes}</div>` : ''}
      </div>
    `).join('');

  // CARD 4: Darshanabhilashi
  document.getElementById('darshanHeading').textContent = langData.family.darshanabhilashi.title;
  const darshanList = document.getElementById('darshanMembersList');
  darshanList.innerHTML = langData.family.darshanabhilashi.members.map(member => `
      <div class="member-pill">${member}</div>
    `).join('');

  // CARD 5: Well-Wishers, Mameru & Divine Blessings
  document.getElementById('wellWishersTitle').textContent = langData.family.wellWishers.title;
  document.getElementById('wellWishersList').textContent = langData.family.wellWishers.members.join('  •  ');

  document.getElementById('mameruTitle').textContent = langData.family.mameru.title;
  document.getElementById('mameruVillage').textContent = langData.family.mameru.village;
  document.getElementById('mameruGrandparents').textContent = langData.family.mameru.grandparents;

  const mameruUncles = document.getElementById('mameruUncles');
  mameruUncles.innerHTML = langData.family.mameru.unclesAndAunts.map(uncle => `
      <div class="uncle-tag">${uncle}</div>
    `).join('');

  document.getElementById('mameruCousins').textContent = langData.family.mameru.cousins.join('  •  ');

  document.getElementById('divineTitle').textContent = langData.family.divineBlessings.title;
  document.getElementById('divineList').textContent = langData.family.divineBlessings.members.join('  •  ');

  // CARD 6: Venue & Location Map
  document.getElementById('venueTitle').textContent = langData.eventDetails.venueTitle;
  document.getElementById('venueName').textContent = langData.eventDetails.venue.name;
  document.getElementById('venueAddress').textContent = langData.eventDetails.venue.address;
  document.getElementById('venuePhone').textContent = langData.eventDetails.venue.phone;

  const mapFrame = document.getElementById('mapFrame');
  if (cfg.venueMap && cfg.venueMap.embedUrl) {
    mapFrame.src = cfg.venueMap.embedUrl;
  }

  const directMapBtn = document.getElementById('directMapBtn');
  if (cfg.venueMap && cfg.venueMap.directMapUrl) {
    directMapBtn.href = cfg.venueMap.directMapUrl;
  }
  const directBtnElem = document.getElementById('directionBtnText');
  if (directBtnElem) {
    directBtnElem.textContent = langData.directionBtnText || 'Open in Google Maps';
  }

  document.getElementById('closingScript').textContent = langData.seeYouThere;
  document.getElementById('closingSubtext').textContent = langData.withBlessings;
}

// 4. Audio Setup & Playback
let hasSeekedInitialTime = false;

function seekToStartTime() {
  const audioCfg = (data.config && data.config.music) || {};
  const offset = typeof audioCfg.startTimeSeconds === 'number' ? audioCfg.startTimeSeconds : 0;
  if (offset > 0 && !hasSeekedInitialTime) {
    try {
      weddingAudio.currentTime = offset;
      hasSeekedInitialTime = true;
    } catch (err) {
      console.warn('Could not seek audio immediately:', err);
    }
  }
}

function initAudio() {
  const audioCfg = (data.config && data.config.music) || {};
  if (!audioCfg || !audioCfg.src) return;

  weddingAudio.src = audioCfg.src;
  weddingAudio.volume = typeof audioCfg.volume === 'number' ? audioCfg.volume : 0.6;

  // Listen for metadata to seek as soon as duration/timeline is ready
  weddingAudio.addEventListener('loadedmetadata', seekToStartTime, { once: true });
  weddingAudio.addEventListener('canplay', seekToStartTime, { once: true });

  // Guard on first timeupdate: if browser starts playback at 0s, immediately jump to offset
  weddingAudio.addEventListener('timeupdate', function onFirstTimeUpdate() {
    const offset = typeof audioCfg.startTimeSeconds === 'number' ? audioCfg.startTimeSeconds : 0;
    if (offset > 0 && !hasSeekedInitialTime && weddingAudio.currentTime < offset - 0.5) {
      try {
        weddingAudio.currentTime = offset;
        hasSeekedInitialTime = true;
        weddingAudio.removeEventListener('timeupdate', onFirstTimeUpdate);
      } catch (e) { }
    } else if (weddingAudio.currentTime >= offset - 0.5) {
      hasSeekedInitialTime = true;
      weddingAudio.removeEventListener('timeupdate', onFirstTimeUpdate);
    }
  });

  weddingAudio.load();
}

function playAudio() {
  const audioCfg = (data.config && data.config.music) || {};
  const offset = typeof audioCfg.startTimeSeconds === 'number' ? audioCfg.startTimeSeconds : 0;

  // Seek right before play
  seekToStartTime();

  const playPromise = weddingAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isAudioPlaying = true;
      soundBars.classList.remove('paused');
      // Double-check seek after play initiates
      if (offset > 0 && (!hasSeekedInitialTime || weddingAudio.currentTime < 1)) {
        try {
          weddingAudio.currentTime = offset;
          hasSeekedInitialTime = true;
        } catch (e) { }
      }
    }).catch(err => {
      console.warn('Audio play prevented by browser:', err);
      isAudioPlaying = false;
      soundBars.classList.add('paused');
    });
  }
}

function pauseAudio() {
  weddingAudio.pause();
  isAudioPlaying = false;
  soundBars.classList.add('paused');
}

function toggleAudio() {
  if (isAudioPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

// 5. Gate Screen Interaction ("Tap to Open")
function openInvitation() {
  gateScreen.classList.add('opened');

  // Show floating UI controls
  musicToggleBtn.style.display = 'flex';
  slideIndicator.style.display = 'flex';
  whatsappRsvpBtn.style.display = 'flex';
  if (themePickerContainer) themePickerContainer.style.display = 'flex';

  // Seek to start time on user gesture and play
  seekToStartTime();
  playAudio();

  // Start photo carousel
  startPhotoCarousel();

  // Activate initial section animation
  if (cardSections.length > 0) {
    cardSections[0].classList.add('active');
  }
}

// 6. Falling Rose Petals Generator
function createPetals() {
  const isMobile = window.innerWidth <= 600 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  const petalCount = isMobile ? 16 : 26;

  petalsContainer.innerHTML = '';
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const size = Math.floor(Math.random() * 12) + 12; // 12px to 24px
    const left = Math.random() * 96; // 0% to 96%
    const duration = Math.random() * 10 + 12; // 12s to 22s
    const delay = Math.random() * 12; // 0s to 12s
    const opacity = (Math.random() * 0.35 + 0.5).toFixed(2);

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.opacity = opacity;

    petalsContainer.appendChild(petal);
  }
}

// 7. Photo Slideshow Carousel
function setupPhotoCarousel() {
  const photos = data.config.photos || [];
  if (photos.length === 0) return;

  photoCarousel.querySelectorAll('.carousel-slide').forEach(s => s.remove());
  carouselDots.innerHTML = '';

  photos.forEach((src, idx) => {
    const img = document.createElement('img');
    img.src = resolveAsset(src);
    img.alt = `Couple Photo ${idx + 1}`;
    img.className = `carousel-slide ${idx === 0 ? 'active' : ''}`;
    img.setAttribute('loading', 'eager');
    img.setAttribute('decoding', 'async');
    photoCarousel.insertBefore(img, carouselDots);

    const dot = document.createElement('div');
    dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx);
    });
    carouselDots.appendChild(dot);
  });

  // Touch swipe left/right for carousel
  let carouselStartX = 0;
  photoCarousel.addEventListener('touchstart', (e) => {
    carouselStartX = e.touches[0].clientX;
    clearInterval(carouselTimer);
  }, { passive: true });

  photoCarousel.addEventListener('touchend', (e) => {
    const diffX = carouselStartX - e.changedTouches[0].clientX;
    if (diffX > 40) {
      nextSlide();
    } else if (diffX < -40) {
      prevSlide();
    }
    startPhotoCarousel();
  }, { passive: true });
}

function goToSlide(index) {
  const slides = photoCarousel.querySelectorAll('.carousel-slide');
  const dots = carouselDots.querySelectorAll('.carousel-dot');
  if (slides.length === 0) return;

  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentSlideIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

function startPhotoCarousel() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(nextSlide, 4500);
}

// 8. Full-Screen Snap Scroll & Instant Touch UX
function setupSnapNavigation() {
  // Intersection Observer for instant slide indicator tracking
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-index'), 10);
        currentCardIndex = index;
        updateIndicator(index);
        entry.target.classList.add('active');
      }
    });
  }, {
    root: mainContainer,
    threshold: 0.35
  });

  cardSections.forEach(section => observer.observe(section));

  // Clicking indicator dots
  slideDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      scrollToCard(targetIndex);
    });
  });

  // Keyboard Arrow Navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (currentCardIndex < cardSections.length - 1) {
        e.preventDefault();
        scrollToCard(currentCardIndex + 1);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentCardIndex > 0) {
        e.preventDefault();
        scrollToCard(currentCardIndex - 1);
      }
    }
  });
}

function scrollToCard(index) {
  if (index >= 0 && index < cardSections.length) {
    cardSections[index].scrollIntoView({ behavior: 'smooth' });
  }
}

function updateIndicator(index) {
  slideDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// 9. Event Listeners Setup
function initEventListeners() {
  // Gate card tap (only triggers if not clicking buttons or interactive elements)
  gateCard.addEventListener('click', (e) => {
    if (e.target.closest('.lang-switch-pill')) return;
    openInvitation();
  });

  // Audio toggle
  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAudio();
  });

  // Theme palette toggle & swatch selection
  if (themePaletteBtn && themePickerMenu) {
    themePaletteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themePickerMenu.classList.toggle('active');
    });

    document.querySelectorAll('.theme-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetTheme = swatch.getAttribute('data-theme');
        if (targetTheme) {
          applyTheme(targetTheme);
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#themePickerContainer')) {
        themePickerMenu.classList.remove('active');
      }
    });
  }

  // Pause audio when page visibility changes to hidden (optional best practice)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isAudioPlaying) {
      weddingAudio.pause();
    } else if (!document.hidden && isAudioPlaying) {
      weddingAudio.play().catch(() => { });
    }
  });
}

// 10. Bootstrap Application
function init() {
  applyTheme(currentTheme);
  renderAll();
  startCountdown();
  initAudio();
  createPetals();
  setupPhotoCarousel();
  setupSnapNavigation();
  initEventListeners();
}

// Run on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
}) ();
