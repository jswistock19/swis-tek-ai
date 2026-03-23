// ============================================
// SWIS TEK AI — Sub-Page Router (app.js)
// Hash-based routing for 28 dedicated sub-pages
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

    .who-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-4, 16px); margin-top: var(--space-6, 24px);
    }
    .who-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-md, 12px); padding: var(--space-5, 20px);
      text-align: center;
    }
    .who-card__icon {
      font-size: 28px; margin-bottom: var(--space-2, 8px);
    }
    .who-card__text {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      font-weight: 500;
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

    .blog-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-6, 24px); margin-top: var(--space-8, 32px);
    }
    .blog-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg, 16px); overflow: hidden; transition: border-color 0.2s;
    }
    .blog-card:hover { border-color: rgba(255,182,18,0.3); }
    .blog-card__img {
      height: 160px; background: linear-gradient(135deg, rgba(255,182,18,0.1), rgba(192,192,192,0.05));
      display: flex; align-items: center; justify-content: center;
      font-size: 40px;
    }
    .blog-card__body { padding: var(--space-5, 20px); }
    .blog-card__cat {
      font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--color-gold, #ffb612); font-weight: 600; margin-bottom: var(--space-2, 8px);
    }
    .blog-card__title {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      font-size: var(--text-base, 16px); color: var(--color-text, #fff);
      margin-bottom: var(--space-2, 8px);
    }
    .blog-card__excerpt {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999); line-height: 1.6;
    }
    .blog-card__meta {
      font-size: 12px; color: var(--color-text-muted, #666); margin-top: var(--space-3, 12px);
    }

    .tool-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-6, 24px); margin-top: var(--space-8, 32px);
    }
    .tool-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg, 16px); padding: var(--space-6, 24px);
      text-align: center; transition: border-color 0.2s;
    }
    .tool-card:hover { border-color: rgba(255,182,18,0.3); }
    .tool-card__icon { font-size: 36px; margin-bottom: var(--space-3, 12px); }
    .tool-card__title {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      color: var(--color-text, #fff); margin-bottom: var(--space-2, 8px);
    }
    .tool-card__desc {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      margin-bottom: var(--space-4, 16px);
    }
    .tool-card__btn {
      display: inline-block; font-size: var(--text-sm, 14px);
      color: var(--color-gold, #ffb612); font-weight: 600;
      text-decoration: none;
    }
    .tool-card__btn:hover { text-decoration: underline; }

    .track-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-6, 24px); margin-top: var(--space-8, 32px);
    }
    .track-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg, 16px); padding: var(--space-6, 24px);
    }
    .track-card__level {
      display: inline-block; font-size: 11px; text-transform: uppercase;
      letter-spacing: 0.08em; font-weight: 700; padding: 4px 12px;
      border-radius: 20px; margin-bottom: var(--space-4, 16px);
    }
    .track-card__level--beginner { background: rgba(255,182,18,0.15); color: var(--color-gold, #ffb612); }
    .track-card__level--intermediate { background: rgba(192,192,192,0.15); color: var(--color-accent-silver, #c0c0c0); }
    .track-card__level--advanced { background: rgba(255,255,255,0.1); color: #fff; }
    .track-card__title {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      color: var(--color-text, #fff); margin-bottom: var(--space-3, 12px);
    }
    .track-card__topics { list-style: none; }
    .track-card__topics li {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      padding: 4px 0; padding-left: 16px; position: relative;
    }
    .track-card__topics li::before {
      content: '→'; position: absolute; left: 0; color: var(--color-gold, #ffb612);
    }

    .roles-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-3, 12px); margin-top: var(--space-6, 24px);
    }
    .role-chip {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-md, 12px); padding: 12px 16px;
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      text-align: center; font-weight: 500;
    }

    .guarantee-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: var(--space-4, 16px); margin-top: var(--space-6, 24px);
    }
    .guarantee-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,182,18,0.1);
      border-radius: var(--radius-md, 12px); padding: var(--space-5, 20px);
      text-align: center;
    }
    .guarantee-card__icon { font-size: 28px; margin-bottom: var(--space-2, 8px); }
    .guarantee-card__title {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      font-size: var(--text-sm, 14px); color: var(--color-text, #fff);
      margin-bottom: var(--space-1, 4px);
    }
    .guarantee-card__desc {
      font-size: 13px; color: var(--color-text-muted, #999);
    }

    .grant-category-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--space-5, 20px); margin-top: var(--space-8, 32px);
    }
    .grant-cat-card {
      background: var(--color-surface, #111); border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg, 16px); padding: var(--space-6, 24px);
    }
    .grant-cat-card__icon { font-size: 32px; margin-bottom: var(--space-3, 12px); }
    .grant-cat-card__title {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      color: var(--color-text, #fff); margin-bottom: var(--space-2, 8px);
    }
    .grant-cat-card__desc {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
      margin-bottom: var(--space-3, 12px);
    }
    .grant-cat-card__amount {
      font-family: var(--font-display, sans-serif); font-weight: 700;
      color: var(--color-gold, #ffb612); font-size: var(--text-sm, 14px);
    }

    .comparison-table {
      width: 100%; border-collapse: collapse; margin-top: var(--space-8, 32px);
    }
    .comparison-table th {
      text-align: left; padding: 12px 16px; font-size: var(--text-sm, 14px);
      color: var(--color-gold, #ffb612); border-bottom: 2px solid rgba(255,182,18,0.2);
      font-family: var(--font-display, sans-serif); font-weight: 700;
    }
    .comparison-table td {
      padding: 10px 16px; font-size: var(--text-sm, 14px);
      color: var(--color-text-muted, #999); border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .comparison-table tr:hover td { background: rgba(255,182,18,0.03); }

    .testimonial-placeholder {
      background: var(--color-surface, #111); border-left: 3px solid var(--color-gold, #ffb612);
      border-radius: 0 var(--radius-md, 12px) var(--radius-md, 12px) 0;
      padding: var(--space-6, 24px); margin-top: var(--space-8, 32px);
    }
    .testimonial-placeholder__quote {
      font-size: var(--text-base, 16px); color: var(--color-text, #fff);
      font-style: italic; line-height: 1.7; margin-bottom: var(--space-3, 12px);
    }
    .testimonial-placeholder__author {
      font-size: var(--text-sm, 14px); color: var(--color-text-muted, #999);
    }

    .industries-list {
      display: flex; flex-wrap: wrap; gap: var(--space-2, 8px);
      margin-top: var(--space-4, 16px);
    }
    .industry-tag {
      background: rgba(192,192,192,0.08); border: 1px solid rgba(192,192,192,0.12);
      border-radius: 20px; padding: 6px 16px; font-size: 13px;
      color: var(--color-accent-silver, #c0c0c0); font-weight: 500;
    }

    @media (max-width: 768px) {
      .process-steps { grid-template-columns: 1fr; }
      .pricing-grid { grid-template-columns: 1fr; }
      .who-grid { grid-template-columns: 1fr 1fr; }
      .blog-grid { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  // ---- Helper to build CTA block ----
  function ctaBlock(title, desc, btnText, btnHref) {
    return `<div class="container"><div class="sub-page__cta-block">
      <h3>${title}</h3><p>${desc}</p>
      <a href="${btnHref || '#contact'}" class="btn btn--primary">${btnText} <span class="arrow">→</span></a>
    </div></div>`;
  }

  // ---- Helper for feature cards section ----
  function featureCards(cards) {
    let html = '<div class="card-grid card-grid--3">';
    cards.forEach(c => {
      html += `<div class="card"><div class="card__icon"><i data-lucide="${c.icon}"></i></div>
        <h3 class="card__title">${c.title}</h3>
        <p class="card__desc">${c.desc}</p></div>`;
    });
    html += '</div>';
    return html;
  }

  // ---- Helper for process steps ----
  function processSteps(steps) {
    let html = '<div class="process-steps">';
    steps.forEach((s, i) => {
      html += `<div class="process-step"><div class="process-step__num">${i + 1}</div>
        <div class="process-step__title">${s.title}</div>
        <div class="process-step__desc">${s.desc}</div></div>`;
    });
    html += '</div>';
    return html;
  }

  // ---- Helper for who-it's-for section ----
  function whoSection(items) {
    let html = '<div class="who-grid">';
    items.forEach(item => {
      html += `<div class="who-card"><div class="who-card__icon">${item.icon}</div>
        <div class="who-card__text">${item.text}</div></div>`;
    });
    html += '</div>';
    return html;
  }

  // ---- Helper for deliverables ----
  function deliverablesList(items) {
    let html = '<div class="deliverables-list">';
    items.forEach(item => {
      html += `<div class="deliverable-item">
        <span class="deliverable-item__check">✓</span>
        <span class="deliverable-item__text">${item}</span></div>`;
    });
    html += '</div>';
    return html;
  }

  // ============================================================
  // PAGE DATA — All 28 sub-pages
  // ============================================================

  const pages = {};

  // -------------------------------------------------------
  // 1) SWISTOCK SERVICES
  // -------------------------------------------------------

  pages['services/service'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Service</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Business Formation & Compliance</h1>
          <p class="section__subtitle" style="max-width:700px;">From LLC filing to annual compliance — we handle the legal and administrative groundwork so you can focus on building your business. Every entrepreneur deserves a clean, compliant foundation.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What's Included</h2>
          ${featureCards([
            { icon: 'file-text', title: 'LLC & Entity Filing', desc: 'Complete formation of LLCs, S-Corps, C-Corps, and partnerships. We handle Articles of Organization, state filings, and all required documentation across all 50 states.' },
            { icon: 'key', title: 'EIN Registration', desc: 'Federal Employer Identification Number registration with the IRS — required for tax filings, banking, and hiring. Same-day processing available.' },
            { icon: 'file-check', title: 'Operating Agreements', desc: 'Custom operating agreements that define member roles, profit distribution, voting rights, and dissolution terms. Legally reviewed templates included.' },
            { icon: 'shield', title: 'Registered Agent Service', desc: 'Designated registered agent in any state — receive legal notices, government correspondence, and compliance documents on your behalf.' },
            { icon: 'calendar', title: 'Annual Compliance', desc: 'Annual report filing, franchise tax submissions, and state-specific compliance tracking so you never miss a deadline or face penalties.' },
            { icon: 'clipboard-list', title: 'Business Licensing', desc: 'Federal, state, and local license and permit research. We identify every required license for your industry and location, then help you apply.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '🚀', text: 'First-Time Founders' },
            { icon: '🏪', text: 'Small Business Owners' },
            { icon: '🏥', text: 'Healthcare Practices' },
            { icon: '💼', text: 'Freelancers Going Legit' },
            { icon: '🌍', text: 'International Entrepreneurs' },
            { icon: '📈', text: 'Scaling Startups' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">How It Works</h2>
          ${processSteps([
            { title: 'Discovery Call', desc: 'We learn about your business model, goals, and state requirements to recommend the optimal entity structure.' },
            { title: 'Entity Selection & Filing', desc: 'We prepare and file all formation documents with the state, secure your EIN, and set up your registered agent.' },
            { title: 'Documentation & Agreements', desc: 'Operating agreements, bylaws, and initial resolutions are drafted and delivered for your review and signature.' },
            { title: 'Ongoing Compliance', desc: 'We track every deadline and file your annual reports, franchise taxes, and renewals automatically.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-4);">
            <div class="feature-highlight"><div class="feature-highlight__number">500+</div><div class="feature-highlight__label">Businesses Filed</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">50</div><div class="feature-highlight__label">States Covered</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">48hr</div><div class="feature-highlight__label">Average Filing Time</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">99%</div><div class="feature-highlight__label">First-Pass Approval</div></div>
          </div>
        </div>
      </div>

      ${ctaBlock('Ready to Get Your Business Set Up?', 'Schedule a free consultation and we\'ll walk you through the entire formation process.', 'Start Your Business')}
    </div>`;
  };

  pages['services/websites'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Websites</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Web Design, Development & Hosting</h1>
          <p class="section__subtitle" style="max-width:700px;">Your website is your most important employee — it works 24/7. We build custom, fast, SEO-optimized websites that convert visitors into customers and scale with your business.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What We Build</h2>
          ${featureCards([
            { icon: 'layout', title: 'Custom Websites', desc: 'Fully custom designs built from scratch — no templates. Every pixel is intentional, every interaction is smooth, and every page is optimized for conversion.' },
            { icon: 'shopping-cart', title: 'E-Commerce Stores', desc: 'Shopify, WooCommerce, and custom storefronts with payment processing, inventory management, and automated fulfillment integration.' },
            { icon: 'zap', title: 'Landing Pages', desc: 'High-converting landing pages for ad campaigns, product launches, and lead generation. A/B tested and analytics-ready from day one.' },
            { icon: 'search', title: 'SEO Optimization', desc: 'Technical SEO, keyword strategy, meta optimization, schema markup, and content structure that gets you found on Google and stays there.' },
            { icon: 'server', title: 'Hosting & Domains', desc: 'Enterprise-grade hosting with 99.9% uptime, SSL certificates, CDN distribution, automated backups, and domain management.' },
            { icon: 'tool', title: 'Monthly Maintenance', desc: 'Security updates, performance monitoring, content updates, and technical support. We keep your site fast, safe, and current.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '🏢', text: 'Small & Medium Businesses' },
            { icon: '🏥', text: 'Healthcare Providers' },
            { icon: '🛒', text: 'E-Commerce Brands' },
            { icon: '🎯', text: 'Marketing Teams' },
            { icon: '🚀', text: 'Startups & MVPs' },
            { icon: '🌐', text: 'International Brands' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Process</h2>
          ${processSteps([
            { title: 'Strategy & Discovery', desc: 'We research your market, audit competitors, and define the site architecture, user flows, and conversion goals before writing a single line of code.' },
            { title: 'Design & Prototype', desc: 'High-fidelity mockups reviewed with you at every stage. Mobile-first design with responsive layouts across all devices.' },
            { title: 'Development & SEO', desc: 'Clean, semantic code built on modern frameworks (Next.js, WordPress, or custom). Technical SEO baked in from the start.' },
            { title: 'Launch & Support', desc: 'Thorough QA, performance optimization, and launch. Then ongoing maintenance, analytics, and content updates.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-4);">
            <div class="feature-highlight"><div class="feature-highlight__number">100+</div><div class="feature-highlight__label">Sites Launched</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">&lt;2s</div><div class="feature-highlight__label">Load Time Target</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">99.9%</div><div class="feature-highlight__label">Uptime SLA</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">3x</div><div class="feature-highlight__label">Avg. Conversion Lift</div></div>
          </div>
        </div>
      </div>

      ${ctaBlock('Ready for a Website That Works?', 'Get a free website audit and proposal — see exactly how we\'d transform your online presence.', 'Get Your Free Audit')}
    </div>`;
  };

  pages['services/investment'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Investment</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Fundraising, Equity & Capital Access</h1>
          <p class="section__subtitle" style="max-width:700px;">Capital is the fuel that powers growth. We help founders structure their equity, build compelling pitch materials, and connect with the right investors at the right stage.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What's Included</h2>
          ${featureCards([
            { icon: 'presentation', title: 'Pitch Deck Creation', desc: 'Investor-grade pitch decks that tell your story with data. Market sizing, financial projections, traction metrics, and competitive positioning — all designed to close.' },
            { icon: 'users', title: 'Investor Matching', desc: 'Access our network of angel investors, VCs, family offices, and strategic partners. We match you with capital sources aligned to your industry and stage.' },
            { icon: 'file-text', title: 'Term Sheet Negotiation', desc: 'Expert guidance on valuation, dilution, liquidation preferences, anti-dilution provisions, and board composition. We protect founder interests.' },
            { icon: 'table', title: 'Cap Table Management', desc: 'Clean, accurate capitalization tables tracking ownership percentages, option pools, convertible notes, SAFEs, and future dilution scenarios.' },
            { icon: 'pen-tool', title: 'Grant Writing', desc: 'Federal and state grant applications for SBIR, STTR, NSF, and industry-specific programs. We handle the narrative, budget, and submission process.' },
            { icon: 'trending-up', title: 'Financial Modeling', desc: 'Three-statement financial models, unit economics, runway analysis, and scenario planning that investors expect and trust.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '🌱', text: 'Pre-Seed Founders' },
            { icon: '📊', text: 'Series A Companies' },
            { icon: '🏥', text: 'Healthcare Startups' },
            { icon: '🤖', text: 'AI/Tech Ventures' },
            { icon: '🌍', text: 'Social Enterprises' },
            { icon: '🔬', text: 'Research Spinouts' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">The Process</h2>
          ${processSteps([
            { title: 'Assessment & Strategy', desc: 'We evaluate your current stage, funding needs, and optimal capital structure. Pre-seed, seed, bridge, Series A — each requires a different approach.' },
            { title: 'Materials & Preparation', desc: 'Pitch deck, financial model, data room, and executive summary built to institutional standards. Practice sessions included.' },
            { title: 'Investor Outreach', desc: 'Targeted introductions to aligned investors. We manage the outreach cadence, follow-ups, and meeting preparation.' },
            { title: 'Negotiation & Close', desc: 'Term sheet review, legal coordination, and closing support. We stay with you through wire transfer.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Raise Capital?', 'Book a confidential consultation to discuss your fundraising strategy and investor readiness.', 'Start Fundraising')}
    </div>`;
  };

  pages['services/staffing'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Staffing</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Talent Placement & Workforce Solutions</h1>
          <p class="section__subtitle" style="max-width:700px;">The right hire changes everything. We source, screen, and place top talent across healthcare, technology, and executive leadership — backed by industry-specific expertise and rigorous vetting.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What's Included</h2>
          ${featureCards([
            { icon: 'search', title: 'Job Posting & Sourcing', desc: 'Multi-channel job distribution across 50+ job boards, LinkedIn, niche industry platforms, and our internal talent database of 10,000+ candidates.' },
            { icon: 'user-check', title: 'Candidate Screening', desc: 'Technical assessments, behavioral interviews, reference checks, and skills verification. Only the top 10% of applicants reach your desk.' },
            { icon: 'shield-check', title: 'Background Checks', desc: 'Comprehensive criminal, employment, education, license, and credit verification. HIPAA-compliant checks for healthcare roles.' },
            { icon: 'user-plus', title: 'Onboarding Support', desc: 'Structured 30/60/90-day onboarding plans, compliance training, benefits enrollment assistance, and cultural integration support.' },
            { icon: 'heart', title: 'Retention Strategy', desc: 'Employee engagement surveys, compensation benchmarking, career pathing, and exit interview analysis to keep your best people.' },
            { icon: 'bar-chart', title: 'HR Analytics', desc: 'Time-to-fill, cost-per-hire, quality-of-hire, and retention metrics. Data-driven insights to optimize your hiring process.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '🏥', text: 'Healthcare Systems' },
            { icon: '💻', text: 'Tech Companies' },
            { icon: '🏗️', text: 'Growing Businesses' },
            { icon: '🎓', text: 'Education Institutions' },
            { icon: '🏭', text: 'Manufacturing' },
            { icon: '🌍', text: 'Multi-Location Orgs' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">How It Works</h2>
          ${processSteps([
            { title: 'Intake & Requirements', desc: 'Deep-dive into your role requirements, team culture, compensation range, and timeline. We don\'t just fill seats — we find fits.' },
            { title: 'Source & Screen', desc: 'Active recruiting, passive candidate outreach, and thorough vetting. You get a shortlist of 3-5 qualified, pre-screened candidates.' },
            { title: 'Interview & Select', desc: 'Coordinated interviews, skills assessments, and reference checks. We handle scheduling, prep, and feedback loops.' },
            { title: 'Place & Support', desc: 'Offer negotiation, onboarding coordination, and ongoing check-ins through the first 90 days to ensure success.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Need Top Talent Fast?', 'Tell us about your hiring needs and we\'ll start sourcing candidates within 48 hours.', 'Start Hiring')}
    </div>`;
  };

  pages['services/technologies'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Technologies</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">AI Integration & Technology Solutions</h1>
          <p class="section__subtitle" style="max-width:700px;">Technology should work for you, not the other way around. We design, build, and integrate custom software solutions that automate operations, unlock insights, and future-proof your business.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What We Deliver</h2>
          ${featureCards([
            { icon: 'cpu', title: 'Custom Software Development', desc: 'End-to-end application development — web apps, mobile apps, internal tools, and SaaS platforms built on modern architectures with clean, maintainable code.' },
            { icon: 'plug', title: 'API Integrations', desc: 'Connect your existing tools into a unified ecosystem. CRM, ERP, accounting, marketing, and custom APIs — we make everything talk to each other.' },
            { icon: 'cloud', title: 'Cloud Migration', desc: 'AWS, Azure, and Google Cloud migrations. Infrastructure-as-code, auto-scaling, disaster recovery, and cost optimization included.' },
            { icon: 'lock', title: 'Cybersecurity', desc: 'Vulnerability assessments, penetration testing, SOC 2 compliance, HIPAA security, and ongoing threat monitoring to protect your data and reputation.' },
            { icon: 'monitor', title: 'Tech Audits', desc: 'Comprehensive evaluation of your current tech stack — performance, security, scalability, and cost. We deliver a prioritized roadmap for improvement.' },
            { icon: 'brain', title: 'AI Implementation', desc: 'Machine learning models, natural language processing, computer vision, and predictive analytics integrated directly into your business workflows.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '🏢', text: 'Enterprise Operations' },
            { icon: '🚀', text: 'Tech Startups' },
            { icon: '🏥', text: 'Healthcare Systems' },
            { icon: '🏭', text: 'Manufacturing' },
            { icon: '🛒', text: 'E-Commerce' },
            { icon: '📊', text: 'Data-Heavy Orgs' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Approach</h2>
          ${processSteps([
            { title: 'Tech Audit', desc: 'We assess your current systems, identify bottlenecks, security gaps, and opportunities for automation. No sales pitch — just honest evaluation.' },
            { title: 'Architecture & Planning', desc: 'System design, technology selection, timeline, and budget. You approve every decision before a single line of code is written.' },
            { title: 'Build & Integrate', desc: 'Agile development with bi-weekly demos. Continuous integration, automated testing, and security baked into every sprint.' },
            { title: 'Deploy & Monitor', desc: 'Production deployment, performance monitoring, 24/7 alerting, and ongoing maintenance. We don\'t disappear after launch.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Modernize Your Tech Stack?', 'Get a free technology audit — we\'ll identify your biggest opportunities in 30 minutes.', 'Book Tech Audit')}
    </div>`;
  };

  pages['services/operations'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Operations</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Systems, Process & Workflow Optimization</h1>
          <p class="section__subtitle" style="max-width:700px;">Operational excellence isn't optional — it's the difference between businesses that survive and businesses that scale. We build the systems, SOPs, and workflows that make growth repeatable.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What's Included</h2>
          ${featureCards([
            { icon: 'book-open', title: 'Standard Operating Procedures', desc: 'Documented, repeatable processes for every department — from customer onboarding to financial close. Written clearly enough that any new hire can follow them.' },
            { icon: 'kanban', title: 'Project Management Setup', desc: 'Asana, Monday, Notion, Jira, or ClickUp implementation. We configure your PM system with templates, automations, and reporting dashboards.' },
            { icon: 'truck', title: 'Supply Chain Optimization', desc: 'Vendor management, procurement workflows, logistics tracking, and cost reduction strategies. We streamline your supply chain end to end.' },
            { icon: 'package', title: 'Inventory Systems', desc: 'Real-time inventory tracking, reorder automation, warehouse management, and demand forecasting integrated with your POS and accounting systems.' },
            { icon: 'check-circle', title: 'Quality Control', desc: 'QC frameworks, inspection checklists, defect tracking, and continuous improvement cycles (Kaizen, Six Sigma) tailored to your industry.' },
            { icon: 'repeat', title: 'Workflow Automation', desc: 'Zapier, Make, or custom automation that eliminates repetitive tasks. Email sequences, data entry, approvals, and notifications — all automated.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '📦', text: 'E-Commerce & Retail' },
            { icon: '🏥', text: 'Healthcare Clinics' },
            { icon: '🏭', text: 'Manufacturing' },
            { icon: '🍽️', text: 'Restaurants & Hospitality' },
            { icon: '🏗️', text: 'Construction & Trades' },
            { icon: '📈', text: 'Scaling Startups' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">How It Works</h2>
          ${processSteps([
            { title: 'Operations Audit', desc: 'We map your current workflows, identify bottlenecks, and quantify the time and money being lost to inefficiency.' },
            { title: 'System Design', desc: 'New SOPs, workflow diagrams, and tool configurations designed to eliminate waste and standardize execution.' },
            { title: 'Implementation', desc: 'Tool setup, team training, and phased rollout. We implement changes without disrupting your current operations.' },
            { title: 'Measure & Optimize', desc: 'KPI tracking and monthly optimization reviews. We measure the impact and continue refining until you hit your targets.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Run Leaner?', 'Get a free operations assessment and discover where you\'re leaving time and money on the table.', 'Get Operations Audit')}
    </div>`;
  };

  pages['services/coaching'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — Coaching</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Business Coaching & AI Strategy</h1>
          <p class="section__subtitle" style="max-width:700px;">Every great leader has a coach. Our programs combine deep business strategy with AI implementation guidance — helping founders, executives, and teams perform at their peak.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Coaching Programs</h2>
          ${featureCards([
            { icon: 'user', title: '1-on-1 Executive Coaching', desc: 'Personalized coaching sessions with experienced business leaders. Strategic planning, decision-making frameworks, and accountability structures tailored to your goals.' },
            { icon: 'users', title: 'Group Workshops', desc: 'Interactive workshops for teams of 5-20. Topics include AI adoption, leadership development, sales mastery, and operational excellence.' },
            { icon: 'brain', title: 'AI Implementation Coaching', desc: 'Hands-on guidance for integrating AI tools into your daily workflow. From prompt engineering to full automation — we coach you through the entire adoption curve.' },
            { icon: 'crown', title: 'Executive Mentoring', desc: 'Long-term mentorship for C-suite and VP-level leaders. Board preparation, investor relations, M&A strategy, and organizational design.' },
            { icon: 'rocket', title: 'Startup Founder Program', desc: 'Intensive 12-week program for early-stage founders covering product-market fit, fundraising, team building, and go-to-market execution.' },
            { icon: 'target', title: 'Leadership Development', desc: 'Multi-month programs for emerging leaders. Communication skills, strategic thinking, team management, and executive presence.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '👔', text: 'CEOs & Founders' },
            { icon: '📊', text: 'VP & Director Level' },
            { icon: '🌱', text: 'First-Time Entrepreneurs' },
            { icon: '🤖', text: 'AI-Curious Leaders' },
            { icon: '👥', text: 'Management Teams' },
            { icon: '🎓', text: 'Career Transitioners' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">The Coaching Journey</h2>
          ${processSteps([
            { title: 'Discovery Session', desc: 'A deep-dive conversation about your goals, challenges, leadership style, and growth trajectory. We define what success looks like.' },
            { title: 'Custom Plan', desc: 'A personalized coaching plan with specific milestones, accountability metrics, and recommended frameworks.' },
            { title: 'Weekly Sessions', desc: 'Regular coaching calls with homework, reflection exercises, and real-time problem solving. Email/Slack access between sessions.' },
            { title: 'Growth Review', desc: 'Quarterly progress reviews measuring leadership growth, business impact, and goal achievement. We recalibrate as you evolve.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Level Up?', 'Book a complimentary discovery session and find the coaching program that fits your ambitions.', 'Book Discovery Session')}
    </div>`;
  };

  pages['services/kpis'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#services" class="sub-page__back">← Back to Services</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">S.W.I.S.T.O.C.K. — KPIs</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Analytics, Dashboards & Performance Tracking</h1>
          <p class="section__subtitle" style="max-width:700px;">You can't improve what you don't measure. We build custom analytics systems that give you real-time visibility into every metric that matters — from revenue to customer satisfaction.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What's Included</h2>
          ${featureCards([
            { icon: 'bar-chart-2', title: 'Custom Dashboards', desc: 'Real-time dashboards built on Looker, Tableau, Power BI, or custom solutions. Every metric your team needs — accessible, actionable, and beautiful.' },
            { icon: 'target', title: 'KPI Framework Design', desc: 'We identify the 10-15 metrics that actually drive your business and build a measurement framework with targets, owners, and review cadences.' },
            { icon: 'pie-chart', title: 'Data Visualization', desc: 'Transform raw data into clear visual stories. Charts, graphs, heatmaps, and interactive reports that make complex data simple to understand.' },
            { icon: 'zap', title: 'Automated Reporting', desc: 'Daily, weekly, and monthly reports generated and distributed automatically. No more manual spreadsheet compilation — ever.' },
            { icon: 'activity', title: 'Competitive Benchmarking', desc: 'How do you compare to industry leaders? We benchmark your KPIs against relevant competitors and provide gap analysis with actionable recommendations.' },
            { icon: 'database', title: 'Data Integration', desc: 'Connect all your data sources — CRM, accounting, marketing, operations — into a single source of truth. Clean, unified, and always up to date.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Who It's For</h2>
          ${whoSection([
            { icon: '📊', text: 'Data-Driven Leaders' },
            { icon: '🏢', text: 'Growing Companies' },
            { icon: '💰', text: 'Investor-Backed Startups' },
            { icon: '🏥', text: 'Healthcare Operators' },
            { icon: '🛒', text: 'E-Commerce Brands' },
            { icon: '📈', text: 'Sales Organizations' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Implementation Process</h2>
          ${processSteps([
            { title: 'Data Audit', desc: 'We inventory every data source, assess data quality, identify gaps, and define the analytics architecture that connects it all.' },
            { title: 'KPI Selection', desc: 'Collaborative workshops to select the metrics that matter. We help you cut through vanity metrics and focus on leading indicators.' },
            { title: 'Dashboard Build', desc: 'Custom dashboards designed for your team\'s workflow — executive summaries, departmental views, and deep-dive analytics.' },
            { title: 'Train & Iterate', desc: 'Team training on dashboard usage, report interpretation, and data-driven decision making. Monthly optimization reviews included.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to See Your Data Clearly?', 'Schedule a data strategy session — we\'ll show you exactly what metrics you should be tracking.', 'Start Tracking KPIs')}
    </div>`;
  };

  // -------------------------------------------------------
  // 2) AI SOLUTIONS
  // -------------------------------------------------------

  pages['ai/education'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#ai-solutions" class="sub-page__back">← Back to AI Solutions</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">AI Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">AI Education & Training</h1>
          <p class="section__subtitle" style="max-width:700px;">AI literacy is the new competitive advantage. Our workshops, bootcamps, and corporate training programs turn your team from AI-curious to AI-capable — with hands-on, practical curriculum designed for real business impact.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Training Programs</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <div class="pricing-card__name">Half-Day Workshop</div>
              <div class="pricing-card__price">$1,500</div>
              <ul class="pricing-card__features">
                <li>4-hour intensive session</li>
                <li>Up to 20 participants</li>
                <li>AI fundamentals overview</li>
                <li>Hands-on tool demos</li>
                <li>Workshop materials included</li>
                <li>30-day follow-up support</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Book Workshop</a>
            </div>
            <div class="pricing-card pricing-card--featured">
              <div class="pricing-card__badge">Most Popular</div>
              <div class="pricing-card__name">Full-Day Intensive</div>
              <div class="pricing-card__price">$3,500</div>
              <ul class="pricing-card__features">
                <li>8-hour deep dive</li>
                <li>Up to 25 participants</li>
                <li>Industry-specific use cases</li>
                <li>Live AI implementation exercises</li>
                <li>Custom AI playbook delivered</li>
                <li>60-day support + office hours</li>
              </ul>
              <a href="#contact" class="btn btn--primary">Book Intensive</a>
            </div>
            <div class="pricing-card">
              <div class="pricing-card__name">2-Week Bootcamp</div>
              <div class="pricing-card__price">$8,500</div>
              <ul class="pricing-card__features">
                <li>10 days, 6 hours per day</li>
                <li>Up to 15 participants</li>
                <li>Build real AI projects</li>
                <li>Prompt engineering mastery</li>
                <li>Automation & integration labs</li>
                <li>Certification + 90-day support</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Apply Now</a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Curriculum Tracks</h2>
          ${featureCards([
            { icon: 'book-open', title: 'AI Fundamentals', desc: 'Machine learning basics, neural networks, large language models, and practical applications. No coding required — designed for business professionals.' },
            { icon: 'message-square', title: 'Prompt Engineering', desc: 'Master the art of communicating with AI. Advanced prompting techniques, chain-of-thought reasoning, and domain-specific prompt libraries.' },
            { icon: 'zap', title: 'Business Automation', desc: 'Identify and automate repetitive workflows using AI. Email, scheduling, data entry, content creation, and customer support automation.' },
            { icon: 'code', title: 'AI Development', desc: 'For technical teams — API integration, fine-tuning models, RAG systems, and building custom AI applications with Python and frameworks.' },
            { icon: 'shield', title: 'AI Ethics & Governance', desc: 'Responsible AI adoption, bias detection, data privacy, compliance, and developing your organization\'s AI usage policies.' },
            { icon: 'trending-up', title: 'AI Strategy for Leaders', desc: 'C-suite focused: AI ROI measurement, build vs. buy decisions, competitive intelligence, and organizational change management for AI adoption.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="testimonial-placeholder">
            <div class="testimonial-placeholder__quote">"The AI bootcamp completely transformed how our team works. Within two weeks, we automated 40% of our manual reporting tasks and our sales team is using AI to personalize outreach at scale."</div>
            <div class="testimonial-placeholder__author">— Operations Director, Healthcare Company (200+ employees)</div>
          </div>
        </div>
      </div>

      ${ctaBlock('Train Your Team in AI', 'Book a discovery call to design a custom training program for your organization.', 'Schedule Training')}
    </div>`;
  };

  pages['ai/integration'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#ai-solutions" class="sub-page__back">← Back to AI Solutions</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">AI Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">AI Integration Services</h1>
          <p class="section__subtitle" style="max-width:700px;">Seamlessly embed AI into your existing business systems — no rip-and-replace required. We connect intelligent automation to your CRM, operations, customer service, and workflows so AI works alongside your team, not in place of them.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Integration Capabilities</h2>
          ${featureCards([
            { icon: 'users', title: 'CRM Automation', desc: 'AI-powered lead scoring, automated follow-ups, deal prioritization, and customer insights integrated directly into Salesforce, HubSpot, or your existing CRM.' },
            { icon: 'message-circle', title: 'Chatbot Deployment', desc: 'Intelligent conversational AI for customer support, lead qualification, appointment booking, and FAQ handling. Available 24/7, escalates to humans when needed.' },
            { icon: 'file-text', title: 'Document Processing', desc: 'Automated extraction of data from invoices, contracts, forms, and medical records using OCR and NLP. 95%+ accuracy with human-in-the-loop validation.' },
            { icon: 'trending-up', title: 'Predictive Analytics', desc: 'Sales forecasting, demand prediction, churn modeling, and inventory optimization powered by machine learning trained on your historical data.' },
            { icon: 'repeat', title: 'Workflow Automation', desc: 'AI-driven automation of approval workflows, scheduling, content generation, email campaigns, and data synchronization across your tool stack.' },
            { icon: 'plug', title: 'API Connections', desc: 'Custom API integrations connecting AI capabilities to any system — ERP, accounting, marketing platforms, databases, and proprietary software.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Integration Process</h2>
          ${processSteps([
            { title: 'System Assessment', desc: 'We audit your current tools, data flows, and pain points. Where is your team spending the most time on repetitive tasks? That\'s where AI has the biggest impact.' },
            { title: 'Solution Design', desc: 'Architecture document with integration points, data mapping, and AI model selection. You see exactly what we\'ll build before we start.' },
            { title: 'Build & Test', desc: 'Iterative development with extensive testing. We validate accuracy, handle edge cases, and ensure the AI performs reliably in your real-world conditions.' },
            { title: 'Deploy & Train', desc: 'Production deployment with team training, documentation, and 90-day optimization period to tune performance based on real usage data.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="testimonial-placeholder">
            <div class="testimonial-placeholder__quote">"SWIS TEK AI integrated a chatbot and document processing system into our practice in under 3 weeks. Patient intake time dropped by 60% and our front desk team can now focus on patient care instead of paperwork."</div>
            <div class="testimonial-placeholder__author">— Practice Manager, Physical Therapy Clinic</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-4);">
            <div class="feature-highlight"><div class="feature-highlight__number">60%</div><div class="feature-highlight__label">Avg. Time Saved</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">95%+</div><div class="feature-highlight__label">AI Accuracy Rate</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">3 wks</div><div class="feature-highlight__label">Avg. Deployment</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">4.2x</div><div class="feature-highlight__label">ROI First Year</div></div>
          </div>
        </div>
      </div>

      ${ctaBlock('Ready to Add AI to Your Business?', 'Book a free integration assessment — we\'ll identify your top 3 AI opportunities in 30 minutes.', 'Get AI Assessment')}
    </div>`;
  };

  pages['ai/marketplace'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#ai-solutions" class="sub-page__back">← Back to AI Solutions</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">AI Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">AI Tools Marketplace</h1>
          <p class="section__subtitle" style="max-width:700px;">Overwhelmed by the thousands of AI tools available? We've tested hundreds so you don't have to. Our curated marketplace features only the tools that deliver real value for small and medium businesses — reviewed, rated, and recommended by our team.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Categories</h2>
          ${featureCards([
            { icon: 'pen-tool', title: 'AI Writing Tools', desc: 'Content creation, copywriting, email drafting, and document generation. From blog posts to legal contracts — tools tested for quality, accuracy, and brand voice preservation.' },
            { icon: 'palette', title: 'AI Design Tools', desc: 'Image generation, graphic design, video editing, and presentation creation. Tools that let non-designers produce professional visuals in minutes.' },
            { icon: 'bar-chart', title: 'AI Analytics', desc: 'Business intelligence, data visualization, and automated insight generation. Turn raw data into actionable decisions without a data science team.' },
            { icon: 'headphones', title: 'AI Customer Service', desc: 'Chatbots, ticket routing, sentiment analysis, and automated responses. Tools that improve customer satisfaction while reducing support costs.' },
            { icon: 'code', title: 'AI Coding Tools', desc: 'Code generation, bug detection, testing automation, and documentation. Multiply your development team\'s output with AI-powered coding assistants.' },
            { icon: 'megaphone', title: 'AI Marketing', desc: 'Social media management, ad optimization, email personalization, and SEO tools. Automate your marketing while maintaining authenticity.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">How We Rate Tools</h2>
          ${processSteps([
            { title: 'Hands-On Testing', desc: 'Every tool is tested by our team in real business scenarios. No sponsored listings — our reviews are based on actual performance.' },
            { title: 'Value Assessment', desc: 'We evaluate ROI for small businesses specifically. A tool that\'s great for enterprises might be overkill for a 10-person team.' },
            { title: 'Comparison Charts', desc: 'Side-by-side comparisons of similar tools across features, pricing, ease of use, and integration capabilities.' },
            { title: 'Regular Updates', desc: 'AI tools evolve fast. We re-test and update our ratings quarterly to ensure our recommendations stay current.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Featured Comparison</h2>
          <div style="overflow-x:auto;">
            <table class="comparison-table">
              <thead><tr><th>Tool Category</th><th>Our Top Pick</th><th>Best For</th><th>Price Range</th></tr></thead>
              <tbody>
                <tr><td>AI Writing</td><td style="color:var(--color-gold);">Coming Soon</td><td>Long-form content</td><td>$20-100/mo</td></tr>
                <tr><td>AI Design</td><td style="color:var(--color-gold);">Coming Soon</td><td>Marketing visuals</td><td>$10-60/mo</td></tr>
                <tr><td>AI Analytics</td><td style="color:var(--color-gold);">Coming Soon</td><td>Business intelligence</td><td>$50-300/mo</td></tr>
                <tr><td>AI Support</td><td style="color:var(--color-gold);">Coming Soon</td><td>Customer service</td><td>$30-200/mo</td></tr>
                <tr><td>AI Coding</td><td style="color:var(--color-gold);">Coming Soon</td><td>Development teams</td><td>$20-100/mo</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      ${ctaBlock('Get Personalized AI Tool Recommendations', 'Tell us about your business and we\'ll recommend the perfect AI tool stack — completely free.', 'Get Recommendations')}
    </div>`;
  };

  pages['ai/custom'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#ai-solutions" class="sub-page__back">← Back to AI Solutions</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">AI Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Custom AI Builds</h1>
          <p class="section__subtitle" style="max-width:700px;">When off-the-shelf doesn't cut it, we build AI from scratch. Custom chatbots, recommendation engines, computer vision systems, NLP solutions, and data pipelines — engineered specifically for your business needs and trained on your data.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">What We Build</h2>
          ${featureCards([
            { icon: 'message-circle', title: 'Custom Chatbots', desc: 'Intelligent conversational agents trained on your knowledge base, products, and processes. Support, sales, onboarding, and internal Q&A — all handled 24/7.' },
            { icon: 'thumbs-up', title: 'Recommendation Engines', desc: 'Personalized product, content, and service recommendations powered by collaborative filtering and deep learning. Increase engagement and revenue.' },
            { icon: 'eye', title: 'Computer Vision', desc: 'Image classification, object detection, OCR, quality inspection, and medical imaging analysis. Custom models trained on your specific visual data.' },
            { icon: 'type', title: 'NLP Solutions', desc: 'Text classification, sentiment analysis, entity extraction, summarization, and translation. Process unstructured text at scale with high accuracy.' },
            { icon: 'database', title: 'Data Pipelines', desc: 'ETL pipelines that clean, transform, and enrich your data for AI consumption. Real-time streaming or batch processing on any scale.' },
            { icon: 'settings', title: 'Model Training & Tuning', desc: 'Fine-tuning foundation models on your proprietary data. Custom training pipelines, evaluation frameworks, and continuous learning systems.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Pricing Tiers</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <div class="pricing-card__name">Starter</div>
              <div class="pricing-card__price">From $10K</div>
              <ul class="pricing-card__features">
                <li>Single AI model or chatbot</li>
                <li>Pre-trained base model</li>
                <li>Basic customization</li>
                <li>API deployment</li>
                <li>30-day support</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Get Quote</a>
            </div>
            <div class="pricing-card pricing-card--featured">
              <div class="pricing-card__badge">Best Value</div>
              <div class="pricing-card__name">Professional</div>
              <div class="pricing-card__price">From $35K</div>
              <ul class="pricing-card__features">
                <li>Multi-model AI system</li>
                <li>Custom fine-tuning</li>
                <li>Full integration</li>
                <li>Admin dashboard</li>
                <li>90-day support + training</li>
              </ul>
              <a href="#contact" class="btn btn--primary">Get Quote</a>
            </div>
            <div class="pricing-card">
              <div class="pricing-card__name">Enterprise</div>
              <div class="pricing-card__price">Custom</div>
              <ul class="pricing-card__features">
                <li>Full AI platform build</li>
                <li>Multiple models & pipelines</li>
                <li>On-premise or cloud</li>
                <li>Dedicated AI engineer</li>
                <li>12-month partnership</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="testimonial-placeholder">
            <div class="testimonial-placeholder__quote">"The custom recommendation engine SWIS TEK AI built for our e-commerce platform increased average order value by 28% in the first month. It understands our customers better than we do."</div>
            <div class="testimonial-placeholder__author">— CEO, E-Commerce Brand (5,000+ SKUs)</div>
          </div>
        </div>
      </div>

      ${ctaBlock('Let\'s Build Your Custom AI', 'Describe your challenge and we\'ll scope a custom AI solution — initial consultation is free.', 'Start Building')}
    </div>`;
  };

  // -------------------------------------------------------
  // 3) CONSULTING
  // -------------------------------------------------------

  pages['consulting/launch'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#consulting" class="sub-page__back">← Back to Consulting</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Consulting</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Business Launch Consulting</h1>
          <p class="section__subtitle" style="max-width:700px;">Launching a business is the hardest thing most people will ever do. We've helped hundreds of entrepreneurs navigate the complexity — from entity formation to your first 90 days of revenue. You bring the vision; we bring the roadmap.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Deliverables</h2>
          ${deliverablesList([
            'Entity formation & state registration (LLC, S-Corp, C-Corp)',
            'EIN registration and federal tax setup',
            'Business bank account setup and financial infrastructure',
            'Required licensing and permits research + applications',
            'Business insurance evaluation and broker introductions',
            'Operating agreement or bylaws drafting',
            'First 90 days operational roadmap with milestones',
            'Initial marketing strategy and brand positioning',
            'Technology stack recommendations and setup',
            'Accounting system configuration (QuickBooks, Xero)',
            'HR framework for first hires',
            'KPI framework for launch metrics tracking'
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Ideal Client</h2>
          ${whoSection([
            { icon: '💡', text: 'First-Time Founders' },
            { icon: '🔄', text: 'Career Changers' },
            { icon: '🏥', text: 'Healthcare Entrepreneurs' },
            { icon: '💻', text: 'Tech Founders' },
            { icon: '🏪', text: 'Franchise Buyers' },
            { icon: '🌍', text: 'International Market Entry' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Process Timeline</h2>
          ${processSteps([
            { title: 'Week 1-2: Foundation', desc: 'Entity selection, formation filing, EIN registration, bank account setup, and insurance evaluation. All the legal groundwork completed.' },
            { title: 'Week 3-4: Infrastructure', desc: 'Technology setup, accounting systems, HR framework, and operational tools configured. Your business is ready to function.' },
            { title: 'Week 5-8: Go-to-Market', desc: 'Marketing strategy, brand positioning, website launch, and initial sales infrastructure. You\'re ready to start generating revenue.' },
            { title: 'Week 9-12: Optimize', desc: '90-day review, KPI analysis, and course correction. We identify what\'s working, what\'s not, and refine your strategy.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Launch Your Business?', 'Book a free strategy session — we\'ll create your personalized launch roadmap.', 'Book Launch Session')}
    </div>`;
  };

  pages['consulting/gtm'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#consulting" class="sub-page__back">← Back to Consulting</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Consulting</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Go-To-Market Strategy</h1>
          <p class="section__subtitle" style="max-width:700px;">A brilliant product with a bad go-to-market strategy fails. We build data-driven GTM plans that define your market, position your offering, and create a clear path from launch to traction.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Deliverables</h2>
          ${deliverablesList([
            'Total Addressable Market (TAM/SAM/SOM) analysis',
            'Competitive landscape mapping with positioning gaps',
            'Ideal Customer Profile (ICP) and buyer persona development',
            'Pricing strategy with competitive benchmarking',
            'Channel strategy — direct, partnerships, digital, field sales',
            'Launch timeline with milestones and dependencies',
            'Marketing messaging framework and value propositions',
            'Sales enablement materials and pitch framework',
            'Customer acquisition cost (CAC) modeling',
            'Revenue projection model (12-month)',
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Ideal Client</h2>
          ${whoSection([
            { icon: '🚀', text: 'Product Launchers' },
            { icon: '🌍', text: 'New Market Entrants' },
            { icon: '🔄', text: 'Pivoting Companies' },
            { icon: '📱', text: 'SaaS Startups' },
            { icon: '🏥', text: 'Healthcare Innovations' },
            { icon: '🛒', text: 'D2C Brands' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Engagement Timeline</h2>
          ${processSteps([
            { title: 'Week 1-2: Research', desc: 'Deep market research, competitor analysis, customer interviews, and data collection. We build the foundation of insight your strategy needs.' },
            { title: 'Week 3-4: Strategy', desc: 'Positioning, pricing, channel strategy, and messaging framework developed. Every decision backed by data and competitive intelligence.' },
            { title: 'Week 5-6: Planning', desc: 'Detailed launch timeline, marketing calendar, sales playbook, and KPI targets. A complete GTM plan ready for execution.' },
            { title: 'Week 7-12: Support', desc: 'Launch support, weekly check-ins, metric tracking, and strategy refinement based on real market feedback.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Go to Market?', 'Schedule a GTM strategy session — we\'ll identify your strongest path to traction.', 'Plan Your Launch')}
    </div>`;
  };

  pages['consulting/sales'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#consulting" class="sub-page__back">← Back to Consulting</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Consulting</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Sales Strategy & Optimization</h1>
          <p class="section__subtitle" style="max-width:700px;">Revenue is oxygen. We design sales systems that fill your pipeline, shorten your sales cycle, and dramatically improve close rates. From CRM architecture to team compensation — every element of your sales engine, optimized.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Deliverables</h2>
          ${deliverablesList([
            'Sales pipeline design with stage definitions and exit criteria',
            'CRM setup and optimization (Salesforce, HubSpot, or Pipedrive)',
            'Sales playbook with objection handling and talk tracks',
            'Lead scoring model and qualification framework (BANT/MEDDIC)',
            'Conversion rate optimization across the full funnel',
            'Sales team training and onboarding program',
            'Compensation plan design (base, commission, accelerators)',
            'Proposal and presentation templates',
            'Win/loss analysis framework',
            'Sales forecasting model and reporting dashboard'
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Ideal Client</h2>
          ${whoSection([
            { icon: '📈', text: 'B2B Companies' },
            { icon: '🛒', text: 'E-Commerce Brands' },
            { icon: '🏥', text: 'Healthcare Services' },
            { icon: '💼', text: 'Professional Services' },
            { icon: '📱', text: 'SaaS Companies' },
            { icon: '🏢', text: 'Scaling Startups' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Engagement Timeline</h2>
          ${processSteps([
            { title: 'Sales Audit', desc: 'We analyze your current pipeline, conversion rates, average deal size, sales cycle length, and team performance. Data first, opinions second.' },
            { title: 'System Design', desc: 'New pipeline architecture, CRM configuration, playbook creation, and compensation modeling. Every element designed to maximize revenue.' },
            { title: 'Team Training', desc: 'Hands-on training for your sales team. Role-playing, objection handling, demo skills, and CRM proficiency.' },
            { title: 'Optimization', desc: 'Monthly performance reviews, A/B testing of pitches and processes, and ongoing refinement until your targets are consistently met.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Sell More?', 'Book a free sales audit — we\'ll identify your biggest revenue opportunities in 30 minutes.', 'Get Sales Audit')}
    </div>`;
  };

  pages['consulting/brand'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#consulting" class="sub-page__back">← Back to Consulting</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Consulting</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Brand Development</h1>
          <p class="section__subtitle" style="max-width:700px;">Your brand is more than a logo — it's the promise you make and the feeling you deliver. We build complete brand identities that resonate with your market, differentiate from competitors, and create lasting emotional connections.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Deliverables</h2>
          ${deliverablesList([
            'Brand strategy document with mission, vision, values, and positioning',
            'Logo design with primary, secondary, and icon variations',
            'Complete visual identity system (colors, typography, imagery)',
            'Messaging framework with taglines, elevator pitch, and boilerplate',
            'Brand guidelines document (50+ pages)',
            'Website copywriting aligned with brand voice',
            'Social media identity and template system',
            'Business card, letterhead, and stationery design',
            'Brand launch strategy and rollout plan',
            'Competitive differentiation mapping'
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Ideal Client</h2>
          ${whoSection([
            { icon: '🆕', text: 'New Businesses' },
            { icon: '🔄', text: 'Rebranding Companies' },
            { icon: '🌱', text: 'Growing Startups' },
            { icon: '🏥', text: 'Healthcare Practices' },
            { icon: '🍽️', text: 'Restaurants & Hospitality' },
            { icon: '💼', text: 'Professional Services' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Process Timeline</h2>
          ${processSteps([
            { title: 'Discovery & Research', desc: 'Brand audit, competitor analysis, customer research, and stakeholder interviews. We understand your market before we design anything.' },
            { title: 'Strategy & Positioning', desc: 'Brand strategy development — your unique positioning, messaging hierarchy, voice and tone guidelines, and competitive differentiation.' },
            { title: 'Visual Identity', desc: 'Logo exploration, color palette, typography, and design system creation. Multiple concepts refined through collaborative feedback.' },
            { title: 'Delivery & Launch', desc: 'Complete brand guidelines, all design assets, website copy, and a phased rollout plan to introduce your new brand to the market.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Build Your Brand?', 'Book a brand discovery session — we\'ll explore your market and identify your unique positioning.', 'Start Branding')}
    </div>`;
  };

  pages['consulting/succession'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#consulting" class="sub-page__back">← Back to Consulting</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Consulting</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Succession & Estate Planning</h1>
          <p class="section__subtitle" style="max-width:700px;">Every great business needs a plan for what comes next. Whether you're preparing for retirement, ownership transfer, or generational transition — we ensure your business legacy is protected and your wealth is preserved.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Deliverables</h2>
          ${deliverablesList([
            'Business valuation (income, market, and asset-based approaches)',
            'Ownership transfer structure and timeline',
            'Leadership transition plan with successor development',
            'Estate planning coordination with your legal team',
            'Buy-sell agreement design and funding strategy',
            'Tax optimization strategy for ownership transitions',
            'Key employee retention plans during transition',
            'Insurance review (key person, buy-sell funding)',
            'Family governance structure (for family businesses)',
            'Communication plan for stakeholders and employees'
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Ideal Client</h2>
          ${whoSection([
            { icon: '👴', text: 'Retiring Owners' },
            { icon: '👨‍👩‍👧‍👦', text: 'Family Businesses' },
            { icon: '🤝', text: 'Partnership Transitions' },
            { icon: '🏥', text: 'Medical Practice Owners' },
            { icon: '🏢', text: 'Multi-Location Operators' },
            { icon: '📊', text: 'Private Equity Exits' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Engagement Process</h2>
          ${processSteps([
            { title: 'Assessment', desc: 'Business valuation, ownership structure review, and goals alignment. We understand what a successful transition looks like for you.' },
            { title: 'Strategy Design', desc: 'Transition plan development — legal structure, tax strategy, successor identification and development, and timeline creation.' },
            { title: 'Execution', desc: 'Legal documentation, insurance review, communication rollout, and phased handover of responsibilities and authority.' },
            { title: 'Monitoring', desc: 'Ongoing oversight during the transition period. Regular check-ins, performance tracking, and adjustment as needed.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Plan Your Business Transition', 'Book a confidential succession planning consultation — protect your legacy and maximize your exit value.', 'Start Planning')}
    </div>`;
  };

  pages['consulting/expansion'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#consulting" class="sub-page__back">← Back to Consulting</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Consulting</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Expansion & Scaling Strategy</h1>
          <p class="section__subtitle" style="max-width:700px;">Growth without a plan is chaos. We build the strategic frameworks, operational systems, and market intelligence needed to expand into new locations, territories, and markets — profitably and sustainably.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Deliverables</h2>
          ${deliverablesList([
            'Market analysis for target expansion areas',
            'Site selection criteria and scoring framework',
            'Multi-location operational playbook',
            'Franchise development feasibility study',
            'Territory mapping and market penetration strategy',
            'Scaling playbook with standard operating procedures',
            'Financial modeling for expansion scenarios',
            'Talent acquisition plan for new locations',
            'Supply chain expansion strategy',
            'Regulatory compliance checklist by geography'
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Ideal Client</h2>
          ${whoSection([
            { icon: '📍', text: 'Multi-Location Businesses' },
            { icon: '🏥', text: 'Healthcare Systems' },
            { icon: '🍽️', text: 'Restaurant Groups' },
            { icon: '🏪', text: 'Retail Chains' },
            { icon: '🌍', text: 'International Expanders' },
            { icon: '📋', text: 'Franchise Developers' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Engagement Timeline</h2>
          ${processSteps([
            { title: 'Market Research', desc: 'Demographic analysis, competitive mapping, demand modeling, and site identification. We find the best opportunities for your specific business.' },
            { title: 'Feasibility Study', desc: 'Financial projections, risk assessment, regulatory analysis, and go/no-go recommendation with supporting data.' },
            { title: 'Expansion Plan', desc: 'Detailed operational playbook, hiring plan, marketing strategy, and launch timeline for each new location or market.' },
            { title: 'Launch Support', desc: 'On-the-ground support during launch. Hiring, training, marketing activation, and daily operational oversight for the first 90 days.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Expand?', 'Book an expansion strategy session — we\'ll evaluate your readiness and identify your best growth opportunities.', 'Plan Expansion')}
    </div>`;
  };

  // -------------------------------------------------------
  // 4) STAFFING SUB-PAGES
  // -------------------------------------------------------

  pages['staffing/healthcare'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#staffing" class="sub-page__back">← Back to Staffing</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Staffing Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Healthcare Staffing</h1>
          <p class="section__subtitle" style="max-width:700px;">Healthcare is personal — and so is our staffing approach. We place qualified, compassionate healthcare professionals where they're needed most. From physical therapists to home health aides, every candidate is licensed, vetted, and ready to deliver exceptional patient care.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Roles We Place</h2>
          <div class="roles-grid">
            <div class="role-chip">Physical Therapists (PT)</div>
            <div class="role-chip">Occupational Therapists (OT)</div>
            <div class="role-chip">Registered Nurses (RN)</div>
            <div class="role-chip">Licensed Practical Nurses (LPN)</div>
            <div class="role-chip">Certified Nursing Assistants (CNA)</div>
            <div class="role-chip">Home Health Aides</div>
            <div class="role-chip">Medical Billing Specialists</div>
            <div class="role-chip">Practice Managers</div>
            <div class="role-chip">Speech-Language Pathologists</div>
            <div class="role-chip">Medical Assistants</div>
            <div class="role-chip">Respiratory Therapists</div>
            <div class="role-chip">Clinic Administrators</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Industries Served</h2>
          <div class="industries-list">
            <span class="industry-tag">Hospitals</span>
            <span class="industry-tag">Outpatient Clinics</span>
            <span class="industry-tag">Home Health</span>
            <span class="industry-tag">Skilled Nursing</span>
            <span class="industry-tag">Rehabilitation Centers</span>
            <span class="industry-tag">Urgent Care</span>
            <span class="industry-tag">Telehealth</span>
            <span class="industry-tag">Mental Health</span>
            <span class="industry-tag">Dental Practices</span>
            <span class="industry-tag">Veterinary</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Process</h2>
          ${processSteps([
            { title: 'Requirement Analysis', desc: 'We learn your facility\'s needs, patient population, shift requirements, and culture. Healthcare staffing isn\'t one-size-fits-all.' },
            { title: 'Credential Verification', desc: 'License verification, background checks, drug screening, and HIPAA compliance training. Every candidate meets or exceeds regulatory standards.' },
            { title: 'Skills Assessment', desc: 'Clinical skills evaluation, behavioral interviews, and reference checks with previous supervisors. We verify competence, not just credentials.' },
            { title: 'Placement & Support', desc: 'Onboarding coordination, orientation support, and 30/60/90-day performance check-ins. We guarantee every placement.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Guarantees</h2>
          <div class="guarantee-grid">
            <div class="guarantee-card"><div class="guarantee-card__icon">🛡️</div><div class="guarantee-card__title">90-Day Guarantee</div><div class="guarantee-card__desc">Free replacement if a placement doesn't work out within 90 days.</div></div>
            <div class="guarantee-card"><div class="guarantee-card__icon">✅</div><div class="guarantee-card__title">HIPAA Compliant</div><div class="guarantee-card__desc">Every candidate completes HIPAA training before placement.</div></div>
            <div class="guarantee-card"><div class="guarantee-card__icon">⚡</div><div class="guarantee-card__title">48hr Response</div><div class="guarantee-card__desc">Initial candidate shortlist within 48 hours of intake.</div></div>
            <div class="guarantee-card"><div class="guarantee-card__icon">📋</div><div class="guarantee-card__title">Full Credentialing</div><div class="guarantee-card__desc">License, certification, and background verification on every hire.</div></div>
          </div>
        </div>
      </div>

      ${ctaBlock('Need Healthcare Professionals?', 'Tell us about your staffing needs and we\'ll start sourcing qualified candidates immediately.', 'Start Hiring Healthcare')}
    </div>`;
  };

  pages['staffing/tech'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#staffing" class="sub-page__back">← Back to Staffing</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Staffing Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Tech Staffing</h1>
          <p class="section__subtitle" style="max-width:700px;">The talent war in tech is real — and we're your secret weapon. We source, vet, and place top-tier technology professionals from full-stack developers to AI engineers. Every candidate is technically assessed and culturally screened.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Roles We Place</h2>
          <div class="roles-grid">
            <div class="role-chip">Full-Stack Developers</div>
            <div class="role-chip">AI/ML Engineers</div>
            <div class="role-chip">Data Scientists</div>
            <div class="role-chip">DevOps Engineers</div>
            <div class="role-chip">Cybersecurity Analysts</div>
            <div class="role-chip">Product Managers</div>
            <div class="role-chip">UI/UX Designers</div>
            <div class="role-chip">Cloud Architects</div>
            <div class="role-chip">QA Engineers</div>
            <div class="role-chip">Mobile Developers</div>
            <div class="role-chip">Data Engineers</div>
            <div class="role-chip">Technical Project Managers</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Industries Served</h2>
          <div class="industries-list">
            <span class="industry-tag">SaaS Companies</span>
            <span class="industry-tag">HealthTech</span>
            <span class="industry-tag">FinTech</span>
            <span class="industry-tag">E-Commerce</span>
            <span class="industry-tag">AI/ML Startups</span>
            <span class="industry-tag">Enterprise Software</span>
            <span class="industry-tag">Cybersecurity</span>
            <span class="industry-tag">EdTech</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Process</h2>
          ${processSteps([
            { title: 'Technical Intake', desc: 'Deep-dive into your tech stack, team structure, project requirements, and culture. We understand exactly what "great" looks like for your team.' },
            { title: 'Technical Assessment', desc: 'Coding challenges, system design exercises, and portfolio review calibrated to your tech stack. We evaluate real skills, not resumes.' },
            { title: 'Culture & Soft Skills', desc: 'Behavioral interviews assessing communication, collaboration, problem-solving, and growth mindset. Technical brilliance isn\'t enough alone.' },
            { title: 'Placement & Onboarding', desc: 'Offer negotiation, onboarding coordination, and first-90-days support. Regular check-ins to ensure the match is working for both sides.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Guarantees</h2>
          <div class="guarantee-grid">
            <div class="guarantee-card"><div class="guarantee-card__icon">🛡️</div><div class="guarantee-card__title">90-Day Guarantee</div><div class="guarantee-card__desc">Free replacement if the placement doesn't work out.</div></div>
            <div class="guarantee-card"><div class="guarantee-card__icon">💻</div><div class="guarantee-card__title">Technical Vetting</div><div class="guarantee-card__desc">Every candidate completes rigorous technical assessment.</div></div>
            <div class="guarantee-card"><div class="guarantee-card__icon">⚡</div><div class="guarantee-card__title">5-Day Shortlist</div><div class="guarantee-card__desc">Qualified candidates presented within 5 business days.</div></div>
            <div class="guarantee-card"><div class="guarantee-card__icon">🌍</div><div class="guarantee-card__title">Remote-Ready</div><div class="guarantee-card__desc">Candidates vetted for remote, hybrid, or on-site work.</div></div>
          </div>
        </div>
      </div>

      ${ctaBlock('Need Tech Talent?', 'Describe your ideal candidate and we\'ll start the search within 24 hours.', 'Start Tech Hiring')}
    </div>`;
  };

  pages['staffing/executive'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#staffing" class="sub-page__back">← Back to Staffing</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Staffing Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Executive Placement</h1>
          <p class="section__subtitle" style="max-width:700px;">The difference between good companies and great ones is leadership. Our executive search practice places CEOs, COOs, CTOs, CFOs, and VP-level leaders who transform organizations. Confidential, thorough, and precise.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Roles We Place</h2>
          <div class="roles-grid">
            <div class="role-chip">Chief Executive Officer (CEO)</div>
            <div class="role-chip">Chief Operating Officer (COO)</div>
            <div class="role-chip">Chief Technology Officer (CTO)</div>
            <div class="role-chip">Chief Financial Officer (CFO)</div>
            <div class="role-chip">Chief Marketing Officer (CMO)</div>
            <div class="role-chip">VP of Engineering</div>
            <div class="role-chip">VP of Sales</div>
            <div class="role-chip">VP of Operations</div>
            <div class="role-chip">Board Members</div>
            <div class="role-chip">Interim Executives</div>
            <div class="role-chip">C-Suite Advisory</div>
            <div class="role-chip">General Managers</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Industries Served</h2>
          <div class="industries-list">
            <span class="industry-tag">Healthcare</span>
            <span class="industry-tag">Technology</span>
            <span class="industry-tag">Manufacturing</span>
            <span class="industry-tag">Financial Services</span>
            <span class="industry-tag">Consumer Goods</span>
            <span class="industry-tag">Non-Profit</span>
            <span class="industry-tag">Private Equity Portfolio</span>
            <span class="industry-tag">Professional Services</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Our Process</h2>
          ${processSteps([
            { title: 'Confidential Briefing', desc: 'We meet with the board or hiring authority to define the leadership profile, organizational challenges, cultural requirements, and compensation framework.' },
            { title: 'Research & Mapping', desc: 'Systematic identification of potential candidates through our network, industry mapping, and confidential outreach. We find leaders who aren\'t looking.' },
            { title: 'Assessment & Presentation', desc: 'In-depth interviews, leadership assessments, reference checks, and background verification. We present 3-5 exceptional, pre-vetted finalists.' },
            { title: 'Transition Support', desc: 'Offer negotiation, onboarding planning, and first-100-days support. We help ensure a smooth leadership transition.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Find Your Next Leader', 'Begin a confidential executive search — we\'ll find the leadership talent that transforms your organization.', 'Start Executive Search')}
    </div>`;
  };

  pages['staffing/temp'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#staffing" class="sub-page__back">← Back to Staffing</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Staffing Solutions</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Temp-to-Hire Solutions</h1>
          <p class="section__subtitle" style="max-width:700px;">Not ready for a permanent commitment? Our temp-to-hire program lets you evaluate talent on the job before making a full-time offer. Zero risk, full flexibility, and performance data to support your decision.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Program Options</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <div class="pricing-card__name">30-Day Trial</div>
              <div class="pricing-card__price">Flex Start</div>
              <ul class="pricing-card__features">
                <li>30-day evaluation period</li>
                <li>Weekly performance reports</li>
                <li>No conversion fee if hired at day 30</li>
                <li>Full replacement guarantee</li>
                <li>We handle payroll during trial</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Learn More</a>
            </div>
            <div class="pricing-card pricing-card--featured">
              <div class="pricing-card__badge">Most Popular</div>
              <div class="pricing-card__name">60-Day Trial</div>
              <div class="pricing-card__price">Standard</div>
              <ul class="pricing-card__features">
                <li>60-day evaluation period</li>
                <li>Bi-weekly performance reviews</li>
                <li>Reduced conversion fee</li>
                <li>Full replacement guarantee</li>
                <li>Benefits-eligible at conversion</li>
              </ul>
              <a href="#contact" class="btn btn--primary">Get Started</a>
            </div>
            <div class="pricing-card">
              <div class="pricing-card__name">90-Day Trial</div>
              <div class="pricing-card__price">Full Eval</div>
              <ul class="pricing-card__features">
                <li>90-day comprehensive evaluation</li>
                <li>Monthly performance reviews</li>
                <li>Lowest conversion fee</li>
                <li>Skills development included</li>
                <li>Full benefits at conversion</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">How It Works</h2>
          ${processSteps([
            { title: 'Define Requirements', desc: 'We scope the role, define success criteria, and establish evaluation benchmarks. You know exactly what you\'re measuring from day one.' },
            { title: 'Place & Evaluate', desc: 'Our candidate starts working. We handle payroll, benefits, and worker\'s comp during the trial period. You evaluate without financial risk.' },
            { title: 'Performance Data', desc: 'Regular performance reports with supervisor feedback, KPI tracking, and culture-fit assessment. Data-driven hiring decisions.' },
            { title: 'Convert or Replace', desc: 'Convert to permanent with a prorated fee, or we provide a replacement at no additional charge. The decision is entirely yours.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Why Temp-to-Hire?</h2>
          ${featureCards([
            { icon: 'shield', title: 'Zero Hiring Risk', desc: 'Evaluate real on-the-job performance before committing to a permanent hire. No more costly mis-hires based on interviews alone.' },
            { icon: 'trending-up', title: 'Flexible Scaling', desc: 'Scale your team up for seasonal demands, special projects, or growth spurts without permanent headcount commitments.' },
            { icon: 'dollar-sign', title: 'Cost Effective', desc: 'No upfront placement fees — you only pay a conversion fee when you decide to hire permanently. We absorb the risk.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Try Before You Hire', 'Start a temp-to-hire engagement — evaluate talent on the job with zero risk.', 'Start Temp-to-Hire')}
    </div>`;
  };

  // -------------------------------------------------------
  // 5) RESOURCES
  // -------------------------------------------------------

  pages['resources/blog'] = function () {
    const articles = [
      { cat: 'AI Trends', icon: '🤖', title: '5 AI Trends That Will Transform Small Business in 2026', excerpt: 'From generative AI to autonomous agents — the five trends every small business owner needs to understand and prepare for this year.', date: 'Mar 18, 2026' },
      { cat: 'Business Tips', icon: '💼', title: 'The First 90 Days: A Founder\'s Survival Guide', excerpt: 'Practical advice for new business owners on entity setup, banking, insurance, and generating your first revenue — from someone who\'s done it 200+ times.', date: 'Mar 12, 2026' },
      { cat: 'Kentucky Business', icon: '🏠', title: 'Kentucky\'s Growing Tech Ecosystem: Opportunities for Entrepreneurs', excerpt: 'Why Kentucky is becoming a startup-friendly state — tax incentives, talent pipelines, and the emerging tech corridor.', date: 'Mar 5, 2026' },
      { cat: 'Tech Strategy', icon: '⚙️', title: 'Build vs. Buy: How to Make the Right Technology Decision', excerpt: 'A framework for deciding when to build custom software versus adopting existing platforms. The answer isn\'t always what you think.', date: 'Feb 26, 2026' },
      { cat: 'Startup Guide', icon: '🚀', title: 'Raising Your First Round: A Step-by-Step Guide for First-Time Founders', excerpt: 'From pre-seed to Series A — what investors actually look for, how to build a pitch deck that closes, and common mistakes to avoid.', date: 'Feb 18, 2026' },
      { cat: 'Funding', icon: '💰', title: '2026 Grant Guide: Federal & State Funding for Small Businesses', excerpt: 'A curated list of the most accessible grant programs for small businesses — SBIR, STTR, SBA, and state-specific opportunities.', date: 'Feb 10, 2026' }
    ];
    let blogHtml = '<div class="blog-grid">';
    articles.forEach(a => {
      blogHtml += `<div class="blog-card">
        <div class="blog-card__img">${a.icon}</div>
        <div class="blog-card__body">
          <div class="blog-card__cat">${a.cat}</div>
          <h3 class="blog-card__title">${a.title}</h3>
          <p class="blog-card__excerpt">${a.excerpt}</p>
          <div class="blog-card__meta">${a.date} · 5 min read</div>
        </div>
      </div>`;
    });
    blogHtml += '</div>';

    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#resources" class="sub-page__back">← Back to Resources</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Resources</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Blog</h1>
          <p class="section__subtitle" style="max-width:700px;">AI trends, business strategy, funding guides, and Kentucky business news — written by practitioners, not pundits. Actionable insights for entrepreneurs who build.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          ${blogHtml}
        </div>
      </div>

      ${ctaBlock('Get Weekly Insights', 'Join 1,000+ entrepreneurs receiving our weekly newsletter with AI and business strategies.', 'Subscribe Now')}
    </div>`;
  };

  pages['resources/tools'] = function () {
    const tools = [
      { icon: '📊', title: 'KPI Calculator', desc: 'Input your revenue, expenses, and growth targets to generate a custom KPI dashboard framework for your business.', btn: 'Use Calculator' },
      { icon: '📝', title: 'Business Plan Template', desc: 'A comprehensive, fill-in-the-blank business plan template used by our consulting team. Includes financial projections section.', btn: 'Download Template' },
      { icon: '💰', title: 'Financial Model Template', desc: 'Three-statement financial model (P&L, Balance Sheet, Cash Flow) in Excel. Pre-built formulas and scenario analysis included.', btn: 'Download Model' },
      { icon: '🎯', title: 'Pitch Deck Template', desc: '12-slide investor pitch deck template with speaker notes and design guidelines. Based on what actually closes rounds.', btn: 'Download Deck' },
      { icon: '🔍', title: 'SWOT Analysis Template', desc: 'Interactive SWOT framework with guided questions for each quadrant. Includes competitive benchmarking worksheet.', btn: 'Use Template' },
      { icon: '💸', title: 'Cash Flow Planner', desc: '12-month cash flow projection tool. Track income, expenses, and runway. Visual charts show your burn rate and break-even point.', btn: 'Use Planner' }
    ];
    let toolHtml = '<div class="tool-grid">';
    tools.forEach(t => {
      toolHtml += `<div class="tool-card">
        <div class="tool-card__icon">${t.icon}</div>
        <h3 class="tool-card__title">${t.title}</h3>
        <p class="tool-card__desc">${t.desc}</p>
        <a href="#contact" class="tool-card__btn">${t.btn} →</a>
      </div>`;
    });
    toolHtml += '</div>';

    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#resources" class="sub-page__back">← Back to Resources</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Resources</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Free Tools & Templates</h1>
          <p class="section__subtitle" style="max-width:700px;">The same tools and templates our consulting team uses with clients — available to you for free. No email gate, no upsell. Just practical tools that help you build a better business.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          ${toolHtml}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-4);">
            <div class="feature-highlight"><div class="feature-highlight__number">6</div><div class="feature-highlight__label">Free Tools</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">10K+</div><div class="feature-highlight__label">Downloads</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">4.8★</div><div class="feature-highlight__label">Avg. Rating</div></div>
          </div>
        </div>
      </div>

      ${ctaBlock('Need Custom Tools?', 'We build custom dashboards, calculators, and business tools tailored to your specific operations.', 'Get Custom Tools')}
    </div>`;
  };

  pages['resources/grants'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#resources" class="sub-page__back">← Back to Resources</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Resources</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Grant Database</h1>
          <p class="section__subtitle" style="max-width:700px;">Free money exists — if you know where to look. Our curated database covers federal, state, healthcare, technology, and small business grants with eligibility requirements, deadlines, and application guides.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Grant Categories</h2>
          <div class="grant-category-grid">
            <div class="grant-cat-card">
              <div class="grant-cat-card__icon">🏛️</div>
              <h3 class="grant-cat-card__title">Federal Grants</h3>
              <p class="grant-cat-card__desc">SBIR, STTR, NSF, NIH, and DOE programs for research, innovation, and technology development.</p>
              <div class="grant-cat-card__amount">Up to $2M per award</div>
            </div>
            <div class="grant-cat-card">
              <div class="grant-cat-card__icon">🏠</div>
              <h3 class="grant-cat-card__title">State Grants (Kentucky)</h3>
              <p class="grant-cat-card__desc">KSTC, KY Innovation, and economic development incentives for businesses operating in Kentucky.</p>
              <div class="grant-cat-card__amount">$10K – $500K</div>
            </div>
            <div class="grant-cat-card">
              <div class="grant-cat-card__icon">🏥</div>
              <h3 class="grant-cat-card__title">Healthcare Grants</h3>
              <p class="grant-cat-card__desc">HRSA, CMS Innovation, and state health department grants for healthcare facilities and programs.</p>
              <div class="grant-cat-card__amount">$50K – $5M</div>
            </div>
            <div class="grant-cat-card">
              <div class="grant-cat-card__icon">💻</div>
              <h3 class="grant-cat-card__title">Technology Grants</h3>
              <p class="grant-cat-card__desc">AI research, cybersecurity, and digital transformation grants from federal and private sources.</p>
              <div class="grant-cat-card__amount">$25K – $1M</div>
            </div>
            <div class="grant-cat-card">
              <div class="grant-cat-card__icon">🏪</div>
              <h3 class="grant-cat-card__title">Small Business Grants</h3>
              <p class="grant-cat-card__desc">SBA programs, community development grants, and minority/veteran-owned business funding opportunities.</p>
              <div class="grant-cat-card__amount">$5K – $250K</div>
            </div>
            <div class="grant-cat-card">
              <div class="grant-cat-card__icon">🌿</div>
              <h3 class="grant-cat-card__title">Sustainability Grants</h3>
              <p class="grant-cat-card__desc">EPA, USDA, and state environmental programs for green initiatives, renewable energy, and clean technology.</p>
              <div class="grant-cat-card__amount">$10K – $2M</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">How to Apply</h2>
          ${processSteps([
            { title: 'Find Your Fit', desc: 'Browse our database by category, amount, and eligibility. We match you with grants aligned to your business type, stage, and location.' },
            { title: 'Check Eligibility', desc: 'Detailed eligibility requirements for each grant. We help you assess fit before investing time in an application.' },
            { title: 'Prepare Application', desc: 'Use our grant writing assistance to craft compelling narratives, budgets, and supporting documents. Templates and examples included.' },
            { title: 'Submit & Track', desc: 'We help you submit on time and track application status. If awarded, we assist with compliance and reporting requirements.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Need Help with Grant Applications?', 'Our team has a 40%+ grant approval rate. Let us help you write and submit your applications.', 'Get Grant Help')}
    </div>`;
  };

  pages['resources/ai-hub'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#resources" class="sub-page__back">← Back to Resources</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Resources</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">AI Learning Hub</h1>
          <p class="section__subtitle" style="max-width:700px;">Your free gateway to AI literacy. Structured learning tracks from beginner to advanced, curated courses, and practical resources — designed for business professionals who want to harness AI without becoming data scientists.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Learning Tracks</h2>
          <div class="track-grid">
            <div class="track-card">
              <span class="track-card__level track-card__level--beginner">Beginner</span>
              <h3 class="track-card__title">AI Foundations</h3>
              <ul class="track-card__topics">
                <li>What is AI? (Machine Learning, Deep Learning, NLP)</li>
                <li>How ChatGPT & LLMs Actually Work</li>
                <li>AI Tools for Business: A Practical Overview</li>
                <li>Prompt Engineering 101</li>
                <li>Ethical AI: What Every Leader Should Know</li>
                <li>Your First AI Automation (Step-by-Step)</li>
              </ul>
            </div>
            <div class="track-card">
              <span class="track-card__level track-card__level--intermediate">Intermediate</span>
              <h3 class="track-card__title">AI for Business</h3>
              <ul class="track-card__topics">
                <li>Advanced Prompt Engineering & Chain-of-Thought</li>
                <li>AI-Powered Sales & Marketing Automation</li>
                <li>Building AI Chatbots for Customer Service</li>
                <li>Data Analysis with AI Tools</li>
                <li>AI Integration Strategy for Your Business</li>
                <li>Measuring AI ROI: Frameworks & Metrics</li>
              </ul>
            </div>
            <div class="track-card">
              <span class="track-card__level track-card__level--advanced">Advanced</span>
              <h3 class="track-card__title">AI Implementation</h3>
              <ul class="track-card__topics">
                <li>Fine-Tuning Models on Your Data</li>
                <li>RAG (Retrieval Augmented Generation) Systems</li>
                <li>Building Custom AI Agents</li>
                <li>Computer Vision for Business Applications</li>
                <li>AI Infrastructure & MLOps</li>
                <li>AI Governance & Compliance Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Free Resources</h2>
          ${featureCards([
            { icon: 'book-open', title: 'AI Glossary', desc: 'Plain-English definitions of every AI term you need to know. From "neural network" to "fine-tuning" — no jargon, just clarity.' },
            { icon: 'video', title: 'Tutorial Library', desc: 'Step-by-step video tutorials on using AI tools for writing, design, analytics, automation, and customer service. New videos weekly.' },
            { icon: 'file-text', title: 'Recommended Reading', desc: 'Curated list of the best books, articles, newsletters, and podcasts on AI for business professionals. Updated monthly.' },
            { icon: 'download', title: 'Prompt Library', desc: '500+ tested prompts organized by use case — sales, marketing, HR, operations, finance, and customer service. Copy, paste, and customize.' },
            { icon: 'users', title: 'Community Forum', desc: 'Connect with other business owners learning AI. Share experiences, ask questions, and discover new use cases from peers.' },
            { icon: 'calendar', title: 'Weekly Office Hours', desc: 'Free weekly Q&A sessions with our AI team. Bring your questions, challenges, and ideas — get expert guidance at no cost.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready for Structured AI Training?', 'Our paid programs offer hands-on, instructor-led training with certification. Explore our full catalog.', 'View Training Programs', '#/ai/education')}
    </div>`;
  };

  // -------------------------------------------------------
  // 6) INVEST & PARTNER
  // -------------------------------------------------------

  pages['invest/opportunities'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#invest" class="sub-page__back">← Back to Invest & Partner</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Invest & Partner</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Investment Opportunities</h1>
          <p class="section__subtitle" style="max-width:700px;">Join a portfolio of AI-powered businesses across healthcare, technology, and sustainability. Our structured investment offerings provide transparent terms, proven traction, and a clear path to returns.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Portfolio Companies</h2>
          ${featureCards([
            { icon: 'heart-pulse', title: 'Real PT & Wellness', desc: 'Multi-state healthcare platform offering physical therapy, aquatic therapy, HBOT, and regenerative medicine. Expanding to 5+ locations across Kentucky, Ohio, and Tennessee.' },
            { icon: 'cpu', title: 'SWIS TEK AI', desc: 'AI consulting and technology integration serving 200+ businesses. Recurring revenue from SaaS tools, managed services, and enterprise contracts across 3 countries.' },
            { icon: 'shield', title: 'Pure Defense', desc: 'Global distribution network for defense and wellness products. International partnerships in France and Switzerland with expanding European footprint.' },
            { icon: 'leaf', title: 'Real Eco', desc: 'Sustainability ventures including methane capture, renewable energy, and environmental compliance. ESG-aligned with government contract pipeline.' },
            { icon: 'eye', title: 'Real SmartScan', desc: 'AI-powered diagnostic platform using computer vision for medical imaging analysis. Patent-pending technology with pilot programs in 3 healthcare systems.' },
            { icon: 'droplet', title: 'iO2 Water', desc: 'Advanced water purification and oxygenation technology with IoT integration. B2B and B2C channels with recurring filter revenue model.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Investment Structure</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-4);">
            <div class="feature-highlight"><div class="feature-highlight__number">$25K</div><div class="feature-highlight__label">Minimum Investment</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">Equity</div><div class="feature-highlight__label">Investment Type</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">3-5 yr</div><div class="feature-highlight__label">Target Horizon</div></div>
            <div class="feature-highlight"><div class="feature-highlight__number">Quarterly</div><div class="feature-highlight__label">Reporting Cadence</div></div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Due Diligence Process</h2>
          ${processSteps([
            { title: 'Initial Inquiry', desc: 'Submit your interest and complete our accredited investor questionnaire. We respond within 48 hours with available opportunities.' },
            { title: 'Information Review', desc: 'Access our data room with financials, legal documents, market analysis, and growth projections. Full transparency on every metric.' },
            { title: 'Management Meeting', desc: 'Meet the founding team. Ask any question. Tour facilities. Understand the vision, the risks, and the opportunity firsthand.' },
            { title: 'Investment & Onboarding', desc: 'Legal documentation, wire transfer, and investor onboarding. Quarterly reports and annual investor meetings begin immediately.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Interested in Investing?', 'Submit your inquiry to receive our investment overview and schedule a confidential discussion.', 'Submit Investor Inquiry')}
    </div>`;
  };

  pages['invest/partners'] = function () {
    return `<div class="sub-page">
      <div class="container" style="padding-top:100px;">
        <a href="#invest" class="sub-page__back">← Back to Invest & Partner</a>
      </div>
      <div class="section" style="padding-top:var(--space-8);">
        <div class="container">
          <div class="section__eyebrow">Invest & Partner</div>
          <h1 class="section__title" style="font-size:var(--text-2xl);">Partner Program</h1>
          <p class="section__subtitle" style="max-width:700px;">Build revenue by connecting businesses to our services. Our partner program offers referral commissions, white-label reselling, co-venture opportunities, and international expansion partnerships.</p>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Partnership Tiers</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <div class="pricing-card__name">Referral Partner</div>
              <div class="pricing-card__price">10% Commission</div>
              <ul class="pricing-card__features">
                <li>Earn 10% on every referral that converts</li>
                <li>No minimum commitment</li>
                <li>Custom referral tracking link</li>
                <li>Monthly commission payouts</li>
                <li>Partner portal access</li>
                <li>Co-branded marketing materials</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Apply Now</a>
            </div>
            <div class="pricing-card pricing-card--featured">
              <div class="pricing-card__badge">High Value</div>
              <div class="pricing-card__name">Reseller Partner</div>
              <div class="pricing-card__price">White-Label</div>
              <ul class="pricing-card__features">
                <li>White-label our services under your brand</li>
                <li>Wholesale pricing (40-60% margin)</li>
                <li>Dedicated partner success manager</li>
                <li>Custom onboarding and training</li>
                <li>Priority support queue</li>
                <li>Quarterly business reviews</li>
              </ul>
              <a href="#contact" class="btn btn--primary">Apply Now</a>
            </div>
            <div class="pricing-card">
              <div class="pricing-card__name">Co-Venture Partner</div>
              <div class="pricing-card__price">Joint Venture</div>
              <ul class="pricing-card__features">
                <li>Co-develop new products or services</li>
                <li>Shared equity or revenue-share models</li>
                <li>Joint go-to-market strategy</li>
                <li>Combined resources and expertise</li>
                <li>Board-level collaboration</li>
                <li>International expansion focus</li>
              </ul>
              <a href="#contact" class="btn btn--secondary">Discuss Opportunity</a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">International Partnerships</h2>
          ${featureCards([
            { icon: 'globe', title: 'France', desc: 'Active partnership channels in technology consulting and healthcare services. French-language support and local market expertise available.' },
            { icon: 'globe', title: 'Switzerland', desc: 'Financial technology and wealth management partnerships. Swiss compliance expertise and EU market access through established networks.' },
            { icon: 'globe', title: 'Expanding Markets', desc: 'We\'re actively seeking partners in the UK, Germany, Canada, and Australia. If you have market presence and client relationships — let\'s talk.' }
          ])}
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h2 class="section__title" style="font-size:var(--text-lg);">Application Process</h2>
          ${processSteps([
            { title: 'Submit Application', desc: 'Tell us about your business, your client base, your market, and why you\'re interested in partnering. We review every application personally.' },
            { title: 'Discovery Call', desc: 'A 30-minute conversation to explore mutual fit, discuss revenue models, and align on expectations and goals.' },
            { title: 'Agreement & Onboarding', desc: 'Partner agreement execution, portal access, training, and co-marketing material creation. You\'re ready to start earning.' },
            { title: 'Ongoing Support', desc: 'Dedicated partner success manager, quarterly reviews, and continuous optimization of our partnership for maximum mutual benefit.' }
          ])}
        </div>
      </div>

      ${ctaBlock('Ready to Partner?', 'Apply to our partner program and start earning from your network and market expertise.', 'Apply to Partner')}
    </div>`;
  };

  // ============================================================
  // ROUTER
  // ============================================================

  const subPageEl = document.getElementById('sub-page-content');
  const mainContentEl = document.getElementById('main-content');

  function getRoute() {
    const hash = window.location.hash || '';
    if (hash.startsWith('#/')) {
      return hash.slice(2); // e.g. "services/websites"
    }
    return null;
  }

  function showSubPage(route) {
    const pageFn = pages[route];
    if (!pageFn) {
      showMain();
      return;
    }
    if (mainContentEl) mainContentEl.style.display = 'none';
    subPageEl.innerHTML = pageFn();
    subPageEl.style.display = 'block';
    window.scrollTo(0, 0);

    // Re-init Lucide icons for new content
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Re-observe fade-in elements
    const fadeEls = subPageEl.querySelectorAll('.fade-in');
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  function showMain() {
    subPageEl.style.display = 'none';
    subPageEl.innerHTML = '';
    if (mainContentEl) mainContentEl.style.display = '';
  }

  function handleRoute() {
    const route = getRoute();
    if (route) {
      showSubPage(route);
    } else {
      showMain();
    }
  }

  window.addEventListener('hashchange', handleRoute);

  // Run on load (in case user directly navigates to a sub-page)
  handleRoute();

})();
