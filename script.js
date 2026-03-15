document.addEventListener('DOMContentLoaded', () => {
    // Content Data for the Book
    const pagesData = [
        {
            isCover: true,
            title: "Upanishads",
            subtitle: "Ancient Wisdom for Modern Enterprise",
            author: "A Conceptual Guide"
        },
        {
            html: `
                <div class="content">
                    <h1>Introduction</h1>
                    <p class="drop-cap">The modern business world is fast-paced, complex, and often overwhelming. Leaders face unprecedented challenges in managing teams, adapting to change, and finding sustainable success.</p>
                    <p>Yet, the solutions to these modern dilemmas often lie in ancient wisdom. The <b>Upanishads</b>, profound philosophical texts from ancient India, offer timeless insights into human nature, reality, and action.</p>
                    <p>This interactive guide bridges the gap between these mystical verses and actionable modern enterprise strategies.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>The Principal Texts</h1>
                    <h2>The Mukhya Upanishads</h2>
                    <p>Out of over 200 texts, there are 10 core "Principal" (Mukhya) Upanishads. These texts form the philosophical foundation of Vedanta.</p>
                    <p>They are not books of dogma or rules. Instead, they are profound dialogues and inquiries into the nature of existence: Who am I? What is this universe? How should I act?</p>
                    <p>By studying them, modern professionals can shift from superficial success metrics to deep, enduring, and purposeful value creation.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Brahman</h1>
                    <h2>The Ultimate Vision</h2>
                    <p><i>Brahman</i> is the supreme, infinite, and ultimate reality. It is the invisible fabric that connects the entire universe.</p>
                    <p><b>Business Application:</b> In the corporate world, Brahman is akin to your "Master Vision" or "North Star." A company operating without a core vision is fragmented and chaotic. When every department acts in alignment with a singular, unifying, overarching purpose, the enterprise achieves harmonic, sustainable growth.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Atman</h1>
                    <h2>Authentic Leadership</h2>
                    <p>The Upanishads teach that the <i>Atman</i>—the true, eternal inner self—is distinct from the temporary ego or physical identity.</p>
                    <p><b>Business Application:</b> Modern leadership demands immense authenticity. A leader who operates from a place of deep self-awareness (Atman) rather than mere ego leads with empathy, clarity, and unwavering confidence.</p>
                    <p>Such leaders foster psychological safety; they value employees for who they are, inspiring intense loyalty and organic innovation.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Tat Tvam Asi</h1>
                    <h2>Non-Duality in Teams</h2>
                    <p><i>"Tat Tvam Asi"</i> translates to "Thou Art That." It is the profound realization that the individual self (Atman) and the ultimate reality (Brahman) are one and the same.</p>
                    <p><b>Business Application:</b> This cuts through corporate silos. When a marketing team realizes "Tat Tvam Asi" regarding the engineering team, extreme collaboration occurs. It eliminates the "us vs. them" workplace toxicity, fostering a unified culture where every member views others' success as their own.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Karma</h1>
                    <h2>Agile Execution</h2>
                    <p>Karma simply means "action." The scriptures emphasize pure action dedicated to the process, detached from the paralyzing anxiety over the final fruit/result.</p>
                    <p><b>Business Application:</b> This ancient mindset perfectly mirrors the modern <b>Agile Methodology</b>. Teams engage in dedicated sprints of action, focusing entirely on the quality of the immediate work rather than fearing a massive final launch. We execute, we learn, and we iterate gracefully.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Dharma</h1>
                    <h2>Corporate Ethics & Duty</h2>
                    <p><i>Dharma</i> signifies duty, righteousness, and the natural order of things. It is the moral law that sustains the universe and society.</p>
                    <p><b>Business Application:</b> Long-term profitability is impossible without Dharma. In modern terms, this is uncompromising Corporate Social Responsibility (CSR) and business ethics. An enterprise must sustain its community and environment because the health of the enterprise is directly dictated by the health of the ecosystem it resides in.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Maya</h1>
                    <h2>Market Volatility</h2>
                    <p><i>Maya</i> is the illusion of the material, ever-changing world. It is not that the world doesn't exist, but that its constant shifting hides the deeper, permanent truth.</p>
                    <p><b>Business Application:</b> Markets fluctuate. Trends die. Recessions happen. This volatility is the corporate Maya. An enterprise anchored in deep principles won't panic when surface metrics dip. Wise leaders look past the illusion of short-term noise to chart long-term, structural strategy.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Prana</h1>
                    <h2>Employee Well-being</h2>
                    <p><i>Prana</i> is the vital life force or cosmic energy that flows through all living things, often connected to the breath.</p>
                    <p><b>Business Application:</b> Burnout destroys companies. A company's Prana is the collective energy, mental health, and motivation of its workforce. Mandating rest, encouraging work-life balance, and investing in continuous employee education are not 'costs'—they are essential practices for maintaining the enterprise's life force.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>The Koshas</h1>
                    <h2>Holistic Management</h2>
                    <p>The Taittiriya Upanishad describes the personality as five sheaths (Koshas), moving from the physical body deep into the core of bliss.</p>
                    <p><b>Business Application:</b> Management cannot be superficial. You must manage the physical environment (Anna-maya), the energetic motivation (Prana-maya), the intellectual development (Vijnana-maya), and ultimately foster a workplace where people find genuine joy and meaning in their craft (Ananda-maya).</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Dhyana</h1>
                    <h2>Strategic Focus</h2>
                    <p><i>Dhyana</i> is profound, unbroken meditation and concentration.</p>
                    <p><b>Business Application:</b> In an era of infinite digital distractions, the ability to engage in "Deep Work" is a rare competitive advantage. Corporate Dhyana means protecting your team's time. It means fewer useless meetings, asynchronous communication, and creating dedicated spaces for deep, focused problem-solving.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content">
                    <h1>Vairagya</h1>
                    <h2>Graceful Pivoting</h2>
                    <p><i>Vairagya</i> translates to detachment. It is the ability to engage fully with the world without being emotionally chained to it.</p>
                    <p><b>Business Application:</b> The sunk-cost fallacy ruins businesses. Leaders must practice Vairagya to kill failing projects, even if they spent millions on them. Detachment allows you to pivot your strategy purely based on data and reality, completely devoid of pride or ego.</p>
                </div>
            `
        },
        {
            html: `
                <div class="content" style="text-align: center; margin-top: 50px;">
                    <h1 style="border: none;">The End</h1>
                    <p style="text-align: center; font-style: italic;">"Arise, awake, and stop not till the goal is reached."<br><br>- Katha Upanishad</p>
                    <div style="margin-top: 40px; color: var(--accent-gold);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"/></svg>
                    </div>
                </div>
            `
        }
    ];

    const book = document.getElementById('book');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const zoomBtn = document.getElementById('zoom-btn');
    const logoBtn = document.querySelector('.logo');
    const currentPageSpan = document.getElementById('current-page-num');
    const totalPageSpan = document.getElementById('total-page-num');
    const scene = document.getElementById('scene');
    
    // Zoom Logic Elements & Functions
    const zoomBackdrop = document.getElementById('zoom-backdrop');
    const zoomContainer = document.getElementById('zoom-container');
    const zoomContent = document.getElementById('zoom-content');
    const closeZoomBtn = document.getElementById('close-zoom');

    function openZoom() {
        let htmlContent = '';
        
        if (currentPageIndex === 0) {
            htmlContent = book.children[0].querySelector('.front').innerHTML;
        } else if (currentPageIndex === sheetsCount) {
            htmlContent = book.children[sheetsCount - 1].querySelector('.back').innerHTML;
        } else {
            const leftPage = book.children[currentPageIndex - 1].querySelector('.back').innerHTML;
            const rightPage = book.children[currentPageIndex].querySelector('.front').innerHTML;
            
            // Stack the pages for easy scrolling reading
            htmlContent = `
                <div style="margin-bottom: 40px; border-bottom: 1px dashed var(--accent-gold); padding-bottom: 40px;">
                    ${leftPage}
                </div>
                <div>
                    ${rightPage}
                </div>
            `;
        }
        
        zoomContent.innerHTML = htmlContent;
        zoomBackdrop.classList.add('active');
        zoomContainer.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function closeZoom() {
        zoomBackdrop.classList.remove('active');
        zoomContainer.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { zoomContent.innerHTML = ''; }, 400); 
    }

    closeZoomBtn.addEventListener('click', closeZoom);
    zoomBackdrop.addEventListener('click', closeZoom);
    if(zoomBtn) {
        zoomBtn.addEventListener('click', openZoom);
    }

    // We create physical 'page' elements. Each element has a front and a back.
    const sheetsCount = Math.ceil((pagesData.length) / 2);
    let currentPageIndex = 0; // The index of the flipped physical page

    // Book DOM Initialization
    function initializeBook() {
        for (let i = 0; i < sheetsCount; i++) {
            const pageEl = document.createElement('div');
            pageEl.className = 'page';
            
            // Set the initial physical layering depth Z so pages stack perfectly
            pageEl.style.setProperty('--z', `${sheetsCount - i}px`);

            const frontIndex = i * 2;
            const backIndex = i * 2 + 1;

            const frontContent = pagesData[frontIndex];
            const backContent = pagesData[backIndex];

            // Setup Front
            const frontEl = document.createElement('div');
            frontEl.className = 'front';
            
            if (frontContent) {
                if (frontContent.isCover) {
                    pageEl.classList.add('cover', 'front-cover');
                    frontEl.innerHTML = `
                        <div style="margin-top: 50px;">
                            <h2 style="color: var(--accent-gold); font-family: var(--font-sans); letter-spacing: 2px; text-transform: uppercase;">${frontContent.title}</h2>
                            <h1 style="color: #fff; font-size: 3.5rem; border:none; margin-top: 20px;">${frontContent.subtitle.split(' ')[0]} <br> <span style="font-size:2rem; color:var(--paper-color);">${frontContent.subtitle.substring(frontContent.subtitle.indexOf(' ')+1)}</span></h1>
                            <div style="width: 50px; height: 2px; background: var(--accent-gold); margin: 30px auto;"></div>
                            <p style="color: var(--paper-color); font-style: italic;">${frontContent.author}</p>
                        </div>
                    `;
                } else {
                    frontEl.innerHTML = frontContent.html + `<div class="page-number">${frontIndex}</div>`;
                }
            } else {
                 frontEl.innerHTML = `<div class="content"><p></p></div>`;
            }

            // Setup Back
            const backEl = document.createElement('div');
            backEl.className = 'back';
            
            if (backContent) {
                backEl.innerHTML = backContent.html + `<div class="page-number">${backIndex}</div>`;
            } else {
                if(i === sheetsCount - 1) {
                     pageEl.classList.add('cover', 'back-cover'); 
                }
                backEl.innerHTML = `<div class="content"></div>`; 
            }

            pageEl.appendChild(frontEl);
            pageEl.appendChild(backEl);

            // Click interaction flips the clicked page
            pageEl.addEventListener('click', () => {
                if (pageEl.classList.contains('flipped')) {
                    turnPrev();
                } else {
                    turnNext();
                }
            });

            book.appendChild(pageEl);
        }

        updateUI();
        totalPageSpan.innerText = sheetsCount;
    }

    // Flipping logic
    function turnNext() {
        if (currentPageIndex < sheetsCount) {
            const currentSheet = book.children[currentPageIndex];
            currentSheet.classList.add('flipped');
            currentPageIndex++;
            updateUI();
        }
    }

    function turnPrev() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            const currentSheet = book.children[currentPageIndex];
            currentSheet.classList.remove('flipped');
            updateUI();
        }
    }

    // Crucial Bug Fix: Correctly align the 3D book scene
    // - When showing the front cover, the `.scene` should be centered in the workspace (translateX: 0).
    // - When the book is open, we need to push the spine to the center of the workspace (translateX: 50%).
    //   This ensures we can see both the left and right pages completely.
    function updateUI() {
        prevBtn.disabled = currentPageIndex === 0;
        nextBtn.disabled = currentPageIndex === sheetsCount;
        
        currentPageSpan.innerText = Math.max(1, Math.min(currentPageIndex, sheetsCount));

        if (currentPageIndex === 0) {
            // Closed cover
            scene.style.transform = 'translateX(0)'; 
        } else if (currentPageIndex === sheetsCount) {
            // Closed back cover (all pages flipped left). Spine is at left edge, content is mapped left.
            // Move spine 100% to right so the back cover sits in the center.
            scene.style.transform = 'translateX(100%)'; 
        } else {
            // Book is Open in the middle. We push the left-edge (spine) 50% to the right.
            scene.style.transform = 'translateX(50%)'; 
        }
    }

    prevBtn.addEventListener('click', turnPrev);
    nextBtn.addEventListener('click', turnNext);

    if (logoBtn) {
        logoBtn.addEventListener('click', () => {
            // Rapidly un-flip all pages to return to the cover
            while (currentPageIndex > 0) {
                currentPageIndex--;
                book.children[currentPageIndex].classList.remove('flipped');
            }
            updateUI();
        });
    }

    // Modal Logic for "Types of Upanishads"
    const navTypesBtn = document.getElementById('nav-types');
    const typesModal = document.getElementById('types-modal');
    const closeModalBtn = document.getElementById('close-modal');

    navTypesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        typesModal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
        typesModal.classList.remove('active');
    });

    typesModal.addEventListener('click', (e) => {
        if(e.target === typesModal) {
            typesModal.classList.remove('active');
        }
    });

    // Modal Logic for "About"
    const navAboutBtn = document.getElementById('nav-about');
    const aboutModal = document.getElementById('about-modal');
    const closeAboutModalBtn = document.getElementById('close-about-modal');

    navAboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aboutModal.classList.add('active');
    });

    closeAboutModalBtn.addEventListener('click', () => {
        aboutModal.classList.remove('active');
    });

    aboutModal.addEventListener('click', (e) => {
        if(e.target === aboutModal) {
            aboutModal.classList.remove('active');
        }
    });

    // Modal Logic for "Glossary"
    const navGlossaryBtn = document.getElementById('nav-glossary');
    const glossaryModal = document.getElementById('glossary-modal');
    const closeGlossaryModalBtn = document.getElementById('close-glossary-modal');

    // Nav Listeners
    navGlossaryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        glossaryModal.classList.add('active');
    });

    closeGlossaryModalBtn.addEventListener('click', () => {
        glossaryModal.classList.remove('active');
    });

    glossaryModal.addEventListener('click', (e) => {
        if(e.target === glossaryModal) {
            glossaryModal.classList.remove('active');
        }
    });

    // Run Initialization
    initializeBook();
});
