/**
 * CodeLink — Interactive Certificate Network
 * Cinematic Knowledge Network & Credential Vault for Section 08 (Verified Credentials)
 */

(function () {
  'use strict';

  // Fallback verified credentials from resume/portfolio
  const DEFAULT_CERTIFICATES = [
    {
      id: 'datacamp-data-analyst',
      title: 'Data Analyst Associate',
      issuer: 'DataCamp',
      award: 'Industry Certified',
      awardTier: 'purple',
      date: '2025',
      category: 'Data & AI',
      skills: ['SQL', 'Python', 'Exploratory Data Analysis', 'Statistical Metrics'],
      verificationUrl: 'https://www.datacamp.com/',
      featured: true,
      image: 'assets/certificates/daa0017260834843.png'
    },
    {
      id: 'sas-certified-associate',
      title: 'SAS Certified Associate: Programming Fundamentals Using SAS 9.4',
      issuer: 'SAS Institute',
      award: 'Global Standard',
      awardTier: 'blue',
      date: 'Apr 2026',
      category: 'Data & AI',
      skills: ['SAS 9.4', 'DATA Step', 'PROC SQL', 'Data Manipulation'],
      verificationUrl: 'https://www.sas.com/',
      featured: true,
      image: 'assets/certificates/sas-certified-associate-programming-fundamentals-using-sas-9-4-certificate.png'
    },
    {
      id: 'huawei-hcia-ai',
      title: 'HCIA-AI V4.0 Certification',
      issuer: 'Huawei ICT Academy',
      award: 'Professional Certification',
      awardTier: 'purple',
      date: '2025',
      category: 'Data & AI',
      skills: ['Deep Learning', 'TensorFlow', 'Computer Vision', 'NLP'],
      verificationUrl: 'https://e.huawei.com/',
      featured: true,
      image: 'assets/certificates/phuah-hong-xuan-23072127-hcia-ai-v4-0-course.png'
    },
    {
      id: 'aws-solutions-architecture',
      title: 'Solutions Architecture Job Simulation',
      issuer: 'Amazon Web Services (AWS) · Forage',
      award: 'Cloud Architecture',
      awardTier: 'blue',
      date: 'Mar 2025',
      category: 'Cloud & Infrastructure',
      skills: ['AWS Architecture', 'EC2 & S3', 'System Reliability'],
      verificationUrl: 'https://www.theforage.com/simulations/aws',
      featured: true,
      image: 'assets/certificates/aws-solutions-architecture.png'
    },
    {
      id: 'linux-foundation-cybersecurity',
      title: 'Cybersecurity Essentials (LFC108)',
      issuer: 'The Linux Foundation',
      award: 'Foundation Certified',
      awardTier: 'green',
      date: 'Mar 2025',
      category: 'Cybersecurity',
      skills: ['Vulnerability Assessment', 'Network Security', 'Linux Hardening'],
      verificationUrl: 'https://training.linuxfoundation.org/',
      featured: true,
      image: 'assets/certificates/hong-phuah-70bc7747-f031-4aa0-8558-134fb9213c37-certificate-2.png'
    },
    {
      id: 'huawei-hcia-datacenter',
      title: 'HCIA-Data Center Facility V2.0',
      issuer: 'Huawei ICT Academy',
      award: 'Infrastructure Certified',
      awardTier: 'blue',
      date: '2025',
      category: 'Cloud & Infrastructure',
      skills: ['Data Center Architecture', 'Power Distribution', 'Cooling Systems'],
      verificationUrl: 'https://e.huawei.com/',
      featured: true,
      image: 'assets/certificates/phuah-hong-xuan-23072127-hcia-data-center-facility-v2-0-course.png'
    },
    {
      id: 'ibm-data-fundamentals',
      title: 'Data Fundamentals',
      issuer: 'IBM SkillsBuild',
      award: 'Verified Badge',
      awardTier: 'blue',
      date: 'Sep 2026',
      category: 'Data & AI',
      skills: ['Data Engineering', 'Data Modeling', 'ETL Pipelines'],
      verificationUrl: 'https://skillsbuild.org/',
      featured: true,
      image: 'assets/certificates/ibmdesign20260928-21-wck437.png'
    },
    {
      id: 'datacamp-ai-agents',
      title: 'Introduction to AI Agents',
      issuer: 'DataCamp',
      award: 'AI Specialization',
      awardTier: 'purple',
      date: '2025',
      category: 'Data & AI',
      skills: ['AI Agents', 'Autonomous Systems', 'Tool Use'],
      verificationUrl: 'https://www.datacamp.com/',
      featured: true,
      image: 'assets/certificates/datacamp-introduction-to-ai-agents.png'
    },
    {
      id: 'google-analytics',
      title: 'Google Analytics Certification',
      issuer: 'Google Skillshop',
      award: 'Official Google Cert',
      awardTier: 'gold',
      date: '2025',
      category: 'Data & AI',
      skills: ['Google Analytics 4', 'Digital Analytics', 'Attribution Modeling'],
      verificationUrl: 'https://skillshop.google.com/',
      featured: true,
      image: 'assets/certificates/google-analytics-certifcation.png'
    }
  ];

  /**
   * Balanced Celestial Layout Engine
   * Calculates 3D coordinates (x, y, rotations, dimensions)
   * framing the avatar seated in the lower center.
   */
  function computeOrganicLayout(count) {
    const PRESET_10 = [
      { x: 12, y: 15, w: 205, rx: 4, ry: 7, rz: -2 },   // Top-Left High (UTokyo Excellence)
      { x: 31, y: 8,  w: 205, rx: 6, ry: 4, rz: -1 },   // Top-Center Left (Advantech AIoT)
      { x: 50, y: 5,  w: 215, rx: 6, ry: 0, rz: 0 },    // Apex Center (Sunway Robotics)
      { x: 69, y: 8,  w: 205, rx: 6, ry: -4, rz: 1 },   // Top-Center Right (MAHSA Gold Award)
      { x: 88, y: 15, w: 205, rx: 4, ry: -7, rz: 2 },   // Top-Right High (Data Analyst Associate)
      { x: 7,  y: 44, w: 200, rx: 2, ry: 9, rz: -3 },   // Mid-Left Flank (SAS Certified Associate)
      { x: 20, y: 64, w: 200, rx: 3, ry: 6, rz: -1 },   // Mid-Left Wing (Huawei HCIA-AI)
      { x: 80, y: 64, w: 200, rx: 3, ry: -6, rz: 1 },   // Mid-Right Wing (AWS Solutions Architecture)
      { x: 93, y: 44, w: 200, rx: 2, ry: -9, rz: 3 }    // Mid-Right Flank (Linux Foundation Cybersecurity)
    ];

    if (count <= 10) {
      return PRESET_10.slice(0, count);
    }

    // Dynamic polar arch fallback
    const layout = [];
    const minAngle = Math.PI * 0.12;
    const maxAngle = Math.PI * 0.88;

    for (let i = 0; i < count; i++) {
      const t = count > 1 ? i / (count - 1) : 0.5;
      const angle = maxAngle - t * (maxAngle - minAngle);
      const isInner = i % 2 === 1;
      const radiusX = isInner ? 36 : 46;
      const radiusY = isInner ? 28 : 38;
      
      const cx = 50 + Math.cos(angle) * radiusX;
      const cy = 60 - Math.sin(angle) * radiusY;
      const rotY = ((50 - cx) / 50) * 10;
      const rotX = 3 + (cy / 60) * 4;
      const rotZ = ((50 - cx) / 50) * -3;

      layout.push({
        x: Math.max(8, Math.min(92, Math.round(cx))),
        y: Math.max(8, Math.min(68, Math.round(cy))),
        w: isInner ? 225 : 245,
        rx: Math.round(rotX),
        ry: Math.round(rotY),
        rz: Math.round(rotZ)
      });
    }

    return layout;
  }

  /**
   * CodeLink Master Controller
   */
  class CodeLinkController {
    constructor() {
      this.section = document.getElementById('certificates');
      if (!this.section) return;

      this.stage = document.getElementById('codelink-stage');
      this.avatarWrap = document.getElementById('codelink-avatar-wrap');
      this.video = document.getElementById('codelink-video');
      this.stillFrame = document.getElementById('codelink-still-frame');
      this.svg = document.getElementById('codelink-svg');
      this.cardsLayer = document.getElementById('codelink-cards-layer');
      this.mobileDeck = document.getElementById('codelink-mobile-deck');
      this.counterEl = document.getElementById('codelink-counter');
      this.modal = document.getElementById('codelink-modal');

      // Modal sub-elements
      this.modalTitle = document.getElementById('codelink-modal-title');
      this.modalIssuer = document.getElementById('codelink-modal-issuer');
      this.modalCategory = document.getElementById('codelink-modal-category');
      this.modalDesc = document.getElementById('codelink-modal-desc');
      this.modalSkills = document.getElementById('codelink-modal-skills');
      this.modalVerify = document.getElementById('codelink-modal-verify');
      this.modalImg = document.getElementById('codelink-modal-img');
      this.modalPlaceholder = document.getElementById('codelink-modal-placeholder');
      this.modalClose = document.getElementById('codelink-modal-close');
      this.modalBackdrop = document.getElementById('codelink-modal-backdrop');

      // Vault elements
      this.vaultGrid = document.getElementById('codelink-vault-grid');
      this.vaultSearch = document.getElementById('codelink-vault-search');
      this.vaultFilters = document.getElementById('codelink-vault-filters');
      this.loadMoreBtn = document.getElementById('codelink-load-more-btn');

      // Certificate Data Registry
      this.certificates = window.CODELINK_CERTIFICATES || DEFAULT_CERTIFICATES;
      
      // Filter featured credentials for the 3D celestial stage (top 10 flagship credentials)
      const featured = this.certificates.filter(c => c.featured);
      this.featuredCertificates = featured.length >= 8 ? featured.slice(0, 9) : this.certificates.slice(0, 9);
      this.layoutConfig = computeOrganicLayout(this.featuredCertificates.length);

      // Vault filter & search state
      this.activeFilter = 'all';
      this.searchQuery = '';
      this.vaultPage = 1;
      this.PAGE_SIZE = 24;

      // State flags
      this.phase = 0;
      this.isActivated = false;
      this.cardElements = [];
      this.lineElements = [];
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.init();
    }

    init() {
      if (this.counterEl) {
        this.counterEl.textContent = `${this.certificates.length} Verified Credentials`;
      }

      this.buildCards();
      this.buildConnections();
      this.bindModalEvents();
      this.buildVault();
      this.bindVaultEvents();
      this.setupObserver();
      this.setupResizeObserver();
    }

    /**
     * Build HTML Cards for both 3D Stage and Mobile Deck (Featured Constellation)
     */
    buildCards() {
      if (!this.cardsLayer) return;
      this.cardsLayer.innerHTML = '';
      if (this.mobileDeck) this.mobileDeck.innerHTML = '';
      this.cardElements = [];

      this.featuredCertificates.forEach((cert, idx) => {
        const layout = this.layoutConfig[idx] || { x: 50, y: 30, w: 235, rx: 0, ry: 0, rz: 0 };
        
        // 1. Create 3D Floating Card
        const card = document.createElement('article');
        card.className = `codelink-card ${cert.featured ? 'is-featured' : ''}`;
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-haspopup', 'dialog');
        card.setAttribute('aria-label', `Inspect ${cert.title} by ${cert.issuer}`);
        card.dataset.idx = idx;

        // Position & 3D orientation styles via CSS tokens
        card.style.left = `${layout.x}%`;
        card.style.top = `${layout.y}%`;
        card.style.width = `min(${layout.w}px, 28vw)`;
        card.style.setProperty('--rx', `${layout.rx}deg`);
        card.style.setProperty('--ry', `${layout.ry}deg`);
        card.style.setProperty('--rz', `${layout.rz}deg`);

        // Card Content with real document image and award badge
        card.innerHTML = `
          <div class="codelink-card-head">
            <span class="codelink-award-badge ${cert.awardTier || 'blue'}">${cert.award || cert.category || 'Verified'}</span>
            <span class="codelink-card-date">${cert.date || '2025'}</span>
          </div>
          <div class="codelink-card-preview">
            <img class="codelink-card-img" src="${cert.image}" alt="${cert.title} Certificate Document" loading="lazy">
          </div>
          <div class="codelink-card-foot">
            <div class="codelink-card-meta">
              <h3 class="codelink-card-title">${cert.title}</h3>
              <p class="codelink-card-issuer">${cert.issuer}</p>
            </div>
            <div class="codelink-card-arrow" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </div>
          </div>
        `;

        // Hover events to illuminate connecting lines
        card.addEventListener('mouseenter', () => this.highlightLine(idx, true));
        card.addEventListener('mouseleave', () => this.highlightLine(idx, false));
        card.addEventListener('focus', () => this.highlightLine(idx, true));
        card.addEventListener('blur', () => this.highlightLine(idx, false));

        // Click / Enter opens preview modal
        card.addEventListener('click', () => this.openModal(cert));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openModal(cert);
          }
        });

        this.cardsLayer.appendChild(card);
        this.cardElements.push(card);

        // 2. Mobile Deck Card clone
        if (this.mobileDeck) {
          const mCard = card.cloneNode(true);
          mCard.style.cssText = '';
          mCard.addEventListener('click', () => this.openModal(cert));
          this.mobileDeck.appendChild(mCard);
        }
      });
    }

    /**
     * Build SVG Bezier Paths connecting Knowledge Core to Card Anchors
     */
    buildConnections() {
      if (!this.svg) return;
      
      const defs = this.svg.querySelector('defs');
      this.svg.innerHTML = '';
      if (defs) this.svg.appendChild(defs);

      this.lineElements = [];
      const stageRect = this.stage.getBoundingClientRect();
      if (stageRect.width === 0) return;

      // Knowledge Core Origin in normalized coords (above meditating avatar head)
      const p0 = {
        x: stageRect.width * 0.5,
        y: stageRect.height * 0.64
      };

      this.featuredCertificates.forEach((_, idx) => {
        const card = this.cardElements[idx];
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const target = {
          x: cardRect.left + cardRect.width * 0.5 - stageRect.left,
          y: cardRect.top + cardRect.height - stageRect.top
        };

        const dx = target.x - p0.x;
        const dy = target.y - p0.y;
        const cx1 = p0.x + dx * 0.28;
        const cy1 = p0.y + dy * 0.45 - 20;
        const cx2 = p0.x + dx * 0.72;
        const cy2 = target.y + 40;

        const pathData = `M ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${target.x.toFixed(1)} ${target.y.toFixed(1)}`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('class', 'codelink-net-line');
        path.setAttribute('stroke', 'url(#codelink-line-grad)');
        path.setAttribute('stroke-width', '1.6');
        path.setAttribute('fill', 'none');
        path.dataset.idx = idx;

        this.svg.appendChild(path);
        this.lineElements.push(path);
      });
    }

    /**
     * Highlight Connecting Line on Card Hover
     */
    highlightLine(idx, isHovered) {
      const line = this.lineElements[idx];
      if (!line) return;
      if (isHovered) {
        line.classList.add('is-highlighted');
      } else {
        line.classList.remove('is-highlighted');
      }
    }

    /**
     * Build the Credential Vault Archive (173 Total Credentials)
     */
    buildVault() {
      if (!this.vaultGrid) return;
      this.renderVaultCards();
    }

    /**
     * Get filtered certificates according to search query and category pill
     */
    getFilteredCertificates() {
      const HONOR_IDS = new Set([
        'utokyo-excellence-2025',
        'advantech-hackathon-2026',
        'sunway-robotics-dodgebot-2025',
        'mahsa-gold-award-2025',
        'mahsa-certificate-of-appreciation'
      ]);
      return this.certificates.filter((cert) => {
        if (HONOR_IDS.has(cert.id)) return false;
        // 1. Category filter
        if (this.activeFilter !== 'all') {
          if (cert.category !== this.activeFilter) return false;
        }

        // 2. Search query filter
        if (this.searchQuery) {
          const q = this.searchQuery.toLowerCase();
          const matchTitle = (cert.title || '').toLowerCase().includes(q);
          const matchIssuer = (cert.issuer || '').toLowerCase().includes(q);
          const matchCategory = (cert.category || '').toLowerCase().includes(q);
          const matchSkills = (cert.skills || []).some(s => s.toLowerCase().includes(q));
          if (!matchTitle && !matchIssuer && !matchCategory && !matchSkills) {
            return false;
          }
        }

        return true;
      });
    }

    /**
     * Render Vault Cards into Grid with pagination
     */
    renderVaultCards() {
      if (!this.vaultGrid) return;
      const filtered = this.getFilteredCertificates();
      const count = this.vaultPage * this.PAGE_SIZE;
      const visibleItems = filtered.slice(0, count);

      this.vaultGrid.innerHTML = '';

      if (visibleItems.length === 0) {
        this.vaultGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: #94a3b8;">
            <p style="font-size: 15px; margin: 0 0 8px;">No credentials found matching "${this.searchQuery}"</p>
            <p style="font-size: 13px; color: #64748b;">Try searching by technology (e.g. "SQL", "AI", "SAS", "Cloud") or reset filters.</p>
          </div>
        `;
        if (this.loadMoreBtn) this.loadMoreBtn.classList.add('is-hidden');
        return;
      }

      visibleItems.forEach((cert) => {
        const card = document.createElement('article');
        card.className = 'codelink-vault-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-haspopup', 'dialog');
        card.setAttribute('aria-label', `Inspect ${cert.title} by ${cert.issuer}`);

        const skillsHtml = (cert.skills || []).slice(0, 3)
          .map(s => `<span class="codelink-vault-skill-tag">${s}</span>`)
          .join('');

        card.innerHTML = `
          <div class="codelink-vault-card-head">
            <span class="codelink-award-badge ${cert.awardTier || 'blue'}">${cert.award || cert.category}</span>
            <span class="codelink-card-date">${cert.date || '2025'}</span>
          </div>
          <div class="codelink-vault-preview">
            <img src="${cert.image}" alt="${cert.title} Document" loading="lazy">
          </div>
          <h4 class="codelink-vault-title" title="${cert.title}">${cert.title}</h4>
          <p class="codelink-vault-issuer">${cert.issuer}</p>
          <div class="codelink-vault-skills">${skillsHtml}</div>
          <div class="codelink-vault-foot">
            <span>Inspect Document</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        `;

        card.addEventListener('click', () => this.openModal(cert));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openModal(cert);
          }
        });

        this.vaultGrid.appendChild(card);
      });

      // Show / hide Load More button
      if (this.loadMoreBtn) {
        if (visibleItems.length < filtered.length) {
          this.loadMoreBtn.classList.remove('is-hidden');
          const remaining = filtered.length - visibleItems.length;
          this.loadMoreBtn.querySelector('span').textContent = `Show More (${remaining} remaining)`;
        } else {
          this.loadMoreBtn.classList.add('is-hidden');
        }
      }
    }

    /**
     * Bind Vault Search & Filter Tabs
     */
    bindVaultEvents() {
      // Category Filter Tabs
      if (this.vaultFilters) {
        this.vaultFilters.querySelectorAll('.codelink-filter-pill').forEach((btn) => {
          btn.addEventListener('click', () => {
            this.vaultFilters.querySelectorAll('.codelink-filter-pill').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            this.activeFilter = btn.dataset.filter || 'all';
            this.vaultPage = 1;
            this.renderVaultCards();
          });
        });
      }

      // Search Input
      if (this.vaultSearch) {
        let debounceTimer;
        this.vaultSearch.addEventListener('input', (e) => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            this.searchQuery = e.target.value.trim();
            this.vaultPage = 1;
            this.renderVaultCards();
          }, 180);
        });
      }

      // Load More Button
      if (this.loadMoreBtn) {
        this.loadMoreBtn.addEventListener('click', () => {
          this.vaultPage += 1;
          this.renderVaultCards();
        });
      }
    }

    /**
     * Intersection Observer for Activation
     */
    setupObserver() {
      if (!('IntersectionObserver' in window)) {
        this.activateNetworkDirectly();
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.isActivated) {
              this.startStorySequence();
            }
          });
        },
        { rootMargin: '120px 0px 0px 0px', threshold: 0.08 }
      );

      observer.observe(this.section);
    }

    /**
     * Story Sequence Trigger
     */
    startStorySequence() {
      this.isActivated = true;
      if (this.reducedMotion) {
        this.activateNetworkDirectly();
        return;
      }

      if (this.video) {
        this.video.currentTime = 0;
        const playPromise = this.video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.video.addEventListener('ended', () => this.activateKnowledgeNetwork(), { once: true });
              setTimeout(() => {
                if (this.phase < 2) this.activateKnowledgeNetwork();
              }, 2300);
            })
            .catch(() => this.activateKnowledgeNetwork());
        } else {
          this.activateKnowledgeNetwork();
        }
      } else {
        this.activateKnowledgeNetwork();
      }
    }

    activateKnowledgeNetwork() {
      this.phase = 2;
      if (this.avatarWrap) {
        this.avatarWrap.classList.add('is-still');
        this.avatarWrap.classList.add('is-activated');
      }

      this.lineElements.forEach((line, idx) => {
        setTimeout(() => {
          line.classList.add('is-drawn');
        }, idx * 40);
      });

      this.cardElements.forEach((card, idx) => {
        setTimeout(() => {
          card.classList.add('is-visible');
          setTimeout(() => card.classList.add('is-floating'), 650);
        }, 100 + idx * 60);
      });
    }

    activateNetworkDirectly() {
      this.phase = 3;
      if (this.avatarWrap) {
        this.avatarWrap.classList.add('is-still');
        this.avatarWrap.classList.add('is-activated');
      }

      this.lineElements.forEach((line) => {
        line.classList.add('is-drawn');
      });

      this.cardElements.forEach((card) => {
        card.classList.add('is-visible');
      });
    }

    setupResizeObserver() {
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this.buildConnections();
        }, 150);
      });
    }

    bindModalEvents() {
      if (!this.modal) return;

      if (this.modalClose) {
        this.modalClose.addEventListener('click', () => this.closeModal());
      }

      if (this.modalBackdrop) {
        this.modalBackdrop.addEventListener('click', () => this.closeModal());
      }

      this.modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeModal();
      });
    }

    openModal(cert) {
      if (!this.modal) return;

      if (this.modalTitle) this.modalTitle.textContent = cert.title;
      if (this.modalIssuer) this.modalIssuer.textContent = `${cert.issuer} · ${cert.date || '2025'}`;
      if (this.modalCategory) {
        this.modalCategory.textContent = cert.award || cert.category || 'Credential';
        this.modalCategory.className = `codelink-modal-category ${cert.awardTier || 'blue'}`;
      }
      if (this.modalDesc) {
        this.modalDesc.textContent = cert.description || `Official verified qualification and credential issued by ${cert.issuer}.`;
      }

      if (this.modalSkills) {
        this.modalSkills.innerHTML = (cert.skills || [])
          .map((s) => `<span class="codelink-skill-pill">${s}</span>`)
          .join('');
      }

      if (this.modalVerify) {
        if (cert.verificationUrl && cert.verificationUrl !== '#') {
          this.modalVerify.href = cert.verificationUrl;
          this.modalVerify.style.display = 'inline-flex';
        } else {
          this.modalVerify.style.display = 'none';
        }
      }

      if (this.modalImg) {
        this.modalImg.src = cert.image;
        this.modalImg.alt = `${cert.title} Certificate Inspection`;
        this.modalImg.classList.add('is-visible');
        if (this.modalPlaceholder) {
          this.modalPlaceholder.classList.add('is-hidden');
        }
      }

      if (typeof this.modal.showModal === 'function') {
        this.modal.showModal();
      } else {
        this.modal.setAttribute('open', '');
      }

      document.documentElement.classList.add('codelink-modal-lock');
    }

    closeModal() {
      if (!this.modal) return;
      if (typeof this.modal.close === 'function') {
        this.modal.close();
      } else {
        this.modal.removeAttribute('open');
      }
      document.documentElement.classList.remove('codelink-modal-lock');
    }
  }

  // Initialize CodeLink on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new CodeLinkController());
  } else {
    new CodeLinkController();
  }
})();
