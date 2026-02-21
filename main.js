// ===================== MODAL DATA & UTILITIES =====================

const modals = {
      afs: { title: '✈️ AFS Exchange Student — Japan 🇯🇵', content: `<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1.5rem;">Spent one full academic year (2022–2023) as an AFS exchange student in Japan, fully immersed in Japanese school culture, language, and community life.</p><div style="display:flex;flex-direction:column;gap:1rem;"><div style="padding:1rem;background:rgba(255,200,220,0.08);border-radius:12px;border:1px solid rgba(255,200,220,0.15);"><div style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:0.4rem;">🏫 Academic Integration</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.7;">Attended Japanese high school full-time · Studied all subjects in Japanese · Achieved academic standing among peers</div></div><div style="padding:1rem;background:rgba(255,200,220,0.08);border-radius:12px;border:1px solid rgba(255,200,220,0.15);"><div style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:0.4rem;">🎏 Community Volunteering</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.7;">Local parade participation · Teaching Thai language to Japanese children · Academic support camp for younger students</div></div><div style="padding:1rem;background:rgba(255,200,220,0.08);border-radius:12px;border:1px solid rgba(255,200,220,0.15);"><div style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:0.4rem;">🗣 Language Achievement</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.7;">Achieved conversational and academic fluency in Japanese during the year · Continued self-study post-exchange</div></div></div>` },
      music: { title: '🎵 Music', content: `<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1.5rem;">Multi-instrumentalist with training in both Western classical and Thai traditional music traditions.</p><div style="display:flex;flex-direction:column;gap:0.8rem;"><div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(201,184,245,0.08);border-radius:12px;border:1px solid rgba(201,184,245,0.15);"><div style="font-size:2rem;">🎹</div><div><div style="font-weight:700;font-family:'Syne',sans-serif;">Piano</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.5);">Classical training · [X] years · Grades / Exams</div></div></div><div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(201,184,245,0.08);border-radius:12px;border:1px solid rgba(201,184,245,0.15);"><div style="font-size:2rem;">🎻</div><div><div style="font-weight:700;font-family:'Syne',sans-serif;">Classical Instruments</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.5);">[Specify: violin, flute, etc.] · Ensemble participation</div></div></div><div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(245,230,180,0.08);border-radius:12px;border:1px solid rgba(245,220,150,0.15);"><div style="font-size:2rem;">🥁</div><div><div style="font-weight:700;font-family:'Syne',sans-serif;">Thai Traditional Instruments</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.5);">[Specify: Ranat, Saw, etc.] · Cultural performances</div></div></div></div>` },
      langs: { title: '🌍 Language Proficiencies', content: `<p style="color:rgba(255,255,255,0.6);line-height:1.8;margin-bottom:1.5rem;">Five languages acquired through immersive experiences, formal education, and passionate self-study.</p><div style="display:flex;flex-direction:column;gap:0.8rem;">${[['🇹🇭', 'Thai', 'Native', '100', 'Lingua Materna · All domains'], ['🇬🇧', 'English', 'IELTS 7.5', '90', 'Academic · Professional · IELTS Certified'], ['🇯🇵', 'Japanese', 'Fluent', '80', '1 year immersion in Japan · Near-native conversational'], ['🇨🇳', 'Chinese', 'Conversational', '55', 'Self-study · Social interaction level'], ['🇪🇸', 'Spanish', 'Intermediate', '50', 'Coursework + self-study']].map(([f, n, l, p, d]) => `<div style="padding:1rem;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.07);"><div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;"><span style="font-family:'Syne',sans-serif;font-weight:700;">${f} ${n}</span><span style="font-family:'Space Mono',monospace;font-size:0.72rem;color:var(--pp);">${l}</span></div><div style="height:4px;background:rgba(255,255,255,0.07);border-radius:4px;overflow:hidden;margin-bottom:0.5rem;"><div style="height:100%;width:${p}%;background:linear-gradient(90deg,var(--pp-dark),var(--pb));border-radius:4px;"></div></div><div style="font-size:0.75rem;color:rgba(255,255,255,0.4);">${d}</div></div>`).join('')}</div>` },
      cip: { title: '🎓 Code in Place — Stanford University', content: `<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Stanford's Code in Place is a globally limited-enrollment online Python programming course taught by Stanford faculty. Selected from thousands of applicants worldwide.</p><div style="margin-top:1.5rem;padding:1rem;background:rgba(220,50,50,0.08);border-radius:12px;border:1px solid rgba(220,50,50,0.15);"><div style="font-family:'Space Mono',monospace;font-size:0.72rem;color:var(--pp);letter-spacing:2px;margin-bottom:0.5rem;">SKILLS GAINED</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.7;">Python fundamentals · Problem solving · Functions & decomposition · Data structures · Interactive programs · Final project completion</div></div>` },
      cert_ielts: { title: '📋 IELTS Academic — Band 7.5', content: `<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1.5rem;">Achieved an overall IELTS Band 7.5 — "Good User" category — demonstrating operational command of English in complex situations.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">${['Listening', 'Reading', 'Writing', 'Speaking'].map(s => `<div style="padding:1rem;background:rgba(184,216,245,0.08);border-radius:12px;text-align:center;border:1px solid rgba(184,216,245,0.15);"><div style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;color:var(--pb-light);">X.X</div><div style="font-family:'Space Mono',monospace;font-size:0.68rem;color:rgba(255,255,255,0.4);margin-top:4px;">${s}</div></div>`).join('')}</div>` },
      volunteer: { title: '🤝 Volunteer Activities', content: `<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1.5rem;">Active in community service across religious, educational, and social domains — both in Thailand and during exchange in Japan.</p><div style="display:flex;flex-direction:column;gap:1rem;">${[['☸️', 'Buddhist Activities', 'Regular participant in temple ceremonies, merit-making events, and Buddhist community services'], ['📚', 'Academic Support Camp', 'Assisted younger students in academic preparation camps as a mentor/facilitator'], ['👶', 'Teaching Children', 'Volunteer teaching (art, language, activities) for elementary-age children'], ['🏫', 'School Activities', 'Active participation in school-organized volunteer events and student-led initiatives'], ['🌐', 'International Programs', 'Participated in university-level activities focused on international understanding'], ['🎏', 'Cultural Events', 'Represented Thai culture and participated in multicultural events during exchange year in Japan']].map(([i, t, d]) => `<div style="display:flex;gap:1rem;padding:1rem;background:rgba(184,216,245,0.05);border-radius:12px;border:1px solid rgba(184,216,245,0.1);"><div style="font-size:1.5rem;flex-shrink:0;">${i}</div><div><div style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:4px;">${t}</div><div style="font-size:0.8rem;color:rgba(255,255,255,0.5);line-height:1.6;">${d}</div></div></div>`).join('')}</div>` },

      cert_afs: { title: '✈️ AFS Exchange Certificate — Japan', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1.2rem;">1 full academic year in Japan — certified completion of AFS intercultural exchange program including academic study and community participation.</p><div style="display:flex;flex-direction:column;gap:1rem;"><div style="padding:1rem;background:rgba(255,200,220,0.08);border-radius:12px;border:1px solid rgba(255,200,220,0.15);"><div style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:4px;">🏫 Academic Year 2022–2023</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.7;">Japanese high school full-time · All subjects in Japanese · Graduated with peers</div></div><div style="padding:1rem;background:rgba(255,200,220,0.08);border-radius:12px;border:1px solid rgba(255,200,220,0.15);"><div style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:4px;">🤝 Community Activities</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.7;">Local parades · Teaching Thai to children · Academic support camp · University events</div></div></div>' },
      cert_coursera: { title: '💻 Python for Everybody — University of Michigan', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1rem;">Completed the Python for Everybody specialization on Coursera — covering data structures, web access, database use, and visualization.</p><div style="padding:1rem;background:rgba(155,127,232,0.08);border-radius:12px;border:1px solid rgba(155,127,232,0.2);"><div style="font-family:Space Mono,monospace;font-size:0.72rem;color:var(--pp);letter-spacing:2px;margin-bottom:0.5rem;">TOPICS COVERED</div><div style="font-size:0.82rem;color:rgba(255,255,255,0.6);line-height:1.8;">Python Basics · Data Structures · Networked Data · Databases · Visualization</div></div>' },
      cert_chula: { title: '🏛 Chulalongkorn University Mock Exam', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Participated in Chulalongkorn University entrance mock examinations — an academic benchmark for university admission preparation in Thailand.</p>' },
      intl: { title: '🌐 International Activities', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Participated in university-organized international activities promoting cross-cultural connections, global communication, and intercultural understanding.</p>' },
      art2: { title: '✏️ Traditional Sketching', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1rem;">Traditional pencil and ink sketches — figure studies, portrait work, and environment sketching in A3 sketchbooks.</p><div style="padding:1rem;background:rgba(184,216,245,0.06);border-radius:12px;border:1px solid rgba(184,216,245,0.15);"><div style="font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.8;">Pencil · Ink pen · Charcoal · A3/A4 Sketchbooks</div></div>' },
      art3: { title: '🧊 3D Modeling — Blender', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1rem;">3D interior scenes, environments, and character concepts created in Blender with detailed lighting and material setups.</p><div style="padding:1rem;background:rgba(201,184,245,0.06);border-radius:12px;border:1px solid rgba(201,184,245,0.15);"><div style="font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.8;">Blender Cycles · PBR Materials · Environment Art · Concept Renders</div></div>' },
      brand1: { title: '✦ Brand Identity & Logo Design', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Logo design, typography systems, and full brand identity packages for clients and personal projects. Includes color systems, icon sets, and social media kit assets.</p>' },
      '3d_obj': { title: '📦 Object Modeling', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Hard-surface and everyday object models built in Blender with realistic PBR materials and professional lighting setups.</p>' },
      '3d_char': { title: '👤 Character & Human Modeling', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Stylized and semi-realistic human character models in Blender — including rigging concepts and expressive pose tests.</p>' },
      '3d_int': { title: '🛋 Interior & Scene Design', content: '<p style="color:rgba(255,255,255,0.7);line-height:1.9;">Full interior environment scenes with detailed furniture, custom lighting rigs, and atmospheric rendering in Blender Cycles.</p>' },
      art1: { title: '🎨 Digital Illustration Portfolio', content: `<p style="color:rgba(255,255,255,0.7);line-height:1.9;margin-bottom:1rem;">A collection of digital artworks spanning character design, original illustration series, and commissioned work.</p><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">${['Character Design', 'Portrait Series', 'Original OC', 'Fan Art', 'Scenery', 'Abstract'].map(t => `<div style="padding:2rem 1rem;background:linear-gradient(135deg,rgba(201,184,245,0.08),rgba(184,216,245,0.05));border-radius:12px;text-align:center;border:1px solid rgba(201,184,245,0.15);"><div style="font-size:1.5rem;margin-bottom:0.5rem;">🖼</div><div style="font-size:0.78rem;font-family:'Space Mono',monospace;letter-spacing:1px;">${t}</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.3);margin-top:4px;">Add your images here</div></div>`).join('')}</div>` }
    };

    modals.cert_cip = modals.cip;

    function openModal(key) {
      const data = modals[key];
      if (!data) return;
      document.getElementById('modal-content').innerHTML = `<h2 style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;margin-bottom:1.5rem;padding-right:2rem;">${data.title}</h2>${data.content}`;
      document.getElementById('modal').classList.add('open');
    }
    document.getElementById('modal-close').onclick = () => document.getElementById('modal').classList.remove('open');
    document.getElementById('modal').onclick = (e) => { if (e.target === document.getElementById('modal')) document.getElementById('modal').classList.remove('open'); };

    function toggleExpand(header) {
      header.classList.toggle('open');
      header.nextElementSibling.classList.toggle('open');
    }
    function filterArt(cat, btn) {
      document.querySelectorAll('.art-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.art-cell').forEach(cell => {
        const show = cat === 'all' || cell.dataset.cat === cat;
        cell.style.opacity = show ? '1' : '0.15';
        cell.style.transform = show ? '' : 'scale(0.96)';
        cell.style.transition = 'all 0.4s cubic-bezier(0.16,1,0.3,1)';
      });
    }


// ===================== MAIN PORTFOLIO SCRIPTS =====================

// ===== LOADING =====
    window.addEventListener('load', () => {
      setTimeout(() => document.getElementById('loading').classList.add('hidden'), 1800);
    });

    // ===== CINEMATIC INTRO: DIAGONAL STARFALL =====
    const introCanvas = document.getElementById('intro-star-canvas');
    const ictx = introCanvas.getContext('2d');
    function resizeIntroCanvas() {
      introCanvas.width = window.innerWidth;
      introCanvas.height = window.innerHeight;
    }
    resizeIntroCanvas();
    window.addEventListener('resize', resizeIntroCanvas);

    // Talent & identity keywords — applicant's random talents mixed with theme words
    const TALENT_POOL = [
      'Python', 'JavaScript', 'Blender', 'Godot', 'Unity',
      'ภาษาไทย', '日本語', '中文', 'Español',
      'Digital Art', '3D Modeling', 'Brand Design', 'Game Dev',
      'AFS Japan', 'IELTS 7.5', 'Stanford', 'Full-Stack',
      'Piano', 'Traditional Music', 'Volunteer',
      'Entrepreneurship', 'Commissions', 'Cultural Exchange',
      'Technology', 'Art', 'Diversity', 'Creativity', 'Innovation',
      'Open Source', 'Cybersecurity', 'Firebase', 'MongoDB',
      '東京', 'Culture', 'Exchange Student', 'Self-Taught',
    ];
    const COLORS_HEX = [
      [201, 184, 245], [184, 216, 245], [245, 200, 220], [200, 245, 224],
      [245, 230, 200], [232, 213, 255], [213, 245, 232], [245, 213, 232],
      [255, 220, 180], [180, 255, 220], [220, 180, 255],
    ];

    // Diagonal angle — ~30° from vertical
    const DIAG_ANGLE = (Math.PI / 180) * 28; // 28 degrees

    function makeStarVelocity(speed) {
      return {
        vx: Math.sin(DIAG_ANGLE) * speed,
        vy: Math.cos(DIAG_ANGLE) * speed,
      };
    }

    // Build star pool — mix of pure stars and talent-label stars
    const stars = [];
    const TOTAL_STARS = 260;
    for (let i = 0; i < TOTAL_STARS; i++) {
      const isTalent = i % 5 === 0; // ~20% are talent labels
      const speed = Math.random() * 2.8 + 0.6;
      const { vx, vy } = makeStarVelocity(speed);
      // Spread start positions across entire canvas + overshoot top-left
      const startX = Math.random() * (introCanvas.width + introCanvas.height * Math.tan(DIAG_ANGLE))
        - introCanvas.height * Math.tan(DIAG_ANGLE);
      const startY = Math.random() * introCanvas.height - introCanvas.height;
      const colorArr = COLORS_HEX[Math.floor(Math.random() * COLORS_HEX.length)];
      stars.push({
        x: startX,
        y: startY,
        vx, vy,
        speed,
        size: isTalent ? 1 : Math.random() * 2.4 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.045 + 0.008,
        colorArr,                // [r,g,b]
        trailLen: isTalent ? 0 : (Math.random() > 0.65 ? Math.random() * 40 + 12 : 0),
        isTalent,
        label: isTalent ? TALENT_POOL[Math.floor(Math.random() * TALENT_POOL.length)] : null,
        labelSize: Math.floor(Math.random() * 9 + 7),
        labelLife: 0,
        labelMaxLife: Math.random() * 200 + 80,
        labelActive: isTalent,
        // slight sinusoidal wobble
        wobble: Math.random() * Math.PI * 2,
        wobbleAmp: Math.random() * 0.35,
        wobbleFreq: Math.random() * 0.03 + 0.01,
        // brightness wave
        brightness: Math.random(),
      });
    }

    // Simple smooth noise for subtle background wave
    let waveT = 0;
    function drawBackgroundWave() {
      waveT += 0.004;
      const W = introCanvas.width, H = introCanvas.height;
      for (let x = 0; x < W; x += 40) {
        const y = H * 0.5 + Math.sin(x * 0.008 + waveT) * 60 + Math.cos(x * 0.015 + waveT * 0.7) * 30;
        const alpha = 0.012 + Math.abs(Math.sin(waveT + x * 0.01)) * 0.018;
        ictx.beginPath();
        ictx.arc(x, y, 1.5, 0, Math.PI * 2);
        ictx.fillStyle = `rgba(201,184,245,${alpha})`;
        ictx.fill();
      }
    }

    let introAnimRunning = true;

    function drawIntroStars() {
      if (!introAnimRunning) return;
      // Slight trail fade instead of full clear — gives motion blur feel
      ictx.fillStyle = 'rgba(0,0,0,0.18)';
      ictx.fillRect(0, 0, introCanvas.width, introCanvas.height);

      drawBackgroundWave();

      const W = introCanvas.width, H = introCanvas.height;

      for (const s of stars) {
        // Move diagonally
        s.wobble += s.wobbleFreq;
        const perp = Math.sin(s.wobble) * s.wobbleAmp; // perpendicular wobble
        s.x += s.vx + Math.cos(DIAG_ANGLE + Math.PI / 2) * perp;
        s.y += s.vy + Math.sin(DIAG_ANGLE + Math.PI / 2) * perp;

        s.twinkle += s.twinkleSpeed;
        const alpha = (Math.sin(s.twinkle) * 0.35 + 0.65) * 0.85;
        const [r, g, b] = s.colorArr;

        if (!s.isTalent) {
          // Draw trail (along diagonal)
          if (s.trailLen > 0) {
            const tx = s.x - Math.sin(DIAG_ANGLE) * s.trailLen;
            const ty = s.y - Math.cos(DIAG_ANGLE) * s.trailLen;
            const grad = ictx.createLinearGradient(tx, ty, s.x, s.y);
            grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
            grad.addColorStop(1, `rgba(${r},${g},${b},${alpha * 0.55})`);
            ictx.beginPath();
            ictx.moveTo(tx, ty);
            ictx.lineTo(s.x, s.y);
            ictx.strokeStyle = grad;
            ictx.lineWidth = s.size * 0.6;
            ictx.stroke();
          }
          // Star dot
          ictx.beginPath();
          ictx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ictx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ictx.fill();
          // Occasional cross sparkle
          if (s.size > 1.8 && Math.sin(s.twinkle * 3) > 0.85) {
            const sp = s.size * 3;
            ictx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.4})`;
            ictx.lineWidth = 0.5;
            ictx.beginPath(); ictx.moveTo(s.x - sp, s.y); ictx.lineTo(s.x + sp, s.y); ictx.stroke();
            ictx.beginPath(); ictx.moveTo(s.x, s.y - sp); ictx.lineTo(s.x, s.y + sp); ictx.stroke();
          }
        } else {
          // Talent label — small dot + text
          s.labelLife++;
          const phase = s.labelLife / s.labelMaxLife;
          const kA = phase < 0.15 ? phase / 0.15 : phase > 0.75 ? (1 - phase) / 0.25 : 1;

          ictx.beginPath();
          ictx.arc(s.x, s.y, 2, 0, Math.PI * 2);
          ictx.fillStyle = `rgba(${r},${g},${b},${kA * 0.8})`;
          ictx.fill();

          // Small glow halo
          const glow = ictx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8);
          glow.addColorStop(0, `rgba(${r},${g},${b},${kA * 0.3})`);
          glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ictx.beginPath();
          ictx.arc(s.x, s.y, 8, 0, Math.PI * 2);
          ictx.fillStyle = glow;
          ictx.fill();

          // Text offset perpendicular to travel direction
          const tx = s.x + Math.cos(DIAG_ANGLE - Math.PI / 2) * 10;
          const ty = s.y + Math.sin(DIAG_ANGLE - Math.PI / 2) * 10;
          ictx.save();
          ictx.translate(tx, ty);
          // Slight diagonal tilt matching fall angle
          ictx.rotate(DIAG_ANGLE - Math.PI / 2 + 0.15);
          ictx.font = `600 ${s.labelSize}px 'Syne', sans-serif`;
          ictx.fillStyle = `rgba(${r},${g},${b},${kA * 0.75})`;
          ictx.fillText(s.label, 0, 0);
          ictx.restore();

          if (s.labelLife >= s.labelMaxLife) {
            s.labelLife = 0;
            s.label = TALENT_POOL[Math.floor(Math.random() * TALENT_POOL.length)];
            s.labelMaxLife = Math.random() * 200 + 80;
          }
        }

        // Reset when out of screen (bottom-right or right edge)
        const margin = 80;
        if (s.x > W + margin || s.y > H + margin) {
          // Re-enter from top or left edge
          if (Math.random() > 0.5) {
            // From top
            s.x = Math.random() * (W + introCanvas.height * Math.tan(DIAG_ANGLE)) - introCanvas.height * Math.tan(DIAG_ANGLE);
            s.y = -margin;
          } else {
            // From left
            s.x = -margin;
            s.y = Math.random() * H;
          }
          if (s.isTalent) {
            s.label = TALENT_POOL[Math.floor(Math.random() * TALENT_POOL.length)];
            s.labelLife = 0;
          }
        }
      }
      requestAnimationFrame(drawIntroStars);
    }
    drawIntroStars();

    // ===== WORD MORPH SEQUENCE =====
    const words = Array.from(document.querySelectorAll('.morph-word')).filter(el => el.id !== 'portfolio-reveal-text');
    const portfolioText = document.getElementById('portfolio-reveal-text');
    const enterBtn = document.getElementById('enter-btn');
    const introSubText = document.getElementById('intro-sub');
    let currentWord = 0;
    let morphDone = false;

    // Make sure only word[0] is active at start
    words.forEach((w, i) => { w.classList.remove('active', 'exit'); });

    function showWord(idx) {
      words.forEach(w => w.classList.remove('active', 'exit'));
      if (idx < words.length) words[idx].classList.add('active');
    }

    function nextWord() {
      if (morphDone) return;
      words[currentWord].classList.add('exit');
      setTimeout(() => words[currentWord].classList.remove('active', 'exit'), 700);
      currentWord++;
      if (currentWord >= words.length) {
        morphDone = true;
        setTimeout(() => {
          portfolioText.classList.add('show');
          setTimeout(() => {
            introSubText.classList.add('show');
            setTimeout(() => {
              document.getElementById('enter-btn-wrapper').style.opacity = '1';
              enterBtn.classList.add('show');
            }, 450);
          }, 500);
        }, 200);
        return;
      }
      words[currentWord].classList.add('active');
      setTimeout(nextWord, 950);
    }

    // Start
    setTimeout(() => {
      showWord(0);
      setTimeout(nextWord, 950);
    }, 700);

    // ===== ENTER BUTTON =====
    enterBtn.addEventListener('click', () => {
      // Shockwave
      const shockRing = document.getElementById('shockwave-ring');
      shockRing.classList.add('fire');
      setTimeout(() => shockRing.classList.remove('fire'), 900);

      // Fade intro
      document.getElementById('cinematic-intro').classList.add('fade-out');
      introAnimRunning = false;

      setTimeout(() => {
        document.getElementById('cinematic-intro').style.display = 'none';
        const portfolio = document.getElementById('portfolio');
        portfolio.classList.add('visible');
        document.getElementById('nav').classList.add('visible');
        document.getElementById('scroll-indicator').classList.add('visible');
      }, 1000);
    });

    // ===== CUSTOM CURSOR =====
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });
    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .tech-card, .art-cell, .bento-card, .cert-card, .model-card').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'var(--pb)'; });
      el.addEventListener('mouseleave', () => { ring.style.width = '40px'; ring.style.height = '40px'; ring.style.borderColor = 'var(--pp)'; });
    });

    // ===== SCROLL PROGRESS =====
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const totalH = document.body.scrollHeight - window.innerHeight;
      document.getElementById('scroll-progress').style.width = (scrollY / totalH * 100) + '%';

      // Scroll dots
      const sections = ['profile', 'tech', 'art', 'entrepreneur', 'activities', 'certs'];
      const dots = document.querySelectorAll('.scroll-dot');
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          dots.forEach(d => d.classList.remove('active'));
          if (dots[i]) dots[i].classList.add('active');
        }
      });
    });

    document.querySelectorAll('.scroll-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const targets = ['profile', 'tech', 'art', 'entrepreneur', 'activities', 'certs'];
        const el = document.getElementById(targets[i]);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // ===== SCROLL REVEAL =====
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.skill-bar-fill, .perf-bar-fill').forEach(bar => {
            setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 200);
          });
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-flip, .reveal-blur, .stagger-children').forEach(el => observer.observe(el));

    // ===== SPOTLIGHT on tech cards =====
    document.querySelectorAll('.tech-card').forEach(card => {
      const spotlight = card.querySelector('.tech-card-spotlight');
      if (!spotlight) return;
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        spotlight.style.left = (e.clientX - rect.left) + 'px';
        spotlight.style.top = (e.clientY - rect.top) + 'px';
      });
    });

    // ===== RIPPLE on click =====
    document.querySelectorAll('.ripple-container').forEach(el => {
      el.addEventListener('click', e => {
        const rect = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;`;
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });

    // ===== 3D TILT on bento/cert cards =====
    document.querySelectorAll('.bento-card, .tech-card, .cert-card, .model-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
        card.style.transform = '';
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.15s ease';
      });
    });

    // ===== MAGNETIC BUTTONS =====
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
        el.style.transform = '';
      });
      el.addEventListener('mouseenter', () => { el.style.transition = 'transform 0.1s'; });
    });

    // ===== PARALLAX on scroll =====
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      document.querySelectorAll('.parallax-slow').forEach(el => {
        el.style.transform = `translateY(${sy * 0.08}px)`;
      });
      document.querySelectorAll('.parallax-med').forEach(el => {
        el.style.transform = `translateY(${sy * 0.15}px)`;
      });
    });

    // ===== PARTICLE CANVAS =====
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.maxLife = Math.random() * 200 + 100;
        this.age = 0;
        this.size = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? '201,184,245' : '184,216,245';
      }
      update() {
        this.x += this.vx; this.y += this.vy; this.age++;
        if (this.age > this.maxLife) this.reset();
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        const alpha = Math.sin((this.age / this.maxLife) * Math.PI) * 0.4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${alpha})`;
        ctx.fill();
      }
    }
    for (let i = 0; i < 80; i++) particles.push(new Particle());

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201,184,245,${(1 - dist / 100) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    function animParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animParticles);
    }
    animParticles();

    // ===== AUTO-HIGHLIGHT tech cards =====
    const techCards = document.querySelectorAll('.tech-card');
    let highlightIdx = 0;
    setInterval(() => {
      techCards.forEach(c => c.style.boxShadow = '');
      if (techCards[highlightIdx]) techCards[highlightIdx].style.boxShadow = '0 0 35px rgba(201,184,245,0.18)';
      highlightIdx = (highlightIdx + 1) % techCards.length;
    }, 2500);

    // ===== MARQUEE speed variation =====
    const marqueeInner = document.querySelector('.marquee-inner');
    setInterval(() => {
      const speed = (Math.random() * 15 + 15).toFixed(0);
      if (marqueeInner) marqueeInner.style.animationDuration = speed + 's';
    }, 10000);

    // ===== GLITCH random trigger =====
    setInterval(() => {
      const glitch = document.querySelector('.glitch');
      if (glitch) { glitch.style.animation = 'none'; void glitch.offsetHeight; glitch.style.animation = ''; }
    }, 5000);

    // ===== SCROLL-TRIGGERED TEXT SCRAMBLE on section tags =====
    // Uses data-label attribute to avoid clobbering HTML children
    const scrambleChars = '!@#$%^&*<>?/|{}アイウエオカキクケコ✦✧★☆▲△▷▽◇◆';

    function scrambleText(el, finalText, duration = 650) {
      let frame = 0;
      const totalFrames = Math.floor(duration / 16);
      // Preserve the ::before line via a wrapper span
      // Only scramble the text content, not child elements
      const textSpan = el.querySelector('[data-scramble-text]') || el;
      const interval = setInterval(() => {
        let output = '';
        for (let i = 0; i < finalText.length; i++) {
          output += i < (frame / totalFrames) * finalText.length
            ? finalText[i]
            : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
        textSpan.dataset.scrambleContent = output;
        // Re-render only the text node
        if (textSpan === el) {
          // Find and update last text node
          for (let node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
              node.textContent = output;
              break;
            }
          }
        }
        frame++;
        if (frame >= totalFrames) {
          for (let node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
              node.textContent = finalText;
              break;
            }
          }
          clearInterval(interval);
        }
      }, 16);
    }

    // Store original text from TEXT_NODE only before any mutation
    document.querySelectorAll('.section-tag').forEach(el => {
      // Grab the plain text content (not icon chars from pseudo-elements)
      let plainText = '';
      for (let node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) plainText += node.textContent;
      }
      el.dataset.originalText = plainText.trim();
    });

    const scrambleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.scrambled) {
          entry.target.dataset.scrambled = 'true';
          const original = entry.target.dataset.originalText;
          if (original) scrambleText(entry.target, original, 700);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.section-tag').forEach(el => scrambleObserver.observe(el));

    // ===== SCROLL-TRIGGERED number counter (fixed) =====
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          if (!target) return;
          // Save suffix from original text
          const suffix = el.textContent.replace(/\d+/g, '').trim();
          let current = 0;
          const duration = 1400;
          const stepTime = duration / target;
          const timer = setInterval(() => {
            current++;
            el.textContent = current + (suffix || '+');
            if (current >= target) clearInterval(timer);
          }, stepTime);
        }
      });
    }, { threshold: 0.8 });
    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    // ===== CURSOR TRAIL =====
    const trailDots = [];
    const MAX_TRAIL = 10;
    const trailPositions = Array.from({ length: MAX_TRAIL }, () => ({ x: -100, y: -100 }));
    let trailMouseX = -100, trailMouseY = -100;
    for (let i = 0; i < MAX_TRAIL; i++) {
      const dot = document.createElement('div');
      const sz = Math.max(1.5, 5 - i * 0.35);
      dot.style.cssText = `position:fixed;width:${sz}px;height:${sz}px;border-radius:50%;background:var(--pp);pointer-events:none;z-index:9990;opacity:${Math.max(0.05, 0.45 - i * 0.04)};transform:translate(-50%,-50%);will-change:left,top;`;
      document.body.appendChild(dot);
      trailDots.push(dot);
    }
    document.addEventListener('mousemove', e => {
      trailMouseX = e.clientX; trailMouseY = e.clientY;
    });
    // Animate trail with spring interpolation
    (function animTrail() {
      trailPositions[0].x += (trailMouseX - trailPositions[0].x) * 0.45;
      trailPositions[0].y += (trailMouseY - trailPositions[0].y) * 0.45;
      for (let i = 1; i < MAX_TRAIL; i++) {
        trailPositions[i].x += (trailPositions[i - 1].x - trailPositions[i].x) * 0.35;
        trailPositions[i].y += (trailPositions[i - 1].y - trailPositions[i].y) * 0.35;
      }
      trailDots.forEach((dot, i) => {
        dot.style.left = trailPositions[i].x + 'px';
        dot.style.top = trailPositions[i].y + 'px';
      });
      requestAnimationFrame(animTrail);
    })();

    // ===== SCROLL-VELOCITY CURSOR STRETCH =====
    let lastScrollY = 0, scrollVel = 0;
    window.addEventListener('scroll', () => {
      scrollVel = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      const stretch = Math.min(Math.abs(scrollVel) * 0.08, 0.6);
      const dir = scrollVel > 0 ? 1 : -1;
      document.getElementById('cursor').style.transform =
        `translate(-50%,-50%) scaleY(${1 + stretch}) scaleX(${1 - stretch * 0.3}) translateY(${dir * stretch * 4}px)`;
      clearTimeout(window._scrollStretchReset);
      window._scrollStretchReset = setTimeout(() => {
        document.getElementById('cursor').style.transform = 'translate(-50%,-50%)';
      }, 150);
    });

    // ===== IDLE SPARKLE BURSTS (random position every few seconds) =====
    function spawnSparkle() {
      const x = 80 + Math.random() * (window.innerWidth - 160);
      const y = 80 + Math.random() * (window.innerHeight - 160);
      const count = Math.floor(Math.random() * 6 + 4);
      const colors = ['#c9b8f5', '#b8d8f5', '#f5c8e0', '#c8f5e0'];
      for (let i = 0; i < count; i++) {
        const spark = document.createElement('div');
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
        const dist = Math.random() * 40 + 20;
        const sz = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        spark.style.cssText = `
      position:fixed;width:${sz}px;height:${sz}px;
      border-radius:50%;background:${color};
      left:${x}px;top:${y}px;
      pointer-events:none;z-index:9;
      transform:translate(-50%,-50%);
      animation:sparkFly 0.8s cubic-bezier(0,0,0.3,1) forwards;
      --dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;
    `;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      }
    }
    // Inject sparkFly keyframe
    const sparkStyle = document.createElement('style');
    sparkStyle.textContent = `
  @keyframes sparkFly {
    0%  { opacity:1; transform:translate(-50%,-50%) translate(0,0) scale(1); }
    100%{ opacity:0; transform:translate(-50%,-50%) translate(var(--dx),var(--dy)) scale(0); }
  }
`;
    document.head.appendChild(sparkStyle);
    // Fire sparks on idle intervals (when page is not intro)
    function scheduleSparkle() {
      if (document.getElementById('portfolio').classList.contains('visible')) {
        spawnSparkle();
      }
      setTimeout(scheduleSparkle, Math.random() * 4000 + 2500);
    }
    setTimeout(scheduleSparkle, 3000);

    // ===== FLOATING TAGS ELASTIC SPRING =====
    document.querySelectorAll('.floating-tag').forEach(tag => {
      let ox = 0, oy = 0, vx = 0, vy = 0;
      tag.addEventListener('mouseenter', () => {
        vx = (Math.random() - 0.5) * 6;
        vy = (Math.random() - 0.5) * 6;
      });
      (function springLoop() {
        const stiffness = 0.12, damping = 0.72;
        vx += (-ox - ox * stiffness) * stiffness;
        vy += (-oy - oy * stiffness) * stiffness;
        vx *= damping; vy *= damping;
        ox += vx; oy += vy;
        if (Math.abs(ox) > 0.01 || Math.abs(oy) > 0.01) {
          tag.style.marginLeft = ox + 'px';
          tag.style.marginTop = oy + 'px';
        }
        requestAnimationFrame(springLoop);
      })();
    });

    // ===== SECTION BACKGROUND PARALLAX BLOBS =====
    function addBlob(section, color, size, top, left, opacity, duration) {
      const blob = document.createElement('div');
      blob.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:${color};border-radius:50%;filter:blur(80px);opacity:${opacity};top:${top}%;left:${left}%;pointer-events:none;z-index:0;animation:blobFloat${Math.floor(Math.random() * 3)} ${duration}s ease-in-out infinite alternate;`;
      section.style.position = 'relative';
      section.insertBefore(blob, section.firstChild);
    }

    // blobFloat keyframes are defined in styles.css

    const sectionBlobs = [
      { id: 'profile', blobs: [['#c9b8f5', 400, 5, 5, 0.07, 12], ['#b8d8f5', 300, 70, 80, 0.05, 15]] },
      { id: 'tech', blobs: [['#9b7fe8', 350, 15, 70, 0.06, 10], ['#6aaed6', 250, 60, 10, 0.05, 14]] },
      { id: 'art', blobs: [['#f5c8e0', 300, 10, 20, 0.06, 11], ['#c9b8f5', 250, 65, 75, 0.05, 13]] },
      { id: 'entrepreneur', blobs: [['#9b7fe8', 350, 20, 5, 0.06, 9], ['#b8d8f5', 280, 60, 70, 0.05, 16]] },
      { id: 'activities', blobs: [['#c8f5e0', 300, 5, 60, 0.06, 12], ['#f5c8e0', 250, 70, 20, 0.05, 14]] },
      { id: 'certs', blobs: [['#c9b8f5', 350, 10, 50, 0.07, 11], ['#6aaed6', 200, 65, 5, 0.05, 13]] },
    ];
    sectionBlobs.forEach(({ id, blobs }) => {
      const el = document.getElementById(id);
          if (el) blobs.forEach(([color, size, top, left, opacity, duration]) => {
        addBlob(el, color, size, top, left, opacity, duration);
      });
    });
