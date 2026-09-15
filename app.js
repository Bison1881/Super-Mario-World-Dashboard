// Super Mario World Strategy Dashboard - Core Application Logic

// --- GAME DATASET ---
const SMW_DATA = {
    regions: {
        yoshi: {
            name: "🏝️ Yoshi’s Island",
            description: "The introductory overworld region sets the groundwork for tracking down secret paths and unearthing Switch Palaces.",
            secrets: [
                { level: "Yoshi's Island 2", tip: "Contains the secret path leading down a green pipe near the midway checkpoint. Find the key and slot it into the keyhole to build a direct bridge to the Yellow Switch Palace." },
                { level: "Yoshi's Island 4", tip: "Grab a Cape or Yoshi to reach the floating key safely tucked away in the deep water section to uncover the warp to Star World 1." }
            ],
            coins: ["Yoshi's Island 1", "Yoshi's Island 2", "Yoshi's Island 3", "Yoshi's Island 4", "Yellow Switch Palace", "Iggy's Castle"]
        },
        donut: {
            name: "🥞 Donut Plains",
            description: "A broad map landscape filled with complex split paths, airborne secrets, and game-changing shortcuts.",
            secrets: [
                { level: "Donut Plains 1", tip: "Use Cape Mario to fly directly upwards near the middle row of the stage to uncover a high-altitude green plateau hiding a key. This reveals Donut Secret 1 and access to the Green Switch Palace." },
                { level: "Donut Plains 2", tip: "Use a shell or Cape Mario to clear the blocks blocking a green pipe on the ceiling near the moving wall section. Climb up to find the key to open a shortcut to the Donut Ghost House." },
                { level: "Donut Ghost House", tip: "Break standard rules by running up the wall and sprinting along the dark ceiling space beyond the screen limits. Drop down at the far right to find a secret door unlocking the Top Secret Area for infinite Yoshis and items." }
            ],
            coins: ["Donut Plains 1", "Donut Plains 2", "Donut Ghost House", "Donut Plains 3", "Donut Plains 4", "Donut Secret 1", "Donut Secret 2", "Green Switch Palace", "Morton's Castle"]
        },
        vanilla: {
            name: "🌋 Vanilla Dome",
            description: "An underground cavern system packed with labyrinthine tunnels, lava pockets, and slippery terrain.",
            secrets: [
                { level: "Vanilla Dome 1", tip: "Scale the massive mountain of blocks past the halfway line using a Cape or a hidden vine block to find a high ledge. Insert the key to forge a trail to Vanilla Secret 1 and the Red Switch Palace." },
                { level: "Vanilla Dome 2", tip: "Wade carefully through the lower-left aquatic routes. Carry a blue P-Switch past the charging enemies to turn solid brown blocks into temporary coins, allowing you to slip through the floor straight to the Star World 3 gateway." }
            ],
            coins: ["Vanilla Dome 1", "Vanilla Dome 2", "Vanilla Ghost House", "Vanilla Dome 3", "Vanilla Dome 4", "Vanilla Secret 1", "Vanilla Secret 2", "Red Switch Palace", "Lemmy's Castle"]
        },
        bridges: {
            name: "🌉 Twin Bridges / Cookie Mountain",
            description: "This high-altitude zone bridges the gap over the deep waters of Dinosaur Land, requiring precise jumping and flight mechanics.",
            secrets: [
                { level: "Cheese Bridge Area", tip: "Ride Yoshi all the way to the end of the line. Fly completely underneath the normal giant goal post, then leap off Yoshi mid-air to land behind it. Walk right to hit a hidden secondary goal post that unlocks Soda Lake and leads to Star World 4." },
                { level: "Cookie Mountain", tip: "This stage is packed with Monty Moles and Sumo Bros. Look out for the hidden 1-Up mushrooms inside the high floating item blocks that require a Cape or a well-timed jump off a Koopa shell to reach." }
            ],
            coins: ["Cheese Bridge Area", "Cookie Mountain", "Soda Lake", "Butter Bridge 1", "Butter Bridge 2", "Ludwig's Castle"]
        },
        forest: {
            name: "🌳 Forest of Illusion",
            description: "A dense, confusing maze of trees designed to trap unsuspecting players in infinite loops unless they locate the true secret paths.",
            secrets: [
                { level: "Forest of Illusion 1", tip: "Get a Balloon item or use Cape Mario to slowly float down beneath the main log bridge right before the standard exit. A hidden key and keyhole rest safely on a tiny platform below the normal screen view." },
                { level: "Forest of Illusion 2", tip: "Dive deep and swim along the absolute bottom floor of the water level. Look for a false yellow wall block that you can pass straight through to find a hidden alcove containing the secret key and Blue Switch Palace access." },
                { level: "Forest of Illusion 3", tip: "Instead of jumping over the massive green pipe near the finish line, go down inside it. Use a spin-jump as Big Mario to smash the rotating yellow blocks underneath you to drop directly onto the hidden key." }
            ],
            coins: ["Forest of Illusion 1", "Forest of Illusion 2", "Forest of Ghost House", "Forest of Illusion 3", "Forest of Illusion 4", "Forest Secret Area", "Blue Switch Palace", "Roy's Castle"]
        },
        chocolate: {
            name: "⛰️ Chocolate Island",
            description: "A rugged, mountainous wasteland where several stages change their layouts dynamically based on your timer and coin count.",
            secrets: [
                { level: "Chocolate Island 2", tip: "The rooms you enter change based on your speed and coin collection. To reach the secret key room, make sure you sprint through the first areas quickly so that you exit the second room with more than 250 seconds left on the game clock." },
                { level: "Chocolate Island 3", tip: "Grab a Feather and run up a massive runway to get maximum speed. Fly directly over and past the normal giant goal post, continuing right onto a secret high-altitude plateau to find the hidden exit to Star World 5." }
            ],
            coins: ["Chocolate Island 1", "Chocolate Island 2", "Chocolate Ghost House", "Chocolate Island 3", "Chocolate Island 4", "Chocolate Island 5", "Wendy's Castle"]
        },
        bowser: {
            name: "🌋 Valley of Bowser",
            description: "The final dark underground valley buried deep beneath the earth, serving as the base for Bowser's heavily guarded fortress.",
            secrets: [
                { level: "Valley of Bowser 2", tip: "Reach the final cavern area where the massive yellow dirt walls continuously rise and fall. Stand on the final moving wall block and let it carry you up into the invisible ceiling space. Walk left through the wall to find the hidden key room." },
                { level: "Valley Ghost House", tip: "Hit the P-Switch located in the second room, then run as fast as you can to the right. Before the music stops, use the temporary solid silver coin blocks to build a staircase up to a door floating high in the air to unlock the Bowser's Castle Back Door." }
            ],
            coins: ["Valley of Bowser 1", "Valley of Bowser 2", "Valley Ghost House", "Valley of Bowser 3", "Valley of Bowser 4", "Valley Fortress", "Larry's Castle"]
        },
        star: {
            name: "⭐ Star Road & Special Zone",
            description: "Clearing the secrets of the Star Road opens up the ultimate test of skill in Super Mario World, leading to a complete visual overhaul of the game world.",
            secrets: [
                { level: "Star World 1 to 5", tip: "Every single Star World level requires you to find a hidden key and keyhole to unlock the next point on the star loop. These stages are where you can permanently find and hatch Red, Blue, and Yellow Yoshis." },
                { level: "Star World 5 Secret", tip: "Use a combination of the Blue, Green, and Red switch blocks at the very top of the stage to sprint across the massive open gap to find the final keyhole. This spawns the warp up to the Special Zone." },
                { level: "The Special Zone", tip: "Clear all 8 ultra-difficult stages (Gnarly, Tubular, Way Cool, Awesome, Groovy, Mondo, Outrageous, and Fun). Upon beating 'Fun,' a golden warp star returns you to Yoshi's House. The overworld map shifts to an autumn colour palette, and classic enemies transform (Koopas turn into Mario masks)." }
            ],
            coins: ["Star World 1", "Star World 2", "Star World 3", "Star World 4", "Star World 5", "Gnarly", "Tubular", "Way Cool", "Awesome", "Groovy", "Mondo", "Outrageous", "Fun"]
        }
    },
    yoshiMatrix: [
        { yoshi: "🟢 Green Yoshi", green: "Normal Spit", red: "Fire Breath (3 Fireballs)", blue: "Flight Abilities", yellow: "Sand Cloud Shockwave" },
        { yoshi: "🔴 Red Yoshi", green: "Fire Breath (3 Fireballs)", red: "Fire Breath (3 Fireballs)", blue: "Fire Breath (3 Fireballs)", yellow: "Fire Breath (3 Fireballs)" },
        { yoshi: "🔵 Blue Yoshi", green: "Flight Abilities", red: "Flight Abilities", blue: "Flight Abilities", yellow: "Flight Abilities" },
        { yoshi: "🟡 Yellow Yoshi", green: "Sand Cloud Shockwave", red: "Sand Cloud Shockwave", blue: "Sand Cloud Shockwave", yellow: "Sand Cloud Shockwave" }
    ],
    castleRooms: [
        { room: "Room 1", hazard: "Chargin' Chucks & Moving Platforms", difficulty: "Easy", strat: "Ideal starting room. Simply time your jumps past the Chucks clapping and throwing baseballs." },
        { room: "Room 2", hazard: "Rising Lava & Fence Climbing", difficulty: "Medium", strat: "Fast room if you are good at climbing mechanics. Punch Koopas from the other side of the fence." },
        { room: "Room 3", hazard: "P-Switch timed block run over spikes", difficulty: "Hard", strat: "Requires precise sprinting. Hit the switch and slide across the ice platforms before they disappear." },
        { room: "Room 4", hazard: "Moving block pillars & Thwomps", difficulty: "Hard", strat: "High crushing hazard. Move forward bit by bit, letting Thwomps drop safely ahead of you." },
        { room: "Room 5", hazard: "Spiked pillars & conveyor belts", difficulty: "Easy", strat: "Recommended tier-2 room. Watch the ceiling pillars; they track down slowly giving plenty of escape time." },
        { room: "Room 6", hazard: "Underwater spike maze & Fish", difficulty: "Medium", strat: "Dangerous swimming physics. Keep low to avoid precision spikes near the ceiling lanes." },
        { room: "Room 7", hazard: "Magikoopa block-shifting arena", difficulty: "Hard", strat: "Unpredictable. Magikoopas can vanish blocks underneath your feet over bottomless pits." },
        { room: "Room 8", hazard: "Chargin' Chuck gauntlet sprint", difficulty: "Medium", strat: "Lots of active enemies. Bring a Cape to fly/spin over them, or stomp them carefully." }
    ],
    glitches: [
        { name: "☁️ Item Stock Cloud Swap", description: "Manipulates game memory to drop an impossible item like a Lakitu Cloud or a Bowser Stage End Orb directly into your spare item stock slot.", steps: "1. Go to a level with Lakitu (e.g., Donut Plains 4).\n2. Position Yoshi directly beneath Lakitu.\n3. Spin jump or hit an enemy sprite at the exact pixel frame Yoshi's tongue catches an item.\n4. When successful, the item box graphics corrupt into a glitched cloud icon, giving you infinite flight across subsequent worlds." },
        { name: "👅 Yoshi Tongue Eat-Anything Glitch", description: "Tricks Yoshi's mouth collision engine to grab items through solid walls, screens, or pull out glitched assets.", steps: "1. Advance to any stage with moving screen boundaries.\n2. Turn around and execute a tongue strike right as an entity or item block is scrolling perfectly halfway off the monitor rim.\n3. Yoshi will grab a placeholder byte, turning into a multi-coloured shell or creating instant 1-Ups." },
        { name: "🧗 Wall Clip / Dismount Break", description: "Bypasses structural map collision lines completely, letting speedrunners skip entire rooms or walk out of bounds.", steps: "1. Ride Yoshi up against a 1-tile wide corner wall or shifting block pillar.\n2. Run at max momentum, then press the Deselect/Dismount key combination exactly on the frame Mario overlaps the block edge.\n3. Mario's hitbox snaps inside the wall platform, letting you run across the screen ceiling straight to the finish line." }
    ]
};

