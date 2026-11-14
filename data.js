/**
 * Wedding E-Invite Configuration File
 * ====================================
 * Customize all names, dates, ceremonies, family details, venue,
 * WhatsApp RSVP, and background music in this single file.
 */

window.WEDDING_DATA = {
  // General Configuration & Assets
  config: {
    title: "Manasvi & Saumya Wedding Invitation",
    coupleInitials: "M & S",
    logoImage: "assets/logo.png",
    photos: [
      "assets/couple1.jpeg",
      "assets/couple2.jpeg",
      "assets/couple3.jpeg"
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
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.392055762308!2d72.83680582487656!3d19.147186452496317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7005a8fb41f%3A0xf416abb0aaf0df4f!2sAurum%20baquet%20Nesco!5e0!3m2!1sen!2sin!4v1776059272027!5m2!1sen!2sin",
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

    spiritualInvocations: [
      "|| Shree Ganeshaya Namah ||",
      "|| Shree Mahaviraya Namah ||",
    ],

    inspirationalQuote: "A daughter is like bringing the whole of spring home when only a green leaf was expected. A daughter is not just a blessing, but God found within a blessing...!",

    couple: {
      bride: {
        name: "Manasvi",
        fullName: "Manasvi Abhay Parekh",
        parents: "Daughter of Mrs. Alpaben & Mr. Abhaybhai Chandrakant Parekh",
        grandparents: "Granddaughter of Late Mrs. Hasumatiben & Mr. Chandrakant Keshavlal Parekh",
        village: "Village Manfara"
      },
      groom: {
        name: "Saumya",
        fullName: "Saumya Hansraj Shah",
        parents: "Son of Mrs. Amitaben & Mr. Hansrajbhai Nanji Shah",
        grandparents: "Grandson of Late Mrs. Amrutben & Mr. Nanjibhai Manshi Shah",
        village: "Village Adhoi"
      }
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
    invitationType: "લગ્ન કંકોત્રી",
    tapToEnter: "કંકોત્રી જોવા માટે અહીં ટચ કરો",
    swipeUpHint: "આગળ જોવા માટે ઉપર સ્વાઇપ કરો",
    seeYouThere: "આપની પધરામણી આવકાર્ય છે!",
    withBlessings: "સ્નેહ અને આશિર્વાદ સાથે",
    rsvpBtnText: "આવકાર (RSVP)",
    directionBtnText: "ગૂગલ મેપ્સમાં જુઓ",

    spiritualInvocations: [
      "॥ શ્રી ગણેશાય નમઃ ॥",
      "॥ શ્રી ખેતરપાર દાદાને નમઃ ॥",
      "॥ શ્રી સંચા માતાને નમઃ ॥",
    ],

    inspirationalQuote: "એક લીલા પાનની અપેક્ષા હોય, પરંતુ આખી વસંત ઘરે લાવે એ દીકરી, દીકરી એટલે માત્ર ઘર મા જ નહિ હોઠ, હૈયે અને શ્વાસમાં સતત વસેલી વસંત, દીકરી એટલે ખિસ્સામાં રાખેલું ચોમાસું દીકરી એટલે ઈશ્વર ના આશિર્વાદ નહિ દીકરી એટલે આશિર્વાદમાં મળેલા ઈશ્વર... !",

    couple: {
      bride: {
        name: "રીયા",
        fullName: "રીયા નીલેશ સાવલા",
        parents: "અ. સૌ. મીનાબેન અને શ્રી નીલેશ માલશી સાવલા ની સુપુત્રી",
        grandparents: "માતુશ્રી પાંચીબેન માલશી અરજણ સાવલા ની પૌત્રી",
        village: "ગામ મનફરા ના"
      },
      groom: {
        name: "અભિષેક",
        fullName: "અભિષેક રાજેષ ફરીઆ",
        parents: "અ. સૌ. રક્ષાબેન અને શ્રી રાજેષ દામજી ફરીઆ ના સુપુત્ર",
        grandparents: "માતુશ્રી અમૃતબેન અને શ્રી દામજી ઉગમશી ફરીઆ ના પૌત્ર",
        village: "ગામ આધોઈ ના"
      }
    },

    eventDetails: {
      date: "રવિવાર, ૧૦.૫.૨૦૨૬",
      hinduCalendarDate: "સંવત ૨૦૮૨, વૈશાખ વદ ૮",
      scheduleTitle: "માંગલિક પ્રસંગો",
      schedule: [
        {
          event: "સામૈયું",
          time: "બપોરે ૩.૦૦ કલાકે",
          notes: "જાન આગમન તથા સામૈયું"
        },
        {
          event: "સ્વરૂચિ ભોજન",
          time: "સાંજે ૫.૩૦ થી ૧૦.૦૦ કલાકે",
          notes: "ચૌવિહાર ની વ્યવસ્થા રાખેલ છે."
        },
        {
          event: "હસ્ત મેળાપ / શુભ લગ્ન",
          time: "સાંજે ૬.૫૬ કલાકે",
          notes: "શુભ લગ્ન મુહૂર્ત"
        }
      ],
      venueTitle: "શુભ સ્થળ",
      venue: {
        name: "ઔરમ બેંક્વેટ",
        address: "નેસ્કો ગ્રાઉન્ડ, ગેટ નં. ૧, વેસ્ટર્ન એક્સપ્રેસ હાઈવે, ગોરેગાંવ (ઈસ્ટ), મુંબઈ - ૪૦૦૦૬૩",
        phone: "+91 97573 96440"
      }
    },

    family: {
      darshanabhilashi: {
        title: "દર્શનાભિલાષી",
        members: [
          "અ. સૌ. મીના નીલેશ માલશી સાવલા",
          "અ. સૌ. ચંદન કેતન મુરજી ફુરીયા",
          "અ. સૌ. મોના દામજી અરજણ સાવલા",
          "અ. સૌ. મીના શાંતીલાલ વાઘજી નીશર",
          "અ. સૌ. મુક્તા હીમ્મત ખેતશી શાહ",
          "અ. સૌ. જીંકલ મિલિંદ વાડીલાલ ગડા"
        ]
      },
      wellWishers: {
        title: "સ્નેહાધીન",
        members: [
          "કુમારી હર્ષા માલશી સાવલા",
          "કુ. ખુશી નિલેશ સાવલા",
          "કુ. દક્ષ નિલેશ સાવલા",
          "કુ. દક્ષ દામજી સાવલા",
          "કુ. વિશ્વા કેતન ફુરીયા",
          "પ્રતિક કેતન ફુરીયા"
        ]
      },
      mameru: {
        title: "મામેરું",
        village: "ગામ સામખીયારી",
        grandparents: "નાના-નાની ગં. સ્વ. ગોમતીબેન અને સ્વ. પ્રેમજી વીજપાર ગડા",
        unclesAndAunts: [
          "અ. સૌ. હંસાબેન જીતુ ગડા",
          "અ. સૌ. અરૂણાબેન દીનેશ ગડા",
          "અ. સૌ. મનીષાબેન કેતન ગડા"
        ],
        cousins: [
          "અ. સૌ. અવની સચીન શર્મા",
          "કુ. માનસી જીતુ ગડા",
          "કુ. સાક્ષી જીતુ ગડા",
          "કુ. જીન્ની કેતન ગડા",
          "કુ. આર્યન કેતન ગડા",
          "કુ. જીહાન કેતન ગડા"
        ]
      },
      divineBlessings: {
        title: "દિવ્ય આશિષ",
        members: [
          "સ્વ. ભાવલબેન અરજણ જીવરાજ સાવલા",
          "સ્વ. ગંગાબેન અરજણ જીવરાજ સાવલા",
          "સ્વ. જયેશ માલશી સાવલા",
          "સ્વ. લક્ષ્મીબેન કેશવજી સાવલા",
          "સ્વ. રતનબેન માડણ ગડા",
          "સ્વ. માનુબેન વીજપાર ગડા"
        ]
      }
    }
  }
};

