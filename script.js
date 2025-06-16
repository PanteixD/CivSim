// --- Simplex Noise Library (Minimized) ---
// (Keep the simplex noise library code here)
var SimplexNoise=(function(){var F2=0.5*(Math.sqrt(3.0)-1.0);var G2=(3.0-Math.sqrt(3.0))/6.0;var F3=1.0/3.0;var G3=1.0/6.0;var F4=(Math.sqrt(5.0)-1.0)/4.0;var G4=(5.0-Math.sqrt(5.0))/20.0;function Alea(){var s0=0;var s1=0;var s2=0;var c=1;var mash=Mash();s0=mash(' ');s1=mash(' ');s2=mash(' ');for(var i=0;i<arguments.length;i++){s0-=mash(arguments[i]);if(s0<0){s0+=1;} s1-=mash(arguments[i]);if(s1<0){s1+=1;} s2-=mash(arguments[i]);if(s2<0){s2+=1;}} mash=null;var random=function(){var t=2091639*s0+c*2.3283064365386963e-10;s0=s1;s1=s2;return s2=t-(c=t|0);};random.uint32=function(){return random()*0x100000000;};random.fract53=function(){return random()+(random()*0x200000|0)*1.1102230246251565e-16;};random.version='Alea 0.9';random.args=arguments;return random;} function Mash(){var n=0xefc8249d;var mash=function(data){data=data.toString();for(var i=0;i<data.length;i++){n+=data.charCodeAt(i);var h=0.02519603282416938*n;n=h>>>0;h-=n;h*=n;n=h>>>0;h-=n;n+=h*0x100000000;} return(n>>>0)*2.3283064365386963e-10;};mash.version='Mash 0.9';return mash;} function SimplexNoise(random){if(!random)random=Math.random;this.p=new Uint8Array(256);this.perm=new Uint8Array(512);this.permMod12=new Uint8Array(512);for(var i=0;i<256;i++){this.p[i]=i;} for(i=0;i<255;i++){var r=i+~~(random()*(256-i));var aux=this.p[i];this.p[i]=this.p[r];this.p[r]=aux;} for(i=0;i<512;i++){this.perm[i]=this.p[i&255];this.permMod12[i]=this.perm[i]%12;}} SimplexNoise.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),noise2D:function(xin,yin){var permMod12=this.permMod12;var perm=this.perm;var grad3=this.grad3;var n0=0;var n1=0;var n2=0;var s=(xin+yin)*F2;var i=Math.floor(xin+s);var j=Math.floor(yin+s);var t=(i+j)*G2;var X0=i-t;var Y0=j-t;var x0=xin-X0;var y0=yin-Y0;var i1,j1;if(x0>y0){i1=1;j1=0;}else{i1=0;j1=1;} var x1=x0-i1+G2;var y1=y0-j1+G2;var x2=x0-1.0+2.0*G2;var y2=y0-1.0+2.0*G2;var ii=i&255;var jj=j&255;var t0=0.5-x0*x0-y0*y0;if(t0>=0){var gi0=permMod12[ii+perm[jj]]*3;t0*=t0;n0=t0*t0*(grad3[gi0]*x0+grad3[gi0+1]*y0);} var t1=0.5-x1*x1-y1*y1;if(t1>=0){var gi1=permMod12[ii+i1+perm[jj+j1]]*3;t1*=t1;n1=t1*t1*(grad3[gi1]*x1+grad3[gi1+1]*y1);} var t2=0.5-x2*x2-y2*y2;if(t2>=0){var gi2=permMod12[ii+1+perm[jj+1]]*3;t2*=t2;n2=t2*t2*(grad3[gi2]*x2+grad3[gi2+1]*y2);} return 70.0*(n0+n1+n2);},};SimplexNoise.create=function(seed){if(seed){return new SimplexNoise(new Alea(seed));}else{return new SimplexNoise(Math.random);}};return SimplexNoise;})();
// --- End Simplex Noise Library ---


// gameConfig and translations are now globally available from data.js
// The async functions loadResourcesFromXML and loadBuildingsFromXML are also globally available from data.js

// --- DOM Element References (Cached) ---
const DOMElements = {
    grid: document.getElementById('grid'), actionButton: document.getElementById('action-button'), tameButton: document.getElementById('tame-button'),
    inventoryDisplay: document.getElementById('inventory'), inventoryContent: document.querySelector('#inventory'),
    middleControls: document.getElementById('middle-controls'), buildingsList: document.getElementById('buildings-list'),
    unitsPanel: document.getElementById('units-panel'), logsPanel: document.getElementById('logs-panel'), tamedAnimalsPanel: document.getElementById('tamed-animals-panel'),
    upgradeInfoDisplay: document.getElementById('upgrade-info'), logsList: document.getElementById('logs-list'), tamedAnimalsList: document.getElementById('tamed-animals-list'),
    logSearchInput: document.getElementById('log-search-input'), logFilterCheckbox: document.getElementById('log-filter-checkbox'),
    resourceNameDisplay: document.getElementById('resource-name'), researchPointsDisplay: document.getElementById('research-points'),
    researchStatusDisplay: document.getElementById('research-status-display'),
    colonyNameContainer: document.getElementById('colony-name-container'), colonyNameDisplay: document.getElementById('colony-name-display'),
    renameColonyButton: document.getElementById('rename-colony-button'),
    alertMessageElement: document.getElementById('alert-message'), unitDisplayBar: document.getElementById('unit-display-bar'),
    unitBiomeDisplay: document.getElementById('unit-biome'), unitCoordsDisplay: document.getElementById('unit-coords'),
    unitExpDisplay: document.getElementById('unit-exp'), loadFileInput: document.getElementById('load-file-input'),
    languageSwitchButton: document.getElementById('language-switch-button'),
    tutorialModal: document.getElementById('tutorial-modal'), tutorialTitle: document.getElementById('tutorial-title'),
    tutorialStepsList: document.getElementById('tutorial-steps'), closeTutorialButton: document.getElementById('close-tutorial-button'),
    buildingsListUl: document.querySelector('#buildings-list ul'), unitsListUl: document.getElementById('units-list'),
    upgradeInfoContent: document.querySelector('#upgrade-info .panel-content'),
    saveButton: document.getElementById('save-button'), loadButton: document.getElementById('load-button'),
    cheatRevealButton: document.getElementById('cheat-reveal-button'),
    techTreeModal: document.getElementById('tech-tree-modal'), techTreeModalContent: document.getElementById('tech-tree-modal-content'),
    techTreeDisplayArea: document.getElementById('tech-tree-display-area'), techTreeTitle: document.getElementById('tech-tree-title'),
    closeTechTreeButton: document.getElementById('close-tech-tree-button'), techTreeLegend: document.getElementById('tech-tree-legend'),
    techLinesSvg: document.getElementById('tech-lines-svg'),
};


// --- Game State Variables ---
let gameState = { units: [], nextUnitId: 0, selectedUnitId: null, inventory: {}, inventoryCapacity: {}, discoveredResources: new Set(), tamedAnimals: [],
    researchPoints: 0, activeResearch: null, completedTech: new Set(), selectedBuilding: null, unitToDeploy: null, productionProgress: { wheat: 0, coal: 0, quarry: 0, milk: 0, wool: 0 },
    colonyName: "New Colony", currentLanguage: 'en', eventLogs: [], viewOffsetX: 0, viewOffsetY: 0, worldData: {}, revealedTiles: new Set(), naturallyRevealedTiles: new Set(), cheatMapRevealed: false, highlightEnabled: false, alertTimeout: null, gameInitialized: false };

// --- Noise Generators ---
let noise = { biome: null, feature: null, water: null };


