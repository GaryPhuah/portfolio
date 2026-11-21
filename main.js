(() => {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;

  const WORKS = [
    // =========================================================================
    // 01 / DATA ANALYTICS & MACHINE LEARNING (0..5)
    // =========================================================================
    {
      title: 'Predicting Student Dropout Risk',
      kicker: 'Data Analyst · Explainable Learning Analytics',
      desc: 'End-to-end XGBoost student retention pipeline achieving 86.88% accuracy, 86.95% recall, and 0.9434 ROC-AUC across 28,785 student records with Power BI cohort views and TreeSHAP feature attributions.',
      category: 'data-analyst',
      image: 'assets/work/oulad-01.png',
      url: 'https://www.linkedin.com/in/phuah-hong-xuan/details/projects/',
      cta: 'View on LinkedIn'
    },
    {
      title: 'NIKE Sales Price Prediction',
      kicker: 'Data Analyst · Hedonic Pricing & Machine Learning',
      desc: 'Hedonic pricing model and multi-variable regression estimating price elasticity, discounting thresholds, and SKU valuation across thousands of marketplace listings with 0.892 R² score.',
      category: 'data-analyst',
      image: 'assets/work/nike-01.png',
      url: 'https://www.linkedin.com/in/phuah-hong-xuan/details/projects/',
      cta: 'View on LinkedIn'
    },
    {
      title: 'Online Shopper Intent (Databricks)',
      kicker: 'Data Analyst · Big Data Analytics & PySpark',
      desc: 'Distributed PySpark MLlib session analytics classifying consumer purchase propensity and bounce triggers across 12,330+ clickstream sessions on Databricks clusters (0.914 ROC-AUC).',
      category: 'data-analyst',
      image: 'assets/work/shopper-intent.png',
      url: 'https://www.linkedin.com/in/phuah-hong-xuan/details/projects/',
      cta: 'View on LinkedIn'
    },
    {
      title: 'KFC Malaysia Operations BI',
      kicker: 'Data Analyst · Business Intelligence & Ops',
      desc: 'Multi-unit franchise operations and revenue dashboard delivering store-by-store sales trends, ticket sizes, and operational throughput monitoring with interactive Qlik Sense data filters.',
      category: 'data-analyst',
      image: 'assets/work/kfc-bi.png',
      url: 'https://www.linkedin.com/in/phuah-hong-xuan/details/projects/',
      cta: 'View on LinkedIn'
    },
    {
      title: 'FATAL FLOW: Child Survival',
      kicker: 'Data Analyst · Public Health Analytics & Survival',
      desc: 'Non-parametric survival analysis and epidemiological impact modeling quantifying water contamination risk on child mortality across international survey cohorts (PROC LIFETEST, p < 0.001).',
      category: 'data-analyst',
      image: 'assets/work/fatal-flow.png',
      url: 'https://www.linkedin.com/in/phuah-hong-xuan/details/projects/',
      cta: 'View on LinkedIn'
    },
    {
      title: '5M Record Encryption Benchmark',
      kicker: 'Data Analyst · Cryptographic Benchmark & DB Engineering',
      desc: 'High-throughput cryptographic performance benchmark evaluating MySQL 8.0 Transparent Data Encryption (TDE) vs MongoDB WiredTiger across 5,000,000 records (tablespace TDE outperforming column AES by 6.2x).',
      category: 'data-analyst',
      image: 'assets/work/db-01.png',
      url: 'https://www.linkedin.com/in/phuah-hong-xuan/details/projects/',
      cta: 'View on LinkedIn'
    },

    // =========================================================================
    // 02 / WEB APPLICATIONS & E-COMMERCE (6..9)
    // =========================================================================
    {
      title: 'HazeMY Live Portal',
      kicker: 'Personal · Environmental Telemetry & GIS',
      desc: 'Real-time Malaysian air quality telemetry portal ingesting 73 DOE ground monitoring stations, APIMS indices, and NASA FIRMS fire hotspots with interactive spatial maps.',
      category: 'web-apps',
      image: 'assets/work/hazemy-01.png',
      url: 'https://hazemy.vercel.app/',
      cta: 'Open hazemy.vercel.app'
    },
    {
      title: 'Cozy Garden Florist',
      kicker: 'Client · Boutique E-Commerce Platform',
      desc: 'Custom boutique florist e-commerce platform in Muar featuring automated catalog ordering, WhatsApp concierge booking, and responsive gift arrangement showcase.',
      category: 'web-apps',
      image: 'assets/work/cozygarden.png',
      url: 'https://cozygardenflorist.my/',
      cta: 'Visit cozygardenflorist.my'
    },
    {
      title: 'Merry Holidays Booking',
      kicker: 'Commercial · Travel & Reservation Engine',
      desc: 'Bus management and holiday reservation engine featuring bus bookings, seat allocation, and passenger manifests for special trips with operator authentication.',
      category: 'web-apps',
      image: 'assets/work/merryholidays.png',
      url: 'http://merryholidaysbooking.com/',
      cta: 'Open merryholidaysbooking.com'
    },
    {
      title: 'Swapify Barter Platform',
      kicker: 'Collaborative · Community Barter & Exchange',
      desc: 'Peer-to-peer barter and community goods exchange web platform with user listings, live auctions, category-based item matching, and direct negotiations for smart gadgets.',
      category: 'web-apps',
      image: 'assets/work/swapify.png',
      url: 'https://swapify.freehosting.dev/',
      cta: 'Visit Swapify'
    },

    // =========================================================================
    // 03 / AI & COMPUTER VISION / IOT (10..11)
    // =========================================================================
    {
      title: 'Hand Gesture Recognition & Sentiment AI',
      kicker: 'Deep Learning · MediaPipe & OpenCV',
      desc: 'Real-time sign language interpretation and assistive communication using MediaPipe 21 hand landmarks, convolutional neural networks, and sentiment recognition deployed on Streamlit.',
      category: 'ai-iot',
      image: 'assets/work/gesture-cv.gif',
      url: 'https://github.com/GaryPhuah/Hand-Gesture-Recognition-with-Sentiment-Analysis',
      cta: 'View GitHub Repository'
    },
    {
      title: 'Smart Flood Management System',
      kicker: 'Collaborative · IoT Disaster Telemetry & Early Warning',
      desc: 'IoT-driven river gauge monitoring and municipal early flood warning portal for Selangor with multi-role access, real-time river level graphs, and automated hazard alerts.',
      category: 'ai-iot',
      image: 'assets/work/smartflood.png',
      url: 'https://smart-flood-management-system-ea.vercel.app/',
      cta: 'Open Flood Portal'
    },

    // =========================================================================
    // 04 / ENTERPRISE SYSTEMS & PRODUCTS (12..14)
    // =========================================================================
    {
      title: 'ANC Group Enterprise Solutions',
      kicker: 'Corporate · Enterprise Automation & Corporate Portal',
      desc: 'Corporate business solutions and 10+ production Python and n8n ETL pipelines saving 15+ manual hours weekly, Docker self-hosted Mailtrain, and Delphi ERP synchronization.',
      category: 'enterprise',
      image: 'assets/work/ancgroup.png',
      url: 'https://ancgroup.my/',
      cta: 'Visit ancgroup.my'
    },
    {
      title: 'AMS SQL Cloud Portal',
      kicker: 'Corporate · Cloud Database & Accounting Portal',
      desc: 'Cloud SQL management and accounting database system web portal for enterprise data queries, voucher processing, and financial reporting deployed on Vercel.',
      category: 'enterprise',
      image: 'assets/work/ams-sql.png',
      url: 'http://ams-sql.vercel.app/',
      cta: 'Open ams-sql.vercel.app'
    },
    {
      title: 'LOQO Malaysia',
      kicker: 'Brand · Streetwear E-Commerce Prototype',
      desc: 'Interactive Figma prototype for Malaysian clothing brand LOQO featuring streetwear collections, promotional seasonal drops, promotional discounts, and cart checkout UX.',
      category: 'enterprise',
      image: 'assets/work/loqo.png',
      url: 'https://tinyurl.com/loqomalaysia',
      cta: 'Launch Figma Prototype'
    }
  ];

  const CATEGORY_META = {
    'data-analyst': [
      'Data Analytics & Machine Learning',
      'End-to-end predictive models, Big Data PySpark pipelines on Databricks, enterprise Qlik Sense BI dashboards, SAS survival analytics, and 5M record cryptographic benchmarks.',
      'Python · scikit-learn · XGBoost · PySpark · Databricks · Power BI · Qlik Sense · SAS · MySQL'
    ],
    'web-apps': [
      'Web & Full-Stack Applications',
      'Production web applications, live GIS environmental telemetry portals, boutique e-commerce platforms, and real-time travel booking engines.',
      'Next.js 16 · React · TypeScript · Leaflet GIS · Tailwind CSS · RESTful APIs · Vercel'
    ],
    'ai-iot': [
      'AI & Computer Vision',
      'Real-time sign language interpretation using MediaPipe 21 hand landmarks, deep learning CNNs, and IoT river level flood telemetry sensors.',
      'MediaPipe · OpenCV · TensorFlow / Keras · Streamlit · IoT ESP32 Telemetry · Python'
    ],
    enterprise: [
      'Enterprise Systems & Products',
      'Corporate business solutions, 10+ automated Python/n8n ETL workflows saving 15+ hours weekly, cloud SQL accounting systems, and brand design prototypes.',
      'n8n · Python ETL · Docker · Cloud SQL · Delphi ERP · Figma Design Systems'
    ]
  };

  const SECTION_META = [
    ['intro', 'intro', '01 / PROFILE', '360° Avatar & Role'],
    ['about', 'about', '02 / ABOUT ME', 'Summary & Impact'],
    ['experience', 'experience', '03 / EXPERIENCE', 'ANC Group & Work Desk'],
    ['education', 'education', '04 / EDUCATION', 'College → Univ → Grad'],
    ['graduation', 'education', '05 / GRADUATION', 'Internship · Sep 2027'],
    ['projects', 'projects', '06 / PROJECTS', '3D Arc Overview'],
    ['skills', 'credentials', '07 / SKILLS', 'Stack & 3D Folder'],
    ['certificates', 'credentials', '08 / CERTIFICATES', 'Verified Credentials'],
    ['achievements', 'credentials', '09 / ACHIEVEMENTS', 'Honors & Awards'],
    ['beyond', 'beyond', '10 / BEYOND', 'Availability & Contact']
  ];

  const $ = (id) => document.getElementById(id);
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

  // Instant presentation (no calibrating preloader screen)
  document.body.classList.add('is-loaded');
  const preloaderEl = $('site-preloader');
  if (preloaderEl) {
    try { preloaderEl.remove(); } catch (_) {}
  }

  // =========================================================================
  // 1. MAGNETIC SOCIAL ICONS (NATIVE GPU POINTER)
  // =========================================================================
  document.querySelectorAll('#social span').forEach((item) => {
    const link = item.querySelector('a');
    if (!link) return;
    item.addEventListener('pointermove', (e) => {
      const r = item.getBoundingClientRect();
      link.style.setProperty('--siX', `${((e.clientX - (r.left + r.width / 2)) * 0.35).toFixed(1)}px`);
      link.style.setProperty('--siY', `${((e.clientY - (r.top + r.height / 2)) * 0.35).toFixed(1)}px`);
    });
    item.addEventListener('pointerleave', () => {
      link.style.setProperty('--siX', '0px');
      link.style.setProperty('--siY', '0px');
    });
  });

  // =========================================================================
  // 2. HERO DUST PARTICLES + 360° INTERACTIVE TOP HERO CHARACTER RIG
  // =========================================================================
  const heroCanvas = $('hero-dust-canvas');
  let dustCtrl = null;
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.8 + Math.random() * 1.5,
      vy: 0.00024 + Math.random() * 0.00038,
      a: 0.16 + Math.random() * 0.34,
      tint: Math.random() > 0.55
    }));
    let w = 0, h = 0, dpr = 1, raf = 0, dustRunning = false;

    function sizeDust() {
      const r = heroCanvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      heroCanvas.width = w * dpr;
      heroCanvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawDust() {
      if (!dustRunning || paused || reduced.matches || document.hidden) {
        raf = 0;
        return;
      }
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y -= p.vy;
        if (p.y < -0.04) { p.y = 1.04; p.x = Math.random(); }
        ctx.fillStyle = p.tint ? `rgba(194, 164, 255, ${p.a})` : `rgba(234, 229, 236, ${p.a * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(drawDust);
    }

    sizeDust();
    window.addEventListener('resize', sizeDust, { passive: true });
    dustCtrl = {
      resume() {
        if (!dustRunning) {
          dustRunning = true;
          if (!raf) raf = requestAnimationFrame(drawDust);
        }
      },
      stop() {
        dustRunning = false;
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
      }
    };
    dustCtrl.resume();
  }

  const charRig = $('char-rig');
  const charImg = charRig?.querySelector('.char-frame');
  const landingEl = $('intro');
  if (charRig && charImg && landingEl) {
    const SECTORS_360 = [
      'assets/char360/pose-11.webp',
      'assets/char360/pose-05.webp',
      'assets/char360/pose-12.webp',
      'assets/char360/pose-02.webp',
      'assets/char360/pose-down-left.webp',
      'assets/char360/pose-left.webp',
      'assets/char360/pose-08.webp',
      'assets/char360/pose-up-left.webp',
      'assets/char360/pose-04.webp',
      'assets/char360/pose-06.webp',
      'assets/char360/pose-01.webp',
      'assets/char360/pose-07.webp'
    ];
    const CENTER_POSE = 'assets/char360/pose-09.webp';
    const ALL_SPRITES = new Set([...SECTORS_360, CENTER_POSE, 'assets/char360/pose-03.webp', 'assets/char360/pose-10.webp']);
    const preloaded360 = new Map();

    // Immediately register center pose
    const centerIm = new Image();
    centerIm.src = CENTER_POSE;
    preloaded360.set(CENTER_POSE, centerIm);

    // Warm remaining 360 poses during idle frames so initial load stays lightning fast
    const warmPoses = () => {
      for (const src of ALL_SPRITES) {
        if (src === CENTER_POSE) continue;
        const im = new Image();
        im.src = src;
        if (im.decode) im.decode().catch(() => {});
        preloaded360.set(src, im);
      }
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(warmPoses, { timeout: 1200 });
    } else {
      setTimeout(warmPoses, 600);
    }

    let currentSrc = charImg.getAttribute('src');
    let idlePoseTimer = 0;
    const targetTilt = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const currentTilt = { rx: 0, ry: 0, tx: 0, ty: 0 };
    let tiltRaf = 0;
    let tiltActive = true;

    function setPose(src) {
      if (src && src !== currentSrc) { currentSrc = src; charImg.src = src; }
    }

    function resetToDefaultPose() {
      targetTilt.rx = 0; targetTilt.ry = 0; targetTilt.tx = 0; targetTilt.ty = 0;
      setPose(CENTER_POSE);
      requestTilt();
    }

    let heroCenter = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.44 };
    function updateHeroCenter() {
      heroCenter.x = window.innerWidth * 0.5;
      heroCenter.y = window.innerHeight * 0.44;
    }
    window.addEventListener('resize', updateHeroCenter, { passive: true });

    function update360(clientX, clientY) {
      if (!tiltActive || window.scrollY > window.innerHeight * 0.65) return;
      clearTimeout(idlePoseTimer);
      idlePoseTimer = setTimeout(resetToDefaultPose, 260);

      const dx = clientX - heroCenter.x;
      const dy = clientY - heroCenter.y;
      const dist = Math.hypot(dx, dy);

      const nx = clamp(dx / Math.max(160, window.innerWidth * 0.42), -1, 1);
      const ny = clamp(dy / Math.max(160, window.innerHeight * 0.44), -1, 1);
      targetTilt.ry = nx * 13;
      targetTilt.rx = -ny * 9;
      targetTilt.tx = nx * 12;
      targetTilt.ty = ny * 8;

      if (dist < 72) {
        setPose(CENTER_POSE);
      } else {
        const deg = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
        setPose(SECTORS_360[Math.floor(((deg + 15) % 360) / 30)]);
      }
      requestTilt();
    }

    window.addEventListener('pointermove', (e) => update360(e.clientX, e.clientY), { passive: true });
    landingEl.addEventListener('touchmove', (e) => {
      if (e.touches[0]) update360(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    document.addEventListener('mouseleave', () => {
      clearTimeout(idlePoseTimer);
      resetToDefaultPose();
    });

    function tiltStep() {
      tiltRaf = 0;
      if (!tiltActive || paused || reduced.matches) return;
      const dx = targetTilt.rx - currentTilt.rx;
      const dy = targetTilt.ry - currentTilt.ry;
      const dtx = targetTilt.tx - currentTilt.tx;
      const dty = targetTilt.ty - currentTilt.ty;
      if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02 || Math.abs(dtx) > 0.02 || Math.abs(dty) > 0.02) {
        currentTilt.rx += dx * 0.14;
        currentTilt.ry += dy * 0.14;
        currentTilt.tx += dtx * 0.14;
        currentTilt.ty += dty * 0.14;
        charRig.style.setProperty('--rig-rx', `${currentTilt.rx.toFixed(2)}deg`);
        charRig.style.setProperty('--rig-ry', `${currentTilt.ry.toFixed(2)}deg`);
        charRig.style.setProperty('--rig-x', `${currentTilt.tx.toFixed(2)}px`);
        charRig.style.setProperty('--rig-y', `${currentTilt.ty.toFixed(2)}px`);
        tiltRaf = requestAnimationFrame(tiltStep);
      } else {
        currentTilt.rx = targetTilt.rx;
        currentTilt.ry = targetTilt.ry;
        currentTilt.tx = targetTilt.tx;
        currentTilt.ty = targetTilt.ty;
      }
    }

    function requestTilt() {
      if (!tiltRaf && tiltActive && !paused && !reduced.matches) {
        tiltRaf = requestAnimationFrame(tiltStep);
      }
    }

    // In-view observer: sleep both dust and 3D rig when scrolled past hero
    const introObs = new IntersectionObserver((entries) => {
      const visible = entries[0].isIntersecting;
      if (visible) {
        dustCtrl?.resume();
        tiltActive = true;
        requestTilt();
      } else {
        dustCtrl?.stop();
        tiltActive = false;
        if (tiltRaf) { cancelAnimationFrame(tiltRaf); tiltRaf = 0; }
      }
    }, { threshold: 0.05 });
    introObs.observe(landingEl);
  }

  // =========================================================================
  // 3. HARDWARE-DECODED ALL-KEYFRAME HD VIDEO SCRUBBER (V5 -> V4 -> V1)
  // =========================================================================
  const VIDEO_DURATION = 34.17;
  const journeyVideo = $('journey-video');
  let targetVideoTime = 0;
  let displayVideoTime = 0;
  let videoReady = false;
  let videoAnchors = [];

  function syncVideoFrame(t) {
    if (!journeyVideo || !videoReady || journeyVideo.readyState < 2 || journeyVideo.seeking) return;
    if (worksSection && window.scrollY > worksSection.offsetTop) return;
    const dur = Number.isFinite(journeyVideo.duration) && journeyVideo.duration > 1 ? journeyVideo.duration : VIDEO_DURATION;
    const clamped = clamp(t, 0, Math.max(0.05, dur - 0.04));
    if (Math.abs(journeyVideo.currentTime - clamped) > 0.035) {
      if (typeof journeyVideo.fastSeek === 'function') {
        journeyVideo.fastSeek(clamped);
      } else {
        journeyVideo.currentTime = clamped;
      }
    }
  }

  function mapScrollToVideoTime(sy) {
    if (!videoAnchors.length) return 0;
    if (sy <= videoAnchors[0][0]) return videoAnchors[0][1];
    for (let i = 1; i < videoAnchors.length; i++) {
      const [y0, t0] = videoAnchors[i - 1];
      const [y1, t1] = videoAnchors[i];
      if (sy <= y1) {
        const u = clamp((sy - y0) / Math.max(1, y1 - y0));
        return t0 + (t1 - t0) * u;
      }
    }
    return videoAnchors[videoAnchors.length - 1][1];
  }

  if (journeyVideo) {
    if (!journeyVideo.getAttribute('src')) {
      journeyVideo.src = 'assets/journey-hd.mp4?v=20261121_noghost';
    }

    const onReady = () => {
      videoReady = true;
      journeyVideo.pause();
      syncVideoFrame(displayVideoTime);
      requestTick();
    };
    journeyVideo.addEventListener('loadeddata', onReady, { once: true });
    journeyVideo.addEventListener('canplay', onReady, { once: true });
    journeyVideo.addEventListener('seeked', () => {
      if (Math.abs(targetVideoTime - journeyVideo.currentTime) > 0.04) requestTick();
    });
    if (journeyVideo.readyState >= 2) onReady();
  }

  // =========================================================================
  // 4. REVEALS & INTERACTIVE STACK PANELS
  // =========================================================================
  const revealObs = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObs.unobserve(entry.target);
      }
    }
  }, { rootMargin: '180px 0px 60px 0px', threshold: 0.02 });
  document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

  // =========================================================================
  // 5. UNIFIED BIAOGE SCROLL ORCHESTRATION (Morph + Video Scrub + Works Arc)
  // =========================================================================
  const videoStage = $('video-stage');
  const stageRim = $('stage-rim');
  const charRigWrap = $('char-rig-wrap');
  const scrollVidWrap = $('scroll-video-wrap');
  const landingContainer = $('landing-container');
  const heroSocialBar = $('hero-social-bar');

  const aboutSection = $('about');
  const eduSection = $('education');
  const expSection = $('experience');
  const gradSection = $('graduation');

  /** Create a DRY masked vertical timeline controller shared by Education and Experience. */
  function createSpineController({ sectionId, trackId, bodyRowId, yearId, roleId, tabGroup }) {
    const section = $(sectionId);
    const track = $(trackId);
    const bodyRow = $(bodyRowId);
    const yearEl = $(yearId);
    const roleEl = $(roleId);
    const entries = track ? Array.from(track.querySelectorAll('.bio-entry')) : [];
    const tabs = Array.from(document.querySelectorAll(`.chapter-tab[data-spine="${tabGroup}"]`));
    let maxShift = 0, spineHeight = 300, activeTabKey = '', lastActiveIdx = -1;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (!section) return;
        const vh = window.innerHeight || 800;
        const travel = Math.max(1, section.offsetHeight - vh);
        const p = clamp(Number(tab.dataset.tabProgress || 0));
        window.scrollTo({ top: section.offsetTop + p * travel, behavior: reduced.matches ? 'auto' : 'smooth' });
      });
    });

    return {
      section,
      measure() {
        if (track) maxShift = Math.max(0, track.scrollHeight - track.parentElement.clientHeight + 64);
        if (bodyRow) spineHeight = Math.max(120, bodyRow.clientHeight - 10);
      },
      update(sy, vh) {
        if (!section || !track) return;
        const sTop = section.offsetTop;
        const sHeight = section.offsetHeight;
        if (sy < sTop - vh * 1.2 || sy > sTop + sHeight + vh * 0.4) return;

        const travel = Math.max(1, sHeight - vh);
        const bp = clamp((sy - sTop) / travel);
        track.style.setProperty('--bio-shift', `${(-bp * maxShift).toFixed(1)}px`);
        bodyRow?.style.setProperty('--bio-progress', String(Math.max(0.14, bp)));
        bodyRow?.style.setProperty('--bio-dot-y', `${(Math.max(0.08, bp) * spineHeight).toFixed(1)}px`);

        const idx = clamp(Math.round(bp * (entries.length - 1)), 0, entries.length - 1);
        if (idx !== lastActiveIdx) {
          lastActiveIdx = idx;
          entries.forEach((el, i) => el.classList.toggle('is-active', i === idx));
          const cur = entries[idx];
          if (cur) {
            if (yearEl) yearEl.textContent = cur.dataset.year || '';
            if (roleEl) roleEl.textContent = cur.dataset.role || '';
            const tabKey = cur.dataset.tab || '';
            if (tabKey && tabKey !== activeTabKey) {
              activeTabKey = tabKey;
              tabs.forEach((t) => t.classList.toggle('is-active', t.dataset.tabKey === tabKey));
            }
          }
        }
      },
    };
  }

  const eduSpine = createSpineController({
    sectionId: 'education',
    trackId: 'edu-track',
    bodyRowId: 'edu-body-row',
    yearId: 'edu-year-display',
    roleId: 'edu-role-display',
    tabGroup: 'edu',
  });

  const expSpine = createSpineController({
    sectionId: 'experience',
    trackId: 'exp-track',
    bodyRowId: 'exp-body-row',
    yearId: 'exp-year-display',
    roleId: 'exp-role-display',
    tabGroup: 'exp',
  });

  const worksSection = $('projects');
  const worksViewport = $('works-viewport');
  const workCards = Array.from(document.querySelectorAll('.work-card'));
  const workSurfaces = workCards.map((c) => c.querySelector('.work-card-surface'));
  const workCategoryButtons = Array.from(document.querySelectorAll('.works-rail button'));
  const navLinks = Array.from(document.querySelectorAll('.nav a[data-nav]'));

  const timelineRange = $('timeline');
  const timelineFill = $('timeline-fill');
  const sectionIdxEl = $('section-index');
  const sectionLblEl = $('section-label');
  const timecodeEl = $('timecode');

  let workTargetPos = 0, workDisplayPos = 0, lastWorkIdx = -1, worksRendered = false;
  let sectionAnchors = [];
  let tickRaf = 0, prevTick = 0, workDrag = null, suppressClickUntil = 0;
  let currentSection = 'intro';

  function getAbsTop(el) {
    let top = 0, cur = el;
    while (cur) { top += cur.offsetTop || 0; cur = cur.offsetParent; }
    return top;
  }

  function measureAll() {
    eduSpine.measure();
    expSpine.measure();
    sectionAnchors = SECTION_META.map(([id, nav, code, label]) => {
      const el = $(id);
      return el ? { id, nav, code, label, top: getAbsTop(el) } : null;
    }).filter(Boolean);

    const vh = window.innerHeight || 800;
    const aboutTop = aboutSection ? aboutSection.offsetTop : vh;
    const expTop = expSection ? expSection.offsetTop : vh * 2;
    const expTravel = expSection ? Math.max(1, expSection.offsetHeight - vh) : vh;
    const eduTop = eduSection ? eduSection.offsetTop : vh * 4.4;
    const eduTravel = eduSection ? Math.max(1, eduSection.offsetHeight - vh) : vh;
    const gradTop = gradSection ? gradSection.offsetTop : vh * 6.8;
    const projTop = worksSection ? worksSection.offsetTop : vh * 7.8;

    // Continuous monotonic scrollY -> video second mapping across all 820 frames (34.17s)
    videoAnchors = [
      [vh * 0.08, 0.0],                       // V5: suit bust puts on glasses -> black tee
      [aboutTop, 9.8],                        // V4: outstretched welcoming hand (About Me)
      [expTop, 12.2],                         // V1: sitting into brown armchair
      [expTop + expTravel * 0.50, 17.5],      // V1: Lenovo LOQ stickered laptop open
      [expTop + expTravel, 22.8],             // V1: typing, then dip to dark
      [eduTop, 24.0],                         // V1: Sunway College tee & backpack
      [eduTop + eduTravel * 0.50, 25.75],     // V1: Sunway University after notebook wipe
      [eduTop + eduTravel, 29.08],            // V1: Graduation Gown & Scroll after cap wipe
      [gradTop, 32.0],                        // V1: Suit + Cap + 3D Charts/Globe/Conveyor (Crisp Globe)
      [Math.max(gradTop + vh * 0.3, projTop - vh * 0.15), 34.0],
    ];
  }

  function renderWorks(pos) {
    const compact = window.innerWidth <= 760;
    const radius = window.innerWidth * (compact ? 0.72 : 0.49);
    const step = compact ? 0.76 : 0.54;
    const nearest = clamp(Math.round(pos), 0, workCards.length - 1);

    workCards.forEach((card, idx) => {
      const delta = idx - pos;
      const abs = Math.abs(delta);
      const angle = clamp(delta * step, -1.5, 1.5);
      const x = Math.sin(angle) * radius;
      const y = Math.pow(Math.min(abs, 3.2), 1.35) * (compact ? 11 : 16);
      const depth = (Math.cos(angle) - 1) * (compact ? 500 : 760);
      const rotate = -Math.sin(angle) * (compact ? 21 : 32);
      const scale = Math.max(compact ? 0.62 : 0.58, 1 - abs * (compact ? 0.15 : 0.12));
      const visible = abs <= 3.15;
      const active = idx === nearest;

      card.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), ${depth.toFixed(1)}px) rotateY(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      card.style.opacity = visible ? String(clamp(1 - (abs - 1.15) * 0.39, 0.08, 1)) : '0';
      card.style.zIndex = String(1000 - Math.round(abs * 100));
      card.classList.toggle('is-active', active);
      card.classList.toggle('is-visible', visible);
      if (workSurfaces[idx]) workSurfaces[idx].tabIndex = active ? 0 : -1;
    });

    if (nearest !== lastWorkIdx) {
      lastWorkIdx = nearest;
      const cat = WORKS[nearest]?.category || 'personal';
      const meta = CATEGORY_META[cat] || CATEGORY_META['data-analyst'];
      $('works-category').textContent = meta[0];
      $('works-description').textContent = meta[1];
      $('works-tags').textContent = meta[2];
      $('works-current').textContent = String(nearest + 1).padStart(2, '0');
      $('works-meter').value = nearest + 1;
      workCategoryButtons.forEach((b) => b.setAttribute('aria-current', String(b.dataset.workCategory === cat)));
    }
    worksRendered = true;
  }

  function tick(now) {
    tickRaf = 0;
    if (document.hidden) return;
    const dt = clamp(now - (prevTick || now - 16.67), 1, 50);
    prevTick = now;

    // 1) Hardware-accelerated all-keyframe video scrubbing (smooth seeking)
    const vDiff = targetVideoTime - displayVideoTime;
    const fDone = Math.abs(vDiff) < 0.015;
    if (!fDone) {
      displayVideoTime += vDiff * (1 - Math.exp(-dt / 75));
      syncVideoFrame(displayVideoTime);
    } else if (vDiff !== 0) {
      displayVideoTime = targetVideoTime;
      syncVideoFrame(displayVideoTime);
    }

    // 2) Smooth 3D curved arc carousel inertia
    const wDiff = workTargetPos - workDisplayPos;
    const wDone = Math.abs(wDiff) < 0.0005;
    if (!wDone) {
      workDisplayPos += wDiff * (1 - Math.exp(-dt / (workDrag ? 48 : 95)));
      renderWorks(workDisplayPos);
    } else if (wDiff !== 0) {
      workDisplayPos = workTargetPos;
      renderWorks(workDisplayPos);
    }

    if (!fDone || !wDone) tickRaf = requestAnimationFrame(tick);
  }

  function requestTick() {
    if (!tickRaf && !document.hidden) tickRaf = requestAnimationFrame(tick);
  }

  const timeStr = (sec) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;

  function updateScroll() {
    const sy = window.scrollY;
    const vh = window.innerHeight || 800;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    const totalProgress = clamp(sy / maxScroll);

    // Fixed bottom Biaoge transport bar
    if (timelineFill) timelineFill.style.transform = `scaleX(${totalProgress.toFixed(4)})`;
    if (timelineRange) timelineRange.value = String(Math.round(totalProgress * 10000));
    if (timecodeEl) timecodeEl.textContent = `${timeStr(Math.round(totalProgress * 34))} / 00:34`;

    // Active 10-step sequential chapter meta
    let activeAnchor = sectionAnchors[0];
    for (const a of sectionAnchors) {
      if (sy + vh * 0.42 >= a.top) activeAnchor = a;
    }
    if (activeAnchor && activeAnchor.id !== currentSection) {
      currentSection = activeAnchor.id;
      document.body.dataset.section = currentSection;
      if (sectionIdxEl) sectionIdxEl.textContent = activeAnchor.code;
      if (sectionLblEl) sectionLblEl.textContent = activeAnchor.label;
      navLinks.forEach((a) => {
        if (a.dataset.nav === activeAnchor.nav) a.setAttribute('aria-current', 'step');
        else a.removeAttribute('aria-current');
      });
    }

    // -----------------------------------------------------------------------
    // DUAL CHARACTER VIDEO ORCHESTRATION (Welcome -> Edu Shirts -> Desk Work)
    // -----------------------------------------------------------------------
    const handoffRatio = clamp((sy - vh * 0.08) / (vh * 0.20));
    const introExitRatio = clamp(sy / (vh * 0.24));
    if (charRigWrap) {
      charRigWrap.style.setProperty('--hero-rig-opacity', String((1 - handoffRatio).toFixed(3)));
      charRigWrap.style.setProperty('--hero-rig-scale', String((1 + handoffRatio * 0.06).toFixed(3)));
    }
    if (scrollVidWrap) {
      scrollVidWrap.style.setProperty('--scroll-vid-opacity', String(handoffRatio.toFixed(3)));
    }
    if (landingContainer) {
      landingContainer.style.setProperty('--hero-text-opacity', String((1 - introExitRatio).toFixed(3)));
      landingContainer.style.setProperty('--hero-text-y', `${(-introExitRatio * 24).toFixed(1)}px`);
    }
    if (heroSocialBar) {
      heroSocialBar.style.setProperty('--hero-text-opacity', String((1 - introExitRatio).toFixed(3)));
    }

    // Continuous piecewise monotonic timecode mapping across all 985 frames
    targetVideoTime = mapScrollToVideoTime(sy);

    // Fade in left About Me column once hero morph clears bottom transport bar
    if (aboutSection) {
      const aboutVis = clamp((sy - (aboutSection.offsetTop - vh * 0.72)) / Math.max(1, vh * 0.26));
      aboutSection.style.setProperty('--about-stage-opacity', aboutVis.toFixed(3));
      aboutSection.style.setProperty('--about-stage-y', `${((1 - aboutVis) * 20).toFixed(1)}px`);
    }

    // Fade out .video-stage cleanly as #projects enters so 3D Works carousel owns pure #050507 stage
    if (videoStage && worksSection) {
      const fadeStart = worksSection.offsetTop - vh * 0.45;
      const fadeLen = Math.max(1, vh * 0.45);
      const stageVis = 1 - clamp((sy - fadeStart) / fadeLen);
      videoStage.style.setProperty('--stage-opacity', stageVis.toFixed(3));
    }

    if (reduced.matches) {
      displayVideoTime = targetVideoTime;
      syncVideoFrame(displayVideoTime);
    }

    // Update split Education & Experience masked spines independently
    eduSpine.update(sy, vh);
    expSpine.update(sy, vh);

    // -----------------------------------------------------------------------
    // 04 3D CURVED ARC WORKS CAROUSEL INTERPOLATION
    // -----------------------------------------------------------------------
    if (worksSection) {
      const wStart = worksSection.offsetTop;
      const wTravel = Math.max(1, worksSection.offsetHeight - vh);
      const wp = clamp((sy - wStart) / wTravel);
      workTargetPos = wp * (workCards.length - 1);
      if (!worksRendered || reduced.matches) { workDisplayPos = workTargetPos; renderWorks(workDisplayPos); }
    }

    if (!reduced.matches) requestTick();
  }

  measureAll();
  renderWorks(0);
  updateScroll();
  window.addEventListener('resize', () => { measureAll(); updateScroll(); renderWorks(workDisplayPos); }, { passive: true });

  // High-performance RAF-throttled scroll listener with zero wheel interception
  let scrollScheduled = false;
  window.addEventListener('scroll', () => {
    if (!scrollScheduled) {
      scrollScheduled = true;
      requestAnimationFrame(() => {
        updateScroll();
        scrollScheduled = false;
      });
    }
  }, { passive: true });

  // 6. VIDEO PLAYBACK POWER & DECODER OPTIMIZER (pause offscreen videos)
  const mediaObs = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const vid = entry.target;
      if (entry.isIntersecting) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    }
  }, { threshold: 0.05 });
  document.querySelectorAll('.works-star-video, .beyond-video').forEach((v) => mediaObs.observe(v));

  timelineRange?.addEventListener('input', () => {
    const vh = window.innerHeight || 800;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    window.scrollTo(0, (Number(timelineRange.value) / 10000) * maxScroll);
  });

  function jumpToWork(idx) {
    if (!worksSection) return;
    const vh = window.innerHeight || 800;
    const wTravel = Math.max(1, worksSection.offsetHeight - vh);
    const targetY = worksSection.offsetTop + (clamp(idx, 0, workCards.length - 1) / (workCards.length - 1)) * wTravel;
    window.scrollTo({ top: targetY, behavior: reduced.matches ? 'auto' : 'smooth' });
  }

  // Seamless cinematic category navigation (Profile, About, Experience, Education, Projects, Credentials, Beyond)
  document.querySelectorAll('.site-header a[href^="#"], .brand[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const targetEl = document.querySelector(hash);
      if (!targetEl) return;
      e.preventDefault();

      const targetY = getAbsTop(targetEl);
      window.scrollTo({
        top: targetY,
        behavior: reduced.matches ? 'auto' : 'smooth'
      });
      try {
        history.pushState(null, '', hash);
      } catch {}
    });
  });

  workCategoryButtons.forEach((b) => b.addEventListener('click', () => jumpToWork(Number(b.dataset.workIndex))));

  worksViewport?.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || e.target.closest('.works-rail')) return;
    workDrag = { id: e.pointerId, startX: e.clientX, startPos: workDisplayPos, moved: false };
    worksViewport.classList.add('is-dragging');
    worksViewport.setPointerCapture(e.pointerId);
  });
  worksViewport?.addEventListener('pointermove', (e) => {
    if (!workDrag || e.pointerId !== workDrag.id) return;
    const dx = e.clientX - workDrag.startX;
    if (Math.abs(dx) > 6) workDrag.moved = true;
    const vh = window.innerHeight || 800;
    const wTravel = Math.max(1, worksSection.offsetHeight - vh);
    const nextPos = clamp(workDrag.startPos - dx / 260, 0, workCards.length - 1);
    window.scrollTo(0, worksSection.offsetTop + (nextPos / (workCards.length - 1)) * wTravel);
  });
  function endWorkDrag(e) {
    if (!workDrag || e.pointerId !== workDrag.id) return;
    if (workDrag.moved) suppressClickUntil = performance.now() + 260;
    worksViewport.classList.remove('is-dragging');
    workDrag = null;
  }
  worksViewport?.addEventListener('pointerup', endWorkDrag);
  worksViewport?.addEventListener('pointercancel', endWorkDrag);

  // =========================================================================
  // 6. INTERACTIVE 3D FOLDER DOSSIER & BLUR LIGHTBOX MODALS
  // =========================================================================
  const folderBtn = $('process-folder');
  const folderModal = $('portfolio-focus');
  const focusClose = $('focus-close');

  function openFolder() {
    if (!folderModal || folderModal.open) return;
    document.documentElement.classList.add('folder-scroll-lock');
    folderBtn?.setAttribute('aria-expanded', 'true');
    folderModal.showModal();
    requestAnimationFrame(() => folderModal.classList.add('is-open'));
  }

  function closeFolder(afterClose) {
    if (!folderModal || !folderModal.open) return;
    folderModal.classList.remove('is-open');
    folderBtn?.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      if (folderModal.open) folderModal.close();
      document.documentElement.classList.remove('folder-scroll-lock');
      if (typeof afterClose === 'function') afterClose();
    }, reduced.matches ? 0 : 280);
  }

  folderBtn?.addEventListener('click', openFolder);
  focusClose?.addEventListener('click', () => closeFolder());
  folderModal?.addEventListener('cancel', (e) => { e.preventDefault(); closeFolder(); });
  folderModal?.addEventListener('click', (e) => { if (e.target === folderModal) closeFolder(); });

  document.querySelectorAll('.portfolio-card[data-jump-work]').forEach((card) => {
    const go = () => { const idx = Number(card.dataset.jumpWork); closeFolder(() => jumpToWork(idx)); };
    card.addEventListener('click', go);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });

  const lightbox = $('work-lightbox');
  const lbImg = $('work-lightbox-image');
  const lbKicker = $('work-lightbox-kicker');
  const lbTitle = $('work-lightbox-title');
  const lbDesc = $('work-lightbox-description');
  const lbLink = $('work-lightbox-link');
  const lbCount = $('work-lightbox-count');
  let activeWork = 0;

  function showLightboxWork(idx) {
    activeWork = clamp(idx, 0, WORKS.length - 1);
    const w = WORKS[activeWork];
    lbImg.src = w.image;
    lbImg.alt = w.title;
    lbKicker.textContent = w.kicker;
    lbTitle.textContent = w.title;
    lbDesc.textContent = w.desc;
    lbCount.textContent = `${String(activeWork + 1).padStart(2, '0')} / ${String(WORKS.length).padStart(2, '0')}`;
    if (w.url) { lbLink.hidden = false; lbLink.href = w.url; lbLink.textContent = w.cta; }
    else lbLink.hidden = true;
    $('work-lightbox-prev').disabled = activeWork === 0;
    $('work-lightbox-next').disabled = activeWork === WORKS.length - 1;
  }

  workSurfaces.forEach((btn, idx) => {
    btn?.addEventListener('click', () => {
      if (performance.now() < suppressClickUntil) return;
      showLightboxWork(idx);
      document.documentElement.classList.add('work-lightbox-open');
      lightbox.showModal();
    });
  });

  function closeLightbox() {
    if (lightbox.open) lightbox.close();
    document.documentElement.classList.remove('work-lightbox-open');
  }

  $('work-lightbox-close')?.addEventListener('click', closeLightbox);
  $('work-lightbox-prev')?.addEventListener('click', () => showLightboxWork(activeWork - 1));
  $('work-lightbox-next')?.addEventListener('click', () => showLightboxWork(activeWork + 1));
  lightbox?.addEventListener('cancel', () => document.documentElement.classList.remove('work-lightbox-open'));
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  const beyondVideo = $('beyond-video');
  if (beyondVideo && 'IntersectionObserver' in window) {
    const beyondIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !paused) {
          beyondVideo.play().catch(() => {});
        } else {
          beyondVideo.pause();
        }
      });
    }, { threshold: 0.08 });
    const beyondSec = $('beyond');
    if (beyondSec) beyondIo.observe(beyondSec);
  }

  // =========================================================================
  // 7. MOTION PAUSE TOGGLE
  // =========================================================================
    const motionBtn = $('motion-button');
  motionBtn?.addEventListener('click', () => {
    paused = !paused;
    document.body.classList.toggle('motion-paused', paused);
    motionBtn.setAttribute('aria-pressed', String(paused));
    motionBtn.textContent = paused ? 'Resume motion' : 'Pause motion';
    if (paused) {
      dustCtrl?.stop();
      beyondVideo?.pause();
    } else {
      dustCtrl?.resume();
      beyondVideo?.play().catch(() => {});
    }
  });


  // =========================================================================
  // 3D ACHIEVEMENTS FOLDER INTERACTION ORCHESTRATION
  // =========================================================================
  const achieveVault = $('achieve-vault');
  const folderBody = $('folder-3d-body');
  const folderCollapseBtn = $('folder-collapse-btn');
  const achieveCards = Array.from(document.querySelectorAll('.achieve-card'));
  const honorModal = $('honor-modal');
  const honorModalTitle = $('honor-modal-title');
  const honorModalIssuer = $('honor-modal-issuer');
  const honorModalBadge = $('honor-modal-badge');
  const honorModalDate = $('honor-modal-date');
  const honorModalDesc = $('honor-modal-desc');
  const honorModalMeta = $('honor-modal-meta');
  const honorModalCount = $('honor-modal-count');
  const honorModalPrev = $('honor-modal-prev');
  const honorModalNext = $('honor-modal-next');
  const honorModalClose = $('honor-modal-close');
  const honorModalBackdrop = $('honor-modal-backdrop');

  const ACHIEVEMENTS_DOSSIERS = [
    {
      title: 'Certificate of Excellence',
      issuer: 'Matsuo-Iwasawa Laboratory · The University of Tokyo',
      badge: 'Top 21 / 7,700+',
      badgeClass: 'rank-gold',
      date: 'Dec 2025',
      img: 'assets/work/cert-utokyo.jpg',
      desc: 'Selected as one of only 21 outstanding global recipients out of 7,700+ participants in the Cross-Border Global Consumer Intelligence (GCI) data science fundamentals programme by Matsuo-Iwasawa Lab at The University of Tokyo, supported by JETRO Malaysia and Sunway iLabs. Awarded a fully sponsored Japan AI Tour.',
      meta: [
        { label: 'Global Placement', val: 'Top 21 of 7,700+ (<0.28%)' },
        { label: 'Institution', val: 'The University of Tokyo' },
        { label: 'Lab Lead', val: 'Prof. Yutaka Matsuo' },
        { label: 'Sponsors', val: 'JETRO Malaysia · Sunway iLabs' }
      ]
    },
    {
      title: 'Advantech AIoT Hackathon',
      issuer: 'Singapore Polytechnic × Advantech',
      badge: '1st Runner-Up (2nd)',
      badgeClass: 'rank-silver',
      date: 'Jul 2026',
      img: 'assets/work/cert-advantech.jpg',
      desc: 'Awarded 1st Runner-Up in the Overseas Category (representing H0pE Tech) at Singapore Polytechnic for developing real-time industrial conveyor predictive maintenance using the Advantech ADAM-6717 edge gateway, Node-RED telemetry streaming, and offline GenAI edge diagnostics.',
      meta: [
        { label: 'Award Placement', val: '1st Runner-Up (Overseas Category)' },
        { label: 'Organizers', val: 'Advantech & Singapore Polytechnic' },
        { label: 'Hardware Gateway', val: 'Advantech ADAM-6717-SK' },
        { label: 'Technologies', val: 'Node-RED · Telemetry · GenAI' }
      ]
    },
    {
      title: 'Sunway Robotics Dodgebot',
      issuer: 'Sunway Robotics Club · Sunway University',
      badge: 'Second Place (2nd)',
      badgeClass: 'rank-silver',
      date: 'Dec 2025',
      img: 'assets/work/cert-dodgebot.jpg',
      desc: 'Achieved Second Place Achievement Award in the competitive Dodgebot robotics competition held by Sunway Robotics Club, engineering agile autonomous evasion algorithms and real-time sensory response.',
      meta: [
        { label: 'Award Tier', val: 'Second Place Achievement Award' },
        { label: 'Organizer', val: 'Sunway Robotics Club' },
        { label: 'Signed By', val: 'Dr. Richard Wong (Head of Student Life)' },
        { label: 'Engineering Track', val: 'Autonomous Robotics & Control' }
      ]
    },
    {
      title: 'MAHSA Exhibition (ESTE\'25)',
      issuer: 'MAHSA University · Faculty of Engineering & Tech',
      badge: 'Gold Award Winner',
      badgeClass: 'rank-gold',
      date: 'Feb 2025',
      img: 'assets/work/cert-mahsa.jpg',
      desc: 'Awarded the prestigious Gold Award in the Diploma Category for "Real-Time Hand Gesture Recognition and Detection using ESP32-Cam & Arduino IDE". Implemented deep learning CNN models and MediaPipe 21 hand landmarks for real-time sign language interpretation.',
      meta: [
        { label: 'Award Tier', val: 'Gold Award Winner' },
        { label: 'Track', val: 'Diploma Engineering Track' },
        { label: 'Core Focus', val: 'Hand Gesture CV & MediaPipe' },
        { label: 'Hardware & Stack', val: 'ESP32-CAM · MediaPipe · CNN' }
      ]
    }
  ];

  let folderCloseTimer = 0;
  let isFolderLocked = false;
  let activeHonorModalIdx = 0;

  function openAchievementsFolder(lock = false) {
    if (folderCloseTimer) {
      clearTimeout(folderCloseTimer);
      folderCloseTimer = 0;
    }
    if (lock) isFolderLocked = true;
    achieveVault?.classList.add('is-open');
    folderBody?.setAttribute('aria-expanded', 'true');
  }

  function closeAchievementsFolder(force = false) {
    if (folderCloseTimer) {
      clearTimeout(folderCloseTimer);
      folderCloseTimer = 0;
    }
    if (force) isFolderLocked = false;
    if (isFolderLocked && !force) return;

    folderCloseTimer = window.setTimeout(() => {
      achieveVault?.classList.remove('is-open');
      achieveVault?.classList.remove('is-hovered');
      folderBody?.setAttribute('aria-expanded', 'false');
      folderCloseTimer = 0;
    }, 180);
  }

  if (achieveVault && folderBody) {
    // Hover interactions with debounce
    achieveVault.addEventListener('mouseenter', () => {
      achieveVault.classList.add('is-hovered');
      openAchievementsFolder(false);
    });

    achieveVault.addEventListener('mouseleave', () => {
      achieveVault.classList.remove('is-hovered');
      closeAchievementsFolder(false);
    });

    // Click on folder toggles lock state
    folderBody.addEventListener('click', (e) => {
      e.stopPropagation();
      if (achieveVault.classList.contains('is-open')) {
        closeAchievementsFolder(true);
      } else {
        openAchievementsFolder(true);
      }
    });

    folderBody.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (achieveVault.classList.contains('is-open')) {
          closeAchievementsFolder(true);
        } else {
          openAchievementsFolder(true);
        }
      } else if (e.key === 'Escape') {
        closeAchievementsFolder(true);
      }
    });

    folderCollapseBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAchievementsFolder(true);
    });

    // Close when clicking outside on mobile or desktop
    document.addEventListener('click', (e) => {
      if (isFolderLocked && !achieveVault.contains(e.target) && !honorModal?.contains(e.target)) {
        closeAchievementsFolder(true);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !honorModal?.open && achieveVault.classList.contains('is-open')) {
        closeAchievementsFolder(true);
      }
    });
  }

  // =========================================================================
  // DETAIL INSPECTION MODAL FOR HONORS
  // =========================================================================
  function renderHonorModal(idx) {
    activeHonorModalIdx = clamp(idx, 0, ACHIEVEMENTS_DOSSIERS.length - 1);
    const d = ACHIEVEMENTS_DOSSIERS[activeHonorModalIdx];
    if (!d) return;

    if (honorModalTitle) honorModalTitle.textContent = d.title;
    if (honorModalIssuer) honorModalIssuer.textContent = d.issuer;
    if (honorModalDate) honorModalDate.textContent = d.date;
    if (honorModalDesc) honorModalDesc.textContent = d.desc;
    if (honorModalCount) honorModalCount.textContent = `${String(activeHonorModalIdx + 1).padStart(2, '0')} / ${String(ACHIEVEMENTS_DOSSIERS.length).padStart(2, '0')}`;

    const honorModalImg = $('honor-modal-img');
    if (honorModalImg && d.img) {
      honorModalImg.src = d.img;
      honorModalImg.alt = d.title;
    }

    if (honorModalBadge) {
      honorModalBadge.textContent = d.badge;
      honorModalBadge.className = `honor-modal-badge ${d.badgeClass}`;
    }

    if (honorModalMeta) {
      honorModalMeta.innerHTML = d.meta.map(m => `
        <div class="meta-item">
          <span class="meta-label">${m.label}</span>
          <span class="meta-value">${m.val}</span>
        </div>
      `).join('');
    }

    if (honorModalPrev) honorModalPrev.disabled = activeHonorModalIdx === 0;
    if (honorModalNext) honorModalNext.disabled = activeHonorModalIdx === ACHIEVEMENTS_DOSSIERS.length - 1;
  }

  function openHonorModal(idx) {
    renderHonorModal(idx);
    if (honorModal && !honorModal.open) {
      document.documentElement.classList.add('modal-scroll-lock');
      honorModal.showModal();
    }
  }

  function closeHonorModal() {
    if (honorModal && honorModal.open) {
      honorModal.close();
      document.documentElement.classList.remove('modal-scroll-lock');
    }
  }

  achieveCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openHonorModal(idx);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHonorModal(idx);
      }
    });
  });

  honorModalClose?.addEventListener('click', closeHonorModal);
  honorModalBackdrop?.addEventListener('click', closeHonorModal);
  honorModal?.addEventListener('cancel', closeHonorModal);
  honorModalPrev?.addEventListener('click', () => renderHonorModal(activeHonorModalIdx - 1));
  honorModalNext?.addEventListener('click', () => renderHonorModal(activeHonorModalIdx + 1));

  /* --------------------------------------------------------------------------
     TACTILE WEB MOTION (CLICK RIPPLE & PARTICLE EFFECT)
     -------------------------------------------------------------------------- */
  (function initWebClickMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lastClickTime = 0;

    document.addEventListener('pointerdown', (e) => {
      // Left-clicks only
      if (e.button !== 0) return;

      // Throttle rapid clicks to avoid DOM thrashing
      const now = performance.now();
      if (now - lastClickTime < 50) return;
      lastClickTime = now;

      const rippleWrap = document.createElement('div');
      rippleWrap.className = 'web-click-fx';
      rippleWrap.style.left = `${e.clientX}px`;
      rippleWrap.style.top = `${e.clientY}px`;
      rippleWrap.setAttribute('aria-hidden', 'true');

      // Primary glowing ring
      const ring = document.createElement('div');
      ring.className = 'web-click-ring';
      rippleWrap.appendChild(ring);

      // Ambient radial energy wave
      const wave = document.createElement('div');
      wave.className = 'web-click-wave';
      rippleWrap.appendChild(wave);

      // 6 directional micro stardust particles
      const angles = [0, 60, 120, 180, 240, 300];
      const dist = 28;
      angles.forEach((deg) => {
        const rad = (deg * Math.PI) / 180;
        const dx = Math.round(Math.cos(rad) * dist);
        const dy = Math.round(Math.sin(rad) * dist);
        const spark = document.createElement('div');
        spark.className = 'web-click-spark';
        spark.style.setProperty('--dx', `${dx}px`);
        spark.style.setProperty('--dy', `${dy}px`);
        rippleWrap.appendChild(spark);
      });

      document.body.appendChild(rippleWrap);

      setTimeout(() => {
        rippleWrap.remove();
      }, 550);
    }, { passive: true });
  })();

  // =========================================================================
  // 13. CLIENT DEFENSE & INTERACTIVE UTILITIES (ZERO SCREEN-BLOCKING)
  // =========================================================================
  (() => {
    // 1. Anti-DevTools & Shortcut Interception (Keyboard shortcuts blocked quietly without screen takeovers)
    const blockKeys = (e) => {
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      const isCmdOrCtrl = e.ctrlKey || e.metaKey;
      // Ctrl+Shift+I / J / C / K (DevTools & Console)
      if (isCmdOrCtrl && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c', 'K', 'k'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // Ctrl+U (View Source), Ctrl+S (Save Page), Ctrl+P (Print Page)
      if (isCmdOrCtrl && ['U', 'u', 'S', 's', 'P', 'p'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    window.addEventListener('keydown', blockKeys, { capture: true, passive: false });

    // 2. Right-Click Context Menu Suppression
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, { capture: true, passive: false });

    // 3. Anti-Copy & Anti-Drag on site media (inputs remain editable)
    ['copy', 'cut', 'dragstart'].forEach((evt) => {
      document.addEventListener(evt, (e) => {
        if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;
        e.preventDefault();
        e.stopPropagation();
        return false;
      }, { capture: true, passive: false });
    });

    // 4. Interactive Toast Notification & One-Click Email Copy
    function showToast(msg) {
      let toast = document.getElementById('site-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'site-toast';
        toast.className = 'site-toast';
        toast.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span class="toast-text"></span>';
        document.body.appendChild(toast);
      }
      toast.querySelector('.toast-text').textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(toast._timeout);
      toast._timeout = setTimeout(() => {
        toast.classList.remove('is-visible');
      }, 2600);
    }

    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      link.addEventListener('click', () => {
        const email = link.getAttribute('href').replace('mailto:', '').split('?')[0];
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast('Email copied: ' + email);
          }).catch(() => {});
        }
      });
    });
  })();

})();