// --- APPLICATION STATE CONTROLLER ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const buttons = Array.from(document.querySelectorAll('.tab-btn'));
    const activeBtn = buttons.find(btn => btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) activeBtn.classList.add('active');

    const container = document.getElementById('main-content');
    if (!container) return;
    container.innerHTML = ''; 

    if (tabId === 'maps') {
        renderMapsModule(container);
    } else if (tabId === 'yoshi') {
        renderYoshiModule(container);
    } else if (tabId === 'coins') {
        renderCoinsModule(container);
    } else if (tabId === 'castle') {
        renderCastleModule(container);
    } else if (tabId === 'glitches') {
        renderGlitchesModule(container);
    }
}

// --- MODULE RENDER ENGINES ---
function renderMapsModule(container) {
    let selectOptions = '';
    for (let key in SMW_DATA.regions) {
        selectOptions += `<option value="${key}">${SMW_DATA.regions[key].name}</option>`;
    }

    container.innerHTML = `
        <div class="content-panel">
            <h2>🗺️ Area Secret Selector</h2>
            <p>Select a region from Dinosaur Land to reveal secret exit guides and structural map tips.</p>
            <div style="margin-bottom: 20px;">
                <select id="region-picker" style="padding: 10px; width: 100%; max-width: 300px; background: #1a1a2e; color: #fff; border: 2px solid #f4d160; border-radius: 4px; font-size: 16px;">
                    ${selectOptions}
                </select>
            </div>
            <div id="region-details" style="background: rgba(0,0,0,0.2); padding: 20px; border-left: 4px solid #f4d160; border-radius: 4px;">
            </div>
        </div>
    `;

    const picker = document.getElementById('region-picker');
    picker.addEventListener('change', (e) => {
        updateRegionDisplay(e.target.value);
    });

    updateRegionDisplay(Object.keys(SMW_DATA.regions));
}