// --- Helper Functions ---
const getLang = () => translations[gameState.currentLanguage] || translations.en;
const getLangMsg = (key, args = []) => { let msg = getLang()[key] || key; const argsArray = Array.isArray(args) ? args : [args]; argsArray.forEach((arg, index) => { const translatedArg = getLang()[arg] !== undefined ? getLang()[arg] : arg; msg = msg.replace(`{${index}}`, translatedArg); }); return msg; };
const getFormattedTime = () => { const n = new Date(); return `${n.getHours().toString().padStart(2, '0')}:${n.getMinutes().toString().padStart(2, '0')}`; };
function showAlert(messageKey, duration = gameConfig.alertDuration, logIt = true, args = []) { clearTimeout(gameState.alertTimeout); const message = getLangMsg(messageKey, args); if (logIt) { const timeString = getFormattedTime(); const storedArgs = (Array.isArray(args) ? args : [args]).map(arg => (typeof arg === 'number' || typeof arg === 'boolean' || arg === null) ? arg : String(arg)); gameState.eventLogs.push({ time: timeString, messageKey: messageKey, args: storedArgs, rendered: message }); if (gameState.eventLogs.length > gameConfig.maxLogEntries) gameState.eventLogs.shift(); if (DOMElements.logsPanel.style.display === 'block') updateLogsDisplay(); } DOMElements.alertMessageElement.textContent = message; DOMElements.alertMessageElement.style.display = 'block'; void DOMElements.alertMessageElement.offsetWidth; DOMElements.alertMessageElement.classList.add('show'); gameState.alertTimeout = setTimeout(() => { DOMElements.alertMessageElement.classList.remove('show'); DOMElements.alertMessageElement.addEventListener('transitionend', function handleTransitionEnd() { if (! DOMElements.alertMessageElement.classList.contains('show')) { DOMElements.alertMessageElement.style.display = 'none'; } DOMElements.alertMessageElement.removeEventListener('transitionend', handleTransitionEnd); }, {once: true}); }, duration); }
function updateLogsDisplay() { DOMElements.logsList.innerHTML = ''; const searchTerm = DOMElements.logSearchInput.value.toLowerCase(); const hideFiltered = DOMElements.logFilterCheckbox.checked; const filteredLogs = gameState.eventLogs.filter(log => { const currentRendered = log.rendered || getLangMsg(log.messageKey, log.args); const messageLower = currentRendered.toLowerCase(); const searchMatch = messageLower.includes(searchTerm); if (!searchMatch) return false; if (hideFiltered) { const isGather = log.messageKey === 'alertGathered' || log.messageKey === 'alertGatheredQuarry' || log.messageKey === 'alertGatheredEvent' || log.messageKey === 'alertProducedMilk' || log.messageKey === 'alertProducedWool'; const isTame = log.messageKey === 'alertTameSuccess'; const isCost = log.messageKey === 'alertNotEnoughResources' || log.messageKey === 'alertNotEnoughResourcesTech' || log.messageKey === 'alertTameNeedWheat'; const isExp = log.messageKey === 'logGainedExp' || log.messageKey === 'logGainedExpResearch' || log.messageKey === 'logGainedExpEvent' || log.messageKey === 'logGainedExpTame'; const isStorage = log.messageKey === 'alertStorageFull' || log.messageKey === 'alertStorageFullWheat' || log.messageKey === 'alertStorageFullMilk' || log.messageKey === 'alertStorageFullWool'; const isCap = log.messageKey === 'logCapacityIncreased' || log.messageKey === 'logCapacityIncreasedWheat'; const isRename = log.messageKey === 'logColonyRenamed'; const isRegen = log.messageKey === 'logInvalidStartRegen' || log.messageKey === 'logInvalidStartGiveUp'; const isCheat = log.messageKey === 'cheatMapRevealed' || log.messageKey === 'cheatMapHidden'; if (isGather || isTame || isCost || isExp || isStorage || isRegen || isCheat || isCap || isRename) return false; } return true; }); const fragment = document.createDocumentFragment(); for (let i = filteredLogs.length - 1; i >= 0; i--) { const log = filteredLogs[i]; const logEntry = document.createElement('li'); const timeSpan = document.createElement('span'); timeSpan.className = 'log-time'; timeSpan.textContent = `[${log.time}]`; logEntry.appendChild(timeSpan); logEntry.appendChild(document.createTextNode(` ${log.rendered || getLangMsg(log.messageKey, log.args)}`)); fragment.appendChild(logEntry); } DOMElements.logsList.appendChild(fragment); }
function initializeGridDOM() { const f = document.createDocumentFragment(); for (let y=0; y<gameConfig.gridSize; y++) { for (let x=0; x<gameConfig.gridSize; x++) { const t = document.createElement('div'); t.className = 'tile'; t.dataset.gridX = x; t.dataset.gridY = y; f.appendChild(t); } } DOMElements.grid.innerHTML = ''; DOMElements.grid.appendChild(f); }
function getTileData(x, y) { return gameState.worldData[y]?.[x]; }
function setTileData(x, y, d) { if (!gameState.worldData[y]) gameState.worldData[y] = {}; gameState.worldData[y][x] = d; }
function generateTileContent(x, y, cheat=false) {
    const cS=`${x},${y}`;
    if (getTileData(x, y) && !cheat) { gameState.revealedTiles.add(cS); return getTileData(x, y); }
    let type='unknown'; let biome='forest';
    const bNV = noise.biome.noise2D(x/gameConfig.noiseScales.biome, y/gameConfig.noiseScales.biome);
    if (bNV >= gameConfig.noiseThresholds.biomeDesert) biome='desert';
    const wNV = noise.water.noise2D(x/gameConfig.noiseScales.water, y/gameConfig.noiseScales.water);

    if (wNV < gameConfig.noiseThresholds.lake) { type='water'; }
    else {
        const fNV = noise.feature.noise2D(x/gameConfig.noiseScales.feature, y/gameConfig.noiseScales.feature);
        if (biome==='forest') {
             const animalRoll = Math.random();
             if (animalRoll < gameConfig.wildAnimalSpawnChance * 0.33) type = 'wildPig';
             else if (animalRoll < gameConfig.wildAnimalSpawnChance * 0.66) type = 'wildSheep';
             else if (animalRoll < gameConfig.wildAnimalSpawnChance) type = 'wildCow';
             else if(fNV<gameConfig.noiseThresholds.treeForest) type='tree';
             else if(fNV<gameConfig.noiseThresholds.flintForest) type='flint';
             else if(fNV<gameConfig.noiseThresholds.stoneForest) type='stone';
             else type='grass';
        } else { // Desert biome
            type='sand';
            const r=Math.random();
            if(r<gameConfig.desertStoneChance) type='stone';
            else if(r<gameConfig.desertStoneChance+0.03) type='flint';
        }
        // Coastal sand
        let isNW=false;
        for(let dy=-1;dy<=1;dy++){ for(let dx=-1;dx<=1;dx++){ if(dx===0&&dy===0) continue; const nW=noise.water.noise2D((x+dx)/gameConfig.noiseScales.water,(y+dy)/gameConfig.noiseScales.water); if(nW<gameConfig.noiseThresholds.lake){ isNW=true; break; } } if(isNW) break; }
        if(isNW && type!=='water' && biome!=='desert'){ type='sand'; } // Override to sand if near water (non-desert)
    }
    // Prevent water at start (only during initial generation, not cheat reveal)
    if (!cheat) { if (x === 5 && y === 5 && type === 'water') { type='grass'; biome='forest'; } else if (Math.abs(x-5)<=1&&Math.abs(y-5)<=1&&type==='water') { type='grass'; biome='forest'; } }

    const d={type:type, building:null, biome:biome, unitDeployed:null};
    setTileData(x,y,d);
    gameState.revealedTiles.add(cS);
    return d;
}
function revealArea(cX, cY, rad) { let nRN = false; for (let dy=-rad; dy<=rad; dy++) { for (let dx=-rad; dx<=rad; dx++) { if (Math.sqrt(dx*dx+dy*dy)>rad+0.1) continue; const wx=cX+dx; const wy=cY+dy; const cS=`${wx},${wy}`; if (!gameState.naturallyRevealedTiles.has(cS)) { if (!getTileData(wx, wy)) { generateTileContent(wx, wy, false); } gameState.revealedTiles.add(cS); gameState.naturallyRevealedTiles.add(cS); nRN=true; } else if (!gameState.revealedTiles.has(cS)) { gameState.revealedTiles.add(cS); } } } return nRN; }
function updateGrid() { const ts=DOMElements.grid.querySelectorAll('.tile'); const l=getLang(); ts.forEach(t=>{const eM=t.querySelector('.unit-marker');if(eM)eM.remove();t.className='tile';t.textContent='';t.title='';t.removeAttribute('data-tooltip');t.classList.remove('highlight','unknown','highlight-house-target');}); ts.forEach(t=>{const gx=parseInt(t.dataset.gridX); const gy=parseInt(t.dataset.gridY); const wx=gx+gameState.viewOffsetX; const wy=gy+gameState.viewOffsetY; const cS=`${wx},${wy}`; const isR=gameState.revealedTiles.has(cS); if(!isR){t.classList.add('unknown'); t.title=l.unknownTile;} else { let d=getTileData(wx,wy); if(!d){ d = generateTileContent(wx,wy,gameState.cheatMapRevealed); } let tT=l.emptyTile; if(d){ t.classList.add(d.type); t.classList.add(`biome-${d.biome}`); if(d.building){ const bI=gameConfig.buildings[d.building]; t.classList.add(d.building); t.textContent=(bI?.nameKey?l[bI.nameKey]:d.building).substring(0,4).toUpperCase(); tT=l[bI?.nameKey]||d.building; if(gameState.unitToDeploy&&d.building==='house'&&gameConfig.buildings['house']&&d.unitDeployed===false){t.classList.add('highlight-house-target','highlight');tT+=` (${l.unusedHouseTarget||'Target'})`;} } else if(d.type==='tree'){t.textContent='🌳';tT=l.tileResourceTree;} else if(d.type==='stone'){t.textContent='🪨';tT=l.tileResourceStone;} else if(d.type==='flint'){t.textContent='◾';tT=l.tileResourceFlint;} else if(d.type==='wildPig'){t.textContent='🐖';tT=l.tileResourceWildPig;} else if(d.type==='wildSheep'){t.textContent='🐑';tT=l.tileResourceWildSheep;} else if(d.type==='wildCow'){t.textContent='🐄';tT=l.tileResourceWildCow;} else if(d.type==='water'){tT=l.water;} else if(d.type==='sand'){tT=l.sand;} else if(d.type==='grass'){tT=l.grass;} else {tT=l.emptyTile;} if(d.biome!=='forest'&&(d.type==='grass'||d.type==='tree'||d.type==='stone'||d.type==='flint')){tT+=` (${l[d.biome]||d.biome})`;} else if(d.biome==='forest'&&(d.type==='sand'||d.type==='wildPig'||d.type==='wildSheep'||d.type==='wildCow')){tT+=` (${l[d.biome]||d.biome})`;} t.title=tT;} else { t.classList.add('unknown');t.textContent='?';t.title='Error: Missing Data';console.error(`Tile data STILL missing @${wx},${wy}`);} } }); gameState.units.forEach(u=>{const uGX=u.worldX-gameState.viewOffsetX; const uGY=u.worldY-gameState.viewOffsetY; if(uGX>=0&&uGX<gameConfig.gridSize&&uGY>=0&&uGY<gameConfig.gridSize){const t=DOMElements.grid.querySelector(`.tile[data-grid-x="${uGX}"][data-grid-y="${uGY}"]`); if(t&&!t.classList.contains('unknown')){const uI=gameConfig.units[u.type]; const m=document.createElement('div'); m.className=`unit-marker ${u.type}`; m.dataset.unitId = u.id; m.dataset.unitType = u.type; m.textContent=uI?.icon||u.type.charAt(0).toUpperCase(); const tUT = l[uI?.nameKey]||u.type; if(u.id===gameState.selectedUnitId)m.classList.add('selected'); t.appendChild(m); if(t.title&&!t.title.startsWith(tUT))t.title=`${tUT} (${u.id}) - ${t.title}`; else if(!t.title)t.title=`${tUT} (${u.id})`; } } }); const sU=gameState.units.find(u=>u.id===gameState.selectedUnitId); if(gameState.highlightEnabled&&sU&&!gameState.unitToDeploy&&!gameState.selectedBuilding){const uI=gameConfig.units[sU.type]; const uGX=sU.worldX-gameState.viewOffsetX; const uGY=sU.worldY-gameState.viewOffsetY; if(uGX>=0&&uGX<gameConfig.gridSize&&uGY>=0&&uGY<gameConfig.gridSize){let mM=uI?.move||1; if(sU.upgrades?.movement1)mM+=gameConfig.upgrades.movement1.effect.moveBonus; ts.forEach(t=>{const tGX=parseInt(t.dataset.gridX); const tGY=parseInt(t.dataset.gridY); const tWX=tGX+gameState.viewOffsetX; const tWY=tGY+gameState.viewOffsetY; const dist=Math.abs(tGX-uGX)+Math.abs(tGY-uGY); if(dist>0&&dist<=mM&&!t.classList.contains('unknown')){const tD=getTileData(tWX,tWY); const tO=gameState.units.some(un=>un.id!==sU.id&&un.worldX===tWX&&un.worldY===tWY); if(tD&&tD.type!=='water'&&(!tD.building||!gameConfig.buildings[tD.building])&&!tO&&!t.classList.contains('highlight-house-target')){t.classList.add('highlight');} } }); } } checkResource(); }
function updateInventoryDisplay() {
    const inventoryContainer = DOMElements.inventoryContent;
    const titleElement = inventoryContainer.querySelector('h2');
    const lang = getLang();
    inventoryContainer.innerHTML = ''; // Clear existing content
    inventoryContainer.appendChild(titleElement); // Add title back

    let hasItems = false;

    // Iterate through ALL resources defined in gameConfig (loaded from XML)
    gameConfig.resources.forEach(res => {
        // Only display the resource in the list IF it has been discovered (acquired at least once)
        // --- FIX: Changed condition to only check discoveredResources ---
        if (gameState.discoveredResources.has(res.id)) {
        // --- END FIX ---
            hasItems = true; // Mark that at least one item is displayed

            const p = document.createElement('p');
            const currentAmount = gameState.inventory[res.id] || 0;
            const capacity = gameState.inventoryCapacity[res.id] || 0; // Capacity is loaded/calculated separately

            // Construct the display string using the resource's localized name key or fallback to ID
            p.innerHTML = `${lang[res.nameKey] || res.id}: <span id="${res.id}-count">${currentAmount}</span> / ${capacity}`;

            inventoryContainer.appendChild(p); // Add the resource paragraph to the display
        }
    });

    // If after iterating through all resources, none were marked as "hasItems", show the "Empty" message.
    if (!hasItems) {
        const emptyText = document.createElement('p');
        emptyText.className = 'empty-inventory'; // Use the class for styling (e.g., italics, grey text)
        emptyText.textContent = lang.inventoryEmpty || 'Empty'; // Use localized "Empty"
        inventoryContainer.appendChild(emptyText);
    }
}
function updateResource(rId, amt) { const currentAmount = gameState.inventory[rId] || 0; const capacity = gameState.inventoryCapacity[rId] || 0; const newAmount = Math.max(0, currentAmount + amt); let discoveredJustNow = false; if (amt > 0 && !gameState.discoveredResources.has(rId)) { gameState.discoveredResources.add(rId); discoveredJustNow = true; } if (amt > 0 && newAmount > capacity) { gameState.inventory[rId] = capacity; if (currentAmount < capacity) { let alertKey = 'alertStorageFull'; if (rId === 'wheat') alertKey = 'alertStorageFullWheat'; else if (rId === 'milk') alertKey = 'alertStorageFullMilk'; else if (rId === 'wool') alertKey = 'alertStorageFullWool'; showAlert(alertKey, 2000, true, [getLangMsg(rId)]); } if (discoveredJustNow) updateInventoryDisplay(); return false; } else if (amt < 0 && newAmount < 0) { console.warn(`Attempted spend > have ${rId}`); return false; } else { gameState.inventory[rId] = newAmount; if (amt !== 0 || discoveredJustNow) updateInventoryDisplay(); return true; } }
function canAfford(costObj) { return Object.entries(costObj).every(([rId, amt]) => (gameState.inventory[rId] || 0) >= amt); }
function spendResources(costObj) { if (!canAfford(costObj)) return false; Object.entries(costObj).forEach(([rId, amt]) => { updateResource(rId, -amt); }); return true; }
function updateResearchPointsDisplay() { DOMElements.researchPointsDisplay.textContent = gameState.researchPoints; }
function updateUnitInfoDisplay() { const selectedUnit = gameState.units.find(u => u.id === gameState.selectedUnitId); const lang = getLang(); const contentArea = DOMElements.upgradeInfoContent; const panelTitle = DOMElements.upgradeInfoDisplay.querySelector('h4'); if(panelTitle) panelTitle.textContent = lang.upgradeSectionTitle; contentArea.innerHTML = ''; if (selectedUnit) { DOMElements.unitCoordsDisplay.textContent = `(${selectedUnit.worldX}, ${selectedUnit.worldY})`; const tileData = getTileData(selectedUnit.worldX, selectedUnit.worldY); DOMElements.unitBiomeDisplay.textContent = tileData ? (lang[tileData.biome] || tileData.biome) : lang.unknownTile; DOMElements.unitExpDisplay.textContent = selectedUnit.exp || 0; const unitConfig = gameConfig.units[selectedUnit.type]; let upgradesAvailable = 0; (unitConfig.upgrades || []).forEach(upgradeId => { const upgradeConfig = gameConfig.upgrades[upgradeId]; if (!upgradeConfig) return; const currentLevel = selectedUnit.upgrades?.[upgradeId] || 0; if (currentLevel < upgradeConfig.maxLevel) { const cost = upgradeConfig.cost; const upgradeButton = document.createElement('button'); upgradeButton.dataset.upgradeType = upgradeId; upgradeButton.textContent = `${getLangMsg(upgradeConfig.nameKey)} (${cost} Exp)`; upgradeButton.disabled = selectedUnit.exp < cost; upgradeButton.title = getLangMsg(upgradeConfig.nameKey + 'Desc', [cost]); upgradeButton.addEventListener('click', handleUpgradeClick); contentArea.appendChild(upgradeButton); upgradesAvailable++; } }); if (upgradesAvailable === 0) { const noUpgradesText = document.createElement('p'); noUpgradesText.textContent = lang.upgradeNoUpgradesAvailable; contentArea.appendChild(noUpgradesText); } } else { DOMElements.unitCoordsDisplay.textContent = `(-, -)`; DOMElements.unitBiomeDisplay.textContent = lang.unknownTile; DOMElements.unitExpDisplay.textContent = '0'; const selectUnitText = document.createElement('p'); selectUnitText.textContent = lang.upgradeInfoSelectUnit; contentArea.appendChild(selectUnitText); } }
function updateResearchUI() {
    const lang = getLang();
    const displayArea = DOMElements.techTreeDisplayArea;
    const svgArea = DOMElements.techLinesSvg;
    displayArea.querySelectorAll('.tech-node, .era-title').forEach(el => el.remove()); // Remove old nodes/titles
    svgArea.innerHTML = ''; // Clear old lines
    const isResearching = !!gameState.activeResearch;

    const nodeElements = {}; // Store node elements for line drawing

    Object.entries(gameConfig.eraNames).forEach(([eraNum, nameKey]) => {
        const eraTitleElement = document.createElement('div');
        eraTitleElement.className = 'era-title';
        eraTitleElement.textContent = lang[nameKey] || `Era ${eraNum}`;
        eraTitleElement.style.left = `${gameConfig.eraStartPosX[eraNum] || 10}px`;
        eraTitleElement.style.top = '10px';
        displayArea.appendChild(eraTitleElement);
    });

    Object.entries(gameConfig.tech).forEach(([techId, tech]) => {
        const isCompleted = gameState.completedTech.has(techId);
        const fullCost = gameConfig.getTechCost(techId);
        const canAffordResources = fullCost ? Object.entries(fullCost).every(([res, amt]) => res === 'research' || (gameState.inventory[res] || 0) >= amt) : true;
        const requirementsMet = tech.requires.every(req => gameState.completedTech.has(req));
        const canResearch = !isResearching && !isCompleted && requirementsMet && canAffordResources;
        const isCurrentlyResearching = gameState.activeResearch === techId;

        const node = document.createElement('div');
        nodeElements[techId] = node; // Store reference
        node.className = 'tech-node';
        node.id = `tech-node-${techId}`;
        node.style.left = `${tech.posX || 10}px`;
        node.style.top = `${tech.posY || 10}px`;

        if (isCompleted) node.classList.add('researched');
        else if (isCurrentlyResearching) node.classList.add('researching');
        else if (canResearch) node.classList.add('available');
        else node.classList.add('unavailable');

        const nameDiv = document.createElement('div'); nameDiv.className = 'tech-name'; nameDiv.textContent = lang[tech.nameKey] || techId; if (isCompleted) nameDiv.textContent += ` ${lang.researchStatusComplete}`;
        const costPara = document.createElement('p'); costPara.className = 'tech-cost'; const costString = fullCost ? Object.entries(fullCost).map(([res, amt]) => `${amt} ${res === 'research' ? 'RP' : (lang[res] || res)}`).join(', ') : 'Error'; costPara.textContent = `(${costString})`;
        const unlocksDiv = document.createElement('div'); unlocksDiv.className = 'tech-unlocks'; const unlocksLabelSpan = document.createElement('span'); unlocksLabelSpan.textContent = `${lang.unlocksLabel} `; unlocksDiv.appendChild(unlocksLabelSpan); let unlocksText = "";
        // Add building unlocks from the loaded gameConfig.buildings
        if (tech.unlocks && tech.unlocks.length > 0) {
             unlocksText = tech.unlocks.map(unlockKey => {
                 // Check if it's a building key defined in the loaded config
                 const buildingConfig = gameConfig.buildings[unlockKey];
                 if (buildingConfig?.nameKey) return lang[buildingConfig.nameKey] || unlockKey;
                 // Add other unlock types if any (units etc.)
                 const unitConfig = gameConfig.units[unlockKey];
                 if (unitConfig?.nameKey) return lang[unitConfig.nameKey] || unlockKey;
                 return lang[unlockKey] || unlockKey; // Fallback
             }).join(', ');
        }
        // Explicitly add unit unlocks linked to specific tech
        if (techId === 'exploration') { const sC = gameConfig.units['scout']; if (sC) unlocksText += (unlocksText ? ', ' : '') + (lang[sC.nameKey] || 'Scout'); }
        else if (techId === 'settlement') { const wC = gameConfig.units['worker']; if (wC) unlocksText += (unlocksText ? ', ' : '') + (lang[wC.nameKey] || 'Worker'); }
        else if (techId === 'archery') { const aC = gameConfig.units['archer']; if (aC) unlocksText += (unlocksText ? ', ' : '') + (lang[aC.nameKey] || 'Archer'); }

        if (!unlocksText) { unlocksDiv.style.display = 'none'; } else { unlocksDiv.appendChild(document.createTextNode(unlocksText)); }
        const progressContainer = document.createElement('div'); progressContainer.className = 'research-progress-container'; progressContainer.style.display = isCurrentlyResearching ? 'flex' : 'none'; const progressBar = document.createElement('div'); progressBar.id = `${techId}-research-bar-modal`; progressBar.className = 'research-progress-bar'; progressBar.style.backgroundColor = tech.color || '#3498db'; if (isCurrentlyResearching && fullCost) { const progress = Math.min(100, fullCost.research > 0 ? (gameState.researchPoints / fullCost.research) * 100 : 100); progressBar.style.width = progress + '%'; } progressContainer.appendChild(progressBar);
        node.appendChild(nameDiv); node.appendChild(costPara); node.appendChild(unlocksDiv); node.appendChild(progressContainer);
        if (canResearch || (!canAffordResources && !isResearching && !isCompleted && requirementsMet)) { node.addEventListener('click', () => handleResearchClick(techId)); node.title = `${lang[tech.nameKey] || techId} - Click to research`; if(!canAffordResources) node.title += ` (Insufficient Resources)`; }
        else if (isCompleted) { node.title = `${lang[tech.nameKey] || techId} - Researched`; }
        else if (isCurrentlyResearching) { node.title = `${lang[tech.nameKey] || techId} - Researching...`; }
        else { const prereqs = tech.requires.filter(reqId => !gameState.completedTech.has(reqId)).map(reqId => lang[gameConfig.tech[reqId]?.nameKey] || reqId).join(', '); node.title = `${lang[tech.nameKey] || techId} - Requires: ${prereqs || 'Unknown'}`; }

        displayArea.appendChild(node);
    });

    // Draw lines after all nodes are added and positioned
    Object.entries(gameConfig.tech).forEach(([techId, tech]) => {
         tech.requires.forEach(reqId => {
             const startNode = nodeElements[reqId];
             const endNode = nodeElements[techId];
             if (startNode && endNode) {
                  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                  const startX = startNode.offsetLeft + startNode.offsetWidth / 2;
                  const startY = startNode.offsetTop + startNode.offsetHeight / 2;
                  const endX = endNode.offsetLeft + endNode.offsetWidth / 2;
                  const endY = endNode.offsetHeight ? endNode.offsetTop + endNode.offsetHeight / 2 : startY + 100; // Fallback y

                  line.setAttribute('x1', startX);
                  line.setAttribute('y1', startY);
                  line.setAttribute('x2', endX);
                  line.setAttribute('y2', endY);
                  svgArea.appendChild(line);
             }
         });
    });

    updateResearchStatusDisplayOnly();
}
function updateResearchStatusDisplayOnly() {
     const l = getLang();
     if (gameState.activeResearch) {
          const t = gameConfig.tech[gameState.activeResearch];
          const c = gameConfig.getTechCost(gameState.activeResearch);
          if (!t || !c) return;

          const rpCost = c.research || 0; // *** FIX: Moved declaration before usage (applied in prev turn) ***
          const progress = Math.min(100, rpCost > 0 ? (gameState.researchPoints / rpCost) * 100 : 100);

          DOMElements.researchStatusDisplay.textContent = `${getLangMsg('researchStatusResearching')} ${l[t.nameKey] || gameState.activeResearch}... ${Math.floor(progress)}%`;
          DOMElements.researchStatusDisplay.style.display = 'block';
     } else if (gameState.completedTech.size === 0 && gameState.gameInitialized) {
          // Show initial message only at the start of the game if no tech is completed
          DOMElements.researchStatusDisplay.textContent = l.researchStatusInitial;
          DOMElements.researchStatusDisplay.style.display = 'block';
     } else {
          DOMElements.researchStatusDisplay.textContent = ''; // Hide or clear if not researching and not initial state
          DOMElements.researchStatusDisplay.style.display = 'none';
     }
}
function updateResearchProgress() { if (!gameState.activeResearch) return; const tId = gameState.activeResearch; const t = gameConfig.tech[tId]; const cost = gameConfig.getTechCost(tId); if (!t || !cost) { gameState.activeResearch = null; return; } const rpCost = cost.research || 0; const progress = Math.min(100, rpCost > 0 ? (gameState.researchPoints / rpCost) * 100 : 100); if (DOMElements.techTreeModal.style.display === 'block') { const pBM = document.getElementById(`${tId}-research-bar-modal`); if (pBM) { pBM.style.width = progress + '%'; const pC = pBM.closest('.research-progress-container'); if(pC) pC.style.display = 'flex'; } } updateResearchStatusDisplayOnly(); if (gameState.researchPoints >= rpCost) { gameState.completedTech.add(tId); gameState.activeResearch = null; gameState.researchPoints = 0; showAlert('alertResearchComplete', 3500, true, [t.nameKey]); const l = getLang(); DOMElements.researchStatusDisplay.textContent = `${getLangMsg(t.nameKey)} ${getLangMsg('researchStatusComplete')}`; DOMElements.researchStatusDisplay.style.display = 'block'; let eG = false; gameState.units.forEach(u => { const uC = gameConfig.units[u.type]; if (uC?.researchBonus > 0) { u.exp = (u.exp || 0) + gameConfig.expPerResearchComplete * uC.researchBonus; eG = true; } }); if (eG) { logEvent('logGainedExpResearch', ['unitPawn', gameConfig.expPerResearchComplete, t.nameKey]); if(gameState.units.find(u => u.id === gameState.selectedUnitId)?.type === 'pawn') updateUnitInfoDisplay(); } if (DOMElements.techTreeModal.style.display === 'block') { updateResearchUI(); } updateBuildingsList(); updateUnitsPanel(); updateInventoryCapacity(); updateResearchPointsDisplay(); } }
function updateBuildingsList() {
     const lE = DOMElements.buildingsListUl;
     lE.innerHTML = '';
     const l = getLang();
     let availableBuildingsCount = 0;

     // Iterate through the loaded buildings from gameConfig.buildings
     for (const id in gameConfig.buildings) {
          const b = gameConfig.buildings[id];
          // Check if the building is unlocked by a tech and if that tech is completed
          if (b.unlockedBy && !gameState.completedTech.has(b.unlockedBy)) {
               continue; // Skip if not unlocked
          }
          availableBuildingsCount++; // Count as available for the panel display message

          const lI = document.createElement('li');
          const btn = document.createElement('button');
          const cost = b.cost || {}; // Use cost from loaded data, default to empty object
          const costString = Object.entries(cost).map(([res, amt]) => `${amt} ${l[res] || res}`).join(', ');
          btn.textContent = `${l[b.nameKey] || id}`; // Use nameKey from loaded data
          btn.dataset.building = id;
          btn.title = l[b.nameKey] || id;
          btn.disabled = !canAfford(cost); // Check affordability against loaded cost
          btn.addEventListener('click', () => {
               gameState.selectedBuilding = id;
               gameState.unitToDeploy = null;
               // Pass nameKey from loaded data for the alert message
               showAlert('alertBuildSelected', 4000, true, [b.nameKey]);
               gameState.highlightEnabled = false;
               updateGrid();
               updateBuildingsList();
               hideAllPanels();
          });

          const cP = document.createElement('p');
          cP.className = 'building-cost';
          cP.textContent = `Cost: ${costString}`;

          const d = document.createElement('p');
          d.className = 'description';
          // Get translated description from loaded data's nameKey
          d.textContent = getLangMsg(b.nameKey + 'Desc');

          lI.appendChild(btn);
          lI.appendChild(cP);
          lI.appendChild(d);
          lE.appendChild(lI);
     }

     // Show message if no buildings are unlocked
     if (availableBuildingsCount === 0) {
          lE.innerHTML = `<li>${l.noBuildingsAvailable}</li>`;
     }
}
function updateUnitDisplayBar() {
    // --- FIX: Clear the unit display bar before adding elements ---
    DOMElements.unitDisplayBar.innerHTML = '';
    // --- END FIX ---

    const l = getLang();
    const f = document.createDocumentFragment(); // Use a fragment for performance

    gameState.units.forEach(u => {
        const uI = gameConfig.units[u.type]; // Get unit configuration
        const i = document.createElement('div'); // Create div for the unit icon
        i.className = `unit-icon ${u.type}`; // Apply base and type classes
        i.dataset.unitId = u.id; // Store unit ID for selection
        i.dataset.unitType = u.type; // Store unit type
        i.textContent = uI?.icon || u.type.charAt(0).toUpperCase(); // Set icon/initial
        const tUT = l[uI?.nameKey] || u.type; // Get localized name
        i.title = `${tUT} (${u.id})`; // Set tooltip title

        if (u.id === gameState.selectedUnitId) {
            i.classList.add('selected'); // Add selected class if it's the currently selected unit
        }

        // Add event listener to select the unit when clicked
        i.addEventListener('click', () => {
            gameState.selectedUnitId = u.id; // Set state
            gameState.selectedBuilding = null; // Clear other selections
            gameState.unitToDeploy = null;
            gameState.highlightEnabled = false;
            focusOnUnit(u.id); // Focus on this unit
        });

        f.appendChild(i); // Append the icon to the fragment
    });

    // Append the fragment to the actual DOM element
    DOMElements.unitDisplayBar.appendChild(f);
}
function updateUnitsPanel() { const lE = DOMElements.unitsListUl; lE.innerHTML = ''; const l = getLang(); let dUC = 0; let hUH = false; gameState.revealedTiles.forEach(cS => { if (hUH) return; const [x, y] = cS.split(',').map(Number); const d = getTileData(x, y); // Ensure we have building data loaded for this check
        if (d?.building === 'house') { // Use optional chaining and null check for building existence
            // Only consider if building is actually defined in config AND is a house
            if (gameConfig.buildings['house'] && gameConfig.buildings[d.building]?.nameKey === 'buildingHouse' && d.unitDeployed === false) {
                 hUH = true;
            }
         }
    }); if (!hUH) { lE.innerHTML = `<li>${l.noUnusedHouses}</li>`; return; } Object.entries(gameConfig.units).forEach(([uId, uC]) => { if (uC.deployableFromPanel && uC.requiredTech && gameState.completedTech.has(uC.requiredTech)) { dUC++; const lI = document.createElement('li'); const btn = document.createElement('button'); btn.dataset.unitType = uId; btn.textContent = getLangMsg('deployUnitButton', [uC.nameKey]); btn.addEventListener('click', () => { gameState.unitToDeploy = uId; gameState.selectedBuilding = null; gameState.highlightEnabled = true; showAlert('alertSelectUnusedHouse', 4000); updateGrid(); hideAllPanels(); }); lI.appendChild(btn); lE.appendChild(lI); } }); if (dUC === 0 && hUH) { lE.innerHTML = `<li>${l.noUnitsAvailablePanel}</li>`; } }
