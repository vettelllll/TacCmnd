// ============================================================
// TACTICAL COMMAND — UNIT DATABASE v4.0
// Properties:
//   domain        : 'air' | 'surface' | 'subsurface' | 'ground'
//   stealthFactor : 0.05–1.0  (enemy detectionRange multiplied by this)
//   asw           : true = can detect submerged submarines
//   isStatic      : true = cannot move (SAM sites, emplaced artillery)
//   hardpoints    : max weapon slots for loadout customizer
//   weaponPool    : all weapons available for customization
//   weapons       : default loadout (subset of weaponPool)
// ============================================================

const UNIT_DB = {

  // ════════════════════════════════════════════════════
  // BLUE FORCE — NATO / WESTERN
  // ════════════════════════════════════════════════════

  // ── FIGHTERS ──────────────────────────────────────

  f15c: {
    displayName:'F-15C Eagle', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:120, fuel:110, speed:2655, altitude:12200, detectionRange:180,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'AIM-120C AMRAAM',   count:4, range:80,  damage:50, type:'missile'},
      {name:'AIM-120D AMRAAM',   count:4, range:95,  damage:55, type:'missile'},
      {name:'AIM-9X Sidewinder', count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'AIM-7M Sparrow',    count:4, range:45,  damage:40, type:'missile'},
      {name:'M61A2 Vulcan',      count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120C AMRAAM',   count:4, range:80,  damage:50, type:'missile'},
      {name:'AIM-9X Sidewinder', count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A2 Vulcan',      count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  f16c: {
    displayName:'F-16C Fighting Falcon', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:100, fuel:90, speed:2120, altitude:15200, detectionRange:130,
    isAircraft:true, fuelDrain:0.10, stealthFactor:1.0, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'AIM-120C AMRAAM',   count:4, range:80,  damage:50, type:'missile'},
      {name:'AIM-9X Sidewinder', count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'AGM-65 Maverick',   count:4, range:22,  damage:80, type:'agm'},
      {name:'M61A1 Vulcan',      count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120C AMRAAM',   count:2, range:80,  damage:50, type:'missile'},
      {name:'AIM-9X Sidewinder', count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A1 Vulcan',      count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  fa18e: {
    displayName:'F/A-18E Super Hornet', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:110, fuel:100, speed:1915, altitude:15000, detectionRange:150,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false, isCarrierAircraft:true,
    hardpoints:9,
    weaponPool:[
      {name:'AIM-120D AMRAAM',   count:4, range:90,  damage:52, type:'missile'},
      {name:'AIM-9X Sidewinder', count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'AGM-84 Harpoon',    count:4, range:120, damage:85, type:'asw'},
      {name:'AGM-65 Maverick',   count:4, range:22,  damage:80, type:'agm'},
      {name:'M61A1 Vulcan',      count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120D AMRAAM',   count:4, range:90,  damage:52, type:'missile'},
      {name:'AIM-9X Sidewinder', count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A1 Vulcan',      count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  f22a: {
    displayName:'F-22A Raptor', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:130, fuel:120, speed:1960, altitude:19800, detectionRange:220,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.15, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'AIM-120D AMRAAM',   count:6, range:90,  damage:52, type:'missile'},
      {name:'AIM-9X Sidewinder', count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A2 Vulcan',      count:Infinity, range:1.5, damage:15, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120D AMRAAM',   count:6, range:90,  damage:52, type:'missile'},
      {name:'AIM-9X Sidewinder', count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A2 Vulcan',      count:Infinity, range:1.5, damage:15, type:'gun'},
    ]
  },

  f35a: {
    displayName:'F-35A Lightning II', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:115, fuel:115, speed:1960, altitude:15240, detectionRange:250,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.18, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'AIM-120D AMRAAM',   count:4, range:90,  damage:52, type:'missile'},
      {name:'AIM-9X Sidewinder', count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'AGM-158 JASSM',     count:2, range:370, damage:95, type:'cruise'},
      {name:'GBU-31 JDAM',       count:4, range:28,  damage:100,type:'bomb'},
      {name:'GAU-22/A',          count:Infinity, range:1.5, damage:10, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120D AMRAAM',   count:4, range:90,  damage:52, type:'missile'},
      {name:'AIM-9X Sidewinder', count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'GAU-22/A',          count:Infinity, range:1.5, damage:10, type:'gun'},
    ]
  },

  // ── BOMBERS ───────────────────────────────────────

  b2a: {
    displayName:'B-2A Spirit', team:'blue', category:'bomber', domain:'air', icon:'✈',
    hp:160, fuel:200, speed:1010, altitude:15000, detectionRange:80,
    isAircraft:true, fuelDrain:0.04, stealthFactor:0.08, asw:false,
    hardpoints:16,
    weaponPool:[
      {name:'GBU-57 MOP',        count:2,  range:5,   damage:250,type:'bomb'},
      {name:'GBU-28 Bunker',     count:16, range:28,  damage:120,type:'bomb'},
      {name:'AGM-158 JASSM',     count:16, range:370, damage:95, type:'cruise'},
      {name:'AIM-9X Sidewinder', count:2,  range:22,  damage:65, type:'ir_missile'},
    ],
    weapons:[
      {name:'GBU-28 Bunker',     count:16, range:28,  damage:120,type:'bomb'},
      {name:'AIM-9X Sidewinder', count:2,  range:22,  damage:65, type:'ir_missile'},
    ]
  },

  b52h: {
    displayName:'B-52H Stratofortress', team:'blue', category:'bomber', domain:'air', icon:'✈',
    hp:200, fuel:250, speed:1013, altitude:15000, detectionRange:60,
    isAircraft:true, fuelDrain:0.03, stealthFactor:1.0, asw:false,
    hardpoints:20,
    weaponPool:[
      {name:'AGM-86C ALCM',      count:12, range:120, damage:90, type:'cruise'},
      {name:'AGM-158 JASSM',     count:20, range:370, damage:95, type:'cruise'},
      {name:'GBU-31 JDAM',       count:20, range:28,  damage:100,type:'bomb'},
    ],
    weapons:[
      {name:'AGM-86C ALCM',      count:12, range:120, damage:90, type:'cruise'},
      {name:'GBU-31 JDAM',       count:8,  range:28,  damage:100,type:'bomb'},
    ]
  },

  b1b: {
    displayName:'B-1B Lancer', team:'blue', category:'bomber', domain:'air', icon:'✈',
    hp:180, fuel:220, speed:1448, altitude:18000, detectionRange:70,
    isAircraft:true, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    hardpoints:24,
    weaponPool:[
      {name:'AGM-158 JASSM',     count:24, range:370, damage:95, type:'cruise'},
      {name:'GBU-31 JDAM',       count:24, range:28,  damage:100,type:'bomb'},
      {name:'AGM-154 JSOW',      count:24, range:110, damage:75, type:'bomb'},
    ],
    weapons:[
      {name:'AGM-158 JASSM',     count:24, range:370, damage:95, type:'cruise'},
      {name:'GBU-31 JDAM',       count:8,  range:28,  damage:100,type:'bomb'},
    ]
  },

  // ── NAVAL ─────────────────────────────────────────

  ddg51: {
    displayName:'DDG-51 Arleigh Burke', team:'blue', category:'destroyer', domain:'surface', icon:'⛵',
    hp:420, fuel:200, speed:56, altitude:0, detectionRange:200,
    isAircraft:false, fuelDrain:0.010, stealthFactor:1.0, asw:true,
    weapons:[
      {name:'RIM-174 SM-6',  count:16, range:240, damage:70, type:'sam'},
      {name:'RIM-66M SM-2',  count:32, range:90,  damage:55, type:'sam'},
      {name:'RGM-84 Harpoon',count:8,  range:120, damage:85, type:'asw'},
      {name:'Mk 15 CIWS',    count:Infinity, range:2, damage:18, type:'ciws'},
    ]
  },

  cg47: {
    displayName:'CG-47 Ticonderoga', team:'blue', category:'destroyer', domain:'surface', icon:'⛵',
    hp:480, fuel:220, speed:56, altitude:0, detectionRange:260,
    isAircraft:false, fuelDrain:0.010, stealthFactor:1.0, asw:true,
    weapons:[
      {name:'RIM-174 SM-6',  count:16, range:240, damage:70, type:'sam'},
      {name:'RIM-66M SM-2',  count:40, range:90,  damage:55, type:'sam'},
      {name:'RGM-84 Harpoon',count:8,  range:120, damage:85, type:'asw'},
      {name:'Mk 15 CIWS',    count:Infinity, range:2, damage:18, type:'ciws'},
    ]
  },

  cvn68: {
    displayName:'CVN-68 Nimitz Class', team:'blue', category:'carrier', domain:'surface', icon:'⛵',
    hp:900, fuel:500, speed:56, altitude:0, detectionRange:300,
    isAircraft:false, fuelDrain:0.005, stealthFactor:1.0, asw:true,
    isCarrier:true, airWing:['fa18e','e2d','sh60b'],
    weapons:[
      {name:'RIM-174 SM-6',  count:40, range:240, damage:70, type:'sam'},
      {name:'RIM-162 ESSM',  count:32, range:50,  damage:40, type:'sam'},
      {name:'Mk 15 CIWS',    count:Infinity, range:2, damage:18, type:'ciws'},
    ]
  },

  // ── AWACS ─────────────────────────────────────────

  e3sentry: {
    displayName:'E-3 Sentry', team:'blue', category:'awacs', domain:'air', icon:'✈',
    hp:85, fuel:180, speed:853, altitude:9000, detectionRange:420,
    isAircraft:true, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    hardpoints:2,
    weaponPool:[{name:'AIM-9X Sidewinder', count:2, range:22, damage:65, type:'ir_missile'}],
    weapons:[{name:'AIM-9X Sidewinder', count:2, range:22, damage:65, type:'ir_missile'}]
  },

  e2d: {
    displayName:'E-2D Hawkeye', team:'blue', category:'awacs', domain:'air', icon:'✈',
    hp:75, fuel:130, speed:648, altitude:9400, detectionRange:580,
    isAircraft:true, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    hardpoints:2,
    weaponPool:[{name:'AIM-9X Sidewinder', count:2, range:22, damage:65, type:'ir_missile'}],
    weapons:[{name:'AIM-9X Sidewinder', count:2, range:22, damage:65, type:'ir_missile'}]
  },

  // ── SUBMARINES ────────────────────────────────────

  la_class: {
    displayName:'Los Angeles SSN', team:'blue', category:'submarine', domain:'subsurface', icon:'▼',
    hp:300, fuel:999, speed:46, altitude:0, detectionRange:80,
    isAircraft:false, fuelDrain:0.001, stealthFactor:0.3, asw:true,
    weapons:[
      {name:'Mk 48 ADCAP Torpedo', count:8,  range:45, damage:110, type:'torpedo'},
      {name:'BGM-109 Tomahawk',   count:12, range:280,damage:90,  type:'cruise'},
    ]
  },

  virginia_class: {
    displayName:'Virginia SSN', team:'blue', category:'submarine', domain:'subsurface', icon:'▼',
    hp:340, fuel:999, speed:46, altitude:0, detectionRange:120,
    isAircraft:false, fuelDrain:0.001, stealthFactor:0.2, asw:true,
    weapons:[
      {name:'Mk 48 ADCAP Torpedo', count:12, range:45, damage:110, type:'torpedo'},
      {name:'BGM-109 Tomahawk',   count:40, range:280,damage:90,  type:'cruise'},
    ]
  },

  // ── UAVs ──────────────────────────────────────────

  mq9_reaper: {
    displayName:'MQ-9 Reaper', team:'blue', category:'uav', domain:'air', icon:'✦',
    hp:60, fuel:240, speed:482, altitude:7600, detectionRange:200,
    isAircraft:true, fuelDrain:0.02, stealthFactor:0.4, asw:false,
    hardpoints:4,
    weaponPool:[
      {name:'AGM-114 Hellfire',  count:8,  range:8,  damage:70, type:'agm'},
      {name:'GBU-12 Paveway II', count:4,  range:12, damage:90, type:'bomb'},
      {name:'AIM-9X Sidewinder', count:2,  range:22, damage:65, type:'ir_missile'},
    ],
    weapons:[
      {name:'AGM-114 Hellfire',  count:8,  range:8,  damage:70, type:'agm'},
      {name:'GBU-12 Paveway II', count:2,  range:12, damage:90, type:'bomb'},
    ]
  },

  rq4_hawk: {
    displayName:'RQ-4 Global Hawk', team:'blue', category:'uav', domain:'air', icon:'✦',
    hp:50, fuel:300, speed:629, altitude:18000, detectionRange:600,
    isAircraft:true, fuelDrain:0.015, stealthFactor:0.35, asw:false,
    hardpoints:0,
    weaponPool:[], weapons:[]   // ISR only
  },

  // ── HELICOPTERS ───────────────────────────────────

  ah64d: {
    displayName:'AH-64D Apache', team:'blue', category:'helicopter', domain:'air', icon:'⊕',
    hp:100, fuel:70, speed:293, altitude:4000, detectionRange:80,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.7, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'AGM-114 Hellfire',  count:16, range:8,  damage:70, type:'agm'},
      {name:'Hydra 70 Rockets',  count:38, range:4,  damage:30, type:'rocket'},
      {name:'AIM-92 Stinger',    count:4,  range:6,  damage:50, type:'ir_missile'},
      {name:'M230 Chain Gun',    count:Infinity, range:1.5, damage:10, type:'gun'},
    ],
    weapons:[
      {name:'AGM-114 Hellfire',  count:16, range:8,  damage:70, type:'agm'},
      {name:'AIM-92 Stinger',    count:2,  range:6,  damage:50, type:'ir_missile'},
      {name:'M230 Chain Gun',    count:Infinity, range:1.5, damage:10, type:'gun'},
    ]
  },

  sh60b: {
    displayName:'SH-60B Seahawk', team:'blue', category:'helicopter', domain:'air', icon:'⊕',
    hp:70, fuel:60, speed:267, altitude:3600, detectionRange:120,
    isAircraft:true, fuelDrain:0.07, stealthFactor:0.7, asw:true,
    weapons:[
      {name:'Mk 54 Torpedo',     count:2,  range:10, damage:100, type:'torpedo'},
      {name:'AGM-119 Penguin',   count:2,  range:35, damage:80,  type:'asw'},
    ]
  },

  // ── GROUND VEHICLES ───────────────────────────────

  m1a2: {
    displayName:'M1A2 Abrams SEPv3', team:'blue', category:'tank', domain:'ground', icon:'▣',
    hp:280, fuel:60, speed:67, altitude:0, detectionRange:8,
    isAircraft:false, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    weapons:[
      {name:'M256 120mm Cannon', count:40, range:4,  damage:120, type:'gun'},
      {name:'M240 7.62mm',       count:Infinity, range:0.8, damage:8, type:'gun'},
    ]
  },

  m109a7: {
    displayName:'M109A7 Paladin', team:'blue', category:'artillery', domain:'ground', icon:'⊡',
    hp:180, fuel:60, speed:61, altitude:0, detectionRange:5,
    isAircraft:false, fuelDrain:0.03, stealthFactor:1.0, asw:false,
    weapons:[
      {name:'M795 155mm HE',     count:30, range:30, damage:90, type:'artillery'},
      {name:'M982 Excalibur',    count:10, range:40, damage:100,type:'artillery'},
    ]
  },

  // ── INFANTRY (BLUE) ───────────────────────────────

  us_rifle: {
    displayName:'US Rifle Infantry', team:'blue', category:'infantry', domain:'ground', icon:'◉',
    hp:50, fuel:999, speed:8, altitude:0, detectionRange:3,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'M4A1 Carbine', count:Infinity, range:0.4, damage:6,  type:'gun'},
      {name:'M249 SAW',     count:Infinity, range:0.8, damage:10, type:'gun'},
    ]
  },

  us_at: {
    displayName:'US Anti-Tank (Javelin)', team:'blue', category:'infantry', domain:'ground', icon:'◉',
    hp:40, fuel:999, speed:6, altitude:0, detectionRange:4,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'FGM-148 Javelin',  count:6,  range:4.5, damage:120, type:'agm'},
      {name:'M4A1 Carbine',     count:Infinity, range:0.4, damage:6, type:'gun'},
    ]
  },

  us_aa: {
    displayName:'US Air Defense (Stinger)', team:'blue', category:'infantry', domain:'ground', icon:'◉',
    hp:40, fuel:999, speed:6, altitude:0, detectionRange:8,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'FIM-92 Stinger',   count:8,  range:6,  damage:50, type:'ir_missile'},
      {name:'M4A1 Carbine',     count:Infinity, range:0.4, damage:6, type:'gun'},
    ]
  },

  us_airborne: {
    displayName:'82nd Airborne Infantry', team:'blue', category:'infantry', domain:'ground', icon:'◉',
    hp:50, fuel:999, speed:10, altitude:0, detectionRange:4,
    isAircraft:false, fuelDrain:0, stealthFactor:0.55, asw:false, isInfantry:true,
    weapons:[
      {name:'M4A1 Carbine',     count:Infinity, range:0.4, damage:7,  type:'gun'},
      {name:'AT4 Anti-Tank',    count:4,  range:0.3, damage:80, type:'agm'},
      {name:'M252 81mm Mortar', count:20, range:5,   damage:40, type:'artillery'},
    ]
  },

  us_marines: {
    displayName:'USMC Marines', team:'blue', category:'infantry', domain:'ground', icon:'◉',
    hp:55, fuel:999, speed:8, altitude:0, detectionRange:4,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'M27 IAR',          count:Infinity, range:0.5, damage:7,  type:'gun'},
      {name:'SMAW Rocket',      count:4,  range:0.5, damage:90, type:'agm'},
      {name:'M320 Grenade',     count:Infinity, range:0.4, damage:20, type:'gun'},
    ]
  },

  us_rangers: {
    displayName:'US Rangers (SOF)', team:'blue', category:'infantry', domain:'ground', icon:'◉',
    hp:60, fuel:999, speed:12, altitude:0, detectionRange:5,
    isAircraft:false, fuelDrain:0, stealthFactor:0.4, asw:false, isInfantry:true,
    weapons:[
      {name:'HK416',            count:Infinity, range:0.5, damage:8,  type:'gun'},
      {name:'Carl Gustav',      count:4,  range:0.7, damage:100,type:'agm'},
      {name:'M320 Grenade',     count:Infinity, range:0.4, damage:20, type:'gun'},
    ]
  },

  // ── SAM BATTERIES (BLUE) ──────────────────────────

  patriot_pac3: {
    displayName:'Patriot PAC-3 Battery', team:'blue', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:200, fuel:999, speed:0, altitude:0, detectionRange:180,
    isAircraft:false, fuelDrain:0, stealthFactor:1.0, asw:false, isStatic:true,
    weapons:[
      {name:'PAC-3 MSE',        count:16, range:100, damage:80, type:'sam'},
      {name:'PAC-2 GEM+',       count:8,  range:160, damage:60, type:'sam'},
    ]
  },

  avenger_sam: {
    displayName:'AN/TWQ-1 Avenger SHORAD', team:'blue', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:120, fuel:80, speed:40, altitude:0, detectionRange:10,
    isAircraft:false, fuelDrain:0.02, stealthFactor:1.0, asw:false,
    weapons:[
      {name:'FIM-92 Stinger',   count:8,  range:6,   damage:50, type:'ir_missile'},
      {name:'.50 cal M3P',      count:Infinity, range:1, damage:12, type:'gun'},
    ]
  },

  // ── BALLISTIC / MLRS (BLUE) ───────────────────────

  himars: {
    displayName:'M142 HIMARS', team:'blue', category:'ballistic', domain:'ground', icon:'⊟',
    hp:150, fuel:80, speed:85, altitude:0, detectionRange:10,
    isAircraft:false, fuelDrain:0.02, stealthFactor:1.0, asw:false, isBallistic:true,
    weapons:[
      {name:'MGM-140 ATACMS',   count:2,  range:300, damage:200, type:'ballistic'},
      {name:'M31 GMLRS',        count:6,  range:70,  damage:100, type:'ballistic'},
    ]
  },


  // ── NATO / ALLIED (BLUE) ──────────────────────────

  typhoon: {
    displayName:'Eurofighter Typhoon', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:115, fuel:110, speed:2495, altitude:16765, detectionRange:160,
    isAircraft:true, fuelDrain:0.09, stealthFactor:0.9, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'AIM-120C AMRAAM',   count:4, range:80,  damage:50, type:'missile'},
      {name:'IRIS-T',            count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'Taurus KEPD 350',   count:2, range:350, damage:100,type:'cruise'},
      {name:'Mauser BK27',       count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120C AMRAAM',   count:4, range:80,  damage:50, type:'missile'},
      {name:'IRIS-T',            count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'Mauser BK27',       count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  rafale_c: {
    displayName:'Dassault Rafale C', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:110, fuel:105, speed:1912, altitude:15235, detectionRange:170,
    isAircraft:true, fuelDrain:0.09, stealthFactor:0.85, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'MICA-EM',           count:4, range:80,  damage:52, type:'missile'},
      {name:'MICA-IR',           count:4, range:25,  damage:65, type:'ir_missile'},
      {name:'SCALP-EG',          count:2, range:300, damage:100,type:'cruise'},
      {name:'GIAT 30mm',         count:Infinity, range:1.5, damage:13, type:'gun'},
    ],
    weapons:[
      {name:'MICA-EM',           count:4, range:80,  damage:52, type:'missile'},
      {name:'MICA-IR',           count:2, range:25,  damage:65, type:'ir_missile'},
      {name:'GIAT 30mm',         count:Infinity, range:1.5, damage:13, type:'gun'},
    ]
  },

  gripen_e: {
    displayName:'Saab JAS 39E Gripen', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:100, fuel:95, speed:2204, altitude:15240, detectionRange:140,
    isAircraft:true, fuelDrain:0.10, stealthFactor:0.8, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'Meteor BVR Missile', count:4, range:100, damage:55, type:'missile'},
      {name:'AIM-9X Sidewinder',  count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'Mauser BK27',        count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'Meteor BVR Missile', count:4, range:100, damage:55, type:'missile'},
      {name:'AIM-9X Sidewinder',  count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'Mauser BK27',        count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  f15k: {
    displayName:'F-15K Slam Eagle', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:125, fuel:115, speed:2655, altitude:18300, detectionRange:190,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false,
    hardpoints:9,
    weaponPool:[
      {name:'AIM-120C AMRAAM',    count:4, range:80,  damage:50, type:'missile'},
      {name:'AIM-9X Sidewinder',  count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'AGM-84K SLAM-ER',    count:4, range:270, damage:95, type:'cruise'},
      {name:'GBU-28 Bunker',      count:4, range:28,  damage:120,type:'bomb'},
      {name:'M61A2 Vulcan',       count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'AIM-120C AMRAAM',    count:4, range:80,  damage:50, type:'missile'},
      {name:'AIM-9X Sidewinder',  count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A2 Vulcan',       count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  kf21: {
    displayName:'KF-21 Boramae', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:110, fuel:110, speed:1980, altitude:16500, detectionRange:175,
    isAircraft:true, fuelDrain:0.09, stealthFactor:0.4, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'Meteor BVR Missile', count:4, range:100, damage:55, type:'missile'},
      {name:'AIM-9X Sidewinder',  count:4, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A2 Vulcan',       count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'Meteor BVR Missile', count:4, range:100, damage:55, type:'missile'},
      {name:'AIM-9X Sidewinder',  count:2, range:22,  damage:65, type:'ir_missile'},
      {name:'M61A2 Vulcan',       count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  f16i: {
    displayName:'F-16I Sufa', team:'blue', category:'fighter', domain:'air', icon:'✈',
    hp:105, fuel:95, speed:2120, altitude:15200, detectionRange:135,
    isAircraft:true, fuelDrain:0.10, stealthFactor:1.0, asw:false,
    hardpoints:7,
    weaponPool:[
      {name:'Python-5',           count:4, range:20,  damage:70, type:'ir_missile'},
      {name:'Derby BVR',          count:4, range:50,  damage:50, type:'missile'},
      {name:'Popeye Turbo',       count:2, range:200, damage:95, type:'cruise'},
      {name:'M61A1 Vulcan',       count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'Python-5',           count:4, range:20,  damage:70, type:'ir_missile'},
      {name:'Derby BVR',          count:4, range:50,  damage:50, type:'missile'},
      {name:'M61A1 Vulcan',       count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  type45: {
    displayName:'Type 45 Daring DDG', team:'blue', category:'destroyer', domain:'surface', icon:'⛵',
    hp:460, fuel:200, speed:55, altitude:0, detectionRange:220,
    isAircraft:false, fuelDrain:0.010, stealthFactor:0.85, asw:true,
    weapons:[
      {name:'Aster 30 Block 1',   count:32, range:120, damage:65, type:'sam'},
      {name:'Aster 15',           count:16, range:30,  damage:45, type:'sam'},
      {name:'Harpoon Block II',   count:8,  range:120, damage:85, type:'asw'},
      {name:'114mm Mk8 Gun',      count:Infinity, range:6, damage:22, type:'gun'},
    ]
  },

  astute: {
    displayName:'Astute-class SSN', team:'blue', category:'submarine', domain:'subsurface', icon:'▼',
    hp:310, fuel:999, speed:46, altitude:0, detectionRange:95,
    isAircraft:false, fuelDrain:0.001, stealthFactor:0.25, asw:true,
    weapons:[
      {name:'Spearfish Torpedo',  count:12, range:54, damage:115, type:'torpedo'},
      {name:'Tomahawk Block IV',  count:16, range:280,damage:90,  type:'cruise'},
    ]
  },

  nasams: {
    displayName:'NASAMS Air Defense', team:'blue', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:160, fuel:999, speed:0, altitude:0, detectionRange:80,
    isAircraft:false, fuelDrain:0, stealthFactor:1.0, asw:false, isStatic:true,
    weapons:[
      {name:'AIM-120B AMRAAM',    count:12, range:40, damage:50, type:'sam'},
      {name:'AIM-9X Sidewinder',  count:6,  range:22, damage:65, type:'ir_missile'},
    ]
  },

  iron_dome: {
    displayName:'Iron Dome Battery', team:'blue', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:140, fuel:999, speed:0, altitude:0, detectionRange:70,
    isAircraft:false, fuelDrain:0, stealthFactor:1.0, asw:false, isStatic:true,
    weapons:[
      {name:'Tamir Interceptor',  count:20, range:70, damage:45, type:'sam'},
    ]
  },

  // ════════════════════════════════════════════════════
  // RED FORCE — RUSSIAN / ADVERSARY
  // ════════════════════════════════════════════════════

  // ── FIGHTERS ──────────────────────────────────────

  su35s: {
    displayName:'Su-35S Flanker-E', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:125, fuel:115, speed:2390, altitude:18000, detectionRange:200,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'R-77-1 (AA-12)',   count:6, range:80,  damage:50, type:'missile'},
      {name:'R-27ER (AA-10C)',  count:4, range:55,  damage:45, type:'missile'},
      {name:'R-74M (AA-11)',    count:4, range:20,  damage:62, type:'ir_missile'},
      {name:'Kh-31P (AS-17)',   count:4, range:60,  damage:80, type:'agm'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'R-77-1 (AA-12)',   count:4, range:80,  damage:50, type:'missile'},
      {name:'R-74M (AA-11)',    count:2, range:20,  damage:62, type:'ir_missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  su27: {
    displayName:'Su-27 Flanker-B', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:115, fuel:110, speed:2500, altitude:18000, detectionRange:160,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'R-27ER (AA-10C)',  count:4, range:55,  damage:45, type:'missile'},
      {name:'R-73 (AA-11)',     count:4, range:18,  damage:60, type:'ir_missile'},
      {name:'R-77 (AA-12)',     count:4, range:70,  damage:48, type:'missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'R-27ER (AA-10C)',  count:4, range:55,  damage:45, type:'missile'},
      {name:'R-73 (AA-11)',     count:4, range:18,  damage:60, type:'ir_missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  mig29: {
    displayName:'MiG-29 Fulcrum-A', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:95, fuel:80, speed:2400, altitude:18000, detectionRange:110,
    isAircraft:true, fuelDrain:0.11, stealthFactor:1.0, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'R-27R (AA-10A)',   count:2, range:50,  damage:44, type:'missile'},
      {name:'R-73 (AA-11)',     count:4, range:18,  damage:60, type:'ir_missile'},
      {name:'R-77 (AA-12)',     count:4, range:70,  damage:48, type:'missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'R-27R (AA-10A)',   count:2, range:50,  damage:44, type:'missile'},
      {name:'R-73 (AA-11)',     count:2, range:18,  damage:60, type:'ir_missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  su57: {
    displayName:'Su-57 Felon', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:130, fuel:125, speed:2600, altitude:20000, detectionRange:260,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.2, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'R-77M (AA-12)',    count:6, range:90,  damage:54, type:'missile'},
      {name:'R-74M (AA-11)',    count:2, range:20,  damage:62, type:'ir_missile'},
      {name:'Kh-58 (AS-11)',    count:2, range:100, damage:80, type:'agm'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:15, type:'gun'},
    ],
    weapons:[
      {name:'R-77M (AA-12)',    count:6, range:90,  damage:54, type:'missile'},
      {name:'R-74M (AA-11)',    count:2, range:20,  damage:62, type:'ir_missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:15, type:'gun'},
    ]
  },

  mig31: {
    displayName:'MiG-31BM Foxhound', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:135, fuel:130, speed:3000, altitude:20600, detectionRange:300,
    isAircraft:true, fuelDrain:0.10, stealthFactor:1.0, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'R-37M (AA-13)',    count:4, range:150, damage:55, type:'missile'},
      {name:'R-60M (AA-8)',     count:2, range:12,  damage:45, type:'ir_missile'},
      {name:'GSh-23',           count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'R-37M (AA-13)',    count:4, range:150, damage:55, type:'missile'},
      {name:'R-60M (AA-8)',     count:2, range:12,  damage:45, type:'ir_missile'},
      {name:'GSh-23',           count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  su33: {
    displayName:'Su-33 Flanker-D', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:120, fuel:105, speed:2300, altitude:17000, detectionRange:170,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false, isCarrierAircraft:true,
    hardpoints:8,
    weaponPool:[
      {name:'R-77-1 (AA-12)',     count:6, range:80,  damage:50, type:'missile'},
      {name:'R-73 (AA-11)',       count:4, range:18,  damage:60, type:'ir_missile'},
      {name:'Kh-41 AShM',        count:2, range:60,  damage:90, type:'agm'},
      {name:'GSh-30-1',           count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'R-77-1 (AA-12)',     count:4, range:80,  damage:50, type:'missile'},
      {name:'R-73 (AA-11)',       count:2, range:18,  damage:60, type:'ir_missile'},
      {name:'GSh-30-1',           count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  // ── BOMBERS ───────────────────────────────────────

  tu95: {
    displayName:'Tu-95MS Bear-H', team:'red', category:'bomber', domain:'air', icon:'✈',
    hp:190, fuel:280, speed:920, altitude:12000, detectionRange:60,
    isAircraft:true, fuelDrain:0.03, stealthFactor:1.0, asw:false,
    hardpoints:12,
    weaponPool:[
      {name:'Kh-101 (AS-23B)',  count:8,  range:300, damage:95, type:'cruise'},
      {name:'Kh-55SM (AS-15)',  count:8,  range:250, damage:85, type:'cruise'},
      {name:'Kh-32 (AS-4B)',    count:4,  range:600, damage:110,type:'cruise'},
    ],
    weapons:[
      {name:'Kh-101 (AS-23B)',  count:6,  range:300, damage:95, type:'cruise'},
      {name:'Kh-55SM (AS-15)',  count:6,  range:250, damage:85, type:'cruise'},
    ]
  },

  tu160: {
    displayName:'Tu-160 Blackjack', team:'red', category:'bomber', domain:'air', icon:'✈',
    hp:220, fuel:300, speed:2200, altitude:16000, detectionRange:70,
    isAircraft:true, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    hardpoints:12,
    weaponPool:[
      {name:'Kh-101 (AS-23B)',  count:12, range:300, damage:95, type:'cruise'},
      {name:'Kh-55SM (AS-15)',  count:12, range:250, damage:85, type:'cruise'},
    ],
    weapons:[
      {name:'Kh-101 (AS-23B)',  count:12, range:300, damage:95, type:'cruise'},
    ]
  },

  tu22m: {
    displayName:'Tu-22M3 Backfire-C', team:'red', category:'bomber', domain:'air', icon:'✈',
    hp:170, fuel:200, speed:2300, altitude:13300, detectionRange:70,
    isAircraft:true, fuelDrain:0.05, stealthFactor:1.0, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'Kh-22 (AS-4)',     count:3,  range:300, damage:110,type:'cruise'},
      {name:'Kh-15 (AS-16)',    count:6,  range:150, damage:80, type:'cruise'},
      {name:'Kh-32 (AS-4B)',    count:2,  range:600, damage:120,type:'cruise'},
    ],
    weapons:[
      {name:'Kh-22 (AS-4)',     count:3,  range:300, damage:110,type:'cruise'},
      {name:'Kh-15 (AS-16)',    count:6,  range:150, damage:80, type:'cruise'},
    ]
  },

  su34: {
    displayName:'Su-34 Fullback', team:'red', category:'bomber', domain:'air', icon:'✈',
    hp:150, fuel:150, speed:1900, altitude:17000, detectionRange:120,
    isAircraft:true, fuelDrain:0.07, stealthFactor:1.0, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'Kh-29T (AS-14B)',  count:4,  range:30,  damage:75, type:'agm'},
      {name:'Kh-31P (AS-17)',   count:4,  range:60,  damage:80, type:'agm'},
      {name:'FAB-500 Bomb',     count:8,  range:3,   damage:90, type:'bomb'},
      {name:'R-73 (AA-11)',     count:2,  range:18,  damage:60, type:'ir_missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'Kh-29T (AS-14B)',  count:4,  range:30,  damage:75, type:'agm'},
      {name:'R-73 (AA-11)',     count:2,  range:18,  damage:60, type:'ir_missile'},
      {name:'GSh-30-1',         count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  // ── NAVAL (RED) ───────────────────────────────────

  sovremenny: {
    displayName:'Sovremenny-II DDG', team:'red', category:'destroyer', domain:'surface', icon:'⛵',
    hp:380, fuel:200, speed:54, altitude:0, detectionRange:160,
    isAircraft:false, fuelDrain:0.010, stealthFactor:1.0, asw:true,
    weapons:[
      {name:'P-270 Moskit (SS-N-22)',count:8,  range:90,  damage:75, type:'asw'},
      {name:'SA-N-7 Gadfly',        count:16, range:25,  damage:38, type:'sam'},
      {name:'AK-130 (130mm)',       count:Infinity, range:5, damage:25, type:'gun'},
    ]
  },

  udaloy: {
    displayName:'Udaloy II DDG', team:'red', category:'destroyer', domain:'surface', icon:'⛵',
    hp:400, fuel:200, speed:54, altitude:0, detectionRange:180,
    isAircraft:false, fuelDrain:0.010, stealthFactor:1.0, asw:true,
    weapons:[
      {name:'Kh-35 Uran (SS-N-25)', count:8,  range:60,  damage:48, type:'asw'},
      {name:'SA-N-9 Gauntlet',     count:24, range:12,  damage:35, type:'sam'},
      {name:'AK-100 (100mm)',      count:Infinity, range:5, damage:20, type:'gun'},
    ]
  },

  kuznetsov: {
    displayName:'Admiral Kuznetsov', team:'red', category:'carrier', domain:'surface', icon:'⛵',
    hp:750, fuel:450, speed:54, altitude:0, detectionRange:260,
    isAircraft:false, fuelDrain:0.005, stealthFactor:1.0, asw:true,
    isCarrier:true, airWing:['su33','ka27'],
    weapons:[
      {name:'P-700 Granit (SS-N-19)',count:12, range:550,damage:120,type:'asw'},
      {name:'SA-N-9 Gauntlet',     count:48, range:12, damage:35, type:'sam'},
      {name:'CADS-N-1 Kashtan',    count:Infinity, range:2, damage:22, type:'ciws'},
    ]
  },

  // ── AWACS (RED) ────────────────────────────────────

  a50: {
    displayName:'A-50U Mainstay', team:'red', category:'awacs', domain:'air', icon:'✈',
    hp:80, fuel:170, speed:850, altitude:9000, detectionRange:400,
    isAircraft:true, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    hardpoints:2,
    weaponPool:[{name:'R-73 (AA-11)', count:2, range:18, damage:60, type:'ir_missile'}],
    weapons:[{name:'R-73 (AA-11)', count:2, range:18, damage:60, type:'ir_missile'}]
  },

  // ── SUBMARINES (RED) ──────────────────────────────

  yasen_class: {
    displayName:'Yasen-M Submarine', team:'red', category:'submarine', domain:'subsurface', icon:'▼',
    hp:320, fuel:999, speed:46, altitude:0, detectionRange:100,
    isAircraft:false, fuelDrain:0.001, stealthFactor:0.25, asw:true,
    weapons:[
      {name:'SET-65 Torpedo',      count:10, range:20, damage:100, type:'torpedo'},
      {name:'P-800 Oniks (SS-N-26)',count:24, range:300,damage:100, type:'cruise'},
    ]
  },

  kilo_class: {
    displayName:'Kilo-class SSK', team:'red', category:'submarine', domain:'subsurface', icon:'▼',
    hp:200, fuel:200, speed:28, altitude:0, detectionRange:60,
    isAircraft:false, fuelDrain:0.005, stealthFactor:0.2, asw:false,
    weapons:[
      {name:'TEST-71 Torpedo',     count:6,  range:15, damage:95,  type:'torpedo'},
      {name:'3M-54 Kalibr (SS-N-27)',count:8, range:250,damage:85, type:'cruise'},
    ]
  },

  // ── UAVs (RED) ─────────────────────────────────────

  orion_uav: {
    displayName:'Kronshtadt Orion UAV', team:'red', category:'uav', domain:'air', icon:'✦',
    hp:55, fuel:200, speed:200, altitude:7500, detectionRange:150,
    isAircraft:true, fuelDrain:0.02, stealthFactor:0.45, asw:false,
    hardpoints:4,
    weaponPool:[
      {name:'Kh-50 Missile',      count:4, range:6,  damage:60, type:'agm'},
      {name:'FAB-50 Bomb',        count:4, range:2,  damage:50, type:'bomb'},
    ],
    weapons:[
      {name:'Kh-50 Missile',      count:4, range:6,  damage:60, type:'agm'},
    ]
  },

  shahed136: {
    displayName:'Shahed-136 Kamikaze', team:'red', category:'uav', domain:'air', icon:'✦',
    hp:25, fuel:120, speed:185, altitude:1000, detectionRange:5,
    isAircraft:true, fuelDrain:0.02, stealthFactor:0.3, asw:false,
    isSuicide:true,
    weapons:[
      {name:'Warhead (Kamikaze)',  count:1,  range:0.5, damage:150,type:'bomb'},
    ]
  },

  // ── HELICOPTERS (RED) ─────────────────────────────

  mi28n: {
    displayName:'Mi-28N Night Hunter', team:'red', category:'helicopter', domain:'air', icon:'⊕',
    hp:110, fuel:70, speed:324, altitude:3600, detectionRange:75,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.7, asw:false,
    hardpoints:8,
    weaponPool:[
      {name:'9M120 Ataka',        count:16, range:8,  damage:75, type:'agm'},
      {name:'B-8V20 Rockets',     count:40, range:4,  damage:28, type:'rocket'},
      {name:'R-73 (AA-11)',       count:2,  range:18, damage:60, type:'ir_missile'},
      {name:'2A42 30mm',          count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'9M120 Ataka',        count:16, range:8,  damage:75, type:'agm'},
      {name:'R-73 (AA-11)',       count:2,  range:18, damage:60, type:'ir_missile'},
      {name:'2A42 30mm',          count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

  ka27: {
    displayName:'Ka-27 Helix (ASW)', team:'red', category:'helicopter', domain:'air', icon:'⊕',
    hp:65, fuel:60, speed:270, altitude:3500, detectionRange:100,
    isAircraft:true, fuelDrain:0.07, stealthFactor:0.7, asw:true,
    weapons:[
      {name:'APR-3E Torpedo',     count:2, range:10, damage:95, type:'torpedo'},
    ]
  },

  // ── GROUND VEHICLES (RED) ─────────────────────────

  t90m: {
    displayName:'T-90M Proryv', team:'red', category:'tank', domain:'ground', icon:'▣',
    hp:300, fuel:60, speed:65, altitude:0, detectionRange:7,
    isAircraft:false, fuelDrain:0.04, stealthFactor:1.0, asw:false,
    weapons:[
      {name:'2A46M 125mm Cannon', count:40, range:3.5, damage:110, type:'gun'},
      {name:'PKT 7.62mm',        count:Infinity, range:0.8, damage:8, type:'gun'},
      {name:'9M119M Refleks',    count:6,  range:5,   damage:150, type:'agm'},
    ]
  },

  '2s19_msta': {
    displayName:'2S19 Msta-S 152mm SPH', team:'red', category:'artillery', domain:'ground', icon:'⊡',
    hp:170, fuel:60, speed:60, altitude:0, detectionRange:5,
    isAircraft:false, fuelDrain:0.03, stealthFactor:1.0, asw:false,
    weapons:[
      {name:'OF-25 152mm HE',    count:50, range:24, damage:85, type:'artillery'},
      {name:'Krasnopol-M2',      count:8,  range:20, damage:100,type:'artillery'},
    ]
  },

  // ── INFANTRY (RED) ────────────────────────────────

  ru_rifle: {
    displayName:'Russian Rifle Infantry', team:'red', category:'infantry', domain:'ground', icon:'◉',
    hp:50, fuel:999, speed:7, altitude:0, detectionRange:3,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'AK-74M',           count:Infinity, range:0.4, damage:6,  type:'gun'},
      {name:'PKM 7.62mm',       count:Infinity, range:0.8, damage:10, type:'gun'},
    ]
  },

  ru_at: {
    displayName:'Russian Anti-Tank (Kornet)', team:'red', category:'infantry', domain:'ground', icon:'◉',
    hp:40, fuel:999, speed:6, altitude:0, detectionRange:4,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'9M133 Kornet',     count:8,  range:5.5, damage:130, type:'agm'},
      {name:'AK-74M',           count:Infinity, range:0.4, damage:6, type:'gun'},
    ]
  },

  ru_aa: {
    displayName:'Russian AD Infantry (Igla-S)', team:'red', category:'infantry', domain:'ground', icon:'◉',
    hp:40, fuel:999, speed:6, altitude:0, detectionRange:8,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'9K338 Igla-S',     count:8,  range:6,  damage:50, type:'ir_missile'},
      {name:'AK-74M',           count:Infinity, range:0.4, damage:6, type:'gun'},
    ]
  },

  ru_vdv: {
    displayName:'VDV Airborne Infantry', team:'red', category:'infantry', domain:'ground', icon:'◉',
    hp:55, fuel:999, speed:10, altitude:0, detectionRange:4,
    isAircraft:false, fuelDrain:0, stealthFactor:0.5, asw:false, isInfantry:true,
    weapons:[
      {name:'AK-74M',           count:Infinity, range:0.4, damage:7, type:'gun'},
      {name:'RPG-7',            count:6,  range:0.4, damage:75, type:'agm'},
      {name:'2B14 82mm Mortar', count:20, range:4,   damage:38, type:'artillery'},
    ]
  },

  ru_naval: {
    displayName:'Russian Naval Infantry', team:'red', category:'infantry', domain:'ground', icon:'◉',
    hp:55, fuel:999, speed:8, altitude:0, detectionRange:4,
    isAircraft:false, fuelDrain:0, stealthFactor:0.6, asw:false, isInfantry:true,
    weapons:[
      {name:'AK-74M',           count:Infinity, range:0.4, damage:7, type:'gun'},
      {name:'RPG-29',           count:4,  range:0.5, damage:95, type:'agm'},
    ]
  },

  ru_spetsnaz: {
    displayName:'Spetsnaz (SOF)', team:'red', category:'infantry', domain:'ground', icon:'◉',
    hp:65, fuel:999, speed:12, altitude:0, detectionRange:6,
    isAircraft:false, fuelDrain:0, stealthFactor:0.35, asw:false, isInfantry:true,
    weapons:[
      {name:'AS VAL',           count:Infinity, range:0.3, damage:9,  type:'gun'},
      {name:'RPG-29',           count:4,  range:0.5, damage:95, type:'agm'},
      {name:'RG-60TB Thermobar',count:4,  range:0.3, damage:60, type:'gun'},
    ]
  },

  // ── SAM BATTERIES (RED) ───────────────────────────

  s400_battery: {
    displayName:'S-400 Triumf Battery', team:'red', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:250, fuel:999, speed:0, altitude:0, detectionRange:400,
    isAircraft:false, fuelDrain:0, stealthFactor:1.0, asw:false, isStatic:true,
    weapons:[
      {name:'40N6E (400km SAM)', count:4,  range:400, damage:90, type:'sam'},
      {name:'48N6E3 (250km SAM)',count:8,  range:250, damage:75, type:'sam'},
      {name:'9M96E2 (120km SAM)',count:16, range:120, damage:65, type:'sam'},
    ]
  },

  pantsir_s1: {
    displayName:'Pantsir-S1 SHORAD', team:'red', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:150, fuel:80, speed:65, altitude:0, detectionRange:20,
    isAircraft:false, fuelDrain:0.02, stealthFactor:1.0, asw:false,
    weapons:[
      {name:'57E6-E Missile',   count:12, range:20,  damage:55, type:'sam'},
      {name:'2A38M 30mm',       count:Infinity, range:3, damage:20, type:'gun'},
    ]
  },

  // ── BALLISTIC (RED) ───────────────────────────────

  iskander_m: {
    displayName:'9K720 Iskander-M', team:'red', category:'ballistic', domain:'ground', icon:'⊟',
    hp:140, fuel:80, speed:70, altitude:0, detectionRange:10,
    isAircraft:false, fuelDrain:0.02, stealthFactor:1.0, asw:false, isBallistic:true,
    weapons:[
      {name:'9M723 Ballistic Missile', count:2, range:500, damage:250, type:'ballistic'},
      {name:'9M728 Cruise Missile',    count:2, range:400, damage:180, type:'cruise'},
    ]
  },

  // ── CHINA / PLA (RED) ─────────────────────────────

  j20: {
    displayName:'J-20 Mighty Dragon', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:125, fuel:120, speed:2000, altitude:20000, detectionRange:220,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.2, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'PL-15 BVR',          count:4, range:100, damage:55, type:'missile'},
      {name:'PL-10',              count:4, range:20,  damage:68, type:'ir_missile'},
      {name:'GSh-23 (copy)',      count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'PL-15 BVR',          count:4, range:100, damage:55, type:'missile'},
      {name:'PL-10',              count:2, range:20,  damage:68, type:'ir_missile'},
      {name:'GSh-23 (copy)',      count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  j16: {
    displayName:'J-16 Strike Fighter', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:135, fuel:130, speed:2250, altitude:17000, detectionRange:200,
    isAircraft:true, fuelDrain:0.09, stealthFactor:1.0, asw:false,
    hardpoints:12,
    weaponPool:[
      {name:'PL-15 BVR',          count:6, range:100, damage:55, type:'missile'},
      {name:'PL-12 (SD-10)',      count:4, range:70,  damage:50, type:'missile'},
      {name:'PL-10',              count:4, range:20,  damage:68, type:'ir_missile'},
      {name:'YJ-91 Anti-Rad',     count:4, range:60,  damage:80, type:'agm'},
      {name:'GSh-30-1 (copy)',    count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'PL-15 BVR',          count:4, range:100, damage:55, type:'missile'},
      {name:'PL-10',              count:2, range:20,  damage:68, type:'ir_missile'},
      {name:'GSh-30-1 (copy)',    count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  j10c: {
    displayName:'J-10C Active Viper', team:'red', category:'fighter', domain:'air', icon:'✈',
    hp:105, fuel:95, speed:2200, altitude:17000, detectionRange:150,
    isAircraft:true, fuelDrain:0.10, stealthFactor:0.9, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'PL-12 (SD-10)',      count:4, range:70,  damage:50, type:'missile'},
      {name:'PL-10',              count:4, range:20,  damage:68, type:'ir_missile'},
      {name:'GSh-23 (copy)',      count:Infinity, range:1.5, damage:14, type:'gun'},
    ],
    weapons:[
      {name:'PL-12 (SD-10)',      count:4, range:70,  damage:50, type:'missile'},
      {name:'PL-10',              count:2, range:20,  damage:68, type:'ir_missile'},
      {name:'GSh-23 (copy)',      count:Infinity, range:1.5, damage:14, type:'gun'},
    ]
  },

  type055: {
    displayName:'Type 055 Renhai Cruiser', team:'red', category:'destroyer', domain:'surface', icon:'⛵',
    hp:550, fuel:220, speed:55, altitude:0, detectionRange:280,
    isAircraft:false, fuelDrain:0.010, stealthFactor:0.85, asw:true,
    weapons:[
      {name:'HHQ-9B SAM',         count:64, range:200, damage:70, type:'sam'},
      {name:'YJ-18A AShM',        count:16, range:500, damage:100,type:'asw'},
      {name:'H/PJ-38 130mm',      count:Infinity, range:20, damage:30, type:'gun'},
    ]
  },

  type052d: {
    displayName:'Type 052D Luyang III DDG', team:'red', category:'destroyer', domain:'surface', icon:'⛵',
    hp:430, fuel:200, speed:52, altitude:0, detectionRange:220,
    isAircraft:false, fuelDrain:0.010, stealthFactor:1.0, asw:true,
    weapons:[
      {name:'HHQ-9B SAM',         count:32, range:200, damage:70, type:'sam'},
      {name:'YJ-18A AShM',        count:8,  range:500, damage:100,type:'asw'},
      {name:'H/PJ-45 100mm',      count:Infinity, range:15, damage:24, type:'gun'},
    ]
  },

  type093: {
    displayName:'Type 093 Shang-class SSN', team:'red', category:'submarine', domain:'subsurface', icon:'▼',
    hp:280, fuel:999, speed:46, altitude:0, detectionRange:70,
    isAircraft:false, fuelDrain:0.001, stealthFactor:0.3, asw:true,
    weapons:[
      {name:'Yu-6 Torpedo',       count:8,  range:40, damage:105, type:'torpedo'},
      {name:'YJ-18 Cruise',       count:8,  range:300,damage:85,  type:'cruise'},
    ]
  },

  hq9b: {
    displayName:'HQ-9B SAM Battery', team:'red', category:'sam_battery', domain:'ground', icon:'⊠',
    hp:220, fuel:999, speed:0, altitude:0, detectionRange:300,
    isAircraft:false, fuelDrain:0, stealthFactor:1.0, asw:false, isStatic:true,
    weapons:[
      {name:'HQ-9B (200km SAM)',  count:16, range:200, damage:75, type:'sam'},
      {name:'HQ-9A (125km SAM)',  count:8,  range:125, damage:65, type:'sam'},
    ]
  },

  df26: {
    displayName:'DF-26 IRBM Launcher', team:'red', category:'ballistic', domain:'ground', icon:'⊟',
    hp:130, fuel:80, speed:60, altitude:0, detectionRange:15,
    isAircraft:false, fuelDrain:0.02, stealthFactor:1.0, asw:false, isBallistic:true,
    weapons:[
      {name:'DF-26 IRBM',         count:1, range:4000, damage:400, type:'ballistic'},
    ]
  },

  ch4: {
    displayName:'CH-4 Rainbow UAV', team:'red', category:'uav', domain:'air', icon:'✦',
    hp:55, fuel:200, speed:235, altitude:8000, detectionRange:120,
    isAircraft:true, fuelDrain:0.02, stealthFactor:0.45, asw:false,
    hardpoints:4,
    weaponPool:[
      {name:'AR-1 ATGM',          count:4, range:8,  damage:65, type:'agm'},
      {name:'GB-4 Glide Bomb',    count:4, range:20, damage:75, type:'bomb'},
    ],
    weapons:[
      {name:'AR-1 ATGM',          count:4, range:8,  damage:65, type:'agm'},
    ]
  },

  z10: {
    displayName:'CAIC Z-10 Attack Helicopter', team:'red', category:'helicopter', domain:'air', icon:'⊕',
    hp:105, fuel:65, speed:315, altitude:6400, detectionRange:70,
    isAircraft:true, fuelDrain:0.08, stealthFactor:0.75, asw:false,
    hardpoints:6,
    weaponPool:[
      {name:'HJ-10 ATGM',         count:16, range:8,  damage:75, type:'agm'},
      {name:'TY-90 Air-Air',      count:4,  range:6,  damage:55, type:'ir_missile'},
      {name:'23mm Gun Pod',        count:Infinity, range:1.5, damage:12, type:'gun'},
    ],
    weapons:[
      {name:'HJ-10 ATGM',         count:16, range:8,  damage:75, type:'agm'},
      {name:'TY-90 Air-Air',      count:2,  range:6,  damage:55, type:'ir_missile'},
      {name:'23mm Gun Pod',        count:Infinity, range:1.5, damage:12, type:'gun'},
    ]
  },

};

// ── CONSTANTS ─────────────────────────────────────

const INFANTRY_SIZES = {
  fireteam:{ label:'Fire Team',    count:4,   mult:0.25 },
  squad:   { label:'Squad',        count:9,   mult:1.0  },
  platoon: { label:'Platoon',      count:35,  mult:3.5  },
  company: { label:'Company',      count:120, mult:12   },
};

const CATEGORIES = {
  fighter:    { label:'FIGHTERS',       abbr:'FTR'  },
  bomber:     { label:'BOMBERS',        abbr:'BMB'  },
  destroyer:  { label:'DESTROYERS',     abbr:'DDG'  },
  carrier:    { label:'CARRIERS',       abbr:'CVN'  },
  awacs:      { label:'AWACS/AEW',      abbr:'AEW'  },
  submarine:  { label:'SUBMARINES',     abbr:'SUB'  },
  uav:        { label:'UAV/DRONES',     abbr:'UAV'  },
  helicopter: { label:'HELICOPTERS',    abbr:'HEL'  },
  tank:       { label:'ARMOR',          abbr:'ARM'  },
  artillery:  { label:'ARTILLERY',      abbr:'ARTY' },
  infantry:   { label:'INFANTRY',       abbr:'INF'  },
  sam_battery:{ label:'SAM / AIR DEF',  abbr:'SAM'  },
  ballistic:  { label:'BALLISTIC/MLRS', abbr:'BMSL' },
};

const WEAPON_TRAIL_COLORS = {
  missile:   '#55ccff', ir_missile:'#ffaa22', cruise:   '#ff4444',
  bomb:      '#cc8800', agm:       '#ff8844', sam:      '#00ffaa',
  ciws:      '#ffee55', gun:       '#ffff00', asw:      '#ff3366',
  torpedo:   '#00ddff', ballistic: '#ff00ff', rocket:   '#ff6600',
  artillery: '#ff9900', auto:      '#ffff44',
};

// Build lookup: by category
const UNITS_BY_CAT = {};
for (const [key,def] of Object.entries(UNIT_DB)) {
  if (!UNITS_BY_CAT[def.category]) UNITS_BY_CAT[def.category] = [];
  UNITS_BY_CAT[def.category].push({ key, ...def });
}