function updateRegionDisplay(regionKey) {
    const data = SMW_DATA.regions[regionKey];
    const display = document.getElementById('region-details');
    if (!display) return;
    
    let secretsHTML = '';
    data.secrets.forEach(sec => {
        secretsHTML += `
            <div style="margin-top: 15px; background: #162447; padding: 15px; border-radius: 4px;">
                <strong style="color: #f4d160; font-size: 18px;">📍 ${sec.level}</strong>
                <p style="margin: 5px 0 0 0; line-height: 1.5; color: #e2e2e2;">${sec.tip}</p>
            </div>
        `;
    });

    display.innerHTML = `
        <h3 style="margin-top: 0; color: #fff;">${data.name}</h3>
        <p style="font-style: italic; color: #cbd5e1;">${data.description}</p>
        <h4 style="margin-top: 20px; color: #f4d160; border-bottom: 1px dashed rgba(244,209,96,0.3); padding-bottom: 5px;">🔑 Hidden Exits & Secret Instructions</h4>
        ${secretsHTML}
    `;
}

function renderYoshiModule(container) {
    let rowsHTML = '';
    SMW_DATA.yoshiMatrix.forEach(row => {
        rowsHTML += `
            <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: #fff;">${row.yoshi}</td>
                <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #4ade80;">${row.green}</td>
                <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #f87171;">${row.red}</td>
                <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #60a5fa;">${row.blue}</td>
                <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #fbbf24;">${row.yellow}</td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div class="content-panel">
            <h2>🦖 Yoshi Color Power Matrix</h2>
            <p>Cross-reference Yoshi variations with the shell types they chew to see what special power activates instantly.</p>
            <div style="overflow-x: auto; margin-top: 15px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: #162447; border: 2px solid #f4d160;">
                    <thead>
                        <tr style="background: #f4d160; color: #1a1a2e;">
                            <th style="padding: 12px;">Yoshi Variant</th>
                            <th style="padding: 12px;">Green Shell</th>
                            <th style="padding: 12px;">Red Shell</th>
                            <th style="padding: 12px;">Blue Shell</th>
                            <th style="padding: 12px;">Yellow Shell</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>
            </div>
            <div style="margin-top: 25px; padding: 15px; background: rgba(244,209,96,0.1); border-radius: 6px; border: 1px solid #f4d160;">
                <h4 style="margin: 0 0 10px 0; color: #f4d160;">🎒 Top Secret Area Item Generator Strategy</h4>
                <p style="margin: 0; line-height: 1.5; font-size: 15px; color: #e2e2e2;">
                    If you are currently <strong>Small Mario</strong>, hit the top-left item block first to obtain a Super Mushroom, then hit the top-right block to upgrade directly to a Cape Feather. The bottom two blocks house Fire Flowers. The center area yields a fresh Green Yoshi block hook—if you already ride Yoshi, it gives an instant 1-Up Mushroom instead!
                </p>
            </div>
        </div>
    `;
}

function renderCoinsModule(container) {
    let zonesHTML = '';
    
    for (let key in SMW_DATA.regions) {
        const zone = SMW_DATA.regions[key];
        let itemsHTML = '';
        
        zone.coins.forEach(lvl => {
            const storageId = `smw_coin_${lvl.replace(/[^a-zA-Z0-9]/g, '_')}`;
            const isChecked = localStorage.getItem(storageId) === 'true' ? 'checked' : '';
            
            itemsHTML += `
                <label style="display: flex; align-items: center; background: #162447; padding: 10px; border-radius: 4px; cursor: pointer; user-select: none; transition: 0.2s; color: #fff;">
                    <input type="checkbox" id="${storageId}" ${isChecked} onchange="toggleCoinStorage('${storageId}')" style="margin-right: 12px; transform: scale(1.3); accent-color: #f4d160;">
                    <span>${lvl}</span>
                </label>
            `;
        });

        zonesHTML += `
            <div style="background: rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <h3 style="color: #f4d160; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">${zone.name}</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px;">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="content-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
        <div class="content-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                <div>
                    <h2>🪙 Dragon Coin Tracker Checklist</h2>
                    <p style="margin: 0; color: #cbd5e1;">Collect all 5 Dragon Coins in a single run to verify stage completion. Progress saves to local storage!</p>
                </div>
                <button onclick="resetCoinProgress()" style="background: #e74c3c; color: white; border: none; padding: 8px 15px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 14px;">🧹 Reset All Progress</button>
            </div>
            <div>
                ${zonesHTML}
            </div>
        </div>
    `;
}

window.toggleCoinStorage = function(storageId) {
    const chk = document.getElementById(storageId);
    if (chk) {
        localStorage.setItem(storageId, chk.checked ? 'true' : 'false');
    }
};

window.resetCoinProgress = function() {
    if (confirm("Are you sure you want to completely clear your checked Dragon Coins progress?")) {
        const targets = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('smw_coin_')) {
                targets.push(key);
            }
        }
        targets.forEach(key => localStorage.removeItem(key));
        switchTab('coins');
    }
};

function renderCastleModule(container) {
    let roomsHTML = '';
    SMW_DATA.castleRooms.forEach(rm => {
        let diffColor = '#4ade80';
        if (rm.difficulty === 'Medium') diffColor = '#fbbf24';
        if (rm.difficulty === 'Hard') diffColor = '#f87171';

        roomsHTML += `
            <div style="background: #162447; border: 1px solid rgba(255,255,255,0.05); border-left: 5px solid ${diffColor}; padding: 15px; border-radius: 4px; display: flex; flex-direction: column; gap: 5px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong style="font-size: 18px; color: #f4d160;">🚪 ${rm.room}</strong>
                    <span style="background: ${diffColor}; color: #1a1a2e; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${rm.difficulty}</span>
                </div>
                <div style="font-size: 14px; color: #cbd5e1;"><span style="font-weight: bold; color: #fff;">Hazards:</span> ${rm.hazard}</div>
                <div style="margin-top: 5px; line-height: 1.4; font-size: 15px; color: #e2e2e2;">${rm.strat}</div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="content-panel">
            <h2>🏰 Bowser's Castle Front Door Navigator</h2>
            <p>The Front Door forces you to select four rooms to get to Bowser. Choose your optimal layout map path to avoid high crushing risks:</p>
            
            <div style="background: rgba(244,209,96,0.1); border: 2px dashed #f4d160; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
                <h4 style="margin: 0 0 5px 0; color: #f4d160; font-size: 16px;">⏱️ Speedrun & Safety Strategy Routing</h4>
                <p style="margin: 0; line-height: 1.5; color: #e2e2e2;">
                    To bypass the hardest obstacles, select <strong>Room 1 or Room 2</strong> in the first gauntlet set, followed directly by entering <strong>Room 5 or Room 6</strong> in the second hallway block. This sets up the absolute fastest run to reach the final dark flashlight corridor without risking death to unpredictable block-shifting Magikoopas.
                </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px;">
                ${roomsHTML}
            </div>
        </div>
    `;
}

function renderGlitchesModule(container) {
    let glitchesHTML = '';
    SMW_DATA.glitches.forEach(gl => {
        glitchesHTML += `
            <div style="background: #162447; border: 2px solid #f4d160; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                <h3 style="margin-top: 0; color: #f4d160; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 8px;">${gl.name}</h3>
                <p style="font-style: italic; color: #cbd5e1; margin-bottom: 15px;">${gl.description}</p>
                <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 4px;">
                    <strong style="color: #fff; display: block; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">📋 Step-by-Step Instructions:</strong>
                    <div style="white-space: pre-wrap; line-height: 1.6; font-size: 15px; color: #e2e2e2;">${gl.steps}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="content-panel">
            <h2>🔧 Glitch & Speedrun Exploit Archive</h2>
            <p>Explore legendary glitches used by retro enthusiasts and speedrunners to break game code memory, skip barriers, or fill their stock item windows instantly.</p>
            <div style="margin-top: 20px;">
                ${glitchesHTML}
            </div>
        </div>
    `;
}

window.switchTab = switchTab;

window.addEventListener('DOMContentLoaded', () => {
    switchTab('maps');
});