function updateInventoryCapacity() {
    // Use gameConfig.baseInventoryCapacity which is populated from XML
    gameState.inventoryCapacity = { ...gameConfig.baseInventoryCapacity };
    let baseBonus = 0;
    let wheatBonus = 0;

    gameState.revealedTiles.forEach(cS => {
        const [x, y] = cS.split(',').map(Number);
        const d = getTileData(x, y);
        // Use optional chaining for building and provides check
        if (d?.building === 'warehouse' && gameConfig.buildings.warehouse?.provides?.capacityBonus !== undefined) {
             baseBonus += gameConfig.buildings.warehouse.provides.capacityBonus;
        } else if (d?.building === 'granary' && gameConfig.buildings.granary?.provides?.capacityBonusWheat !== undefined) {
             wheatBonus += gameConfig.buildings.granary.provides.capacityBonusWheat;
        }
    });

    // Apply base bonus to all loaded resources that had a base capacity
    gameConfig.resources.forEach(res => {
        if (gameState.inventoryCapacity[res.id] !== undefined) {
             gameState.inventoryCapacity[res.id] += baseBonus;
        }
    });

    // Apply wheat bonus specifically
    gameState.inventoryCapacity.wheat = (gameState.inventoryCapacity.wheat || 0) + wheatBonus; // Ensure wheat capacity exists even if base was 0

    // Logging (optional, keep if desired)
    let loggedGeneralIncrease = false;
    const oldCaps = JSON.parse(JSON.stringify(gameState.inventoryCapacity)); // Simple deep clone
    // Need a way to compare against previous capacities reliably...
    // For simplicity, maybe only log *on* building construction? Or track previous caps?
    // Let's simplify for now and assume logging isn't critical on every capacity update.
    // Removing the logging based on diff for now, or log on build event itself.

    // Previous logging logic based on comparison, might be tricky to track 'oldCaps' persistently.
    // Assuming the inventory system itself manages adding/spending with capacity limits correctly,
    // logging capacity increase *on building completion* might be more appropriate than on every capacity update.

    updateInventoryDisplay();
}
function updateTamedAnimalsDisplay() {
    const listElement = DOMElements.tamedAnimalsList;
    const lang = getLang();
    listElement.innerHTML = '';

    if (gameState.tamedAnimals.length === 0) {
        listElement.innerHTML = `<li>${lang.noAnimalsTamed || 'No animals tamed yet.'}</li>`;
        return;
    }

    const animalCounts = gameState.tamedAnimals.reduce((acc, animal) => {
        acc[animal.type] = (acc[animal.type] || 0) + 1;
        return acc;
    }, {});

    Object.entries(animalCounts).forEach(([type, count]) => {
        const listItem = document.createElement('li');
        const animalNameKey = `animal${type.charAt(0).toUpperCase() + type.slice(1)}`;
        const animalName = lang[animalNameKey] || type;
        listItem.textContent = `${animalName}: `;
        const countSpan = document.createElement('span');
        countSpan.className = 'animal-count';
        countSpan.textContent = count;
        listItem.appendChild(countSpan);
        listElement.appendChild(listItem);
    });
}


