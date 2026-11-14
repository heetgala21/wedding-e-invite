/**
 * Wedding E-Invite Configuration File
 * ====================================
 * Customize all names, dates, ceremonies, family details, venue,
 * WhatsApp RSVP, and background music in this single file.
 */

window.WEDDING_DATA = {
  // General Configuration & Assets
  config: {
    title: "Saumya & Manasvi Wedding Invitation",
    coupleInitials: "S & M",
    assetVersion: "2.3",
    logoImage: "assets/logo2.png",
    photos: [
      "assets/couple1.jpeg",
      "assets/couple2.jpeg",
      "assets/couple3.jpeg",
      "assets/couple4.jpeg",
      "assets/couple5.jpeg",
    ],
    // Audio Configuration
    // Recommended songs:
    // 1. "Kudmayi (Film Version)" - Rocky Aur Rani (Shahid Mallya) -> startTimeSeconds: 24
    // 2. "Din Shagna Da" - Phillauri (Jasleen Royal) -> startTimeSeconds: 8
    // 3. "Mangalyam / Kabira" - YJHD (Harshdeep Kaur) -> startTimeSeconds: 12
    // 4. "Madhanya" - Rahul Vaidya & Asees Kaur -> startTimeSeconds: 15
    // 5. "Ranjha (Sid-Kiara Wedding Version)" - Jasleen Royal -> startTimeSeconds: 0
    music: {
      src: "assets/wedding_song_012_105.mp3", // Precisely trimmed from 0:12 to 1:05
      title: "Wedding Song",
      startTimeSeconds: 0,
      volume: 0.6
    },
    // WhatsApp RSVP details
    rsvp: {
      whatsappNumber: "919892925976", // Format: country code + number (no '+' or spaces)
      defaultMessage: "Hello! We will gladly be attending the wedding of Saumya & Manasvi!"
    },
    // Google Maps Navigation
    venueMap: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.166222551513!2d72.82865477520679!3d19.144199882074513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7fd447d543b%3A0x7fc101dabcdeaad4!2sCCDN%20Banquet%20Hall!5e0!3m2!1sen!2sin!4v1794638856099!5m2!1sen!2sin",
      directMapUrl: "https://maps.app.goo.gl/KzcM7KkaYPo5qbXn6"
    },
    defaultLanguage: "gu", // "gu" for Gujarati, "en" for English
    // Color Palette Theme:
    // Options:
    // - "rosegold"   (Romantic Rose Gold & Champagne)
    // - "royal-gold" (Regal 24K Heritage Gold & Ivory)
    // - "burgundy"   (Velvet Burgundy Maroon & Sindoor Red)
    // - "emerald"    (Imperial Emerald Sage & Palace Mint)
    // - "sapphire"   (Midnight Royal Sapphire & Gold)
    theme: "royal-gold",
    // Live Countdown Target Date ("Saturday, 05.12.2026", 4:15 PM)
    countdown: {
      targetDate: "2026-12-05T16:15:00+05:30"
    },
    // Available UI languages
    languages: [
      { code: "gu", label: "ગુજરાતી" },
      { code: "en", label: "English" }
    ]
  },

  // Content for English (en)
  en: {
    invitationType: "Wedding Invitation",
    tapToEnter: "Tap to Open Invitation",
    swipeUpHint: "Swipe up to continue",
    seeYouThere: "See you there!",
    withBlessings: "With best compliments & love from families",
    rsvpBtnText: "RSVP",
    directionBtnText: "Open in Google Maps",

    // Countdown Labels
    countdownLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    },

    spiritualInvocations: [
      "॥ Shree Ganeshaya Namah ॥",
      "॥ Shree Khetarpar Dadane Namah ॥",
      "॥ Shree Sancha Matane Namah ॥",
    ],

    inspirationalQuote: "May the courtyard bloom with auspicious melodies and the family glow with joy, as two hearts take their first steps together on a shared journey. O Lord, shower Your grace upon this sacred bond, and may their life together always be filled with love, understanding, values, and happiness.",

    couple: {
      groom: {
        name: "Saumya",
        fullName: "Saumya Hansraj Shah",
        parents: "Son of Mrs. Amitaben & Mr. Hansrajbhai Nanji Shah",
        grandparents: "Grandson of Late Mrs. Amrutben & Mr. Nanjibhai Manshi Shah",
        village: "Village Adhoi"
      },
      bride: {
        name: "Manasvi",
        fullName: "Manasvi Abhay Parekh",
        parents: "Daughter of Mrs. Alpaben & Mr. Abhaybhai Chandrakant Parekh",
        grandparents: "Granddaughter of Late Mrs. Hasumatiben & Mr. Chandrakant Keshavlal Parekh",
        village: "Village Morbi"
      },

    },

    eventDetails: {
      date: "Saturday, 05.12.2026",
      hinduCalendarDate: "Samvat 2083, Kartak Sud 12",
      scheduleTitle: "Wedding Itinerary",
      schedule: [
        {
          event: "Samaiyu (Welcoming of Baraat)",
          time: "2:15 PM",
          notes: "Arrival of Baraat & Welcoming"
        },
        {
          event: "Svaruchi Bhojan (Dinner)",
          time: "5:30 PM to 10:00 PM",
          notes: "Chauvihar arrangement is available."
        },
        {
          event: "Hast Melap / Wedding Ceremony",
          time: "4:15 PM onwards",
          notes: "Auspicious wedding muhurat"
        }
      ],
      venueTitle: "Venue & Location",
      venue: {
        name: "CCDN Banquet Hall (Champaben Devshi Nandu Mahajan Wadi)",
        address: "Andheri Link Rd, Near Lotus Petrol Pump, Andheri West, Mumbai - 400102"
      }
    },

    family: {
      darshanabhilashi: {
        title: "Awaiting Your Gracious Presence",
        members: [
          "Mrs. Diwaliben Kuvarjibhai Shah",
          "Mrs. Amitaben Hansrajbhai Shah",
          "Mrs. Manjulaben Ramjibhai Nishar",
          "Mrs. Diwaliben Jayantilal Chheda",
          "Mrs. Premilaben Pravinbhai Satra",
          "Mrs. Harshidaben Hasmukhbhai Shah",
          "Mrs. Poojaben Sagarbhai Shah",
          "Mrs. Kalpanaben Pravinbhai Gala",
        ]
      },
      wellWishers: {
        title: "Well-Wishers",
        members: [
          "Master Akshat Hansraj Shah",
          "Mrs. Nehaben Mayur Nishar",
          "Mrs. Truptiben Ritesh Nishar",
          "Mr. Bakulbhai Jayantilal Chheda",
          "Mr. Birenbhai Jayantilal Chheda",
          "Mr. Ankitbhai Pravin Satra",
          "Mr. Sunnybhai Pravin Satra",
          "Ms. Meenakshiben Ramji Nishar",
          "Mrs. Bhavnaben Ashwin Chheda",
          "Hiralben",
          "Mrs. Dimpleben Rakesh Parekh",
          "Dr. Bijalben Dr Nimesh Parmar",
        ]
      },
      mameru: {
        title: "Mameru (Maternal Family)",
        village: "Village Aadhoi",
        grandparents: "Maternal Grandparents Late Mrs. Kesarben and Late Mr. Damjibhai Chapsibhai Gala",
        unclesAndAunts: [
          "Mrs. Lataben & Mr. Manishbhai Damji Gala",
        ],
        cousins: [
          "Master Heet Manish Gala",
          "Master Punya Manish Gala"
        ]
      },
      divineBlessings: {
        title: "Divine Blessings (Divya Ashish)",
        members: [
          "Late Puraben Manshibhai Shah",
          "Late Amrutben Nanjibhai Shah",
          "Late Kesarben Damjibhai Gala",
          "Late Kuverjibhai Nanjibhai Shah",
        ]
      }
    }
  },

  // Content for Gujarati (gu)
  gu: {
    invitationType: "લગ્ન આમંત્રણ",
    tapToEnter: "આમંત્રણ ખોલવા માટે ટૅપ કરો",
    swipeUpHint: "આગળ વધવા માટે ઉપર સ્વાઇપ કરો",
    seeYouThere: "આપની રાહ જોઈશું!",
    withBlessings: "પરિવારો તરફથી પ્રેમભરી શુભેચ્છાઓ સાથે",
    rsvpBtnText: "હાજરીની પુષ્ટિ",
    directionBtnText: "Google Maps માં ખોલો",

    // Countdown Labels
    countdownLabels: {
      days: "દિવસ",
      hours: "કલાક",
      minutes: "મિનિટ",
      seconds: "સેકન્ડ"
    },

    spiritualInvocations: [
      "॥ શ્રી ગણેશાય નમઃ ॥",
      "॥ શ્રી ખેતરપાર દાદાને નમઃ ॥",
      "॥ શ્રી સંચા માતાને નમઃ ॥",

    ],

    inspirationalQuote: "મંગલ સ્વરોથી મહેકે આંગણું, હર્ષથી ઝળહળે પરિવાર, બે હૈયાં આજે સાથે માંડે જીવનના સહિયારા ડગ. હે પ્રભુ, એમના આ પાવન સંબંધ પર તારી કૃપા વરસાવજે, પ્રેમ, સમજણ અને સંસ્કારથી એમનો સંસાર સદા મહેકાવજે.",
    couple: {
      groom: {
        name: "સૌમ્ય",
        fullName: "સૌમ્ય હંસરાજ શાહ",
        parents: "અ. સૌ. અમિતાબેન અને હંસરાજભાઈ નાનજી શાહના સુપુત્ર",
        grandparents: "સ્વ. અમરતબેન અને નાનજીભાઈ મણશી શાહના સુપૌત્ર",
        village: "ગામ આધોઈ"
      },
      bride: {
        name: "મનસ્વી",
        fullName: "મનસ્વી અભય પારેખ",
        parents: "અ. સૌ. અલ્પાબેન અને અભયભાઈ ચંદ્રકાંત પારેખની સુપુત્રી",
        grandparents: "સ્વ. હસુમતીબેન અને ચંદ્રકાંત કેશવલાલ પારેખની સુપૌત્રી",
        village: "ગામ મોરબી"
      },

    },

    eventDetails: {
      date: "શનિવાર, ૦૫.૧૨.૨૦૨૬",
      hinduCalendarDate: "સંવત ૨૦૮૩, કારતક સુદ ૧૨",
      scheduleTitle: "લગ્ન પ્રસંગોની સમયસૂચિ",

      schedule: [
        {
          event: "સામૈયું (જાનનું સ્વાગત)",
          time: "બપોરે ૨:૧૫ કલાકે",
          notes: "જાનનું આગમન અને સ્વાગત"
        },
        {
          event: "સ્વરુચિ ભોજન",
          time: "સાંજે ૫:૩૦ થી ૧૦:૦૦ કલાકે",
          notes: "ચૌવિહારની વ્યવસ્થા ઉપલબ્ધ છે."
        },
        {
          event: "હસ્તમેળાપ / લગ્નવિધિ",
          time: "બપોરે ૪:૧૫ કલાકથી",
          notes: "શુભ લગ્ન મુહૂર્ત"
        }
      ],

      venueTitle: "લગ્ન સ્થળ અને સરનામું",

      venue: {
        name: "CCDN બેન્ક્વેટ હોલ (ચંપાબેન દેવશી નંદુ મહાજન વાડી)",
        address:
          "અંધેરી લિંક રોડ, લોટસ પેટ્રોલ પંપ પાસે, અંધેરી પશ્ચિમ, મુંબઈ - ૪૦૦૧૦૨"
      }
    },

    family: {
      darshanabhilashi: {
        title: "આપના પધારવાની આતુરતાથી રાહ જોતા",
        members: [
          "ગં સ્વ. દિવાળીબેન કુંવરજીભાઈ શાહ",
          "અ. સૌ. અમિતાબેન હંસરાજભાઈ શાહ",
          "ગં સ્વ. મંજુલાબેન રામજીભાઈ નિસર",
          "ગં સ્વ. દિવાળીબેન જયંતિલાલ છેડા",
          "ગં સ્વ. પ્રેમીલાબેન પ્રવીણભાઈ સતરા",
          "હર્ષિદાબેન હસમુખભાઈ શાહ",
          "પૂજાબેન સાગરભાઈ શાહ",
          "કલ્પનાબેન પ્રવીણભાઈ ગાલા",
        ]
      },

      wellWishers: {
        title: "હરખના હૈયે આવકારવા આતુર",
        members: [
          "ચિ. અક્ષત હંસરાજ શાહ",
          "નેહાબેન મયુર નિસર",
          "તૃપ્તિબેન રીતેશ નિસર",
          "બકુલભાઈ જયંતિલાલ છેડા",
          "બિરેનભાઈ જયંતિલાલ છેડા",
          "અંકિતભાઈ પ્રવીણ સતરા",
          "સન્નીભાઈ પ્રવીણ સતરા",
          "મીનાક્ષીબેન રામજી નિસર",
          "ભાવનાબેન અશ્વિન છેડા",
          "હીરલબેન",
          "ડિમ્પલબેન રાખેશ પારેખ",
          "ડૉ. બીજલબેન ડૉ. નિમેષ પરમાર",
        ]
      },

      mameru: {
        title: "મામેરુ (મોસાળ પક્ષ)",
        village: "ગામ આધોઈ",

        grandparents:
          "નાના-નાની: સ્વ. કેસરબેન અને સ્વ. દામજીભાઈ ચાંપશીભાઈ ગાલા",

        unclesAndAunts: [
          "મામા-મામી: લતાબેન અને મનીષભાઈ દામજી ગાલા",
        ],

        cousins: [
          "ચિ. હિત મનીષ ગાલા",
          "ચિ. પુણ્ય મનીષ ગાલા"
        ]
      },

      divineBlessings: {
        title: "મીઠી છાયા દેનાર વડીલોના દિવ્ય આશિષ",
        members: [
          "સ્વા. પુરાબેન મણશીભાઈ શાહ",
          "સ્વ. અમરતબેન નાનજીભાઈ શાહ",
          "સ્વ. કેસરબેન દામજીભાઈ ગાલા",
          "સ્વ. કુંવરજીભાઈ નાનજીભાઈ શાહ",
        ]
      }
    }
  },
};

