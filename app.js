// ============================================
// RealAI.dev — Sub-Page Router (app.js)
// Hash-based routing for service & portfolio sub-pages
// ============================================

(function () {
  'use strict';

  // ---- Inject sub-page CSS ----
  const style = document.createElement('style');
  style.textContent = `
    .sub-page { min-height: 100vh; padding-bottom: var(--space-16, 80px); }
    .sub-page__back {
      display: inline-flex; align-items: center; gap: 6px;
      color: var(--color-gold, #ffb612); font-size: var(--text-sm, 14px);
      text-decoration: none; font-weight: 500; transition: opacity 0.2s;
    }
    .sub-page__back:hover { text-decoration: underline; opacity: 0.85; }

    .process-steps {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: var(--space-6, 24px); margin-top: var(--space-8, 32px);
    }
    .process-step {
      background: var(--color-surface, #111); border: 1px solid rgba(255,182,18,0.12);
      border-radius: var(--radius-lg, 16px); padding: var(--space-6, 24px);
      position: relative;
    }
    .process-step__num {
      display: inline-flex; align-items: center; justify-content: center;
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,182,18,0.15); color: var(--color-gold, #ffb612);
      font-family: var(--font-display, sans-serif); font-weight: 700;
      font-size: var(--text-sm, 14px); margin-bottom: var(--space-4, 16px);
    }
    .process-step__title {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      font-size: var(--text-base, 16px); color: var(--color-text, #fff);
      margin-bottom: var(--space-2, 8px);
    }
    .process-step__desc {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      line-height: 1.6;
    }

    .feature-highlight {
      background: linear-gradient(135deg, rgba(255,182,18,0.08), rgba(192,192,192,0.04));
      border: 1px solid rgba(255,182,18,0.15); border-radius: var(--radius-lg, 16px);
      padding: var(--space-6, 24px); text-align: center;
    }
    .feature-highlight__number {
      font-family: var(--font-display, sans-serif); font-weight: 800;
      font-size: var(--text-xl, 28px); color: var(--color-gold, #ffb612);
      margin-bottom: var(--space-2, 8px);
    }
    .feature-highlight__label {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
    }

    .sub-page .card { cursor: default; }
    .sub-page .card:hover { transform: none; }

    .sub-page .section + .section { padding-top: var(--space-8, 32px); }

    .sub-page__cta-block {
      text-align: center; padding: var(--space-12, 48px) var(--space-6, 24px);
      margin-top: var(--space-12, 48px);
      background: linear-gradient(135deg, rgba(255,182,18,0.06), rgba(192,192,192,0.03));
      border-radius: var(--radius-lg, 16px); border: 1px solid rgba(255,182,18,0.1);
    }
    .sub-page__cta-block h3 {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      font-size: var(--text-lg, 22px); color: var(--color-text, #fff);
      margin-bottom: var(--space-3, 12px);
    }
    .sub-page__cta-block p {
      color: var(--color-text-muted, #999); margin-bottom: var(--space-6, 24px);
      max-width: 500px; margin-left: auto; margin-right: auto;
    }

    .pricing-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: var(--space-6, 24px); margin-top: var(--space-8, 32px);
    }
    .pricing-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg, 16px); padding: var(--space-8, 32px);
      text-align: center; position: relative;
    }
    .pricing-card--featured {
      border-color: var(--color-gold, #ffb612);
      background: linear-gradient(135deg, rgba(255,182,18,0.06), var(--color-surface, #111));
    }
    .pricing-card__badge {
      position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
      background: var(--color-gold, #ffb612); color: #0a0a0a;
      font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px;
      text-transform: uppercase; letter-spacing: 0.05em;
    }
    .pricing-card__name {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      font-size: var(--text-lg, 22px); color: var(--color-text, #fff);
      margin-bottom: var(--space-2, 8px);
    }
    .pricing-card__price {
      font-family: var(--font-display, sans-serif); font-weight: 800;
      font-size: var(--text-xl, 28px); color: var(--color-gold, #ffb612);
      margin-bottom: var(--space-4, 16px);
    }
    .pricing-card__features {
      list-style: none; text-align: left; margin-bottom: var(--space-6, 24px);
    }
    .pricing-card__features li {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .pricing-card__features li::before {
      content: '✓ '; color: var(--color-gold, #ffb612); font-weight: 700;
    }

    .deliverables-list {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-3, 12px); margin-top: var(--space-6, 24px);
    }
    .deliverable-item {
      display: flex; align-items: flex-start; gap: 12px;
      padding: var(--space-4, 16px); background: var(--color-surface, #111);
      border-radius: var(--radius-md, 12px); border: 1px solid rgba(255,255,255,0.04);
    }
    .deliverable-item__check {
      color: var(--color-gold, #ffb612); font-weight: 700; flex-shrink: 0; margin-top: 2px;
    }
    .deliverable-item__text {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
    }

    .case-study-hero {
      min-height: 50vh; display: flex; align-items: center; justify-content: center;
      text-align: center; position: relative; overflow: hidden;
      padding: var(--space-32, 128px) var(--space-6, 24px) var(--space-12, 48px);
    }
    .case-study-hero__bg {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(255,182,18,0.08), rgba(192,192,192,0.04));
    }
    .case-study-hero__content { position: relative; z-index: 1; }

    .case-study-stats {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--space-4, 16px); margin-top: var(--space-8, 32px);
    }
  `;
  document.head.appendChild(style);

  // ---- Route definitions ----
  const routes = {
    '#/services/websites':       renderWebsites,
    '#/services/platforms':       renderPlatforms,
    '#/services/infrastructure':  renderInfrastructure,
    '#/services/dashboards':      renderDashboards,
    '#/services/branding':        renderBranding,
    '#/portfolio/real-pt':        renderRealPT,
    '#/portfolio/io2':            renderIO2,
    '#/portfolio/smartscan':      renderSmartScan,
  };

  // ---- Helper: back link ----
  function backLink(text = '← Back to Home') {
    return `<a href="#home" class="sub-page__back" onclick="navigateHome(event)">${text}</a>`;
  }

  // ---- Helper: CTA block ----
  function ctaBlock(title, desc) {
    return `
      <div class="sub-page__cta-block">
        <h3>${title || 'Ready to get started?'}</h3>
        <p>${desc || 'Let\'s discuss your project and find the right solution for your business.'}</p>
        <a href="#contact" class="btn btn--primary" onclick="navigateHome(event, '#contact')">Start Your Project <span class="arrow">→</span></a>
      </div>`;
  }

  // ---- Helper: section wrapper ----
  function sec(content, cls = '') {
    return `<div class="section ${cls}"><div class="container">${content}</div></div>`;
  }

  // ---- Helper: section header ----
  function sectionHeader(eyebrow, title, subtitle) {
    return `
      <div class="section__header">
        ${eyebrow ? `<div class="section__eyebrow">${eyebrow}</div>` : ''}
        <h2 class="section__title">${title}</h2>
        ${subtitle ? `<p class="section__subtitle">${subtitle}</p>` : ''}
      </div>`;
  }

  // ================================
  // SERVICE PAGES
  // ================================

  function renderWebsites() {
    return `
    <div class="sub-page">
      ${sec(`
        ${backLink()}
        <div style="margin-top:var(--space-8);">
          ${sectionHeader('AI-Powered Websites', 'Fast, modern websites<br>that convert.', 'Built with AI acceleration for any business — from local contractors to enterprise brands. Deployed in weeks, not months.')}
        </div>
      `)}

      ${sec(`
        ${sectionHeader('Our Process', 'From concept to conversion in 4 steps.')}
        <div class="process-steps">
          <div class="process-step">
            <div class="process-step__num">1</div>
            <div class="process-step__title">Discovery</div>
            <div class="process-step__desc">We learn your business, audience, and goals. Competitive audit included.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num">2</div>
            <div class="process-step__title">Design</div>
            <div class="process-step__desc">AI-assisted wireframes and visual design — reviewed and refined with you.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num">3</div>
            <div class="process-step__title">Build</div>
            <div class="process-step__desc">Clean code, responsive layouts, SEO-optimized. Built on modern frameworks.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num">4</div>
            <div class="process-step__title">Launch</div>
            <div class="process-step__desc">Deployed to enterprise-grade infrastructure. Training included.</div>
          </div>
        </div>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('What You Get', 'Every build includes.')}
        <div class="deliverables-list">
          ${['Custom responsive design', 'Mobile-first development', 'SEO optimization', 'Contact forms & CTAs', 'Analytics integration', 'Performance optimization', 'SSL & security', 'CMS integration', 'Social media integration', 'ADA compliance ready'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(`
        ${sectionHeader('Pricing', 'Transparent pricing for every stage.')}
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-card__name">Launch</div>
            <div class="pricing-card__price"><span style="font-size:12px;font-weight:500;color:var(--color-text-muted,#999);display:block;margin-bottom:2px;">Starting at</span>$900</div>
            <ul class="pricing-card__features">
              <li>5-page responsive site</li>
              <li>Mobile-optimized</li>
              <li>Basic SEO setup</li>
              <li>Contact form</li>
              <li>2-week delivery</li>
            </ul>
            <a href="#contact" class="btn btn--secondary" style="width:100%;justify-content:center;" onclick="navigateHome(event, '#contact')">Get Started →</a>
          </div>
          <div class="pricing-card pricing-card--featured">
            <div class="pricing-card__badge">Most Popular</div>
            <div class="pricing-card__name">Pro</div>
            <div class="pricing-card__price"><span style="font-size:12px;font-weight:500;color:var(--color-text-muted,#999);display:block;margin-bottom:2px;">Starting at</span>$4,500</div>
            <ul class="pricing-card__features">
              <li>Custom UI/UX design</li>
              <li>Booking system integration</li>
              <li>Google Analytics + dashboards</li>
              <li>Advanced SEO</li>
              <li>CMS for content management</li>
              <li>4-week delivery</li>
            </ul>
            <a href="#contact" class="btn btn--primary" style="width:100%;justify-content:center;" onclick="navigateHome(event, '#contact')">Get Started →</a>
          </div>
          <div class="pricing-card">
            <div class="pricing-card__name">Enterprise</div>
            <div class="pricing-card__price"><span style="font-size:12px;font-weight:500;color:var(--color-text-muted,#999);display:block;margin-bottom:2px;">Starting at</span>$12,000</div>
            <ul class="pricing-card__features">
              <li>Scalable cloud infrastructure</li>
              <li>Customer/client portals</li>
              <li>Third-party integrations</li>
              <li>Custom API connections</li>
              <li>Dedicated project manager</li>
              <li>8-week delivery</li>
            </ul>
            <a href="#contact" class="btn btn--secondary" style="width:100%;justify-content:center;" onclick="navigateHome(event, '#contact')">Get Started →</a>
          </div>
        </div>
      `, 'section--surface')}

      ${sec(ctaBlock('Ready to build your website?', 'Tell us about your project and we\'ll create a custom proposal within 48 hours.'))}
    </div>`;
  }

  function renderPlatforms() {
    return `
    <div class="sub-page">
      ${sec(`
        ${backLink()}
        <div style="margin-top:var(--space-8);">
          ${sectionHeader('E-Commerce & Booking Platforms', 'Powerful platforms that<br>drive revenue.', 'Online stores, booking systems, and customer portals — built to convert and scale for any industry.')}
        </div>
      `)}

      ${sec(`
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--space-6);">
          <div class="feature-highlight">
            <div class="feature-highlight__number">Secure</div>
            <div class="feature-highlight__label">Payment processing</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">24/7</div>
            <div class="feature-highlight__label">Online booking</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">99.9%</div>
            <div class="feature-highlight__label">Uptime guarantee</div>
          </div>
        </div>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('Platform Features', 'Everything your business needs.')}
        <div class="deliverables-list">
          ${['Online storefront & products', 'Appointment/booking system', 'Payment processing', 'Customer portals', 'Inventory management', 'Order tracking', 'CRM integration', 'Automated email & reminders', 'Coupon & discount engine', 'Analytics & reporting', 'Mobile-optimized checkout', 'Multi-location support'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Need an e-commerce or booking platform?', 'We\'ll scope your project and build a platform that drives revenue.'))}
    </div>`;
  }

  function renderInfrastructure() {
    return `
    <div class="sub-page">
      ${sec(`
        ${backLink()}
        <div style="margin-top:var(--space-8);">
          ${sectionHeader('Scalable Infrastructure', 'Reliable hosting &amp;<br>cloud infrastructure.', 'Enterprise-grade infrastructure for any business — secure, scalable, and built to grow with you. Compliance options available when needed.')}
        </div>
      `)}

      ${sec(`
        ${sectionHeader('Infrastructure Capabilities', 'Built for performance and reliability.')}
        <div class="process-steps">
          <div class="process-step">
            <div class="process-step__num" style="font-size:11px;">FAST</div>
            <div class="process-step__title">Speed & Performance</div>
            <div class="process-step__desc">Global CDN, edge caching, and optimized delivery for fast load times everywhere.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num" style="font-size:11px;">SAFE</div>
            <div class="process-step__title">Security & Protection</div>
            <div class="process-step__desc">SSL encryption, firewalls, DDoS protection, and regular security updates.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num" style="font-size:11px;">GROW</div>
            <div class="process-step__title">Scale On Demand</div>
            <div class="process-step__desc">Auto-scaling infrastructure that grows with your business — no downtime, no limits.</div>
          </div>
        </div>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('Infrastructure Stack', 'Enterprise-grade tools and platforms.')}
        <div class="deliverables-list">
          ${['Cloud hosting (AWS / Vercel / GCP)', 'SSL/TLS encryption everywhere', 'Web application firewall (WAF)', 'DDoS protection', 'Automated backups', 'CDN for global performance', 'CI/CD deployment pipelines', 'Container orchestration', 'Log aggregation & monitoring', 'Uptime monitoring & alerts'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Need reliable infrastructure?', 'Let\'s architect a secure, scalable environment for your business.'))}
    </div>`;
  }

  function renderDashboards() {
    return `
    <div class="sub-page">
      ${sec(`
        ${backLink()}
        <div style="margin-top:var(--space-8);">
          ${sectionHeader('Data & Analytics Dashboards', 'Real-time intelligence<br>for your operations.', 'Custom dashboards that turn your data into actionable insights — from job tracking to revenue analytics.')}
        </div>
      `)}

      ${sec(`
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--space-6);">
          <div class="feature-highlight">
            <div class="feature-highlight__number">Real-time</div>
            <div class="feature-highlight__label">Live data streaming</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">Custom</div>
            <div class="feature-highlight__label">Built for your KPIs</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">Secure</div>
            <div class="feature-highlight__label">Role-based access</div>
          </div>
        </div>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('Dashboard Capabilities', 'Everything you need to make data-driven decisions.')}
        <div class="deliverables-list">
          ${['Revenue & financial tracking', 'Job & project tracking', 'Appointment utilization', 'Marketing attribution', 'Staff performance metrics', 'Custom KPI widgets', 'Automated reporting', 'Data export (CSV/PDF)', 'API integrations', 'Mobile-responsive views'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Need a custom dashboard?', 'We\'ll design and build analytics tailored to your operations.'))}
    </div>`;
  }

  function renderBranding() {
    return `
    <div class="sub-page">
      ${sec(`
        ${backLink()}
        <div style="margin-top:var(--space-8);">
          ${sectionHeader('Full Brand Identity', 'From concept to<br>complete brand system.', 'Logo, copy, domain, and launch — all under one roof. We build brands that operators are proud to own.')}
        </div>
      `)}

      ${sec(`
        ${sectionHeader('Our Brand Process', 'From strategy to launch in 4 phases.')}
        <div class="process-steps">
          <div class="process-step">
            <div class="process-step__num">1</div>
            <div class="process-step__title">Brand Strategy</div>
            <div class="process-step__desc">Market positioning, voice, values, and target audience definition.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num">2</div>
            <div class="process-step__title">Visual Identity</div>
            <div class="process-step__desc">Logo, color palette, typography, and brand guidelines.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num">3</div>
            <div class="process-step__title">Content & Copy</div>
            <div class="process-step__desc">Website copy, taglines, mission statement, and marketing materials.</div>
          </div>
          <div class="process-step">
            <div class="process-step__num">4</div>
            <div class="process-step__title">Launch</div>
            <div class="process-step__desc">Domain setup, social profiles, and coordinated brand launch.</div>
          </div>
        </div>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('Deliverables', 'Everything included in your brand package.')}
        <div class="deliverables-list">
          ${['Logo design (multiple concepts)', 'Color palette & typography', 'Brand guidelines document', 'Business card design', 'Social media templates', 'Website copy & messaging', 'Domain registration', 'Email setup', 'Brand launch strategy', 'Digital asset package'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Ready to build your brand?', 'Let\'s create a brand identity that sets you apart.'))}
    </div>`;
  }

  // ================================
  // PORTFOLIO / CASE STUDY PAGES
  // ================================

  function renderRealPT() {
    return `
    <div class="sub-page">
      <div class="case-study-hero">
        <div class="case-study-hero__bg"></div>
        <div class="case-study-hero__content">
          ${backLink('← Back to Portfolio')}
          <h1 style="font-family:var(--font-display);font-weight:800;font-size:var(--text-2xl);color:var(--color-text);margin-top:var(--space-6);margin-bottom:var(--space-4);">Real PT &amp; Wellness</h1>
          <p style="font-size:var(--text-lg);color:var(--color-text-muted);max-width:600px;margin:0 auto;">Full-service physical therapy website with booking, patient resources, and secure infrastructure.</p>
          <div style="margin-top:var(--space-6);display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="https://real-pt.com" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Visit Live Site <span class="arrow">→</span></a>
          </div>
        </div>
      </div>

      ${sec(`
        <div class="case-study-stats">
          <div class="feature-highlight">
            <div class="feature-highlight__number">Healthcare</div>
            <div class="feature-highlight__label">Industry</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">4 weeks</div>
            <div class="feature-highlight__label">Build time</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">HIPAA</div>
            <div class="feature-highlight__label">Compliant</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">Mobile</div>
            <div class="feature-highlight__label">Optimized</div>
          </div>
        </div>
      `)}

      ${sec(`
        ${sectionHeader('The Challenge', 'Building a modern healthcare presence.')}
        <p style="font-size:var(--text-base);color:var(--color-text-muted);line-height:1.8;max-width:700px;">
          Real PT & Wellness needed a modern, professional website that could handle patient booking, provide educational resources, and meet HIPAA compliance requirements — all while reflecting the warmth and professionalism of their practice.
        </p>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('The Solution', 'What we delivered.')}
        <div class="deliverables-list">
          ${['Custom responsive website', 'Patient booking system', 'Service pages & descriptions', 'Team member profiles', 'Location & contact integration', 'HIPAA-ready infrastructure', 'SEO optimization', 'Mobile-first design', 'Performance optimization', 'Ongoing maintenance'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Want results like this?', 'Let\'s build a healthcare platform that works as hard as you do.'))}
    </div>`;
  }

  function renderIO2() {
    return `
    <div class="sub-page">
      <div class="case-study-hero">
        <div class="case-study-hero__bg"></div>
        <div class="case-study-hero__content">
          ${backLink('← Back to Portfolio')}
          <h1 style="font-family:var(--font-display);font-weight:800;font-size:var(--text-2xl);color:var(--color-text);margin-top:var(--space-6);margin-bottom:var(--space-4);">iO2 Water</h1>
          <p style="font-size:var(--text-lg);color:var(--color-text-muted);max-width:600px;margin:0 auto;">Premium eco-tech water brand with product showcase, science-backed content, and e-commerce integration.</p>
          <div style="margin-top:var(--space-6);display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="https://io2-water.vercel.app" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Visit Live Site <span class="arrow">→</span></a>
          </div>
        </div>
      </div>

      ${sec(`
        <div class="case-study-stats">
          <div class="feature-highlight">
            <div class="feature-highlight__number">Eco-Tech</div>
            <div class="feature-highlight__label">Industry</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">3 weeks</div>
            <div class="feature-highlight__label">Build time</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">E-commerce</div>
            <div class="feature-highlight__label">Integrated</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">Premium</div>
            <div class="feature-highlight__label">Brand feel</div>
          </div>
        </div>
      `)}

      ${sec(`
        ${sectionHeader('The Challenge', 'Launching a premium eco-tech brand.')}
        <p style="font-size:var(--text-base);color:var(--color-text-muted);line-height:1.8;max-width:700px;">
          iO2 Water needed a website that communicated their premium positioning while educating consumers about the science behind their product. The site needed to drive conversions and build trust through content.
        </p>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('The Solution', 'What we delivered.')}
        <div class="deliverables-list">
          ${['Premium brand website', 'Product showcase pages', 'Science & research content', 'E-commerce integration', 'Mobile-optimized experience', 'Social media integration', 'SEO & content strategy', 'Performance optimization', 'Analytics & tracking', 'Ongoing content support'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Want a premium brand presence?', 'Let\'s create an eco-tech platform that stands out.'))}
    </div>`;
  }

  function renderSmartScan() {
    return `
    <div class="sub-page">
      <div class="case-study-hero">
        <div class="case-study-hero__bg"></div>
        <div class="case-study-hero__content">
          ${backLink('← Back to Portfolio')}
          <h1 style="font-family:var(--font-display);font-weight:800;font-size:var(--text-2xl);color:var(--color-text);margin-top:var(--space-6);margin-bottom:var(--space-4);">Real SmartScan</h1>
          <p style="font-size:var(--text-lg);color:var(--color-text-muted);max-width:600px;margin:0 auto;">AI-powered document scanning platform with real-time analysis, OCR, and cloud integration.</p>
          <div style="margin-top:var(--space-6);display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="https://real-smartscan.vercel.app" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Visit Live Site <span class="arrow">→</span></a>
          </div>
        </div>
      </div>

      ${sec(`
        <div class="case-study-stats">
          <div class="feature-highlight">
            <div class="feature-highlight__number">SaaS</div>
            <div class="feature-highlight__label">Platform</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">AI/ML</div>
            <div class="feature-highlight__label">Powered</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">Cloud</div>
            <div class="feature-highlight__label">Native</div>
          </div>
          <div class="feature-highlight">
            <div class="feature-highlight__number">Real-time</div>
            <div class="feature-highlight__label">Processing</div>
          </div>
        </div>
      `)}

      ${sec(`
        ${sectionHeader('The Challenge', 'Building an AI-powered SaaS platform.')}
        <p style="font-size:var(--text-base);color:var(--color-text-muted);line-height:1.8;max-width:700px;">
          Real SmartScan required a modern web application that could showcase AI capabilities, handle document processing demonstrations, and convert visitors into platform users — all with enterprise-grade reliability.
        </p>
      `, 'section--surface')}

      ${sec(`
        ${sectionHeader('The Solution', 'What we delivered.')}
        <div class="deliverables-list">
          ${['SaaS marketing website', 'Interactive demo experience', 'AI/ML feature showcase', 'Cloud integration architecture', 'User onboarding flow', 'Pricing & comparison pages', 'API documentation', 'Performance optimization', 'SEO & growth strategy', 'Conversion tracking'].map(item =>
            `<div class="deliverable-item"><span class="deliverable-item__check">✓</span><span class="deliverable-item__text">${item}</span></div>`
          ).join('')}
        </div>
      `)}

      ${sec(ctaBlock('Building a SaaS product?', 'Let\'s create a platform that drives conversions and scales.'))}
    </div>`;
  }

  // ================================
  // ROUTER
  // ================================

  const mainContent  = document.getElementById('main-content');
  const subPageEl    = document.getElementById('sub-page-content');

  function showSubPage(html) {
    mainContent.style.display = 'none';
    subPageEl.innerHTML = html;
    subPageEl.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Re-init Lucide for any icons inside sub-page
    if (window.lucide) lucide.createIcons();
  }

  function showMain() {
    subPageEl.style.display = 'none';
    subPageEl.innerHTML = '';
    mainContent.style.display = '';
  }

  // Navigate home helper (used by back links and CTA buttons in sub-pages)
  window.navigateHome = function(e, target) {
    e.preventDefault();
    window.location.hash = target || '#home';
  };

  function handleRoute() {
    const hash = window.location.hash;
    if (routes[hash]) {
      showSubPage(routes[hash]());
    } else {
      showMain();
      // Scroll to section if hash is an anchor
      if (hash && hash.startsWith('#') && !hash.startsWith('#/')) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
      }
    }
  }

  window.addEventListener('hashchange', handleRoute);
  // Run on load
  handleRoute();

})();