// --- Gameplay Functions ---
function checkResource() {
    const selectedUnit = gameState.units.find(u => u.id === gameState.selectedUnitId);
    let canGather = false;
    let canTame = false;
    let tileNameKey = 'noUnitSelected';
    let displaySuffixKey = '';
    let tameTargetType = null;

    if (selectedUnit) {
        const data = getTileData(selectedUnit.worldX, selectedUnit.worldY);
        tileNameKey = 'unknownTile';
        const unitConfig = gameConfig.units[selectedUnit.type];
        const hasHusbandry = gameState.completedTech.has('animalHusbandry');
        const hasWheat = (gameState.inventory['wheat'] || 0) >= gameConfig.tameCostWheat;

        if (data) {
            // Use optional chaining when checking building properties
            const buildingConfig = gameConfig.buildings[data.building];
            if (!buildingConfig) { // Tile has something, but it's not a known building ID OR is null/undefined building
                 if (data.type === 'wildPig' || data.type === 'wildSheep' || data.type === 'wildCow') {
                    const animalType = data.type.substring(4).toLowerCase();
                    tameTargetType = animalType;
                    displaySuffixKey = `tileResource${data.type.charAt(0).toUpperCase() + data.type.slice(1)}`;
                    tileNameKey = data.biome === 'desert' ? 'sand' : 'grass'; // Base terrain
                    if (unitConfig?.canTame && hasHusbandry && hasWheat) {
                        canTame = true;
                    }
                }
                else if (data.type === 'tree') { canGather = true; tileNameKey = 'grass'; displaySuffixKey = 'tileResourceTree'; }
                else if (data.type === 'stone') { canGather = true; tileNameKey = data.biome === 'desert' ? 'sand' : 'grass'; displaySuffixKey = 'tileResourceStone'; }
                else if (data.type === 'flint') { canGather = true; tileNameKey = data.biome === 'desert' ? 'sand' : 'grass'; displaySuffixKey = 'tileResourceFlint'; }
                else if (data.type === 'water') { tileNameKey = 'water'; }
                else if (data.type === 'sand') { tileNameKey = 'sand'; }
                else if (data.type === 'grass') { tileNameKey = 'grass'; }
                else { tileNameKey = 'emptyTile'; } // Should cover unknown tile types?
            } else { // It's a known building
                tileNameKey = buildingConfig?.nameKey || data.building; // Use nameKey from config
                canGather = false;
                canTame = false;
            }
        }
    }

    DOMElements.actionButton.style.display = canGather ? 'inline-block' : 'none';
    DOMElements.tameButton.style.display = canTame ? 'inline-block' : 'none';

    // Set text content for the gather button
    DOMElements.actionButton.textContent = getLang().gatherButton;

    if(canTame) {
         DOMElements.tameButton.textContent = getLangMsg('tameButton', [gameConfig.tameCostWheat]);
         DOMElements.tameButton.dataset.tameTarget = tameTargetType;
    } else {
         // Ensure dataset is cleared if button hidden, preventing stale data
         DOMElements.tameButton.removeAttribute('data-tame-target');
    }

    let baseText = getLangMsg('onTile');
    let mainContent = "";
    if (tileNameKey === 'noUnitSelected') { mainContent = ""; }
    else if (tileNameKey === 'unknownTile') { mainContent = ` ${getLangMsg('unknownTile')}`; }
    else {
        // Use the resolved tileNameKey from building name or resource/terrain name
        mainContent = ` ${getLangMsg(tileNameKey)}`;
         if (displaySuffixKey && tileNameKey !== displaySuffixKey) { // Avoid duplicating name if main name is already the suffix (e.g., 'Stone' resource on 'Stone' terrain)
              mainContent = ` ${getLangMsg(displaySuffixKey)}`;
         } else if (displaySuffixKey && tileNameKey === displaySuffixKey) {
              mainContent = ` ${getLangMsg(displaySuffixKey)}`; // Re-set for clarity if they are the same
         } else if(getLang()[tileNameKey]) {
              mainContent = ` ${getLangMsg(tileNameKey)}`;
         } else {
              // Fallback if somehow tileNameKey doesn't have a translation
              mainContent = ` ${tileNameKey}`;
         }
    }
     DOMElements.resourceNameDisplay.textContent = baseText + mainContent;
}
// Removed the triggerRandomEvent function call from moveUnit
function triggerRandomEvent(u) {
    // The event logic was previously here, but it is now disabled by commenting out the call in moveUnit
    // Keeping the function definition allows for adding different event types later if needed.
}
function moveWildAnimals() {
    const movedAnimalsCoords = new Set();

    const currentRevealedTiles = Array.from(gameState.revealedTiles);

    for (const coordString of currentRevealedTiles) {
        const [currentX, currentY] = coordString.split(',').map(Number);
        const currentCoordKey = `${currentX},${currentY}`;

        if (movedAnimalsCoords.has(currentCoordKey)) {
            continue;
        }

        const originalTileData = getTileData(currentX, currentY);

        if (originalTileData && ['wildPig', 'wildSheep', 'wildCow'].includes(originalTileData.type)) {

            if (Math.random() >= gameConfig.wildAnimalMoveChance) {
                continue;
            }

            const animalType = originalTileData.type;
            const originalBaseType = originalTileData.biome === 'desert' ? 'sand' : 'grass';

            const validMoves = [];
            const dirs = [{dx: -1, dy: 0}, {dx: 1, dy: 0}, {dx: 0, dy: -1}, {dx: 0, dy: 1}];

            for (const dir of dirs) {
                const targetX = currentX + dir.dx;
                const targetY = currentY + dir.dy;
                const targetCoordString = `${targetX},${targetY}`;

                if (!gameState.revealedTiles.has(targetCoordString)) {
                    continue;
                }

                const targetTileData = getTileData(targetX, targetY);
                 // Check if the target tile exists and is not water, does not have a known building,
                 // is not occupied by a unit, is not another wild animal, and hasn't already moved an animal this cycle.
                if (targetTileData &&
                    targetTileData.type !== 'water' &&
                    (!targetTileData.building || !gameConfig.buildings[targetTileData.building]) && // Check for unknown building ID too
                    !gameState.units.some(u => u.worldX === targetX && u.worldY === targetY) &&
                    !['wildPig', 'wildSheep', 'wildCow'].includes(targetTileData.type) &&
                    !movedAnimalsCoords.has(targetCoordString)
                   )
                {
                    validMoves.push({ x: targetX, y: targetY }); // Just store coords, fetch data again if chosen
                }
            }

            if (validMoves.length > 0) {
                const chosenMove = validMoves[Math.floor(Math.random() * validMoves.length)];

                // Re-fetch data to ensure it's current (though less critical now we check movedAnimalsCoords)
                const chosenTargetTileData = getTileData(chosenMove.x, chosenMove.y);

                // Double-check validity just before moving in case something changed between finding move and applying it (highly unlikely in current single-threaded flow, but defensive)
                 if(chosenTargetTileData && chosenTargetTileData.type !== 'water' && (!chosenTargetTileData.building || !gameConfig.buildings[chosenTargetTileData.building]) && !gameState.units.some(u => u.worldX === chosenMove.x && u.worldY === chosenMove.y) && !['wildPig', 'wildSheep', 'wildCow'].includes(chosenTargetTileData.type)) {
                    // Update original tile: becomes base terrain
                    originalTileData.type = originalBaseType;
                    setTileData(currentX, currentY, originalTileData);
                    movedAnimalsCoords.add(currentCoordKey);

                    // Update destination tile: becomes the animal
                    chosenTargetTileData.type = animalType;
                    setTileData(chosenMove.x, chosenMove.y, chosenTargetTileData);
                    movedAnimalsCoords.add(`${chosenMove.x},${chosenMove.y}`);

                     // console.log(`Animal ${animalType} moved from (${currentX},${currentY}) to (${chosenMove.x},${chosenMove.y})`);
                 }
            }
        }
    }
}
function moveUnit(tGX, tGY) {
    const sU = gameState.units.find(u => u.id === gameState.selectedUnitId);
    if (!sU) return;
    const tWX = tGX + gameState.viewOffsetX; const tWY = tGY + gameState.viewOffsetY;
    const uI = gameConfig.units[sU.type]; let mM = uI?.move || 1; if (sU.upgrades?.movement1) mM += gameConfig.upgrades.movement1.effect.moveBonus;
    const dx = Math.abs(tWX - sU.worldX); const dy = Math.abs(tWY - sU.worldY);
    if (dx + dy === 0 || dx + dy > mM) return;
    if (!gameState.revealedTiles.has(`${tWX},${tWY}`)) return;
    const tD = getTileData(tWX, tWY);
    // Check against known building config when determining if a tile is occupied by a building
    if (!tD || tD.type === 'water' || (tD.building && gameConfig.buildings[tD.building])) {
        showAlert('alertMoveInvalid', 1500, false);
        return;
    }

    const tO = gameState.units.some(un => un.id !== sU.id && un.worldX === tWX && un.worldY === tWY);
    if (tO) { showAlert("alertUnitMoveOccupied", 2000, false); return; }

    sU.worldX = tWX; sU.worldY = tWY;
    revealArea(tWX, tWY, uI?.revealRadius || gameConfig.revealRadiusBase);
    if (sU.upgrades?.autoGather) tryAutoGather(sU);

    // Assuming productionIntervals are keyed by resource type
    // and buildings.produces.interval match these keys.
    // This is handled by the structure in data.js and buildings.xml.
    for (const pT in gameState.productionProgress) {
        // Check if there is a building type whose produce interval matches this key
         const intervalExists = Object.values(gameConfig.buildings).some(b => b.produces?.interval === pT);
         if (intervalExists) {
            if (gameConfig.productionIntervals[pT]) {
                gameState.productionProgress[pT]++;
                const interval = gameConfig.productionIntervals[pT];
                if (gameState.productionProgress[pT] >= interval) {
                    produceResources(pT);
                    gameState.productionProgress[pT] = 0;
                }
            }
        }
    }
    produceAnimalProducts();

    moveWildAnimals();

    if (gameState.activeResearch) { const rB = uI?.researchBonus || 0; if (rB > 0) { gameState.researchPoints += rB; updateResearchProgress(); } }
    updateResearchPointsDisplay();

    // Removed the call to triggerRandomEvent(sU);

    focusOnUnit(sU.id);
}
function tryAutoGather(u) { const d = getTileData(u.worldX, u.worldY); // Use optional chaining when checking building property
     if (d && (!d.building || !gameConfig.buildings[d.building]) && (d.type === 'tree' || d.type === 'stone' || d.type === 'flint')) {
         gatherResource(u, true);
    }
}
function gatherResource(u = null, a = false) {
    const tU = u || gameState.units.find(un => un.id === gameState.selectedUnitId);
    if (!tU) { if (!a) showAlert("noUnitSelected", 2000); return; }
    const d = getTileData(tU.worldX, tU.worldY);
    // Check for building using optional chaining and gameConfig.buildings existence
     if (d && (!d.building || !gameConfig.buildings[d.building])) {
        let gRK = null; // Gathered Resource Key
        let bT = d.biome === 'desert' ? 'sand' : 'grass'; // Base terrain type after gathering
        let q = 1; // Quantity

        if (d.type === 'tree') gRK = 'wood';
        else if (d.type === 'stone') gRK = 'pebble';
        else if (d.type === 'flint') gRK = 'flint';

        if (gRK) {
             // Use getLangMsg for resource names
            if (updateResource(gRK, q)) {
                d.type = bT; // Change tile type after gathering
                setTileData(tU.worldX, tU.worldY, d);
                const localizedResourceName = getLangMsg(gRK);
                if (!a) {
                    showAlert('alertGathered', 1500, true, [localizedResourceName, q]);
                } else {
                    logEvent('alertGathered', [localizedResourceName, q], `[Auto] ${getLangMsg('alertGathered', [localizedResourceName, q])}`);
                }
                updateGrid(); // Update grid display
                checkResource(); // Update action button/info panel
            } else {
                // Update resource returned false (storage full)
                 if (!a) showAlert('alertStorageFull', 2000, true, [getLangMsg(gRK)]);
                 // Don't change tile type or give experience if not gathered due to full storage
            }
        } else {
             // This case means the tile doesn't have a gatherable resource type (like water, sand, grass, wild animals)
             // Or perhaps an unknown type - but the check `!d.building || !gameConfig.buildings[d.building]` already excluded buildings.
             // We could add a specific alert for "Nothing to gather here" if !a, but typically the button wouldn't be shown.
             // If the button IS shown erroneously for a type that's not tree/stone/flint, something else is wrong.
        }
    } else {
         // This case means the tile has a building OR doesn't exist (should be caught by move logic anyway)
        if (!a && d?.building) { // If not auto-gathering, and there's a building...
             const buildingConfig = gameConfig.buildings[d.building]; // Fetch config
             // Tell the player they can't gather on a building. Use nameKey if available.
             const buildingName = buildingConfig ? getLangMsg(buildingConfig.nameKey || d.building) : d.building;
            // Maybe add a new alert key like 'alertCannotGatherOnBuilding'? Or just log.
             console.log(`Cannot gather on building: ${buildingName}`);
             // showAlert('alertCannotGatherOnBuilding', ...); // Need a new key
        } else if (!a) {
             // Something else unexpected, maybe clicking an unknown tile without a unit?
            console.warn("Gather action called on an unexpected tile type or location.");
        }
    }
}
function produceResources(pT) {
    let producedSomething = false;
    gameState.revealedTiles.forEach(cS => {
        const [x, y] = cS.split(',').map(Number);
        const d = getTileData(x, y);
        // Check if building exists and has 'produces' property that matches the current production type
         if (d?.building && gameConfig.buildings[d.building]?.produces?.interval === pT) {
             const bC = gameConfig.buildings[d.building];
             const pI = bC.produces;

             // The produces structure can be a single string or an array from XML parsing
            const resourcesToProduce = Array.isArray(pI.resource) ? pI.resource : [pI.resource];

             if (!resourcesToProduce || resourcesToProduce.length === 0) {
                 console.warn(`Building "${d.building}" at (${x},${y}) is configured to produce on interval "${pT}" but lists no resource IDs.`);
                 return;
             }

            // For intervals that produce multiple potential resources (like quarry), pick one randomly
             const resourceKey = resourcesToProduce[Math.floor(Math.random() * resourcesToProduce.length)];
             if (!resourceKey) {
                  console.warn(`Invalid resource key determined for building "${d.building}" at (${x},${y}). Skipping production.`);
                  return;
             }


             if (updateResource(resourceKey, 1)) {
                 // Alert/log based on resource type if needed, otherwise just general message
                 // Quarry alert handled in the loop outside the resource loop for efficiency
                  if (pT !== 'quarry') { // Don't alert individually for each quarry output
                       if (!producedSomething) showAlert('alertGathered', 1500, true, [getLangMsg(resourceKey), 1]); // Reuse gathered alert
                  }
                 producedSomething = true; // Flag that at least one production happened this cycle for *this interval type*
             } else {
                 if (!producedSomething) { // Only show full storage alert once per cycle per interval type
                      const alertKey = resourceKey === 'wheat' ? 'alertStorageFullWheat' : resourceKey === 'milk' ? 'alertStorageFullMilk' : resourceKey === 'wool' ? 'alertStorageFullWool' : 'alertStorageFull';
                      showAlert(alertKey, 2000, true, [getLangMsg(resourceKey)]);
                 }
                 producedSomething = true; // Still count as "something happened" to show storage alert
             }
        }
    });
    // Add the specific quarry alert once per cycle if any quarry produced
     if (pT === 'quarry' && producedSomething) {
         // This is a bit tricky as we don't know *which* resource was produced without refactoring produceResources to return it.
         // For now, keep the generic "Quarry produced X!" which needs to be hardcoded or based on a guess, or require resource type back.
         // A simple way: just confirm *a* quarry somewhere produced *a* metal.
          const producedMetalResourceKey = Object.keys(gameConfig.inventory).find(res => gameConfig.buildings.quarry?.produces?.resource?.includes(res) && (gameState.inventory[res] || 0) > 0);
          if (producedMetalResourceKey) { // Did we end up with any metal from anywhere?
              showAlert('alertGatheredQuarry', 2000, true, [getLangMsg(producedMetalResourceKey)]);
          } else if (producedSomething) { // Produced something, but maybe all storage was full?
               // No specific metal found to reference, maybe just log a general "Quarries attempted production"
               console.log("Quarries produced but storage may have been full for specific metals.");
          }
     }
}
function produceAnimalProducts() {
     gameState.productionProgress.milk++;
     gameState.productionProgress.wool++;

     if (gameState.productionProgress.milk >= gameConfig.productionIntervals.milk) {
         let milkProduced = false;
         gameState.tamedAnimals.forEach(animal => {
             if (animal.type === 'cow') {
                 if (updateResource('milk', 1)) {
                     if (!milkProduced) showAlert('alertProducedMilk', 1500, true);
                     milkProduced = true;
                 } else {
                     if (!milkProduced) showAlert('alertStorageFullMilk', 1500, true);
                     milkProduced = true; // Still set true to avoid showing multiple storage alerts
                 }
             }
         });
         gameState.productionProgress.milk = 0;
     }

     if (gameState.productionProgress.wool >= gameConfig.productionIntervals.wool) {
         let woolProduced = false;
         gameState.tamedAnimals.forEach(animal => {
             if (animal.type === 'sheep') {
                 if (updateResource('wool', 1)) {
                     if (!woolProduced) showAlert('alertProducedWool', 1500, true);
                     woolProduced = true;
                 } else {
                     if (!woolProduced) showAlert('alertStorageFullWool', 1500, true);
                     woolProduced = true; // Still set true
                 }
             }
         });
         gameState.productionProgress.wool = 0;
     }
}
function handleTameClick(event) {
    const selectedUnit = gameState.units.find(u => u.id === gameState.selectedUnitId);
    if (!selectedUnit) { showAlert("noUnitSelected"); return; }

    const unitConfig = gameConfig.units[selectedUnit.type];
    const hasHusbandry = gameState.completedTech.has('animalHusbandry');
    const targetAnimalType = event.target.dataset.tameTarget;

    if (!unitConfig?.canTame) { showAlert('alertTameNeedPawn'); return; }
    if (!hasHusbandry) { showAlert('alertTameNeedTech'); return; }
    if (!targetAnimalType) { showAlert('alertTameNotAnimal'); return; }

    const cost = { wheat: gameConfig.tameCostWheat };
    if (!canAfford(cost)) { showAlert('alertTameNeedWheat', 3000, true, [gameConfig.tameCostWheat]); return; }

    if (spendResources(cost)) {
        const tileData = getTileData(selectedUnit.worldX, selectedUnit.worldY);
        if (tileData && tileData.type === `wild${targetAnimalType.charAt(0).toUpperCase() + targetAnimalType.slice(1)}`) {
            const newAnimal = { type: targetAnimalType, id: `animal-${Date.now()}-${Math.random().toString(16).slice(2)}` };
            gameState.tamedAnimals.push(newAnimal);

            tileData.type = tileData.biome === 'desert' ? 'sand' : 'grass';
            setTileData(selectedUnit.worldX, selectedUnit.worldY, tileData); // FIX: Use selectedUnit.worldY consistently (already did this last turn)

            selectedUnit.exp = (selectedUnit.exp || 0) + gameConfig.expPerTame;

             const animalNameKey = `animal${targetAnimalType.charAt(0).toUpperCase() + targetAnimalType.slice(1)}`;
             const animalName = getLangMsg(animalNameKey);
            showAlert('alertTameSuccess', 3000, true, [animalName]);
            logEvent('logGainedExpTame', [unitConfig.nameKey, selectedUnit.id, gameConfig.expPerTame, animalName]);

            updateTamedAnimalsDisplay();
            updateGrid();
            checkResource();
            updateUnitInfoDisplay();
        } else {
             console.error("Tame target mismatch or tile changed unexpectedly.");
             // Refund resources if tame failed unexpectedly AFTER spending
             updateResource('wheat', gameConfig.tameCostWheat);
        }
    }
}
function findSpawnPoint(aX, aY) { const dirs = [{dx: 0, dy: -1}, {dx: 1, dy: 0}, {dx: 0, dy: 1}, {dx: -1, dy: 0}, {dx: 1, dy: -1}, {dx: 1, dy: 1}, {dx: -1, dy: 1}, {dx: -1, dy: -1}]; for (const dir of dirs) { const sx = aX + dir.dx; const sy = aY + dir.dy; const sD = getTileData(sx, sy); const cS = `${sx},${sy}`; const isO = gameState.units.some(u => u.worldX === sx && u.worldY === sy);
         // Check if potential spawn point is land/sand AND does NOT have a building defined in gameConfig.buildings
        if (gameState.revealedTiles.has(cS) && sD && (sD.type === 'grass' || sD.type === 'sand') && !isO && (!sD.building || !gameConfig.buildings[sD.building])) {
            return { worldX: sx, worldY: sy };
        }
    } return null; }
