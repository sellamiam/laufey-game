/* ========================================
   Laufey: Ascension of a Goddess
   HELP HER ASCEND! 👑
   Made for a true fan!
======================================== */

class LaufeyGame {
    constructor() {
        // DOM Elements
        this.splashScreen = document.getElementById('splash-screen');
        this.titleScreen = document.getElementById('title-screen');
        this.storyScreen = document.getElementById('story-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.gameoverScreen = document.getElementById('gameover-screen');
        this.prizeScreen = document.getElementById('prize-screen');
        this.endScreen = document.getElementById('end-screen');
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');

        // 6 KEY MISSIONS - The condensed Laufey Journey
        // 6 KEY MISSIONS - The Funny Laufey Journey
        this.chapters = [
            // Stage 1: Baby Laufey
            {
                title: "🍼 Baby Laufey Needs Milk!",
                year: "1999",
                story: "Baby Laufey is crying because the world doesn't know Jazz yet! Also she's hungry. Mostly hungry.",
                mission: "Collect 🍼 Milk, avoid 🥦 Vegetables!",
                levelName: "🍼 Nap Time",
                prize: "🍼", prizeName: "Milk Bottle",
                bonusPrize: "👶", bonusPrizeName: "Embarrassing Photo",
                bonusDesc: "A photo her mom promised not to show!",
                quote: "She didn't choose the Jazz life, the Jazz life chose her.",
                lyric: "I'm falling in love with a _____ I've never seen",
                lyricAnswer: "stranger",
                lyricSong: "From the Start",
                collectEmoji: "🍼",
                obstacleEmoji: ["🥦", "🥕", "🥬"],
                bgColors: ["#0d1b2a", "#1b3a4b", "#3d5a80"],
                levelLength: 4000
            },
            // Stage 2: The Cello Struggle
            {
                title: "🎻 The Cello Is Too Big!",
                year: "2007",
                story: "Laufey is 8. The Cello is huge. It's a physical battle. Help her conquer the giant instrument!",
                mission: "Collect 🎻 Cellos, avoid ⚽ Sports!",
                levelName: "🎻 Cello Practice",
                prize: "🩹", prizeName: "Band-Aid Finger",
                bonusPrize: "🎼", bonusPrizeName: "Sheet Music",
                bonusDesc: "Written in crayon, but it's fire.",
                quote: "Why play soccer when you can have blisters?",
                lyric: "Let me keep you _____ inside my heart",
                lyricAnswer: "warm",
                lyricSong: "Valentine",
                collectEmoji: "🎻",
                obstacleEmoji: ["⚽", "🏀", "🏈"],
                bgColors: ["#1a1432", "#251d42", "#312654"],
                levelLength: 6000
            },
            // Stage 3: The Jazz Nerd
            {
                title: "🎷 Jazz Nerd at Berklee",
                year: "2019",
                story: "Everyone else is making pop music. Laufey is studying 1940s standards. Stay focused!",
                mission: "Collect 🎷 Saxophones, avoid 🎸 Pop Stars!",
                levelName: "🎷 Library Mode",
                prize: "☕", prizeName: "Black Coffee",
                bonusPrize: "📚", bonusPrizeName: "Jazz History Book",
                bonusDesc: "It smells like old paper and talent.",
                quote: "It's not 'boring', it's SOPHISTICATED, okay?",
                lyric: "Promise me you'll stay right _____ by my side",
                lyricAnswer: "here",
                lyricSong: "Promise",
                collectEmoji: "🎷",
                obstacleEmoji: ["🎸", "🎤", "😎"],
                bgColors: ["#1a1220", "#2a1f32", "#3a2944"],
                levelLength: 8000
            },
            // Stage 4: TikTok Viral
            {
                title: "📱 Wait, I'm Viral?",
                year: "2023",
                story: "She posted a video in her bedroom and now everyone is crying? The algorithm is confused but loves it!",
                mission: "Collect 📱 Phones, avoid 📉 Flops!",
                levelName: "📱 Viral Sensation",
                prize: "🤳", prizeName: "Selfie Ring Light",
                bonusPrize: "💖", bonusPrizeName: "New Follower",
                bonusDesc: "Omg she noticed me.",
                quote: "Gen Z discovering Jazz like they invented it.",
                lyric: "And I sound like a _____",
                lyricAnswer: "loon",
                lyricSong: "From the Start",
                collectEmoji: "📱",
                obstacleEmoji: ["📉", "👎", "🧟"],
                bgColors: ["#251d3a", "#352952", "#453568"],
                levelLength: 10000
            },
            // Stage 5: The Bewitched Era
            {
                title: "🔮 Bewitched (And Tired)",
                year: "2024",
                story: "She's famous now! Touring is exhausting. So many airplanes. Where is she? Who knows!",
                mission: "Collect ✈️ Planes, avoid 🧟 Jetlag!",
                levelName: "🔮 World Tour",
                prize: "🧳", prizeName: "Travel Pillow",
                bonusPrize: "💌", bonusPrizeName: "Fan Letter",
                bonusDesc: "Written in tears and glitter.",
                quote: "Sleep is for people who aren't on tour.",
                lyric: "Like I'm _____ by you",
                lyricAnswer: "bewitched",
                lyricSong: "Bewitched",
                collectEmoji: "✈️",
                obstacleEmoji: ["🧟", "😴", "💤"],
                bgColors: ["#2a1f1f", "#3d2c2c", "#503939"],
                levelLength: 12000
            },
            // Stage 6: GODDESS MODE
            {
                title: "👑 ACTUAL GODDESS",
                year: "2025",
                story: "She has ascended. She is no longer just a musician. She is the Queen of Modern Jazz. Bow down!",
                mission: "Collect 👑 Crowns, avoid 💀 Mortals!",
                levelName: "👑 Olympus",
                prize: "✨", prizeName: "Golden Halo",
                bonusPrize: "🗽", bonusPrizeName: "Goddess Statue",
                bonusDesc: "A statue in her honor (made of gold).",
                quote: "Grammy who? She's transcended awards.",
                lyric: "You make me feel like a _____",
                lyricAnswer: "goddess",
                lyricSong: "Goddess",
                collectEmoji: "👑",
                obstacleEmoji: ["💀", "👻", "👺"],
                bgColors: ["#251a2a", "#35283a", "#45364a"],
                levelLength: 15000
            }
        ];

        // Game State
        this.currentChapter = 0;
        this.completedChapters = [];
        this.lives = 3;
        this.maxLives = 3;
        this.collected = 0;
        this.vinylsCollected = 0; // New tracking
        this.stylePoints = 0;
        this.gameRunning = false;
        this.isPaused = false;
        this.reachedPrizeGiver = false;
        this.receivingPrize = false;
        this.prizeAnimation = 0;
        this.cameraX = 0;
        this.username = 'Fan';

        // DIFFICULTY SETTINGS
        this.difficulty = 'medium'; // easy, medium, hard
        this.difficultySettings = {
            easy: { lives: 5, obstacleMultiplier: 0.5, trapMultiplier: 0.3, name: 'Lazy Fan 😴' },
            medium: { lives: 3, obstacleMultiplier: 1.0, trapMultiplier: 0.6, name: 'OK Fan 🎧' },
            hard: { lives: 2, obstacleMultiplier: 1.5, trapMultiplier: 1.0, name: 'SUPER FAN 👑' }
        };

        // LYRIC QUESTION BANK - Fill in with real lyrics!
        // Format: { lyric: "Lyric with _____", song: "Song Name", answer: "correct", wrong: ["wrong1", "wrong2", "wrong3"] }
        // Bewitched Album Only - lyric questions
        this.lyricBank = [
            // From the Start
            { lyric: '"I get quiet when there\'s no one else _____"', song: "From the Start (Bewitched)", answer: "around", wrong: ["here", "there", "near"] },
            { lyric: '"Don\'t you feel it _____?"', song: "From the Start (Bewitched)", answer: "too", wrong: ["now", "true", "through"] },
            // Bewitched
            { lyric: '"Like I\'m _____ by you"', song: "Bewitched", answer: "bewitched", wrong: ["enchanted", "captured", "blessed"] },
            { lyric: '"Under your _____"', song: "Bewitched", answer: "spell", wrong: ["love", "gaze", "wing"] },
            // Promise
            { lyric: '"It hurts to be _____"', song: "Promise (Bewitched)", answer: "something", wrong: ["nothing", "lonely", "someone"] },
            { lyric: '"Took a flight through _____ skies"', song: "Promise (Bewitched)", answer: "aurora", wrong: ["starry", "purple", "distant"] },
            // Falling Behind
            { lyric: '"I\'m _____ behind"', song: "Falling Behind (Bewitched)", answer: "falling", wrong: ["staying", "running", "hiding"] },
            { lyric: '"Everyone\'s moving _____"', song: "Falling Behind (Bewitched)", answer: "on", wrong: ["up", "fast", "along"] },
            // Second Best  
            { lyric: '"I don\'t wanna be your _____ best"', song: "Second Best (Bewitched)", answer: "second", wrong: ["almost", "never", "nearly"] },
            { lyric: '"Give me all or _____"', song: "Second Best (Bewitched)", answer: "nothing", wrong: ["leave", "stop", "quit"] },
            // Dreamer
            { lyric: '"I\'m a _____, always have been"', song: "Dreamer (Bewitched)", answer: "dreamer", wrong: ["lover", "singer", "dancer"] },
            // California and Me
            { lyric: '"_____ and me"', song: "California and Me (Bewitched)", answer: "California", wrong: ["You", "Love", "Music"] },
            // Nocturne
            { lyric: '"Playing a _____ in my mind"', song: "Nocturne (Bewitched)", answer: "nocturne", wrong: ["melody", "symphony", "song"] },
            // Must Be Love
            { lyric: '"It must be _____"', song: "Must Be Love (Bewitched)", answer: "love", wrong: ["fate", "real", "magic"] },
            // While You Were Sleeping
            { lyric: '"While you were _____"', song: "While You Were Sleeping (Bewitched)", answer: "sleeping", wrong: ["dreaming", "leaving", "crying"] },
            // Misty
            { lyric: '"Look at me, I\'m as helpless as a kitten up a _____"', song: "Misty (Bewitched)", answer: "tree", wrong: ["hill", "cliff", "wall"] }
        ];
        this.usedQuestions = [];
        this.currentQuestion = null;

        // Player
        this.player = {
            x: 150, y: 0,
            width: 50, height: 75,
            velocityY: 0, velocityX: 0,
            isJumping: false,
            isGrounded: true,
            direction: 1,
            jumpsRemaining: 2,
            isSpinning: false,
            spinSpeed: 0,
            rotation: 0,
            invincible: false,
            invincibleTimer: 0
        };

        // Physics - MUCH HIGHER JUMPS!
        this.gravity = 0.45;
        this.jumpForce = -16;
        this.moveSpeed = 6;
        this.groundY = 0;

        // Color palette (matches CSS vars)
        this.colors = {
            gold: '#d4a056',
            goldBright: '#f5c778',
            rose: '#c47d8b',
            roseBright: '#e8a5b3',
            lavender: '#9d8bb8',
            cream: '#f5efe6',
            ice: '#a8d4e6',
            danger: '#e74c3c'
        };

        // Level objects
        this.platforms = [];
        this.obstacles = [];
        this.collectibles = [];
        this.particles = [];
        this.floatingTexts = [];
        this.waterZones = [];
        this.fireZones = [];
        this.prizeGiver = { x: 0, emoji: '🧑' };

        // Input
        this.keys = { left: false, right: false, down: false };

        // Audio
        this.sound = new SoundManager();

        // Start audio context on first interaction (browser policy)
        // Play intro music at full volume when user first interacts
        this.musicStarted = false;
        const startMusic = () => {
            if (this.musicStarted) return; // Prevent multiple triggers
            this.musicStarted = true;

            // Remove all listeners to prevent re-triggering
            window.removeEventListener('click', startMusic);
            window.removeEventListener('keydown', startMusic);
            window.removeEventListener('touchstart', startMusic);

            if (this.sound.ctx.state === 'suspended') {
                this.sound.ctx.resume().then(() => {
                    if (!this.gameRunning) { // Only play intro if not in gameplay
                        this.sound.playMusicSegment('intro');
                    }
                });
            } else {
                if (!this.gameRunning) { // Only play intro if not in gameplay
                    this.sound.playMusicSegment('intro');
                }
            }
        };
        window.addEventListener('click', startMusic);
        window.addEventListener('keydown', startMusic);
        window.addEventListener('touchstart', startMusic);


        this.init();
    }

    init() {
        this.setupCanvas();
        this.setupEventListeners();
        this.setupDifficultyButtons();
        this.updateStagePreview();
    }

    setupDifficultyButtons() {
        const buttons = document.querySelectorAll('.difficulty-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.difficulty = btn.dataset.difficulty;
                const settings = this.difficultySettings[this.difficulty];
                this.maxLives = settings.lives;
                this.lives = settings.lives;
                this.updateLivesDisplay();
            });
        });
    }

    setupCanvas() {
        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.groundY = this.canvas.height - 100;
            this.player.y = this.groundY - this.player.height;
        };
        resize();
        window.addEventListener('resize', resize);
    }

    setupEventListeners() {
        document.getElementById('splash-start-btn').addEventListener('click', () => {
            this.switchScreen(this.splashScreen, this.titleScreen);
        });

        document.getElementById('start-btn').addEventListener('click', () => {
            this.showStory();
        });
        document.getElementById('continue-story-btn').addEventListener('click', () => this.startLevel());
        document.getElementById('next-level-btn').addEventListener('click', () => this.nextChapter());
        document.getElementById('play-again-btn').addEventListener('click', () => this.fullRestart());
        document.getElementById('resume-btn').addEventListener('click', () => this.togglePause());

        document.getElementById('skip-challenge-btn').addEventListener('click', () => this.fullRestart());

        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = true;
            if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = true;
            if (e.code === 'ArrowDown' || e.code === 'KeyS') this.keys.down = true;
            if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
                e.preventDefault();
                this.handleJump();
            }
            if (e.code === 'Escape' && this.gameRunning) this.togglePause();

            // SECRET DEBUG KEY: Press 'P' to jump to end of level (For Testing)
            if (e.code === 'KeyP' && this.gameRunning) {
                this.player.x = this.victoryZone.x - 400;
                this.sound.playCollect(); // Sound feedback for cheat
                this.addFloatingText(this.player.x + 200, this.player.y, "🚀 WARP SPEED!", this.colors.gold);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
            if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
            if (e.code === 'ArrowDown' || e.code === 'KeyS') this.keys.down = false;
        });

        // Canvas touch - ONLY for jumping, NOT for movement (buttons handle that)
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            // Only use canvas touch for jumping (top half of screen)
            if (touch.clientY < this.canvas.height / 2) {
                this.handleJump();
            }
            // Don't set left/right here - let the buttons handle it
        });

        // Don't reset keys on canvas touchend - buttons manage their own state

        // Mobile button controls
        const touchLeft = document.getElementById('touch-left');
        const touchRight = document.getElementById('touch-right');
        const touchJump = document.getElementById('touch-jump');

        // Track if using button controls to prevent canvas touchend interference
        this.usingButton = false;

        if (touchLeft) {
            console.log('Left button found, adding pointer listeners');
            // Use pointer events for better cross-device support
            touchLeft.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                touchLeft.setPointerCapture(e.pointerId);
                this.keys.left = true;
                console.log('LEFT pointerdown');
            });
            touchLeft.addEventListener('pointerup', (e) => {
                touchLeft.releasePointerCapture(e.pointerId);
                this.keys.left = false;
                console.log('LEFT pointerup');
            });
            touchLeft.addEventListener('pointercancel', (e) => {
                this.keys.left = false;
            });
            touchLeft.addEventListener('lostpointercapture', () => {
                this.keys.left = false;
            });
        } else {
            console.error('Left button NOT FOUND!');
        }

        if (touchRight) {
            touchRight.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                touchRight.setPointerCapture(e.pointerId);
                this.keys.right = true;
            });
            touchRight.addEventListener('pointerup', (e) => {
                touchRight.releasePointerCapture(e.pointerId);
                this.keys.right = false;
            });
            touchRight.addEventListener('pointercancel', () => {
                this.keys.right = false;
            });
            touchRight.addEventListener('lostpointercapture', () => {
                this.keys.right = false;
            });
        }

        if (touchJump) {
            touchJump.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleJump();
            });
        }

        const touchSlow = document.getElementById('touch-slow');
        if (touchSlow) {
            // TOGGLE behavior for mobile (easier than holding two buttons)
            touchSlow.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent ghost clicks
                this.keys.down = !this.keys.down; // Toggle

                if (this.keys.down) {
                    touchSlow.classList.add('active');
                } else {
                    touchSlow.classList.remove('active');
                }
            });
        }
    }

    updateStagePreview() {
        const container = document.getElementById('stage-preview');
        if (!container) return;
        container.innerHTML = '';

        for (let i = 0; i < this.chapters.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'stage-dot';

            if (this.completedChapters.includes(i)) {
                dot.classList.add('completed');
                dot.textContent = this.chapters[i].prize;
            } else if (i === this.currentChapter) {
                dot.classList.add('current');
                dot.textContent = i + 1;
            } else {
                dot.classList.add('locked');
                dot.textContent = '🔒';
            }
            container.appendChild(dot);
        }
    }

    updateStageDots() {
        const container = document.getElementById('stage-dots');
        if (!container) return;
        container.innerHTML = '';

        for (let i = 0; i < this.chapters.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (this.completedChapters.includes(i)) dot.classList.add('completed');
            else if (i === this.currentChapter) dot.classList.add('current');
            container.appendChild(dot);
        }
    }

    updateLivesDisplay() {
        const display = document.getElementById('lives-display');
        if (display) {
            display.textContent = '❤️'.repeat(this.lives) + '🖤'.repeat(this.maxLives - this.lives);
        }
    }

    updateProgressDisplay() {
        const fill = document.getElementById('progress-fill');
        if (fill) {
            const chapter = this.chapters[this.currentChapter];
            const progress = Math.min((this.cameraX / (chapter.levelLength - this.canvas.width)) * 100, 100);
            fill.style.width = progress + '%';
        }
    }

    switchScreen(from, to) {
        from.classList.remove('active');
        to.classList.add('active');
    }

    showStory() {
        const chapter = this.chapters[this.currentChapter];

        // Play chapter music when showing the MISSION X/6 screen
        this.sound.playChapterMusic(this.currentChapter);

        document.getElementById('chapter-number').textContent = `MISSION ${this.currentChapter + 1} / 6`;
        document.querySelector('.chapter-title').textContent = chapter.title;
        document.querySelector('.chapter-text').textContent = chapter.story;
        document.querySelector('.chapter-year').textContent = chapter.year;
        document.getElementById('prize-preview-name').textContent = `${chapter.prize} ${chapter.prizeName}`;
        this.switchScreen(this.titleScreen, this.storyScreen);
    }

    generateLevel() {
        const chapter = this.chapters[this.currentChapter];
        const levelLength = chapter.levelLength;
        const settings = this.difficultySettings[this.difficulty];

        this.platforms = [];
        this.obstacles = [];
        this.collectibles = [];
        this.spikePits = [];
        this.movingObstacles = [];
        this.deadlyPits = [];
        this.waterZones = [];
        this.fireZones = [];

        // Difficulty scales with chapter AND selected difficulty
        const chapterDiff = 1 + (this.currentChapter * 0.15);
        const obstacleMult = settings.obstacleMultiplier * chapterDiff;
        const trapMult = settings.trapMultiplier * chapterDiff;

        // Generate platforms with collectibles - SPACED OUT so you need to jump!
        let x = 400;
        while (x < levelLength - 800) {
            const platformWidth = 80 + Math.random() * 100;
            const platformHeight = this.groundY - 80 - Math.random() * 100;

            this.platforms.push({
                x: x,
                y: platformHeight,
                width: platformWidth,
                height: 18
            });

            // Collectible on platform - must jump to get!
            if (Math.random() > 0.3) {
                this.collectibles.push({
                    x: x + platformWidth / 2,
                    y: platformHeight - 40,
                    size: 28,
                    collected: false,
                    emoji: chapter.collectEmoji
                });
            }

            x += platformWidth + 200 + Math.random() * 300;
        }

        // DEADLY PITS - Fall in and lose a life!
        x = 800;
        while (x < levelLength - 1000) {
            if (Math.random() < trapMult * 0.8) {
                const pitWidth = 100 + Math.random() * 80;
                this.deadlyPits.push({
                    x: x,
                    width: pitWidth,
                    type: 'lava'
                });
                x += pitWidth + 300;
            }
            x += 400 + Math.random() * 500;
        }

        // SPIKE PITS - Red danger zones!
        x = 600;
        while (x < levelLength - 800) {
            if (Math.random() < trapMult * 0.7) {
                const pitWidth = 80 + Math.random() * 60;
                this.spikePits.push({
                    x: x,
                    width: pitWidth,
                    spikes: Math.floor(pitWidth / 20)
                });
            }
            x += 350 + Math.random() * 400;
        }

        // GROUND OBSTACLES - Must jump over!
        x = 350;
        const obstacleEmojis = chapter.obstacleEmoji;
        while (x < levelLength - 600) {
            if (Math.random() < obstacleMult * 0.7) {
                this.obstacles.push({
                    x: x,
                    y: this.groundY - 45,
                    size: 45,
                    emoji: obstacleEmojis[Math.floor(Math.random() * obstacleEmojis.length)],
                    type: 'static'
                });
            }
            x += 180 + Math.random() * 250;
        }

        // TALL OBSTACLES - Require double jump!
        x = 1000;
        while (x < levelLength - 800) {
            if (Math.random() < trapMult * 0.4) {
                this.obstacles.push({
                    x: x,
                    y: this.groundY - 90,
                    size: 50,
                    emoji: '🧱',
                    type: 'tall'
                });
            }
            x += 600 + Math.random() * 800;
        }

        // MOVING SKULLS - Patrol back and forth!
        x = 700;
        while (x < levelLength - 700) {
            if (Math.random() < trapMult * 0.5) {
                this.movingObstacles.push({
                    x: x,
                    startX: x,
                    y: this.groundY - 55,
                    size: 45,
                    emoji: '💀',
                    speed: 2.5 + Math.random() * 2,
                    range: 100 + Math.random() * 80,
                    direction: 1
                });
            }
            x += 500 + Math.random() * 600;
        }

        // JUMPING GHOSTS - Pop up and down!
        x = 900;
        while (x < levelLength - 600) {
            if (Math.random() < trapMult * 0.4) {
                this.movingObstacles.push({
                    x: x,
                    startX: x,
                    y: this.groundY - 55,
                    baseY: this.groundY - 55,
                    size: 45,
                    emoji: '👻',
                    speed: 0,
                    range: 0,
                    direction: 1,
                    jumping: true,
                    jumpPhase: Math.random() * Math.PI * 2,
                    jumpTimer: Math.random() * 100
                });
            }
            x += 600 + Math.random() * 700;
        }

        // --- VINYLS (3 Per Level) ---
        this.levelVinyls = [];
        for (let i = 1; i <= 3; i++) {
            // Spread them out: Beginning, Middle, End
            const sector = levelLength / 3;
            const vx = (sector * (i - 1)) + 500 + Math.random() * (sector - 600);
            this.levelVinyls.push({
                x: vx,
                y: this.groundY - 120 - (Math.random() * 60), // High up, requires jump!
                size: 35,
                collected: false
            });
        }

        // FLYING ENEMIES - In the air!
        x = 1200;
        while (x < levelLength - 800) {
            if (Math.random() < trapMult * 0.3) {
                this.movingObstacles.push({
                    x: x,
                    startX: x,
                    y: this.groundY - 130,
                    baseY: this.groundY - 130,
                    size: 40,
                    emoji: '🦇',
                    speed: 3,
                    range: 120,
                    direction: 1,
                    flying: true
                });
            }
            x += 700 + Math.random() * 800;
        }

        // WATER ZONES - Swimming sections!
        x = 2000;
        while (x < levelLength - 2000) {
            if (Math.random() < 0.3) {
                const waterWidth = 300 + Math.random() * 200;
                this.waterZones.push({
                    x: x,
                    width: waterWidth
                });
                x += waterWidth;
            }
            x += 1500 + Math.random() * 2000;
        }

        // BIG FIRE OBSTACLES - Must jump over!
        x = 1500;
        while (x < levelLength - 1000) {
            if (Math.random() < trapMult * 0.4) {
                this.fireZones.push({
                    x: x,
                    width: 80 + Math.random() * 60
                });
            }
            x += 800 + Math.random() * 1200;
        }

        // Victory Zone at the end - finish line!
        this.victoryZone = {
            x: levelLength - 200
        };
        this.celebrating = false;
        this.celebrateTimer = 0;
    }

    startLevel() {
        const chapter = this.chapters[this.currentChapter];

        document.getElementById('level-name').textContent = chapter.levelName;
        document.getElementById('level-goal').textContent = chapter.mission;
        this.updateStageDots();
        this.updateLivesDisplay();

        this.collected = 0;
        this.stylePoints = 0;
        this.cameraX = 0;
        this.reachedPrizeGiver = false;
        this.receivingPrize = false;
        this.prizeAnimation = 0;
        this.player.x = 150;
        this.player.y = this.groundY - this.player.height;
        this.player.velocityY = 0;
        this.player.velocityX = 0;
        this.player.jumpsRemaining = 2;
        this.player.isSpinning = false;
        this.player.rotation = 0;
        this.player.invincible = false;
        this.particles = [];
        this.floatingTexts = [];

        this.generateLevel();

        // Music already playing from showStory() - don't restart it

        this.gameRunning = true;
        this.switchScreen(this.storyScreen, this.gameScreen);
        this.gameLoop();
    }

    handleJump() {
        if (!this.gameRunning || this.isPaused || this.receivingPrize) return;

        // ONLY allow jumping from ground or platforms - NO mid-air jumps
        if (this.player.isGrounded) {
            this.player.isJumping = true;
            this.player.isGrounded = false;
            this.player.velocityY = this.jumpForce; // -16
            this.sound.playJump();
            this.createParticles(this.player.x + this.player.width / 2, this.player.y + this.player.height, 6, this.colors.lavender);
        }
        // No double or triple jumps - must land first
    }

    createParticles(x, y, count, color) {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 5,
                vy: Math.random() * 3,
                size: 3 + Math.random() * 3,
                color,
                life: 1
            });
        }
    }

    addFloatingText(x, y, text, color) {
        this.floatingTexts.push({ x, y, text, color, vy: -2.5, life: 1.5 });
    }

    hitObstacle() {
        if (this.player.invincible) return;

        this.lives--;
        this.updateLivesDisplay();
        this.sound.playDie(); // Die Sound
        this.createParticles(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2, 12, this.colors.danger);
        this.addFloatingText(this.player.x + this.cameraX, this.player.y, "💔 OUCH!", this.colors.danger);

        if (this.lives <= 0) {
            this.gameOver();
        } else {
            this.player.invincible = true;
            this.player.invincibleTimer = 180; // 3 seconds of invincibility (was 90)
        }
    }

    gameOver() {
        this.gameRunning = false;

        // LYRIC CHALLENGE - Answer correctly to save Laufey!
        // Get random unused question from bank
        const availableQuestions = this.lyricBank.filter((q, i) => !this.usedQuestions.includes(i));

        // If all used, reset the pool
        if (availableQuestions.length === 0) {
            this.usedQuestions = [];
        }

        const questionIndex = this.lyricBank.indexOf(
            availableQuestions.length > 0
                ? availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
                : this.lyricBank[Math.floor(Math.random() * this.lyricBank.length)]
        );

        this.usedQuestions.push(questionIndex);
        this.currentQuestion = this.lyricBank[questionIndex];

        // Display the question
        document.getElementById('lyric-text').textContent = this.currentQuestion.lyric;
        document.getElementById('song-hint').textContent = `Song: ${this.currentQuestion.song}`;
        document.getElementById('challenge-result').textContent = '';
        document.getElementById('challenge-result').className = 'challenge-result';

        // Create shuffled options
        const options = [this.currentQuestion.answer, ...this.currentQuestion.wrong];
        this.shuffleArray(options);

        // Set up multiple choice buttons
        const optionButtons = document.querySelectorAll('.lyric-option');
        optionButtons.forEach((btn, i) => {
            btn.textContent = options[i];
            btn.className = 'lyric-option';
            btn.disabled = false;
            btn.onclick = () => this.checkLyricAnswer(options[i]);
        });

        this.switchScreen(this.gameScreen, this.gameoverScreen);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    checkLyricAnswer(selectedAnswer) {
        const result = document.getElementById('challenge-result');
        const optionButtons = document.querySelectorAll('.lyric-option');

        // Disable all buttons
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === this.currentQuestion.answer) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedAnswer) {
                btn.classList.add('wrong');
            }
        });

        if (selectedAnswer.toLowerCase() === this.currentQuestion.answer.toLowerCase()) {
            result.textContent = "✨ TRUE FAN! Laufey is saved! ✨";
            result.className = 'challenge-result success';

            setTimeout(() => {
                this.lives = this.maxLives;
                this.updateLivesDisplay();
                this.player.invincible = true;
                this.player.invincibleTimer = 180; // Give invincibility on resurrection
                this.gameRunning = true;
                this.switchScreen(this.gameoverScreen, this.gameScreen);
                this.sound.playChapterMusic(this.currentChapter); // Resume music
                this.gameLoop(); // Resume game loop
            }, 1500);
        } else {
            // FUNNY INSULT LOGIC 🤡
            const insults = [
                "Fake fan detected! 🤡",
                "Do you even listen to her? 😭",
                "Laufey is disappointed in you. 💔",
                "Back to Spotify for you! 🎧",
                "Clearly you're just a 'Casual'... 💅"
            ];
            const randomInsult = insults[Math.floor(Math.random() * insults.length)];

            result.textContent = `💔 ${randomInsult} (Ans: "${this.currentQuestion.answer}")`;
            result.className = 'challenge-result error';

            setTimeout(() => this.fullRestart(), 3000);
        }
    }

    fullRestart() {
        this.currentChapter = 0;
        this.completedChapters = [];
        this.lives = this.maxLives;
        this.usedQuestions = []; // Reset question tracking on full restart
        this.updateStagePreview();

        const screens = [this.gameoverScreen, this.endScreen, this.gameScreen, this.prizeScreen];
        screens.forEach(s => s.classList.remove('active'));
        this.titleScreen.classList.add('active');
    }

    // Physics - Tuned for better control
    gravity = 0.45;
    jumpForce = -16;
    moveSpeed = 4.5;
    friction = 0.82; // Higher friction = faster stopping
    groundY = 0;

    // FUN VICTORY CELEBRATIONS! 🕺💃
    triggerVictoryCelebration() {
        if (this.celebrating) return;
        this.celebrating = true;
        this.celebrateTimer = 0;
        this.player.velocityX = 0;

        // STOP chapter music immediately to prevent overlap
        this.sound.stopMusic();

        // Pick a random dance!
        const dances = ['wiggle', 'hop', 'heart', 'spin'];
        this.danceType = dances[Math.floor(Math.random() * dances.length)];

        // Initial jump for all dances because why not?
        this.player.velocityY = -15;

        // Setup dance specific variables
        this.dancePhase = 0;

        if (this.danceType === 'spin') {
            this.player.isSpinning = true;
            this.player.spinSpeed = 0.4;
        }

        // Create huge particle explosion
        if (this.currentChapter >= 4) {
            this.createParticles(this.player.x, this.player.y, 50, this.colors.gold);
            this.createParticles(this.player.x, this.player.y, 50, this.colors.rose);
        }

        this.sound.playWin(); // Win Sound
        this.sound.playApplause(); // 🎭 Crowd cheering when entering curtains!

        // Complete level after celebration
        setTimeout(() => this.completeLevel(), 4000); // 4 second celebration!
    }

    completeLevel() {
        this.gameRunning = false;

        // Stop the applause when leaving gameplay
        this.sound.stopApplause();

        // Don't change music - let current chapter's song keep playing

        const chapter = this.chapters[this.currentChapter];

        if (!this.completedChapters.includes(this.currentChapter)) {
            this.completedChapters.push(this.currentChapter);
        }

        document.getElementById('prize-icon').textContent = chapter.prize;
        document.getElementById('prize-title').textContent = `${chapter.prizeName} Unlocked!`;
        document.getElementById('prize-description').textContent = chapter.quote;
        document.querySelector('.quote-text').textContent = `"${chapter.quote}"`;

        document.getElementById('stat-lives').textContent = this.lives;
        document.getElementById('stat-collected').textContent = this.collected;
        document.getElementById('stat-style').textContent = this.stylePoints;

        this.createConfetti('prize-confetti');

        // BONUS PRIZE for medium/hard only!
        const bonusSection = document.getElementById('bonus-prize-section');
        if (bonusSection) {
            if (this.difficulty !== 'easy' && chapter.bonusPrize) {
                bonusSection.style.display = 'block';
                // Special case: show real baby photo instead of emoji
                const bonusIcon = document.getElementById('bonus-icon');
                if (chapter.bonusPrizeName === 'Embarrassing Photo') {
                    bonusIcon.innerHTML = '<img src="baby_photo.png" style="width:50px;height:50px;border-radius:50%;object-fit:cover;">';
                } else {
                    bonusIcon.textContent = chapter.bonusPrize;
                }
                document.getElementById('bonus-name').textContent = chapter.bonusPrizeName;
                document.getElementById('bonus-desc').textContent = chapter.bonusDesc;
            } else {
                bonusSection.style.display = 'none';
            }
        }

        const nextBtn = document.getElementById('next-level-btn');
        nextBtn.querySelector('.btn-text').textContent = this.currentChapter >= 5 ? '👑 ASCEND! →' : `Mission ${this.currentChapter + 2} →`;

        this.switchScreen(this.gameScreen, this.prizeScreen);
        this.createConfetti('prize-confetti');
    }

    nextChapter() {
        this.currentChapter++;
        this.lives = this.maxLives;

        if (this.currentChapter >= 6) {
            this.sound.playMusicSegment('victory'); // Final Victory
            this.showVictory();
        } else {
            // Go to Story Screen (Intro of stage) to play music
            this.showStory();
            this.switchScreen(this.prizeScreen, this.storyScreen);
        }
    }

    showVictory() {
        const timeline = document.getElementById('timeline-items');
        timeline.innerHTML = '';
        this.chapters.forEach((ch, i) => {
            const item = document.createElement('span');
            item.className = 'prize-item';
            item.textContent = ch.prize;
            item.style.animationDelay = `${i * 0.1}s`;
            timeline.appendChild(item);
        });

        this.switchScreen(this.prizeScreen, this.endScreen);
        this.createConfetti('confetti');
    }

    createConfetti(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        const colors = [this.colors.gold, this.colors.rose, this.colors.lavender, this.colors.cream];

        for (let i = 0; i < 70; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            container.appendChild(confetti);
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        document.getElementById('pause-overlay').classList.toggle('hidden', !this.isPaused);
        if (!this.isPaused) this.gameLoop();
    }

    update() {
        const p = this.player;
        const chapter = this.chapters[this.currentChapter];

        // Victory celebration - still apply physics for the jump!
        if (this.celebrating) {
            this.celebrateTimer += 1;

            // WIGGLE: Fast left/right shake
            if (this.danceType === 'wiggle') {
                this.dancePhase += 0.5;
                p.rotation = Math.sin(this.dancePhase) * 0.3; // Wiggle rotation
                p.direction = Math.sin(this.dancePhase) > 0 ? 1 : -1; // Switch facing

                // Small hops
                if (p.y >= this.groundY - p.height) {
                    p.velocityY = -5;
                }
            }
            // HOP: Rapid small jumps
            else if (this.danceType === 'hop') {
                if (p.y >= this.groundY - p.height) {
                    p.velocityY = -12; // Big hops!
                    p.direction *= -1; // Turn around each hop
                }
            }
            // HEART: Draw a heart shape with movement (simplified to floating)
            else if (this.danceType === 'heart') {
                this.dancePhase += 0.1;
                p.y = (this.groundY - p.height - 30) + Math.sin(this.dancePhase) * 20;
                p.rotation = Math.sin(this.dancePhase * 0.5) * 0.1;
            }
            // SPIN: Classic flip (already handled below)
            else if (this.danceType === 'spin' && p.isSpinning) {
                p.rotation += p.spinSpeed;
            }

            // Apply gravity
            if (this.danceType !== 'heart') { // Heart defies gravity!
                p.velocityY += this.gravity;
                p.y += p.velocityY;
            }

            // Ground collision
            if (p.y >= this.groundY - p.height) {
                p.y = this.groundY - p.height;
                // Bounce logic depending on dance
                if (this.danceType === 'spin') p.velocityY = -15;
                else if (this.danceType === 'wiggle') p.velocityY = 0;
                else p.velocityY = 0;
            }
            return;
        }

        // DIRECT MOVEMENT: Only moves while key is pressed, stops instantly
        const moveSpeed = 3; // Slower, more controllable movement

        if (this.keys.right) {
            p.velocityX = moveSpeed; // Direct speed, no acceleration
            p.direction = 1;
        } else if (this.keys.left) {
            p.velocityX = -moveSpeed;
            p.direction = -1;
        } else {
            // NO KEY = STOP IMMEDIATELY
            p.velocityX = 0;
        }

        // Cap speed in both directions
        if (p.velocityX > moveSpeed) p.velocityX = moveSpeed;
        if (p.velocityX < -moveSpeed) p.velocityX = -moveSpeed;

        // Prevent going off left edge
        if (p.x < 50 && p.velocityX < 0) p.velocityX = 0;

        // Footsteps
        if (p.isGrounded && Math.abs(p.velocityX) > 0.5) {
            if (!this.stepTimer) this.stepTimer = 0;
            this.stepTimer++;
            if (this.stepTimer > 15) { // Every 15 frames
                this.sound.playStep();
                this.stepTimer = 0;
            }
        } else {
            this.stepTimer = 15; // Reset so first step is immediate
        }

        // No additional friction needed - handled above

        p.velocityY += this.gravity;
        p.y += p.velocityY;
        p.x += p.velocityX;

        if (p.isSpinning) {
            p.rotation += p.spinSpeed;
            p.spinSpeed *= 0.95;
            if (Math.abs(p.spinSpeed) < 0.01) {
                p.isSpinning = false;
                p.rotation = 0;
            }
        }

        if (p.y >= this.groundY - p.height) {
            p.y = this.groundY - p.height;
            p.velocityY = 0;
            p.isJumping = false;
            p.isGrounded = true;
            p.jumpCount = 0; // Reset triple jump
            if (p.isSpinning) { p.isSpinning = false; p.rotation = 0; }
        } else {
            p.isGrounded = false;
        }

        this.platforms.forEach(plat => {
            // Convert player screen position to world position
            const playerWorldX = p.x + this.cameraX;
            const playerRight = playerWorldX + p.width;
            const playerBottom = p.y + p.height;
            const platRight = plat.x + plat.width;
            const platBottom = plat.y + plat.height;

            // Check for AABB overlap
            const overlapX = playerRight > plat.x && playerWorldX < platRight;
            const overlapY = playerBottom > plat.y && p.y < platBottom;

            if (overlapX && overlapY) {
                // Calculate overlap amounts
                const overlapLeft = playerRight - plat.x;      // Player entering from left
                const overlapRight = platRight - playerWorldX; // Player entering from right
                const overlapTop = playerBottom - plat.y;      // Player entering from top

                // HORIZONTAL COLLISION - Check first based on movement direction
                if (p.velocityX > 0 && overlapLeft < overlapRight && overlapLeft < 50) {
                    // Moving right, hitting left side of platform
                    p.x = plat.x - p.width - this.cameraX;
                    p.velocityX = 0;
                }
                else if (p.velocityX < 0 && overlapRight < overlapLeft && overlapRight < 50) {
                    // Moving left, hitting right side of platform
                    p.x = platRight - this.cameraX;
                    p.velocityX = 0;
                }
                // VERTICAL COLLISION - Landing on top
                else if (overlapTop <= 25 && p.velocityY >= 0) {
                    p.y = plat.y - p.height;
                    p.velocityY = 0;
                    p.isJumping = false;
                    p.isGrounded = true;
                    p.jumpCount = 0;
                }
                // Hitting from below
                else if (p.velocityY < 0) {
                    p.y = platBottom;
                    p.velocityY = 0;
                }
            }
        });

        if (p.x < 50) p.x = 50;

        // Smooth camera following - camera tracks player's world position
        // Player's world position = p.x + cameraX
        // Target: keep player at ~30% from left edge of screen
        const playerWorldX = p.x + this.cameraX;
        const targetCameraX = playerWorldX - this.canvas.width * 0.3;

        // Smooth camera movement (lerp towards target)
        if (targetCameraX > this.cameraX) {
            this.cameraX += Math.min((targetCameraX - this.cameraX) * 0.1, 5);
        } else if (targetCameraX < this.cameraX && this.cameraX > 0) {
            this.cameraX += Math.max((targetCameraX - this.cameraX) * 0.1, -5);
        }

        // Keep camera in valid bounds
        if (this.cameraX < 0) this.cameraX = 0;

        // Update player screen position based on new camera
        p.x = playerWorldX - this.cameraX;

        if (p.invincible) {
            p.invincibleTimer--;
            if (p.invincibleTimer <= 0) p.invincible = false;
        }

        this.collectibles.forEach(c => {
            if (c.collected) return;
            const playerWorldX = p.x + this.cameraX;
            if (Math.abs(playerWorldX + p.width / 2 - c.x) < 35 && Math.abs(p.y + p.height / 2 - c.y) < 35) {
                c.collected = true;
                this.collected++;
                this.stylePoints += 5;
                this.addFloatingText(c.x, c.y, `+5 ${c.emoji}`, this.colors.gold);
                this.sound.playCollect();
                this.createParticles(c.x - this.cameraX, c.y, 10, this.colors.gold); // Fixed: was using undefined cx
            }
        });

        // Vinyl Collision
        if (this.levelVinyls) {
            const playerWorldX = p.x + this.cameraX;
            this.levelVinyls.forEach(v => {
                if (!v.collected) {
                    if (
                        playerWorldX < v.x + v.size &&
                        playerWorldX + p.width > v.x &&
                        p.y < v.y + v.size &&
                        p.y + p.height > v.y
                    ) {
                        v.collected = true;
                        this.vinylsCollected++;
                        this.createParticles(v.x - this.cameraX, v.y, 20, '#FFD700'); // Fixed: was using undefined vx
                        this.sound.playCollect();
                        document.getElementById('vinyl-display').textContent = `${this.vinylsCollected} / 18`;
                    }
                }
            });
        }

        this.obstacles.forEach(o => {
            const playerWorldX = p.x + this.cameraX;
            // Tighter hitbox - player must actually touch the obstacle
            if (Math.abs(playerWorldX + p.width / 2 - o.x) < 20 && Math.abs(p.y + p.height - o.y) < 30) {
                this.hitObstacle();
            }
        });

        // SPIKE PITS - Fall in = instant damage!
        if (this.spikePits) {
            const playerWorldX = p.x + this.cameraX;
            this.spikePits.forEach(pit => {
                if (playerWorldX + p.width > pit.x + 20 && playerWorldX < pit.x + pit.width - 20) {
                    // Only trigger if player falls INTO the pit (below ground level)
                    if (p.y + p.height >= this.groundY + 10) {
                        this.hitObstacle();
                        p.velocityY = -10;
                        p.y = this.groundY - p.height; // Push back up
                    }
                }
            });
        }

        // DEADLY PITS - Fall in = lose a life!
        if (this.deadlyPits) {
            const playerWorldX = p.x + this.cameraX;
            this.deadlyPits.forEach(pit => {
                if (playerWorldX + p.width > pit.x + 20 && playerWorldX < pit.x + pit.width - 20) {
                    // Only trigger if player falls INTO the pit (below ground level)
                    if (p.y + p.height >= this.groundY + 15) {
                        this.hitObstacle();
                        p.velocityY = -12;
                        p.y = this.groundY - p.height; // Push back up
                    }
                }
            });
        }

        // MOVING OBSTACLES - Update position and check collision
        if (this.movingObstacles) {
            this.movingObstacles.forEach(mo => {
                if (mo.jumping) {
                    // Jumping ghost - faster!
                    mo.jumpPhase += 0.1;
                    mo.y = mo.baseY - Math.abs(Math.sin(mo.jumpPhase) * 100);
                } else if (mo.flying) {
                    // Flying enemy - swoops!
                    mo.x += mo.speed * mo.direction;
                    if (mo.x > mo.startX + mo.range || mo.x < mo.startX - mo.range) {
                        mo.direction *= -1;
                    }
                } else {
                    // Moving skull - patrol
                    mo.x += mo.speed * mo.direction;
                    if (mo.x > mo.startX + mo.range || mo.x < mo.startX - mo.range) {
                        mo.direction *= -1;
                    }
                }

                // Collision check - much tighter hitbox
                const playerWorldX = p.x + this.cameraX;
                if (Math.abs(playerWorldX + p.width / 2 - mo.x) < 20 && Math.abs(p.y + p.height / 2 - mo.y) < 25) {
                    this.hitObstacle();
                }
            });
        }

        // Check if player reaches the victory zone!
        const victoryX = this.victoryZone.x - this.cameraX;
        if (p.x + p.width > victoryX - 50 && !this.celebrating) {
            this.triggerVictoryCelebration();
        }

        this.updateProgressDisplay();

        this.particles = this.particles.filter(pt => {
            pt.x += pt.vx;
            pt.y += pt.vy;
            pt.vy += 0.12;
            pt.life -= 0.025;
            return pt.life > 0;
        });

        this.floatingTexts = this.floatingTexts.filter(ft => {
            ft.y += ft.vy;
            ft.life -= 0.02;
            return ft.life > 0;
        });
    }

    draw() {
        // Reset context state at start of each frame
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.shadowBlur = 0;

        // Draw gradient background
        const chapter = this.chapters[this.currentChapter];
        const colors = chapter.bgColors;
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(0.5, colors[1]);
        gradient.addColorStop(1, colors[2]);
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw stars
        this.drawStars();

        // Draw ground area
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        this.ctx.fillRect(0, this.groundY, this.canvas.width, this.canvas.height - this.groundY);

        // Draw glowing ground line
        this.ctx.strokeStyle = this.colors.gold;
        this.ctx.lineWidth = 3;
        this.ctx.shadowBlur = 12;
        this.ctx.shadowColor = this.colors.gold;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.groundY);
        this.ctx.lineTo(this.canvas.width, this.groundY);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;

        this.platforms.forEach(plat => {
            const x = plat.x - this.cameraX;
            if (x > -200 && x < this.canvas.width + 200) {
                this.ctx.fillStyle = 'rgba(157, 139, 184, 0.5)';
                this.ctx.fillRect(x, plat.y, plat.width, plat.height);
                this.ctx.strokeStyle = this.colors.lavender;
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(x, plat.y, plat.width, plat.height);
            }
        });

        this.collectibles.forEach(c => {
            if (c.collected) return;
            if (c.x > this.cameraX - 100 && c.x < this.cameraX + this.canvas.width + 100) {
                // Bobbing animation
                const bobY = c.y + Math.sin(Date.now() / 200) * 5;

                this.ctx.font = `${c.size}px serif`;
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = this.colors.gold;
                this.ctx.fillText(c.emoji, c.x - this.cameraX, bobY);
                this.ctx.shadowBlur = 0;
            }
        });

        // Draw Vinyls
        if (this.levelVinyls) { // Ensure levelVinyls exists for the current chapter
            this.levelVinyls.forEach(v => {
                if (!v.collected && v.x > this.cameraX - 100 && v.x < this.cameraX + this.canvas.width + 100) {
                    const vx = v.x - this.cameraX; // Adjust for camera
                    const bobY = v.y + Math.sin(Date.now() / 300) * 8; // Slower bob

                    // Vinyl Record Art
                    this.ctx.save(); // Save current transform
                    this.ctx.translate(vx, bobY);
                    this.ctx.rotate(Date.now() / 500); // Spin!

                    this.ctx.fillStyle = '#111'; // Black record
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, v.size / 2, 0, Math.PI * 2);
                    this.ctx.fill();

                    this.ctx.fillStyle = '#FFD700'; // Gold center
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, v.size / 6, 0, Math.PI * 2);
                    this.ctx.fill();

                    this.ctx.restore(); // Restore previous transform
                }
            });
        }

        this.obstacles.forEach(o => {
            const x = o.x - this.cameraX;
            if (x > -50 && x < this.canvas.width + 50) {
                this.ctx.font = `${o.size}px Arial`;
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(o.emoji, x, o.y);
            }
        });

        // Draw spike pits
        if (this.spikePits) {
            this.spikePits.forEach(pit => {
                const x = pit.x - this.cameraX;
                if (x > -200 && x < this.canvas.width + 200) {
                    // Danger zone background
                    this.ctx.fillStyle = 'rgba(231, 76, 60, 0.4)';
                    this.ctx.fillRect(x, this.groundY - 25, pit.width, 30);

                    // Spikes - bigger and scarier!
                    this.ctx.fillStyle = '#c0392b';
                    for (let i = 0; i < pit.spikes; i++) {
                        const spikeX = x + 10 + i * 20;
                        this.ctx.beginPath();
                        this.ctx.moveTo(spikeX, this.groundY);
                        this.ctx.lineTo(spikeX + 14, this.groundY);
                        this.ctx.lineTo(spikeX + 7, this.groundY - 28);
                        this.ctx.closePath();
                        this.ctx.fill();
                    }

                    // Warning sign
                    this.ctx.font = '18px Arial';
                    this.ctx.fillText('⚠️', x + pit.width / 2, this.groundY - 40);
                }
            });
        }

        // Draw DEADLY PITS - Lava/danger zones!
        if (this.deadlyPits) {
            this.deadlyPits.forEach(pit => {
                const x = pit.x - this.cameraX;
                if (x > -200 && x < this.canvas.width + 200) {
                    // Lava glow
                    this.ctx.fillStyle = 'rgba(255, 100, 0, 0.6)';
                    this.ctx.fillRect(x, this.groundY - 10, pit.width, 15);

                    // Animated lava bubbles
                    this.ctx.fillStyle = '#ff4500';
                    const bubbleOffset = Math.sin(Date.now() * 0.005) * 5;
                    for (let i = 0; i < pit.width / 25; i++) {
                        this.ctx.beginPath();
                        this.ctx.arc(x + 15 + i * 25, this.groundY - 5 + bubbleOffset, 8, 0, Math.PI * 2);
                        this.ctx.fill();
                    }

                    // Skull danger sign
                    this.ctx.font = '24px Arial';
                    this.ctx.fillText('💀', x + pit.width / 2, this.groundY - 30);
                }
            });
        }

        // Draw moving obstacles
        if (this.movingObstacles) {
            this.movingObstacles.forEach(mo => {
                const x = mo.x - this.cameraX;
                if (x > -50 && x < this.canvas.width + 50) {
                    this.ctx.font = `${mo.size}px Arial`;
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.shadowBlur = 15;
                    this.ctx.shadowColor = '#e74c3c';
                    this.ctx.fillText(mo.emoji, x, mo.y);
                }
            });
        }

        this.drawVictoryZone();

        // Draw celebration effects when celebrating!
        if (this.celebrating) {
            const chapter = this.chapters[this.currentChapter];
            const prize = chapter.prize; // The instrument she won!
            const time = Date.now() * 0.001;

            // 🎹 LAUFEY PLAYING THE INSTRUMENT SHE WON!
            const instrumentX = this.player.x + this.player.width / 2;
            const instrumentY = this.player.y + 30;

            // Animate the instrument bouncing/moving as she plays
            const playBob = Math.sin(time * 8) * 5;
            const playRotate = Math.sin(time * 6) * 0.1;

            this.ctx.save();
            this.ctx.translate(instrumentX, instrumentY + playBob);
            this.ctx.rotate(playRotate);

            // Draw big floating instrument
            this.ctx.font = '60px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = this.colors.gold;
            this.ctx.fillText(prize, 0, 0);
            this.ctx.shadowBlur = 0;
            this.ctx.restore();

            // Musical notes flying from the instrument
            const noteEmojis = ['🎵', '🎶', '♪', '♫', '✨'];
            for (let i = 0; i < 6; i++) {
                const noteTime = time * 2 + i * 0.5;
                const noteX = instrumentX + Math.sin(noteTime) * 80 + (i - 3) * 30;
                const noteY = instrumentY - 50 - (noteTime % 3) * 40;
                const noteAlpha = 1 - (noteTime % 3) / 3;
                this.ctx.globalAlpha = noteAlpha;
                this.ctx.font = '25px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(noteEmojis[i % noteEmojis.length], noteX, noteY);
            }
            this.ctx.globalAlpha = 1;

            // Celebration emoji burst around Laufey
            const celebEmojis = ['🎉', '✨', '💖', '🎊', '⭐', '🌟', '💫', '🎵'];
            for (let i = 0; i < 8; i++) {
                const angle = (time * 3 + i * Math.PI / 4);
                const dist = 80 + Math.sin(time * 10) * 15;
                const emojiX = this.player.x + this.player.width / 2 + Math.cos(angle) * dist;
                const emojiY = this.player.y + this.player.height / 2 + Math.sin(angle) * dist;
                this.ctx.font = '24px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(celebEmojis[i], emojiX, emojiY);
            }

            // Crowd cheering hands 👏 at bottom
            this.ctx.font = '30px Arial';
            for (let i = 0; i < 10; i++) {
                const handX = 50 + i * (this.canvas.width - 100) / 9;
                const handY = this.canvas.height - 30 + Math.sin(time * 8 + i) * 10;
                this.ctx.fillText('👏', handX, handY);
            }

            // Crowd yelling LAUFEY!
            this.ctx.font = 'bold 44px Arial';
            this.ctx.fillStyle = '#fff';
            this.ctx.strokeStyle = this.colors.rose;
            this.ctx.lineWidth = 5;
            this.ctx.textAlign = 'center';
            const shakeX = Math.sin(time * 20) * 6;
            const shakeY = Math.cos(time * 25) * 4;
            this.ctx.strokeText('🎤 LAUFEY! LAUFEY! 🎤', this.canvas.width / 2 + shakeX, 80 + shakeY);
            this.ctx.fillText('🎤 LAUFEY! LAUFEY! 🎤', this.canvas.width / 2 + shakeX, 80 + shakeY);

            // Victory text with prize name
            this.ctx.font = 'bold 26px Arial';
            this.ctx.fillStyle = this.colors.gold;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = this.colors.gold;
            this.ctx.fillText(`✨ ${chapter.prizeName} UNLOCKED! ✨`, this.canvas.width / 2, 130);
            this.ctx.shadowBlur = 0;

            // "Playing for the crowd" label
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillStyle = '#fff';
            this.ctx.fillText(`🎭 Playing for the crowd! ${prize}`, this.player.x + this.player.width / 2, this.player.y - 60);
        }

        this.particles.forEach(pt => {
            this.ctx.globalAlpha = pt.life;
            this.ctx.fillStyle = pt.color;
            this.ctx.beginPath();
            this.ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2);
            this.ctx.fill();
        });
        this.ctx.globalAlpha = 1;

        this.drawPlayer();

        this.floatingTexts.forEach(ft => {
            this.ctx.globalAlpha = ft.life;
            this.ctx.font = 'bold 15px Inter';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = ft.color;
            this.ctx.fillText(ft.text, ft.x - this.cameraX, ft.y);
        });
        this.ctx.globalAlpha = 1;
    }

    drawStars() {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 40; i++) {
            const x = (i * 67 + this.cameraX * 0.08) % this.canvas.width;
            const y = (i * 41) % (this.canvas.height * 0.55);
            const twinkle = Math.sin(time + i) * 0.5 + 0.5;
            this.ctx.globalAlpha = 0.3 + twinkle * 0.5;
            this.ctx.fillStyle = this.colors.cream;
            this.ctx.beginPath();
            this.ctx.arc(x, y, 1 + Math.random(), 0, Math.PI * 2);
            this.ctx.fill();
        }
        this.ctx.globalAlpha = 1;
    }

    drawVictoryZone() {
        const chapter = this.chapters[this.currentChapter];
        const x = this.victoryZone.x - this.cameraX;

        if (x < -200 || x > this.canvas.width + 200) return;

        const curtainHeight = 250;
        const curtainWidth = 120;
        const stageTop = this.groundY - curtainHeight;

        // 🎭 STAGE BACKDROP - Dark velvet background
        this.ctx.fillStyle = '#1a0a1a';
        this.ctx.fillRect(x - 80, stageTop, 160, curtainHeight);

        // ✨ Stage lights at top
        const time = Date.now() * 0.003;
        for (let i = 0; i < 5; i++) {
            const lightX = x - 60 + i * 30;
            const brightness = 0.5 + Math.sin(time + i) * 0.3;
            this.ctx.fillStyle = `rgba(255, 215, 0, ${brightness})`;
            this.ctx.beginPath();
            this.ctx.arc(lightX, stageTop + 15, 8, 0, Math.PI * 2);
            this.ctx.fill();

            // Light beam
            this.ctx.fillStyle = `rgba(255, 215, 0, ${brightness * 0.15})`;
            this.ctx.beginPath();
            this.ctx.moveTo(lightX - 15, stageTop + 20);
            this.ctx.lineTo(lightX + 15, stageTop + 20);
            this.ctx.lineTo(lightX + 40, this.groundY);
            this.ctx.lineTo(lightX - 40, this.groundY);
            this.ctx.closePath();
            this.ctx.fill();
        }

        // 🎭 LEFT CURTAIN - Rich red velvet
        const curtainWave = Math.sin(time) * 5;
        this.ctx.fillStyle = '#8B0000';
        this.ctx.beginPath();
        this.ctx.moveTo(x - 80, stageTop);
        this.ctx.quadraticCurveTo(x - 50 + curtainWave, stageTop + curtainHeight * 0.3, x - 30, stageTop + curtainHeight * 0.5);
        this.ctx.quadraticCurveTo(x - 20 + curtainWave, stageTop + curtainHeight * 0.7, x - 15, this.groundY);
        this.ctx.lineTo(x - 80, this.groundY);
        this.ctx.closePath();
        this.ctx.fill();

        // Left curtain highlight
        this.ctx.fillStyle = '#CD5C5C';
        this.ctx.beginPath();
        this.ctx.moveTo(x - 78, stageTop + 10);
        this.ctx.quadraticCurveTo(x - 60 + curtainWave, stageTop + curtainHeight * 0.3, x - 45, stageTop + curtainHeight * 0.4);
        this.ctx.lineTo(x - 55, stageTop + curtainHeight * 0.4);
        this.ctx.quadraticCurveTo(x - 65 + curtainWave, stageTop + curtainHeight * 0.25, x - 78, stageTop + 10);
        this.ctx.fill();

        // 🎭 RIGHT CURTAIN
        this.ctx.fillStyle = '#8B0000';
        this.ctx.beginPath();
        this.ctx.moveTo(x + 80, stageTop);
        this.ctx.quadraticCurveTo(x + 50 - curtainWave, stageTop + curtainHeight * 0.3, x + 30, stageTop + curtainHeight * 0.5);
        this.ctx.quadraticCurveTo(x + 20 - curtainWave, stageTop + curtainHeight * 0.7, x + 15, this.groundY);
        this.ctx.lineTo(x + 80, this.groundY);
        this.ctx.closePath();
        this.ctx.fill();

        // Right curtain highlight
        this.ctx.fillStyle = '#CD5C5C';
        this.ctx.beginPath();
        this.ctx.moveTo(x + 78, stageTop + 10);
        this.ctx.quadraticCurveTo(x + 60 - curtainWave, stageTop + curtainHeight * 0.3, x + 45, stageTop + curtainHeight * 0.4);
        this.ctx.lineTo(x + 55, stageTop + curtainHeight * 0.4);
        this.ctx.quadraticCurveTo(x + 65 - curtainWave, stageTop + curtainHeight * 0.25, x + 78, stageTop + 10);
        this.ctx.fill();

        // 🎭 Curtain header (pelmet)
        this.ctx.fillStyle = '#660000';
        this.ctx.fillRect(x - 85, stageTop - 20, 170, 25);

        // Gold trim on header
        this.ctx.fillStyle = this.colors.gold;
        this.ctx.fillRect(x - 85, stageTop + 3, 170, 5);

        // 👑 Prize floating in center
        this.ctx.font = '50px Arial';
        this.ctx.textAlign = 'center';
        const bobY = Math.sin(time * 2) * 8;
        this.ctx.fillText(chapter.prize, x, stageTop + 120 + bobY);

        // "ENTER" invitation text
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = this.colors.gold;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = this.colors.gold;
        this.ctx.fillText('👑 ENTER 👑', x, stageTop + 180);
        this.ctx.shadowBlur = 0;

        // ✨ Sparkles around entrance
        for (let i = 0; i < 8; i++) {
            const sparkleX = x - 60 + (i % 4) * 40 + Math.sin(time + i) * 10;
            const sparkleY = stageTop + 50 + Math.floor(i / 4) * 100 + Math.cos(time + i) * 10;
            const sparkleSize = 2 + Math.sin(time * 2 + i) * 1.5;
            this.ctx.fillStyle = `rgba(255, 215, 0, ${0.5 + Math.sin(time + i) * 0.5})`;
            this.ctx.beginPath();
            this.ctx.arc(sparkleX, sparkleY, sparkleSize, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawPlayer() {
        const p = this.player;
        // p.x is already in screen coordinates after camera update
        const centerX = p.x + p.width / 2;

        if (p.invincible && Math.floor(p.invincibleTimer / 5) % 2 === 0) {
            this.ctx.globalAlpha = 0.4;
        }

        this.ctx.save();
        this.ctx.translate(centerX, p.y + p.height);

        // Rotate if there is any rotation (Spin, Wiggle, Heart)
        if (p.rotation !== 0) this.ctx.rotate(p.rotation);

        if (p.direction === -1) this.ctx.scale(-1, 1);

        // ===== CUTE CHIBI PIXEL ART STYLE =====

        // --- BIG CURLY DARK HAIR (Back Layer) ---
        this.ctx.fillStyle = '#1a1414'; // Very dark brown/black
        // Main big fluffy curly hair mass
        this.ctx.beginPath();
        this.ctx.arc(0, -85, 38, 0, Math.PI * 2); // Main big hair
        this.ctx.fill();

        // Extra curly puffs around the hair
        this.ctx.beginPath();
        this.ctx.arc(-28, -75, 18, 0, Math.PI * 2); // Left curl
        this.ctx.arc(28, -75, 18, 0, Math.PI * 2);  // Right curl
        this.ctx.arc(-20, -55, 15, 0, Math.PI * 2); // Lower left curl
        this.ctx.arc(20, -55, 15, 0, Math.PI * 2);  // Lower right curl
        this.ctx.arc(0, -60, 12, 0, Math.PI * 2);   // Back center curl
        this.ctx.fill();

        // Hair highlights (subtle brown)
        this.ctx.fillStyle = '#2d2525';
        this.ctx.beginPath();
        this.ctx.arc(-15, -95, 8, 0, Math.PI * 2);
        this.ctx.arc(10, -90, 6, 0, Math.PI * 2);
        this.ctx.fill();

        // --- SMALL CHIBI BODY ---
        // Legs (tiny chibi legs)
        this.ctx.fillStyle = '#f5dcc3'; // Skin
        this.ctx.fillRect(-6, -20, 5, 18); // Left Leg
        this.ctx.fillRect(1, -20, 5, 18);  // Right Leg

        // Cute little shoes
        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.beginPath();
        this.ctx.ellipse(-3, -3, 6, 4, 0, 0, Math.PI * 2); // Left shoe
        this.ctx.ellipse(4, -3, 6, 4, 0, 0, Math.PI * 2);  // Right shoe
        this.ctx.fill();

        // --- DRESS (Purple/Navy with cute details) ---
        this.ctx.fillStyle = '#3d2c5e'; // Deep purple
        this.ctx.beginPath();
        this.ctx.moveTo(0, -55); // Shoulders
        this.ctx.quadraticCurveTo(-18, -35, -15, -20); // Left side
        this.ctx.lineTo(15, -20); // Bottom
        this.ctx.quadraticCurveTo(18, -35, 0, -55); // Right side
        this.ctx.fill();

        // Dress collar/white accent
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.moveTo(-5, -55);
        this.ctx.lineTo(0, -48);
        this.ctx.lineTo(5, -55);
        this.ctx.closePath();
        this.ctx.fill();

        // --- ARMS (tiny chibi arms) ---
        this.ctx.fillStyle = '#f5dcc3';
        this.ctx.beginPath();
        this.ctx.ellipse(-14, -42, 5, 8, -0.3, 0, Math.PI * 2); // Left arm
        this.ctx.ellipse(14, -42, 5, 8, 0.3, 0, Math.PI * 2);  // Right arm
        this.ctx.fill();

        // Little hands
        this.ctx.beginPath();
        this.ctx.arc(-16, -35, 4, 0, Math.PI * 2);
        this.ctx.arc(16, -35, 4, 0, Math.PI * 2);
        this.ctx.fill();

        // --- BIG CHIBI HEAD ---
        this.ctx.fillStyle = '#f8e4d0'; // Warm skin tone
        this.ctx.beginPath();
        this.ctx.arc(0, -75, 22, 0, Math.PI * 2); // Big round head
        this.ctx.fill();

        // --- ROSY CHEEKS (Prominent blush) ---
        this.ctx.fillStyle = '#ffb7b2';
        this.ctx.beginPath();
        this.ctx.ellipse(-12, -72, 6, 4, 0, 0, Math.PI * 2); // Left blush
        this.ctx.ellipse(12, -72, 6, 4, 0, 0, Math.PI * 2);  // Right blush
        this.ctx.fill();

        // --- CUTE PIXEL EYES ---
        // Eye whites
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(-10, -82, 8, 10);
        this.ctx.fillRect(2, -82, 8, 10);

        // Pupils (big and cute)
        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.fillRect(-8, -80, 5, 7);
        this.ctx.fillRect(4, -80, 5, 7);

        // Eye shine
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(-7, -79, 2, 2);
        this.ctx.fillRect(5, -79, 2, 2);

        // --- CUTE SMILE ---
        this.ctx.fillStyle = '#c47d8b';
        this.ctx.beginPath();
        this.ctx.arc(0, -70, 4, 0.1, Math.PI - 0.1); // Little smile
        this.ctx.fill();

        // --- FRONT HAIR (Curly bangs) ---
        this.ctx.fillStyle = '#1a1414';
        // Curly bangs across forehead
        this.ctx.beginPath();
        this.ctx.arc(-12, -92, 10, 0, Math.PI * 2);
        this.ctx.arc(0, -95, 12, 0, Math.PI * 2);
        this.ctx.arc(12, -92, 10, 0, Math.PI * 2);
        this.ctx.fill();

        // Side curls framing face
        this.ctx.beginPath();
        this.ctx.arc(-20, -78, 8, 0, Math.PI * 2);
        this.ctx.arc(20, -78, 8, 0, Math.PI * 2);
        this.ctx.fill();

        // Hair highlight accent
        this.ctx.fillStyle = '#2d2525';
        this.ctx.beginPath();
        this.ctx.arc(-5, -97, 4, 0, Math.PI * 2);
        this.ctx.arc(8, -94, 3, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
        this.ctx.globalAlpha = 1;
    }

    gameLoop() {
        if (!this.gameRunning || this.isPaused) return;

        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// --- SOUND MANAGER (Procedural Audio) ---
class SoundManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.muted = false;
        this.musicBuffers = {}; // Multiple buffers for different songs
        this.musicSource = null;
        this.musicGain = this.ctx.createGain();
        this.musicGain.connect(this.ctx.destination);
        this.currentChapter = 0;

        // Song files for each chapter with start timestamps
        // User provided: Stage 1 uses Bewitched, Stages 2-6 use different songs
        this.chapterSongs = {
            0: { file: 'Laufey - Bewitched (Official Music Video).mp3', start: 59, duration: 60 },
            1: { file: 'Laufey - From The Start (Official Music Video).mp3', start: 5, duration: 60 },
            2: { file: 'Laufey - Haunted (Official Audio).mp3', start: 58, duration: 60 },
            3: { file: 'Laufey - Letter To My 13 Year Old Self (Official Audio).mp3', start: 12, duration: 60 },
            4: { file: 'Laufey - Dreamer (Official Audio).mp3', start: 0, duration: 60 },
            5: { file: 'Laufey - Promise (Official Audio).mp3', start: 13, duration: 60 }
        };

        // Define Music Segments (for intro/victory screens using Bewitched)
        this.segments = {
            intro: { file: 'Laufey - Bewitched (Official Music Video).mp3', start: 59, duration: 15 },
            victory: { file: 'Laufey - Bewitched (Official Music Video).mp3', start: 165, duration: 30 }
        };

        // Applause sound effect
        this.applauseFile = 'Crowd Cheering Applause.mp3';
        this.applauseBuffer = null;

        this.loadAllMusic();
    }

    async loadAllMusic() {
        // Load all unique song files
        const allFiles = new Set();
        Object.values(this.chapterSongs).forEach(song => allFiles.add(song.file));
        Object.values(this.segments).forEach(seg => allFiles.add(seg.file));

        for (const file of allFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const arrayBuffer = await response.arrayBuffer();
                    this.musicBuffers[file] = await this.ctx.decodeAudioData(arrayBuffer);
                    console.log(`Loaded: ${file}`);
                } else {
                    console.warn(`Could not load: ${file}`);
                }
            } catch (e) {
                console.warn(`Failed to load ${file}:`, e.message);
            }
        }

        // Load applause sound separately
        try {
            const applauseResponse = await fetch(this.applauseFile);
            if (applauseResponse.ok) {
                const arrayBuffer = await applauseResponse.arrayBuffer();
                this.applauseBuffer = await this.ctx.decodeAudioData(arrayBuffer);
                console.log('Applause sound loaded!');
            }
        } catch (e) {
            console.warn('Failed to load applause:', e.message);
        }

        console.log("All audio loading complete!");
    }

    // Play crowd applause for victory celebration
    playApplause() {
        if (this.muted || !this.applauseBuffer) return;

        const source = this.ctx.createBufferSource();
        const gain = this.ctx.createGain();

        source.buffer = this.applauseBuffer;
        gain.gain.value = 0.4; // Good volume for applause

        this.applauseSource = source; // Track so we can stop it
        source.connect(gain);
        gain.connect(this.ctx.destination);

        source.start(0);
        console.log('🎉 Crowd applause playing!');
    }

    // Stop the applause sound
    stopApplause() {
        if (this.applauseSource) {
            try {
                this.applauseSource.stop();
            } catch (e) { } // Ignore if already stopped
            this.applauseSource = null;
        }
    }

    playTone(freq, type, duration, vol = 0.1) {
        if (this.muted) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.frequency.value = freq;
        osc.type = type;

        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playJump() {
        if (this.muted) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    playCollect() {
        this.playTone(880, 'sine', 0.1, 0.1);
        setTimeout(() => this.playTone(1760, 'sine', 0.1, 0.1), 50);
    }

    playDie() {
        this.playTone(100, 'sawtooth', 0.5, 0.2);
    }

    playWin() {
        // CRAZY CELEBRATION NOISE! 🎉
        const now = this.ctx.currentTime;
        for (let i = 0; i < 15; i++) {
            const freq = 500 + Math.random() * 1000;
            this.playTone(freq, 'square', 0.1, 0.1);
            if (i % 3 === 0) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.frequency.setValueAtTime(400, now + i * 0.1);
                osc.frequency.exponentialRampToValueAtTime(1200, now + i * 0.1 + 0.2);
                gain.gain.setValueAtTime(0.1, now + i * 0.1);
                gain.gain.linearRampToValueAtTime(0, now + i * 0.1 + 0.2);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + i * 0.1);
                osc.stop(now + i * 0.1 + 0.2);
            }
        }
    }

    playMusicSegment(segmentName) {
        if (this.muted) return;

        // Stop current music
        this.stopMusic();

        const segment = this.segments[segmentName];
        if (!segment) return;

        const buffer = this.musicBuffers[segment.file];
        if (!buffer) {
            console.warn(`Buffer not loaded for: ${segment.file}`);
            return;
        }

        this.musicSource = this.ctx.createBufferSource();
        this.musicSource.buffer = buffer;
        this.musicSource.loop = true;
        this.musicSource.loopStart = segment.start;
        this.musicSource.loopEnd = buffer.duration; // Play to end of song, then loop

        this.musicSource.connect(this.musicGain);

        this.musicSource.start(0, segment.start);
        this.musicGain.gain.value = 0.3; // Full volume for presentations
    }

    // Play music for a specific chapter
    playChapterMusic(chapterIndex) {
        if (this.muted) return;

        this.stopMusic();

        const song = this.chapterSongs[chapterIndex];
        if (!song) return;

        const buffer = this.musicBuffers[song.file];
        if (!buffer) {
            console.warn(`Buffer not loaded for chapter ${chapterIndex}: ${song.file}`);
            return;
        }

        this.currentChapter = chapterIndex;

        this.musicSource = this.ctx.createBufferSource();
        this.musicSource.buffer = buffer;
        this.musicSource.loop = true;
        this.musicSource.loopStart = song.start; // Start of loop
        this.musicSource.loopEnd = buffer.duration; // Loop to end of song

        this.musicSource.connect(this.musicGain);

        this.musicSource.start(0, song.start);
        this.musicGain.gain.value = 0.15;
        console.log(`Playing chapter ${chapterIndex + 1} music: ${song.file} from ${song.start}s to ${buffer.duration}s (loops)`);
    }

    stopMusic() {
        if (this.musicSource) {
            try {
                this.musicSource.stop();
                this.musicSource.disconnect();
            } catch (e) { } // Ignore if already stopped
            this.musicSource = null;
        }
    }

    playStep() {
        if (this.muted) return;
        // Subtle footstep noise
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05); // Short blip

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.game = new LaufeyGame();
});