function focusOnUnit(uId) { const u = gameState.units.find(un => un.id === uId); if (!u) return; const uC = gameConfig.units[u.type]; const nVX = u.worldX - gameConfig.viewCenterOffset; const nVY = u.worldY - gameConfig.viewCenterOffset; gameState.viewOffsetX = nVX; gameState.viewOffsetY = nVY; revealArea(u.worldX, u.worldY, uC?.revealRadius || gameConfig.revealRadiusBase); gameState.selectedUnitId = uId; updateUnitDisplayBar(); updateUnitInfoDisplay(); updateGrid(); checkResource(); }
function logEvent(mK, args = [], rO = null) { const tS = getFormattedTime(); const m = rO !== null ? rO : getLangMsg(mK, args); const sA = (Array.isArray(args) ? args : [args]).map(a => (typeof a === 'number' || typeof a === 'boolean' || a === null) ? a : String(a)); gameState.eventLogs.push({ time: tS, messageKey: mK, args: sA, rendered: m }); if (gameState.eventLogs.length > gameConfig.maxLogEntries) gameState.eventLogs.shift(); if (DOMElements.logsPanel.style.display === 'block') updateLogsDisplay(); }


// --- Event Listeners ---
 function setupEventListeners() {
     DOMElements.grid.addEventListener('click', (event) => { const tile = event.target.closest('.tile'); if (!tile) { if (gameState.unitToDeploy || gameState.selectedBuilding) { gameState.unitToDeploy = null; gameState.selectedBuilding = null; gameState.highlightEnabled = false; updateGrid(); } return; } const gridX = parseInt(tile.dataset.gridX); const gridY = parseInt(tile.dataset.gridY); const worldX = gridX + gameState.viewOffsetX; const worldY = gridY + gameState.viewOffsetY; if (tile.classList.contains('unknown') && !gameState.unitToDeploy) { return; } if (gameState.unitToDeploy) { if (tile.classList.contains('unknown')) { showAlert('alertInvalidHouseTarget', 2500, true); gameState.unitToDeploy = null; gameState.highlightEnabled = false; updateGrid(); return; } const targetData = getTileData(worldX, worldY); // Check for a house using loaded building data
          if (targetData?.building === 'house' && gameConfig.buildings['house'] && targetData.unitDeployed === false) {
            deployUnitNearHouse(gameState.unitToDeploy, worldX, worldY);
         } else { showAlert('alertInvalidHouseTarget', 2500, true); gameState.unitToDeploy = null; gameState.highlightEnabled = false; updateGrid(); } return; } if (gameState.selectedBuilding) { handlePlaceBuilding(worldX, worldY); return; } const clickedUnit = gameState.units.find(u => u.worldX === worldX && u.worldY === worldY); if (clickedUnit) { gameState.selectedUnitId = clickedUnit.id; gameState.highlightEnabled = false; focusOnUnit(clickedUnit.id); showAlert('alertSelectedUnit', 1500, false, [gameConfig.units[clickedUnit.type]?.nameKey || clickedUnit.type, clickedUnit.id]); } else if (gameState.selectedUnitId) { moveUnit(gridX, gridY); } if (!gameState.selectedBuilding && !gameState.unitToDeploy) gameState.highlightEnabled = false; });
    DOMElements.actionButton.addEventListener('click', () => gatherResource(null, false));
    DOMElements.tameButton.addEventListener('click', handleTameClick);
    DOMElements.middleControls.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-panel-target]');
        if (button) {
            togglePanel(button.dataset.panelTarget);
        }
        if (event.target.id === 'cheat-reveal-button') { toggleMapRevealCheat(); }
    });
    DOMElements.closeTutorialButton.addEventListener('click', () => { DOMElements.tutorialModal.style.display = 'none'; });
    DOMElements.tutorialModal.addEventListener('click', (event) => { if (event.target === DOMElements.tutorialModal) { DOMElements.tutorialModal.style.display = 'none'; } });
    DOMElements.closeTechTreeButton.addEventListener('click', () => { DOMElements.techTreeModal.style.display = 'none'; });
    DOMElements.techTreeModal.addEventListener('click', (event) => { if (event.target === DOMElements.techTreeModal) { DOMElements.techTreeModal.style.display = 'none'; } });
    DOMElements.logSearchInput.addEventListener('input', updateLogsDisplay); DOMElements.logFilterCheckbox.addEventListener('change', updateLogsDisplay);
    DOMElements.saveButton.addEventListener('click', saveGame); DOMElements.loadButton.addEventListener('click', () => DOMElements.loadFileInput.click());
    DOMElements.loadFileInput.addEventListener('change', loadGame); DOMElements.languageSwitchButton.addEventListener('click', switchLanguage);
    DOMElements.renameColonyButton.addEventListener('click', handleRenameColony);
    DOMElements.grid.addEventListener('mouseover', (event) => { const tile = event.target.closest('.tile'); if (tile && !tile.classList.contains('unknown') && gameState.selectedUnitId != null && !gameState.selectedBuilding && !gameState.unitToDeploy) { gameState.highlightEnabled = true; updateGrid(); } });
    DOMElements.grid.addEventListener('mouseout', (event) => { if (gameState.highlightEnabled && !gameState.selectedBuilding && !gameState.unitToDeploy && (!event.relatedTarget || !event.relatedTarget.closest || !event.relatedTarget.closest('#grid'))) { gameState.highlightEnabled = false; updateGrid(); } });
}

// --- Action Handlers ---
function togglePanel(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
        console.error("Toggle panel called with invalid target ID:", targetId);
        return;
    }

    gameState.selectedBuilding = null;
    gameState.unitToDeploy = null;
    gameState.highlightEnabled = false;

    const isModal = targetElement.id.includes('-modal');
    const isVisible = targetElement.style.display === 'block';

    hideAllPanels(); // Hide all other panels first

    if (!isVisible) {
        targetElement.style.display = 'block'; // Show the target panel/modal

        // Update content based on panel
        if (targetId === 'tech-tree-modal') { updateResearchUI(); updateLanguageUI(); }
        else if (targetId === 'tutorial-modal') updateLanguageUI(); // Update language within tutorial modal if open
        // Call update functions *after* showing the panel and after gameConfig.buildings is populated
        if (Object.keys(gameConfig.buildings).length > 0) { // Ensure buildings are loaded before updating panels that depend on them
             if (targetId === 'buildings-list') updateBuildingsList();
             if (targetId === 'units-panel') updateUnitsPanel();
        }
        if (targetId === 'upgrade-info') updateUnitInfoDisplay(); // Doesn't depend on buildings
        if (targetId === 'logs-panel') updateLogsDisplay(); // Doesn't depend on buildings
        if (targetId === 'tamed-animals-panel') updateTamedAnimalsDisplay(); // Doesn't depend on buildings
    }
    updateGrid();
}
function hideAllPanels() { document.querySelectorAll('.panel:not(#inventory)').forEach(p => { p.style.display = 'none'; }); DOMElements.tutorialModal.style.display = 'none'; DOMElements.techTreeModal.style.display = 'none'; }
function handleResearchClick(techId) { const tech = gameConfig.tech[techId]; if (!tech || gameState.completedTech.has(techId)) return; if (gameState.activeResearch && gameState.activeResearch !== techId) { showAlert("alertAlreadyResearching", 3000, true, [gameConfig.tech[gameState.activeResearch]?.nameKey || gameState.activeResearch]); return; } if (!tech.requires.every(req => gameState.completedTech.has(req))) return; const fullCost = gameConfig.getTechCost(techId); if (!fullCost) { console.error("Invalid cost for tech:", techId); return; } const resourceCost = { ...fullCost }; delete resourceCost.research; if (!canAfford(resourceCost)) { showAlert('alertNotEnoughResourcesTech', 3000, true, [tech.nameKey]); return; } if (!spendResources(resourceCost)) { console.error("Failed to spend resources for tech", techId, "despite passing canAfford check."); return; } gameState.activeResearch = techId; gameState.researchPoints = 0; updateResearchPointsDisplay(); updateResearchUI(); updateResearchStatusDisplayOnly(); showAlert("alertResearchStarted", 2500, true, [tech.nameKey]); }
function handlePlaceBuilding(wX, wY) { const bU = gameState.units.find(u => u.id === gameState.selectedUnitId); const bId = gameState.selectedBuilding; if (!bU) { showAlert('alertSelectUnitToBuild', 3000, true); gameState.selectedBuilding = null; gameState.highlightEnabled = false; updateGrid(); return; } if (!bId) { gameState.selectedBuilding = null; gameState.highlightEnabled = false; updateGrid(); return; }
    // Retrieve building configuration using the loaded data
    const bC = gameConfig.buildings[bId];
    const bldrC = gameConfig.units[bU.type];
    const l = getLang();

    // Ensure the building type is valid (was loaded from XML)
    if (!bC) {
        console.error(`Invalid or unloaded building type: ${bId}`);
        gameState.selectedBuilding = null;
        return;
    }

    // Check if the unit type can build this specific building type
    if (!bldrC?.build?.includes(bId)) {
        // Use nameKey from loaded data for the unit and building alerts
        showAlert('alertUnitCannotBuild', 3000, true, [bldrC?.nameKey || bU.type, bC.nameKey]);
        gameState.selectedBuilding = null;
        return;
    }

    const tD = getTileData(wX, wY);
    let canPlace = true;
    let failReasonKey = '';
    let failReasonArgs = [];

     // Check tile validity
    if (!tD) {
        canPlace = false; failReasonKey = 'alertCannotBuildOnTerrain'; failReasonArgs = [l.unknownTile];
    } else if (tD.type === 'water') {
        canPlace = false; failReasonKey = 'alertCannotBuildOnTerrain'; failReasonArgs = [l.water];
    } else if (['tree', 'stone', 'flint', 'wildPig', 'wildSheep', 'wildCow'].includes(tD.type)) {
        const rNKey = `tileResource${tD.type.charAt(0).toUpperCase() + tD.type.slice(1)}`;
        const rN = l[rNKey] || tD.type;
        canPlace = false; failReasonKey = 'alertCannotBuildOnResource'; failReasonArgs = [rN];
    } else if (tD.building && gameConfig.buildings[tD.building]) { // Check if the tile has a building that is defined in config
        canPlace = false; failReasonKey = 'alertCannotBuildExists'; failReasonArgs = [l[gameConfig.buildings[tD.building].nameKey] || tD.building];
    }

    if (!canPlace) {
        showAlert(failReasonKey || 'alertCannotBuildNonEmpty', 3000, true, failReasonArgs);
        gameState.selectedBuilding = null;
        gameState.highlightEnabled = false;
        updateGrid();
        return;
    }

     // Check resource cost from loaded data
    if (!spendResources(bC.cost || {})) { // Default cost to empty object if not present in XML
        showAlert('alertNotEnoughResources', 3000, true, [bC.nameKey]);
        return;
    }

    // Place the building
    tD.building = bId;
     // Only set unitDeployed if the building is a house and has the property configured/initialized
     // Add a check to gameConfig.buildings[bId]
    if (bId === 'house' && gameConfig.buildings['house'] && tD.unitDeployed === undefined) {
         tD.unitDeployed = false;
    } else if (bId === 'house' && gameConfig.buildings['house'] && tD.unitDeployed === null) {
         // If unitDeployed was explicitly null (e.g., from loading v1.11 save)
         tD.unitDeployed = false;
    }
    setTileData(wX, wY, tD);

    // Success messages and updates
     showAlert('alertBuildingBuilt', 2500, true, [bC.nameKey]); // Use nameKey from loaded data
    bU.exp = (bU.exp || 0) + gameConfig.expPerBuild;
    logEvent('logGainedExp', [bldrC?.nameKey || bU.type, bU.id, gameConfig.expPerBuild, bC.nameKey]); // Use nameKeys

    // Update capacity if the built building provides capacity bonus, check structure defensively
    if (bC.provides && (bC.provides.capacityBonus !== undefined || bC.provides.capacityBonusWheat !== undefined)) {
         updateInventoryCapacity();
    }

    // Reset state and update UI
    gameState.selectedBuilding = null;
    gameState.highlightEnabled = false;
    updateGrid();
    updateBuildingsList(); // List needs update to potentially enable/disable buttons
    updateUnitsPanel(); // Unit panel needs update if a house was built/used
    if (bU.id === gameState.selectedUnitId) updateUnitInfoDisplay(); // Update EXP display
}
function handleUpgradeClick(e) { const sU = gameState.units.find(u => u.id === gameState.selectedUnitId); if (!sU || e.target.disabled) return; const uId = e.target.dataset.upgradeType; const uC = gameConfig.upgrades[uId]; if (!uC) return; const cost = uC.cost; const cL = sU.upgrades?.[uId] || 0; if (cL >= uC.maxLevel) { showAlert('alertUpgradeMaxLevel', 3000, true, [uC.nameKey]); return; } if (sU.exp >= cost) { sU.exp -= cost; if (!sU.upgrades) sU.upgrades = {}; if (uC.effect.moveBonus) { sU.upgrades[uId] = (sU.upgrades[uId] || 0) + 1; } else if (uC.effect.autoGather) { sU.upgrades[uId] = true; } showAlert('alertUpgradeSuccess', 2500, true, [uC.nameKey, sU.id]); logEvent('alertUpgradeSuccess', [uC.nameKey, sU.id]); updateUnitInfoDisplay(); updateGrid(); } else { showAlert('alertNotEnoughExp', 3000, true, [uC.nameKey]); } }
function deployUnitNearHouse(uT, hX, hY) {
     const uC = gameConfig.units[uT];
     const l = getLang();
     if (!uC) { console.error("Invalid unit type:", uT); gameState.unitToDeploy = null; gameState.highlightEnabled = false; updateGrid(); return; }

     const hTD = getTileData(hX, hY);
     // Double check that the target tile is actually a house with unitDeployed=false based on loaded config
     if (!hTD || hTD.building !== 'house' || !gameConfig.buildings['house'] || hTD.unitDeployed !== false) {
          showAlert('alertInvalidHouseTarget', 2500, true); // Re-alert if state changed or initial selection was flawed
          gameState.unitToDeploy = null; gameState.highlightEnabled = false; updateGrid(); return;
     }

     const sD = findSpawnPoint(hX, hY);
     if (sD) {
          const nU = { id: `unit-${gameState.nextUnitId++}`, type: uT, worldX: sD.worldX, worldY: sD.worldY, exp: 0, upgrades: {} };
          gameState.units.push(nU);

          // Update the house tile to mark the unit as deployed
          hTD.unitDeployed = true; // This was already checked and found false, now set it true
          setTileData(hX, hY, hTD);

          revealArea(nU.worldX, nU.worldY, uC?.revealRadius || gameConfig.revealRadiusBase);
          showAlert("alertUnitDeployed", 2000, true, [uC.nameKey]);
          updateUnitDisplayBar();
     } else {
          showAlert("alertNoSpaceForUnit", 3000, true, [uC.nameKey]);
     }

     gameState.unitToDeploy = null;
     gameState.highlightEnabled = false;
     updateGrid();
     updateUnitsPanel(); // Unit panel needs update to reflect House usage/unavailablity
}
function toggleMapRevealCheat() { const size = gameConfig.cheatRevealSize; if (!gameState.cheatMapRevealed) { console.log(`CHEAT: Revealing map area +/- ${size} around (0,0)`); for (let wy = -size; wy <= size; wy++) { for (let wx = -size; wx <= size; wx++) { const cS = `${wx},${wy}`; if (!getTileData(wx, wy)) { generateTileContent(wx, wy, true); } gameState.revealedTiles.add(cS); } } gameState.cheatMapRevealed = true; logEvent('cheatMapRevealed'); showAlert('cheatMapRevealed', 1500, false); } else { console.log("CHEAT: Hiding map (reverting to naturally revealed)"); gameState.revealedTiles = new Set(gameState.naturallyRevealedTiles); gameState.cheatMapRevealed = false; logEvent('cheatMapHidden'); showAlert('cheatMapHidden', 1500, false); } updateGrid(); }
function handleRenameColony() { const lang = getLang(); const currentName = gameState.colonyName; const newName = prompt(lang.promptRenameColony || "Enter new colony name:", currentName); if (newName && newName.trim() !== "" && newName !== currentName) { gameState.colonyName = newName.trim(); updateLanguageUI(); logEvent('logColonyRenamed', [gameState.colonyName]); } }
function gatherSaveData() {
    const saveData = {
        version: gameConfig.saveVersion,
        gameState: {
            units: gameState.units,
            nextUnitId: gameState.nextUnitId,
            selectedUnitId: gameState.selectedUnitId,
            inventory: gameState.inventory,
            discoveredResources: Array.from(gameState.discoveredResources),
            tamedAnimals: gameState.tamedAnimals,
            researchPoints: gameState.researchPoints,
            activeResearch: gameState.activeResearch,
            completedTech: Array.from(gameState.completedTech),
            productionProgress: gameState.productionProgress,
            colonyName: gameState.colonyName,
            currentLanguage: gameState.currentLanguage,
            viewOffsetX: gameState.viewOffsetX,
            viewOffsetY: gameState.viewOffsetY,
            // Note: worldData includes tile types, buildings, and unitDeployed status
            worldData: gameState.worldData,
            revealedTiles: Array.from(gameState.revealedTiles),
            naturallyRevealedTiles: Array.from(gameState.naturallyRevealedTiles),
            cheatMapRevealed: gameState.cheatMapRevealed,
            eventLogs: gameState.eventLogs.map(log => ({ time: log.time, messageKey: log.messageKey, args: log.args || [] })),
        }
    };
    return saveData;
}
function saveGame() { try { const sD = gatherSaveData(); const sDJ = JSON.stringify(sD, null, 2); const b = new Blob([sDJ], { type: 'application/json' }); const u = URL.createObjectURL(b); const l = document.createElement('a'); l.href = u; const sCN = gameState.colonyName.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'colony'; l.download = `civsim_${sCN}_save_v${sD.version}.json`; document.body.appendChild(l); l.click(); document.body.removeChild(l); URL.revokeObjectURL(u); showAlert('alertGameSaved', 2000); logEvent('logGameSaved'); } catch (e) { console.error("Save error:", e); showAlert('alertSaveError', 4000); } }
async function applyLoadedData(data) {
    // Ensure gameConfig is populated before applying state that depends on it
    if (Object.keys(gameConfig.resources).length === 0) {
         console.warn("Resources not yet loaded when applying save data. Attempting to load resources first.");
         try {
            await window.loadResourcesFromXML();
         } catch (e) {
             console.error("Failed to load resources needed for save data.", e);
              showAlert('alertLoadError', 5000, true, [`${e.message || 'Failed to load resources.'} Cannot load game.`]);
              throw new Error("Failed to load resources for save.");
         }
    }
     if (Object.keys(gameConfig.buildings).length === 0) {
         console.warn("Buildings not yet loaded when applying save data. Attempting to load buildings first.");
         try {
            await window.loadBuildingsFromXML();
         } catch (e) {
             console.error("Failed to load buildings needed for save data.", e);
              showAlert('alertLoadError', 5000, true, [`${e.message || 'Failed to load buildings.'} Cannot load game.`]);
               throw new Error("Failed to load buildings for save.");
         }
     }

    const requiredMinVersion = 1.12; // Example minimum compatible version
    if (!data || !data.gameState) {
         showAlert('alertLoadInvalidFormat', 5000, true);
         return false;
    }

    const loadedVersion = parseFloat(data.version) || 0;
     // Allow loading saves from previous versions, but warn
     if (loadedVersion < requiredMinVersion) {
         showAlert('alertSaveVersionMismatch', 6000, true);
         console.warn(`Loading save from version ${loadedVersion}, current is ${gameConfig.saveVersion}. Compatibility issues are possible.`);
     }
    // If the save is significantly *newer* than the current version, it's also potentially problematic.
    if (loadedVersion > parseFloat(gameConfig.saveVersion)) {
        showAlert('alertSaveVersionMismatch', 6000, true, [`(Save is Newer: v${loadedVersion})`]); // Added arg for display
         console.warn(`Loading save from FUTURE version ${loadedVersion}, current is ${gameConfig.saveVersion}. Unexpected behaviour is likely.`);
    }


    const loadedState = data.gameState;

    // Apply basic state directly
    gameState.units = loadedState.units || [];
    gameState.nextUnitId = loadedState.nextUnitId || 0;
    // Select the first unit if selected unit ID is no longer valid
    gameState.selectedUnitId = loadedState.selectedUnitId !== undefined && gameState.units.find(u => u.id === loadedState.selectedUnitId) ? loadedState.selectedUnitId : (gameState.units.length > 0 ? gameState.units[0].id : null);
    gameState.inventory = loadedState.inventory || {};
    gameState.discoveredResources = new Set(loadedState.discoveredResources || []);
    gameState.tamedAnimals = loadedState.tamedAnimals || [];
    gameState.researchPoints = loadedState.researchPoints || 0;
    gameState.activeResearch = loadedState.activeResearch || null;
    gameState.completedTech = new Set(loadedState.completedTech || []);
    // Use provided default structure in case it's missing
    gameState.productionProgress = loadedState.productionProgress || { wheat: 0, coal: 0, quarry: 0, milk: 0, wool: 0 };
    gameState.colonyName = loadedState.colonyName || "Loaded Colony";
    // Always respect the language from the save? Or prompt? Sticking to save for consistency.
    gameState.currentLanguage = loadedState.currentLanguage || 'en';
    gameState.viewOffsetX = loadedState.viewOffsetX || 0;
    gameState.viewOffsetY = loadedState.viewOffsetY || 0;
    gameState.worldData = loadedState.worldData || {}; // Load raw world data
    gameState.revealedTiles = new Set(loadedState.revealedTiles || []);
    // naturallyRevealedTiles was added later, use revealed if not present
    gameState.naturallyRevealedTiles = new Set(loadedState.naturallyRevealedTiles || loadedState.revealedTiles || []);
    gameState.cheatMapRevealed = loadedState.cheatMapRevealed || false;

    // Load logs and regenerate rendered messages based on current language
    gameState.eventLogs = (loadedState.eventLogs || []).map(logData => ({
        time: logData.time,
        messageKey: logData.messageKey,
        args: logData.args || [],
        rendered: getLangMsg(logData.messageKey, logData.args || []) // Regenerate rendered string
    }));


    // --- Data Structure Migration/Normalization (Optional but recommended) ---
    // Add default exp/upgrades if loading older saves where they didn't exist on units
    gameState.units.forEach(u => {
        if (u.exp === undefined) u.exp = 0;
        if (u.upgrades === undefined) u.upgrades = {}; // Ensure upgrades object exists
    });

     // Ensure `unitDeployed` flag is present on old house tiles if missing
     // This is important since houses in loaded XML no longer have unitDeployed by default.
    Object.values(gameState.worldData).forEach(row => {
         if (row) {
            Object.values(row).forEach(tile => {
                 if (tile && tile.building === 'house' && gameConfig.buildings['house'] && tile.unitDeployed === undefined) {
                     console.log(`Migrating 'house' tile at missing unitDeployed flag`);
                     tile.unitDeployed = false; // Assume houses in old saves without flag were empty
                 } else if (tile && tile.building === 'house' && gameConfig.buildings['house'] && tile.unitDeployed === null) {
                     console.log(`Migrating 'house' tile from null to false for unitDeployed flag`);
                     tile.unitDeployed = false; // Migrate explicit null to false if it means "empty"
                 }
            });
         }
    });
     // --- End Migration ---


    // Reset UI states derived from selection or panels
    gameState.selectedBuilding = null;
    gameState.unitToDeploy = null;
    gameState.highlightEnabled = false;
    clearTimeout(gameState.alertTimeout); // Clear any pending alerts

    // Update UI elements based on the loaded state and loaded configs
    updateInventoryCapacity(); // Depends on worldData (buildings) and base capacities (resources.xml)
    updateLanguageUI(); // Updates ALL UI text using the loaded language
    // updateInventoryDisplay() is called by updateInventoryCapacity and updateLanguageUI
    updateResearchPointsDisplay();
    updateUnitDisplayBar(); // Depends on unit data and language
    updateGrid(); // Depends on worldData, units, revealedTiles, buildings.xml, language
    // updateBuildingsList() is called by updateLanguageUI (depends on completedTech, buildings.xml, resources.xml(for cost))
    // updateUnitsPanel() is called by updateLanguageUI (depends on completedTech, buildings.xml, units)
    // updateUnitInfoDisplay() is called by updateLanguageUI (depends on units, gameConfig.upgrades, language)
    // updateResearchStatusDisplayOnly() is called by updateLanguageUI (depends on activeResearch, tech, language)
    // updateTamedAnimalsDisplay() is called by updateLanguageUI (depends on tamedAnimals list, language)

    // Set the game state to initialized after everything is loaded and updated
    gameState.gameInitialized = true;

    // Focus on the selected unit if one exists
    if (gameState.selectedUnitId) {
        focusOnUnit(gameState.selectedUnitId); // This also calls updateGrid() and checkResource()
    } else {
        // If no unit selected (e.g., fresh game or loaded save without unit), ensure grid and other core UI is still updated
        updateGrid();
        checkResource(); // Ensures action buttons/info display "No unit selected"
    }

    // Final alert after successful load
    showAlert('alertLoadSuccess', 3000, false, [gameState.colonyName]); // Do not log the load success unless explicitly desired in logs
    return true; // Indicate successful loading and application
}
async function loadGame(e) {
    const f = e.target.files[0];
    if (!f) return;

    const r = new FileReader();
    r.onload = async function(ev) { // Make onload async to potentially await resource/building loading
        try {
            const loadedData = JSON.parse(ev.target.result);
            // Attempt to apply data, includes pre-checks for configs
            await applyLoadedData(loadedData);
        } catch (err) {
             // Catch errors during JSON parse OR applyLoadedData
            console.error("Load error:", err);
             // Specific message from applyLoadedData will be shown if it threw
             if (!document.getElementById('alert-message')?.textContent.includes('Error')) { // Use optional chaining defensively
                  showAlert('alertLoadError', 5000, true, [err.message || 'Unknown error']);
             }
        } finally {
             // Clear the file input value in any case
            DOMElements.loadFileInput.value = null;
        }
    };
    r.onerror = function() {
        showAlert('alertReadFileError', 3000);
        DOMElements.loadFileInput.value = null;
    };
    r.readAsText(f);
}
function updateLanguageUI() {
     const lang = getLang();
     document.title = lang.gameTitle;
     document.querySelector('h1').textContent = lang.gameTitle;
     DOMElements.languageSwitchButton.textContent = (gameState.currentLanguage === 'en') ? lang.switchToFrench : lang.switchToEnglish;
     DOMElements.languageSwitchButton.title = lang.switchLanguageTooltip;
     DOMElements.renameColonyButton.title = lang.renameColonyTitle || "Rename Colony";
     DOMElements.colonyNameDisplay.textContent = `${lang.colonyLabel} ${gameState.colonyName}`;

     // Update fixed panel titles
     DOMElements.inventoryDisplay.querySelector('h2').textContent = lang.inventoryTitle;
     const emptyInv = DOMElements.inventoryDisplay.querySelector('.empty-inventory'); if(emptyInv) emptyInv.textContent = lang.inventoryEmpty || 'Empty';

     // Update button texts in middle controls
     document.getElementById('tutorial-button').textContent = lang.tutorialButton;
     document.getElementById('research-button').textContent = lang.researchButton;
     document.getElementById('buildings-button').textContent = lang.buildingsButton;
     document.getElementById('units-button').textContent = lang.unitsButton;
     document.getElementById('animals-button').textContent = lang.animalsButton || 'Animals';
     document.getElementById('upgrade-button').textContent = lang.upgradeButton;
     document.getElementById('logs-button').textContent = lang.logsButton;
     DOMElements.saveButton.textContent = lang.saveButton;
     DOMElements.loadButton.textContent = lang.loadButton;
     DOMElements.cheatRevealButton.textContent = lang.cheatRevealMap;

     // Update right panel section titles/labels
     DOMElements.logsPanel.querySelector('h2').textContent = lang.logsPanelTitle;
     DOMElements.tamedAnimalsPanel.querySelector('h2').textContent = lang.animalsPanelTitle || 'Tamed Animals';
     DOMElements.logSearchInput.placeholder = lang.logSearchPlaceholder;
     const filterLabel = DOMElements.logFilterCheckbox.parentElement; if (filterLabel) filterLabel.childNodes[1].nodeValue = ` ${lang.logFilterLabel}`;
     document.getElementById('research-points-display-container').childNodes[0].nodeValue = `${lang.researchPointsLabel} `;
     document.getElementById('unit-exp-display-container').childNodes[0].nodeValue = `${lang.unitExpLabel} `;
     document.getElementById('unit-biome-display-container').childNodes[0].nodeValue = `Biome: `;
     document.getElementById('unit-coords-display-container').childNodes[0].nodeValue = `Coords: `;

     const buildTitle = DOMElements.buildingsList.querySelector('h2'); if (buildTitle) buildTitle.textContent = lang.buildingsPanelTitle;
     const unitsTitle = DOMElements.unitsPanel.querySelector('h2'); if (unitsTitle) unitsTitle.textContent = lang.unitsPanelTitle;
     const upgradeTitleH4 = DOMElements.upgradeInfoDisplay.querySelector('h4'); if (upgradeTitleH4) { upgradeTitleH4.textContent = lang.upgradeSectionTitle; }


     // Update Tutorial Modal content (title and steps)
     DOMElements.tutorialTitle.textContent = lang.tutorialTitle;
     // Clear existing steps before adding
     DOMElements.tutorialStepsList.innerHTML = '';
     DOMElements.tutorialStepsList.innerHTML = `<li>${lang.tutorialStep1}</li> <li>${lang.tutorialStep2}</li><li>${lang.tutorialStep3}</li> <li>${lang.tutorialStep4}</li><li>${lang.tutorialStep5}</li> <li>${lang.tutorialStep6}</li><li>${lang.tutorialStep7}</li> <li>${lang.tutorialStep8}</li><li>${lang.tutorialStep9}</li> <li>${lang.tutorialStep10}</li><li>${lang.tutorialStep11}</li><li>${lang.tutorialStep12}</li><li>${lang.tutorialStep13}</li><li>${lang.tutorialStep14}</li><li>${lang.tutorialStep15}</li><li>${lang.tutorialStep16}</li>`;
     DOMElements.closeTutorialButton.textContent = lang.closeButton;

      // Update Tech Tree Modal content (title and legend)
     DOMElements.techTreeTitle.textContent = lang.researchPanelTitle;
     DOMElements.closeTechTreeButton.textContent = lang.closeButton;
     DOMElements.techTreeLegend.querySelectorAll('[data-lang-key]').forEach(s => { const k = s.dataset.langKey; s.textContent = lang[k] || k; });

     // Re-render dynamic UI elements - ensure they are only called AFTER XMLs are loaded
     // This is handled by the fact that initializeGame and applyLoadedData are awaited in DOMContentLoaded and loadGame.
     // So, calling these functions here after setting language is correct.

     updateInventoryDisplay();
     updateGrid(); // Re-renders tiles and unit markers (which use names)
     updateUnitDisplayBar(); // Re-renders unit icons (which use names)
     updateBuildingsList(); // Re-renders building buttons (which use names)
     updateUnitsPanel(); // Re-renders deploy unit buttons (which use names)
     updateUnitInfoDisplay(); // Re-renders upgrade buttons/text (which use names)
     updateLogsDisplay(); // Re-renders logs (using current language messages)
     updateTamedAnimalsDisplay(); // Re-renders animal list
     checkResource(); // Updates resource name display and action button text
     updateResearchStatusDisplayOnly(); // Updates research status text

     // Re-render modals if open to update their content
     if (DOMElements.techTreeModal.style.display === 'block') {
         updateResearchUI(); // Re-renders tech nodes and lines with correct names/titles (Depends on tech data which is not XML yet)
     }
     // Tutorial modal content is static HTML now, updated directly.
}
function switchLanguage() {
    gameState.currentLanguage = (gameState.currentLanguage === 'en') ? 'fr' : 'en';
    // Re-render logs with new language messages
    gameState.eventLogs.forEach(log => {
        // If log args are object/arrays etc, need to be careful, but for simple types, args=[] is fine.
        log.rendered = getLangMsg(log.messageKey, log.args || []);
    });
    updateLanguageUI();
}
async function initializeGame() {
     // Game Initialization Flow:
     // 1. XMLs loaded by DOMContentLoaded -> populate gameConfig.resources/buildings
     // 2. initializeGame starts -> sets initial game state
     // 3. Generates world around start -> uses populated gameConfig
     // 4. Sets up initial unit(s) -> uses gameConfig.units
     // 5. Calculates initial view offset & reveals area -> uses gameConfig
     // 6. Initializes DOM for grid
     // 7. Sets up event listeners
     // 8. Hides panels, Updates all UI components -> these depend on populated gameConfig
     // 9. Calls focusOnUnit (-> updateGrid, checkResource)
     // 10. Shows welcome, sets gameInitialized flag.

    const seed = Date.now();
    noise.biome = SimplexNoise.create(seed);
    noise.feature = SimplexNoise.create(seed + 1);
    noise.water = SimplexNoise.create(seed + 2);

    // Reset/initialize gameState vars
    gameState.units = [];
    gameState.nextUnitId = 0;
    gameState.selectedUnitId = null;
    gameState.inventory = {}; // Start empty
    gameState.discoveredResources = new Set(); // Start empty
    // gameConfig.baseInventoryCapacity is populated by XML before this
    gameState.tamedAnimals = []; // Start empty
    gameState.researchPoints = 0; // Start at 0
    gameState.activeResearch = null; // Start no research
    gameState.completedTech = new Set(); // Start no tech
    gameState.selectedBuilding = null; // Start no selected building
    gameState.unitToDeploy = null; // Start no unit to deploy
    gameState.productionProgress = { wheat: 0, coal: 0, quarry: 0, milk: 0, wool: 0 }; // Start progress at 0
    gameState.eventLogs = []; // Start empty logs
    gameState.worldData = {}; // Start empty world data
    gameState.revealedTiles = new Set(); // Start no revealed tiles
    gameState.naturallyRevealedTiles = new Set(); // Start no naturally revealed tiles
    gameState.cheatMapRevealed = false; // Cheat off by default
    gameState.highlightEnabled = false; // Highlight off by default
    clearTimeout(gameState.alertTimeout); // Clear any residual timeout
    gameState.gameInitialized = false; // Set to true at the very end

    // Colony naming prompt
    const lang = getLang(); // Use default language until load sets different? Or stick to 'en' here? Let's stick to selected default or saved language. updateLanguageUI handles applying it later.
    // colonyName and currentLanguage state vars are handled by save/load and initial state definition
    gameState.colonyName = prompt(lang.promptColonyName || translations.en.promptColonyName, lang.defaultColonyName || translations.en.defaultColonyName) || lang.defaultColonyName || translations.en.defaultColonyName;

    logEvent('logNewGame', [gameState.colonyName]);


    // --- Map Generation & Start Point Selection ---
    const startWorldX = 5;
    const startWorldY = 5;
    let startValid = false;
    let attemptCount = 0;
    do {
        attemptCount++;
        if (attemptCount > 1) {
            logEvent('logInvalidStartRegen');
            const newSeed = Date.now() + attemptCount; // New seed for regeneration
            noise.biome = SimplexNoise.create(newSeed);
            noise.feature = SimplexNoise.create(newSeed + 1);
            noise.water = SimplexNoise.create(newSeed + 2);
            gameState.worldData = {}; // Clear old world data
            gameState.revealedTiles.clear(); // Clear old revealed tiles
            gameState.naturallyRevealedTiles.clear();
             // Re-initialize grid DOM to clear visual state from failed generation attempt if visible
            initializeGridDOM(); // Clear grid display early for retry visualization (optional, but clearer)
        }

        // Generate initial visible area around the target start point
        // Unit reveal radius needs unit data (gameConfig.units.pawn.revealRadius), which should be available here.
        const initialRevealRadius = gameConfig.units.pawn?.revealRadius || gameConfig.revealRadiusBase;
        revealArea(startWorldX, startWorldY, initialRevealRadius); // Reveal around the target center

        const startData = getTileData(startWorldX, startWorldY);

        // Check if start tile is valid land (not water) and has at least one adjacent valid land tile (not water, no building)
        let hasAdjValidLand = false;
        if (startData && startData.type !== 'water') {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) continue;
                    const adjX = startWorldX + dx;
                    const adjY = startWorldY + dy;
                    const adjData = getTileData(adjX, adjY); // Ensure data is generated for adjacent tiles by revealArea
                    // Adjacent tile is valid if it exists, is not water, AND does not have a building (checking loaded gameConfig.buildings)
                    if (adjData && adjData.type !== 'water' && (!adjData.building || !gameConfig.buildings[adjData.building])) {
                        hasAdjValidLand = true;
                        break;
                    }
                }
                if (hasAdjValidLand) break;
            }
        }

        if (startData && startData.type !== 'water' && hasAdjValidLand) {
            startValid = true;
        } else if (attemptCount >= gameConfig.maxStartRegenAttempts) {
             // Force start if max attempts reached, log the failure
            logEvent('logInvalidStartGiveUp', [gameConfig.maxStartRegenAttempts]);
            // Force the start tile type if it's still water, making it grass.
            const tileDataAtForcedStart = getTileData(startWorldX, startWorldY); // Re-fetch data for certainty
            if (!tileDataAtForcedStart) { // If tile data somehow didn't generate, force it.
                 generateTileContent(startWorldX, startWorldY, true); // Cheat generate just this tile
                 const regeneratedData = getTileData(startWorldX, startWorldY);
                 if(regeneratedData) { // If generation worked...
                     regeneratedData.type = 'grass'; // Force type
                     regeneratedData.biome = 'forest'; // Default biome
                     regeneratedData.building = null;
                     regeneratedData.unitDeployed = null;
                     setTileData(startWorldX, startWorldY, regeneratedData);
                 }
            } else if (tileDataAtForcedStart.type === 'water') {
                 tileDataAtForcedStart.type = 'grass';
                 tileDataAtForcedStart.biome = 'forest'; // Default biome for forced grass
                 tileDataAtForcedStart.building = null; // Ensure no building on forced start tile
                 tileDataAtForcedStart.unitDeployed = null; // Ensure no unit link on forced start tile
                 setTileData(startWorldX, startWorldY, tileDataAtForcedStart);
            }
             // Re-reveal the immediate area to ensure the forced change is picked up by updateGrid
             revealArea(startWorldX, startWorldY, initialRevealRadius);


             // Find a valid spawn point near the forced start if the start tile itself wasn't viable for a unit
             const unitSpawn = findSpawnPoint(startWorldX, startWorldY);
             if (!unitSpawn) {
                 console.warn("Could not find valid spawn point near forced start. Placing pawn on forced start tile (5,5).");
                 // Fallback: place unit directly on the (forced-valid) start tile if no adjacent space found.
                 // This tile is forced to be grass/sand and empty.
                 gameState.units.push({ id: `unit-${gameState.nextUnitId++}`, type: 'pawn', worldX: startWorldX, worldY: startWorldY, exp: 0, upgrades: {} });
             } else {
                 // Place pawn at the found valid adjacent spot
                 gameState.units.push({ id: `unit-${gameState.nextUnitId++}`, type: 'pawn', worldX: unitSpawn.worldX, worldY: unitSpawn.worldY, exp: 0, upgrades: {} });
                  // Need to ensure the tile at the unit spawn point has been generated/revealed and isn't occupied/building. findSpawnPoint should guarantee this.
             }


            startValid = true; // Force exit loop
        }

    } while (!startValid);


    // Add initial pawn unit(s).
    // The logic inside the do/while loop now handles creating the unit(s) for both normal and forced starts.
    if (gameState.units.length === 0) {
        // This should ideally not happen if the forced start logic is correct, but as a final fallback:
        console.error("FATAL ERROR: Could not determine a valid starting unit position even after regeneration attempts. Placing pawn at (5,5) ignoring tile type.");
        const fallbackX = 5, fallbackY = 5;
        gameState.units.push({ id: `unit-${gameState.nextUnitId++}`, type: 'pawn', worldX: fallbackX, worldY: fallbackY, exp: 0, upgrades: {} });
         // Ensure the (5,5) tile is at least generated/revealed in this error case
         if (!getTileData(fallbackX, fallbackY)) generateTileContent(fallbackX, fallbackY, true);
         revealArea(fallbackX, fallbackY, gameConfig.units.pawn?.revealRadius || gameConfig.revealRadiusBase); // Reveal around hardcoded 5,5
    }

     gameState.selectedUnitId = gameState.units[0].id; // Select the first unit created


    // Set initial view offset based on the pawn's final starting location
     const firstUnit = gameState.units[0]; // Use the actual first unit added
    gameState.viewOffsetX = firstUnit.worldX - gameConfig.viewCenterOffset;
    gameState.viewOffsetY = firstUnit.worldY - gameConfig.viewOffsetY; // Should this also be offset by gameConfig.viewCenterOffset? Assume yes for centering


    // Initial setup of DOM grid and listeners
    initializeGridDOM();
    setupEventListeners(); // Sets up all event listeners once

    // Initial UI Updates - called AFTER gameConfig is fully populated by loaders
    hideAllPanels();
    updateLanguageUI(); // Updates ALL static and initial dynamic UI text
    updateInventoryCapacity(); // Recalculates/updates based on initial state (base + buildings - none yet)
    updateUnitDisplayBar(); // Shows unit icons based on initial units
    // The following are implicitly called by updateLanguageUI, but listing dependencies:
    // updateBuildingsList(); // Shows buildings panel based on tech, costs (resources) and loaded buildings
    // updateUnitsPanel(); // Shows units panel based on tech, houses (worldData, loaded buildings), units
    // updateUnitInfoDisplay(); // Shows selected unit info based on unit data, upgrades config
    // updateResearchStatusDisplayOnly(); // Shows initial research status based on active/completed tech
    // updateTamedAnimalsDisplay(); // Shows animals panel based on tamedAnimals list

    // Focus camera on the initial unit and update the grid & checkResource
    focusOnUnit(gameState.selectedUnitId); // This triggers updateGrid and checkResource


    // Show initial welcome message
    showAlert('alertWelcome', 4000, false, [gameState.colonyName]);
    gameState.gameInitialized = true; // Mark game as initialized
    console.log("Game initialized successfully.");
}


// --- Start Game ---
// Wait for the DOM to be ready, then load necessary XML data asynchronously, then initialize the game.
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Await both asynchronous XML loading functions defined in data.js
        await window.loadResourcesFromXML();
        await window.loadBuildingsFromXML();

        // Only initialize the game state and UI *after* all necessary configuration is loaded
        initializeGame();

    } catch (error) {
        // Fatal error during loading already handled in load functions (message on body)
        console.error("Game startup aborted due to critical loading failure:", error);
    }
});