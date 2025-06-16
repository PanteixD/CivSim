// --- Game Configuration ---
const gameConfig = {
    gridSize: 10, viewCenterOffset: 5, revealRadiusBase: 2,
    maxLogEntries: 50, alertDuration: 3000,
    // baseInventoryCapacity and resources will be loaded from XML
    // buildings will be loaded from XML
    eventChance: 0.01,
    expPerBuild: 3, expPerResearchComplete: 10, expPerEventDiscovery: 5, expPerTame: 5,
    productionIntervals: { wheat: 5, coal: 7, quarry: 12, milk: 8, wool: 10 },
    wildAnimalSpawnChance: 0.02,
    wildAnimalMoveChance: 0.25,
    tameCostWheat: 5,
    noiseScales: { biome: 30.0, feature: 15.0, water: 40.0 },
    noiseThresholds: { biomeDesert: 0.3, lake: -0.3, treeForest: -0.1, flintForest: 0.0, stoneForest: 0.15 },
    desertStoneChance: 0.06, maxStartRegenAttempts: 10,
    cheatRevealSize: 100,
    saveVersion: "1.12", // Animal Husbandry update
    units: {
        pawn: { nameKey: 'unitPawn', icon: 'P', build: ['house'], move: 1, revealRadius: 2, researchBonus: 1, upgrades: ['movement1', 'autoGather'], canTame: true },
        worker: { nameKey: 'unitWorker', icon: 'W', build: ['farm', 'mine', 'quarry', 'warehouse', 'granary', 'market', 'pasture'], move: 1, revealRadius: 2, researchBonus: 0, upgrades: ['movement1', 'autoGather'], deployableFromPanel: true, requiredTech: 'settlement' },
        scout: { nameKey: 'unitScout', icon: 'S', build: [], move: 3, revealRadius: 3, researchBonus: 0, upgrades: ['movement1', 'autoGather'], deployableFromPanel: true, requiredTech: 'exploration' },
        archer: { nameKey: 'unitArcher', icon: 'A', build: [], move: 1, revealRadius: 1, researchBonus: 0, upgrades: [], deployableFromPanel: true, requiredTech: 'archery' }
    },
    // REMOVED: buildings definition object is now loaded from XML
    tech: { // posX/posY are crucial for absolute layout now
        // --- Primitive Age (Era 1) ---
        settlement:      { nameKey: 'researchSettlement', cost: 15, unlocks: ['house'], requires: [], era: 1, posX: 40, posY: 150, color: '#8e44ad' },
        agriculture:     { nameKey: 'researchAgriculture', cost: 10, unlocks: ['farm'], requires: [], era: 1, posX: 40, posY: 280, color: '#aed581' },
        exploration:     { nameKey: 'researchExploration', cost: 15, unlocks: [], requires: ['settlement'], era: 1, posX: 240, posY: 50, color: '#1abc9c' },
        mining:          { nameKey: 'researchMining', cost: 15, unlocks: ['mine'], requires: ['agriculture'], era: 1, posX: 240, posY: 280, color: '#7f8c8d' },
        animalHusbandry: { nameKey: 'researchAnimalHusbandry', cost: { wheat: 10, research: 25 }, unlocks: ['pasture'], requires: ['agriculture'], era: 1, posX: 240, posY: 410, color: '#AF601A' },
        writing:         { nameKey: 'researchWriting', cost: 30, unlocks: [], requires: ['settlement', 'exploration'], era: 1, posX: 440, posY: 50, color: '#AED6F1' },
        masonry:         { nameKey: 'researchMasonry', cost: 20, unlocks: ['quarry'], requires: ['mining'], era: 1, posX: 440, posY: 280, color: '#bcaaa4' },
        toolMaking:      { nameKey: 'researchToolMaking', cost: { wood: 5, flint: 5, research: 20 }, unlocks: [], requires: ['mining'], era: 1, posX: 440, posY: 170, color: '#5D6D7E' },
        pottery:         { nameKey: 'researchPottery', cost: { pebble: 10, research: 35 }, unlocks: ['granary'], requires: ['agriculture', 'toolMaking'], era: 1, posX: 440, posY: 410, color: '#f39c12' },
        storage:         { nameKey: 'researchStorage', cost: 25, unlocks: ['warehouse'], requires: ['masonry'], era: 1, posX: 640, posY: 280, color: '#7f8c8d' },

        // --- Classical Age (Era 2) ---
        philosophy:      { nameKey: 'researchPhilosophy', cost: 45, unlocks: [], requires: ['writing'], era: 2, posX: 840, posY: 50, color: '#D2B4DE' },
        mathematics:     { nameKey: 'researchMathematics', cost: 45, unlocks: [], requires: ['writing'], era: 2, posX: 840, posY: 170, color: '#85C1E9' },
        bronzeWorking:   { nameKey: 'researchBronzeWorking', cost: { copper: 5, coal: 3, research: 40 }, unlocks: [], requires: ['toolMaking', 'masonry'], era: 2, posX: 840, posY: 300, color: '#E59866' },
        currency:        { nameKey: 'researchCurrency', cost: { copper: 10, research: 55 }, unlocks: ['market'], requires: ['writing', 'bronzeWorking'], era: 2, posX: 1040, posY: 50, color: '#2ecc71'},
        archery:         { nameKey: 'researchArchery', cost: { wood: 15, flint: 5, research: 40 }, unlocks: [], requires: ['toolMaking', 'animalHusbandry'], era: 2, posX: 840, posY: 430, color: '#e74c3c' },
        construction:    { nameKey: 'researchConstruction', cost: { pebble: 20, iron: 5, research: 60 }, unlocks: [], requires: ['masonry', 'mathematics'], era: 2, posX: 1040, posY: 170, color: '#AAB7B8' },
        ironWorking:     { nameKey: 'researchIronWorking', cost: { iron: 5, coal: 5, research: 50 }, unlocks: [], requires: ['bronzeWorking'], era: 2, posX: 1040, posY: 300, color: '#95A5A6' },

        // --- Medieval Age (Era 3) ---
        engineering:    { nameKey: 'researchEngineering', cost: { iron: 10, wood: 15, research: 70}, unlocks: [], requires: ['construction', 'ironWorking'], era: 3, posX: 1340, posY: 170, color: '#A1887F' },
        metalCasting:   { nameKey: 'researchMetalCasting', cost: { coal: 10, copper: 5, iron: 5, research: 65}, unlocks: [], requires: ['ironWorking'], era: 3, posX: 1340, posY: 300, color: '#B0BEC5' },
    },
    getTechCost: function(techId) { const tech = this.tech[techId]; if (!tech) return null; if (typeof tech.cost === 'number') { return { research: tech.cost }; } else if (typeof tech.cost === 'object' && tech.cost !== null) { return { ...tech.cost }; } return null; },
    upgrades: { movement1: { nameKey: 'upgradeMovement1', cost: 10, effect: { moveBonus: 1 }, maxLevel: 1 }, autoGather: { nameKey: 'upgradeAutoGather', cost: 15, effect: { autoGather: true }, maxLevel: 1 }, },
    // resources and baseInventoryCapacity will be populated by loadResourcesFromXML
    // buildings will be populated by loadBuildingsFromXML
    eraNames: { 1: 'primitiveAge', 2: 'classicalAge', 3: 'medievalAge' },
    eraStartPosX: { 1: 40, 2: 840, 3: 1340 }
};

// Initialize empty arrays/objects for XML data placeholders
gameConfig.resources = [];
gameConfig.baseInventoryCapacity = {};
gameConfig.buildings = {}; // Placeholder for buildings loaded from XML

const RESOURCES_XML_PATH = 'resources.xml';
const BUILDINGS_XML_PATH = 'buildings.xml'; // New XML path

/**
 * Loads resource definitions and base capacities from an XML file.
 * Populates gameConfig.resources and gameConfig.baseInventoryCapacity.
 */
async function loadResourcesFromXML() {
    console.log(`Attempting to load resources from ${RESOURCES_XML_PATH}`);
    try {
        const response = await fetch(RESOURCES_XML_PATH);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

        // Check for parser errors (e.g. malformed XML)
        if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
             const errorElement = xmlDoc.getElementsByTagName('parsererror')[0];
             const errorText = errorElement ? errorElement.innerText : 'Unknown parsing error';
             console.error('Error parsing resources.xml:', errorText, xmlDoc);
             throw new Error('Failed to parse resources.xml');
        }

        const resourceElements = xmlDoc.getElementsByTagName('resource');

        if (resourceElements.length === 0) {
             console.warn("No <resource> elements found in resources.xml. Game will start without dynamic resources.");
             // Could add fallback here to hardcoded data if needed
        }

        gameConfig.resources = []; // Ensure clear before populating
        gameConfig.baseInventoryCapacity = {}; // Ensure clear before populating

        for (const resourceElement of resourceElements) {
            const id = resourceElement.getAttribute('id');
            const nameKey = resourceElement.getAttribute('nameKey');
            const baseCapacityAttr = resourceElement.getAttribute('baseCapacity');
            const baseCapacity = parseInt(baseCapacityAttr, 10);

            if (id && nameKey && !isNaN(baseCapacity)) {
                gameConfig.resources.push({ id, nameKey });
                gameConfig.baseInventoryCapacity[id] = baseCapacity;
            } else {
                console.warn(`Skipping invalid or incomplete resource entry in resources.xml: id="${id}", nameKey="${nameKey}", baseCapacity="${baseCapacityAttr}"`);
            }
        }

        console.log("Successfully loaded resources from XML:", gameConfig.resources.map(r => r.id));
        // console.log("Base inventory capacity loaded from XML:", gameConfig.baseInventoryCapacity); // Keep this quiet unless debugging

    } catch (error) {
        console.error("FATAL ERROR: Failed to load or process resources.xml:", error);
        // Handle error: Display a fatal error message to the user
        document.body.innerHTML = '<h1>Error Loading Game</h1><p>Could not load necessary resources. Please check the console for details.</p>';
        // Re-throw to stop game initialization
        throw error;
    }
}

/**
 * Loads building definitions from an XML file.
 * Populates gameConfig.buildings.
 */
async function loadBuildingsFromXML() {
    console.log(`Attempting to load buildings from ${BUILDINGS_XML_PATH}`);
     try {
        const response = await fetch(BUILDINGS_XML_PATH);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

         // Check for parser errors
        if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
             const errorElement = xmlDoc.getElementsByTagName('parsererror')[0];
             const errorText = errorElement ? errorElement.innerText : 'Unknown parsing error';
             console.error('Error parsing buildings.xml:', errorText, xmlDoc);
             throw new Error('Failed to parse buildings.xml');
        }

        const buildingElements = xmlDoc.getElementsByTagName('building');

        if (buildingElements.length === 0) {
            console.warn("No <building> elements found in buildings.xml. Game will start without dynamic buildings.");
        }

         gameConfig.buildings = {}; // Ensure clear before populating

        for (const buildingElement of buildingElements) {
            const id = buildingElement.getAttribute('id');
            const nameKey = buildingElement.getAttribute('nameKey');
            const requires = buildingElement.getAttribute('requires') || null; // Unit ID string or null
            const unlockedBy = buildingElement.getAttribute('unlockedBy'); // Tech ID string

             if (!id || !nameKey) {
                console.warn(`Skipping building with missing 'id' or 'nameKey': id="${id}", nameKey="${nameKey}"`);
                continue;
             }

            const building = {
                 id: id,
                 nameKey: nameKey,
                 requires: requires,
                 unlockedBy: unlockedBy, // unlockedBy might be null or undefined, which is okay
                 cost: {},
                 provides: {},
                 produces: null // Default null, parse if element exists
             };

            // Parse Cost
            const costElement = buildingElement.querySelector('cost');
            if (costElement) {
                 for (const attr of costElement.attributes) {
                    const resourceId = attr.name;
                    const amount = parseInt(attr.value, 10);
                    if (!isNaN(amount)) {
                         building.cost[resourceId] = amount;
                    } else {
                         console.warn(`Invalid cost amount for resource "${resourceId}" in building "${id}"`);
                    }
                 }
            }

            // Parse Provides
             const providesElement = buildingElement.querySelector('provides');
             if (providesElement) {
                 for (const attr of providesElement.attributes) {
                      // Assume provides attributes are numeric bonuses
                     const propName = attr.name;
                     const value = parseInt(attr.value, 10); // Or float, depending on what bonuses do
                     if (!isNaN(value)) {
                          building.provides[propName] = value;
                     } else {
                          console.warn(`Invalid provides value for property "${propName}" in building "${id}"`);
                     }
                 }
             }


            // Parse Produces
             const producesElement = buildingElement.querySelector('produces');
             if (producesElement) {
                 const producesData = {};
                 producesData.interval = producesElement.getAttribute('interval');

                 // Check for single 'resource' attribute
                 const singleResourceAttr = producesElement.getAttribute('resource');
                 if (singleResourceAttr) {
                      producesData.resource = singleResourceAttr;
                 } else {
                      // Check for multiple <resource> child elements
                      const resourceElements = producesElement.querySelectorAll(':scope > resource'); // :scope ensures direct children
                      if (resourceElements.length > 0) {
                           producesData.resource = Array.from(resourceElements).map(resEl => resEl.textContent.trim()).filter(r => r !== ''); // Collect resource IDs from text content
                      } else {
                           console.warn(`Produces element for building "${id}" has an interval but no specified resource(s).`);
                           producesData.resource = null; // Or an empty array
                      }
                 }
                 if(producesData.interval && producesData.resource) {
                     building.produces = producesData;
                 } else {
                     console.warn(`Produces element for building "${id}" is incomplete (missing interval or resource).`);
                 }
             }


            gameConfig.buildings[id] = building;
        }

        console.log("Successfully loaded buildings from XML:", Object.keys(gameConfig.buildings));

     } catch (error) {
        console.error("FATAL ERROR: Failed to load or process buildings.xml:", error);
        // Handle error: Display a fatal error message to the user
         if (!document.body.innerHTML.includes('Error Loading Game')) { // Avoid overwriting existing error message
             document.body.innerHTML = '<h1>Error Loading Game</h1><p>Could not load necessary buildings data. Please check the console for details.</p>';
         }
        // Re-throw to stop game initialization
        throw error;
     }
}


// --- Translations ---
const translations = {
    en: {
        gameTitle: "Civilization Simulator", switchLanguageTooltip: "Switch Language / Changer de langue", switchToFrench: "Français", switchToEnglish: "English", colonyLabel: "Colony:", renameColonyTitle: "Rename Colony",
        inventoryTitle: "Inventory", inventoryEmpty: "Empty",
        tutorialButton: "Tutorial", researchButton: "Research", buildingsButton: "Buildings", unitsButton: "Units", animalsButton: "Animals", upgradeButton: "Upgrades", logsButton: "Logs", saveButton: "Save Game", loadButton: "Load Game", cheatRevealMap: "Reveal Map",
        // Resource names - KEEP THESE IN TRANSLATIONS (LOADED FROM XML)
        wood: "Wood", pebble: "Pebbles", flint: "Flint", wheat: "Wheat", coal: "Coal", iron: "Iron", copper: "Copper", nickel: "Nickel", zinc: "Zinc", milk: "Milk", wool: "Wool",
        gatherButton: "Gather Resource", tameButton: "Tame Animal ({0} Wheat)",
        noUnitSelected: "No unit selected", onTile: "On Tile:", emptyTile: "Empty", unknownTile: "Unknown",
        researchPointsLabel: "Research Points:", researchStatusResearching: "⏳ Researching", researchStatusComplete: "✅", researchStatusInitial: "Begin your journey! Select units and move them.",
        water: "Water", sand: "Sand", grass: "Grass", forest: "Forest", desert: "Desert",
        tileResourceTree: "Tree (Wood)", tileResourceStone: "Stone (Pebbles)", tileResourceFlint: "Flint", tileResourceWildPig: "Wild Pig", tileResourceWildSheep: "Wild Sheep", tileResourceWildCow: "Wild Cow",
        researchPanelTitle: "Technology Tree", primitiveAge: "Primitive Age", classicalAge: "Classical Age", medievalAge: "Medieval Age",
        researchSettlement: "Settlement", researchSettlementDesc: "Unlocks Houses & Worker deployment.", researchAgriculture: "Agriculture", researchAgricultureDesc: "Unlocks Farms (Wheat).", researchMining: "Mining", researchMiningDesc: "Unlocks Mines (Coal).", researchMasonry: "Masonry", researchMasonryDesc: "Unlocks Quarries (Metals).", researchStorage: "Storage", researchStorageDesc: "Unlocks Warehouses (+Cap).", researchExploration: "Exploration", researchExplorationDesc: "Enables Scout deployment.", researchToolMaking: "Tool Making", researchToolMakingDesc: "Basic understanding of tool crafting.", researchAnimalHusbandry: "Animal Husbandry", researchAnimalHusbandryDesc: "Domestication of animals. Unlocks Taming & Pastures.", researchWriting: "Writing", researchWritingDesc: "Develop basic written communication.", researchPottery: "Pottery", researchPotteryDesc: "Learn to shape and fire clay, unlocking Granaries.", researchBronzeWorking: "Bronze Working", researchBronzeWorkingDesc: "Combine copper and tin for stronger tools.", researchIronWorking: "Iron Working", researchIronWorkingDesc: "Smelt iron for advanced tools and weapons.", researchPhilosophy: "Philosophy", researchPhilosophyDesc: "Systematic study of fundamental questions.", researchMathematics: "Mathematics", researchMathematicsDesc: "Develop numerical systems and geometry.", researchConstruction: "Construction", researchConstructionDesc: "Advanced building techniques.", researchCurrency: "Currency", researchCurrencyDesc: "Establish systems of exchange, unlocking Markets.", researchArchery: "Archery", researchArcheryDesc: "Develop ranged weaponry, enabling Archer deployment.", researchEngineering: "Engineering", researchEngineeringDesc: "Apply scientific principles to design and build.", researchMetalCasting: "Metal Casting", researchMetalCastingDesc: "Advanced techniques for shaping metal.",
        // Building names - KEEP THESE IN TRANSLATIONS (LOADED FROM XML)
        buildingHouse: "House", buildingHouseDesc: "Provides one slot to deploy a unit later.", buildingFarm: "Farm", buildingFarmDesc: "Requires Worker. Produces Wheat over time.", buildingMine: "Mine", buildingMineDesc: "Requires Worker. Produces Coal over time.", buildingQuarry: "Quarry", buildingQuarryDesc: "Requires Worker. Slowly produces Metals.", buildingWarehouse: "Warehouse", buildingWarehouseDesc: "Increases Resource Capacity by 50.", buildingGranary: "Granary", buildingGranaryDesc: "Requires Worker. Increases Wheat storage capacity.", buildingMarket: "Market", buildingMarketDesc: "Requires Worker. Facilitates future trade options.", buildingPasture: "Pasture", buildingPastureDesc: "Requires Worker. Allows managing tamed animals.",
        noBuildingsAvailable: "No buildings available to build yet. Research technology first.",
        unitsPanelTitle: "Deploy Units", deployUnitButton: "Deploy {0}", noUnitsAvailablePanel: "Research units first!", noUnusedHouses: "No unused houses available to deploy units.", unitPawn: "Pawn", unitWorker: "Worker", unitScout: "Scout", unitArcher: "Archer", deployUnitMax: "Max",
        animalsPanelTitle: "Tamed Animals", noAnimalsTamed: "No animals tamed yet.", animalPig: "Pig", animalSheep: "Sheep", animalCow: "Cow",
        logsPanelTitle: "Event Logs", logSearchPlaceholder: "Search logs...", logFilterLabel: "Hide gather/cost messages",
        alertWelcome: "Welcome to {0}!", alertGameStarted: "Game started for colony: {0}", alertGathered: "Gathered {1} {0}!", alertGatheredQuarry: "Quarry produced 1 {0}!", alertGatheredEvent: "Found a cache: +{1} {0}!", alertProducedMilk: "Cow produced 1 Milk!", alertProducedWool: "Sheep produced 1 Wool!",
        alertStorageFull: "Storage full for {0}!", alertStorageFullWheat: "Wheat storage full!", alertStorageFullMilk: "Milk storage full!", alertStorageFullWool: "Wool storage full!",
        alertNotEnoughResources: "Not enough resources for {0}!", alertCannotBuildNonEmpty: "Cannot build: Tile is not empty!", alertCannotBuildExists: "Cannot build: {0} already exists here!", alertCannotBuildOnResource: "Cannot build on a {0}!", alertCannotBuildOnTerrain: "Cannot build on {0}!", alertBuildSelected: "Selected: {0}. Click an empty tile to build.", alertBuildingBuilt: "{0} built!", alertSelectUnitToBuild: "No unit selected to perform build action.", alertUnitCannotBuild: "{0} cannot build {1}s!",
        alertResearchStarted: "Started researching {0}.", alertAlreadyResearching: "Already researching: {0}!", alertResearchComplete: "{0} research complete!", alertNotEnoughResourcesTech: "Not enough resources to start researching {0}!",
        alertUnitDeployed: "{0} deployed!", alertNoSpaceForUnit: "No available space near the selected House to deploy {0}!", alertSelectUnusedHouse: "Select an unused House (highlighted) to deploy the unit.", alertInvalidHouseTarget: "Invalid target. Please click an unused House.",
        alertGameSaved: "Game Saved!", alertSaveError: "Error saving game. See console for details.", alertLoadSuccess: "Game loaded successfully for colony: {0}!", alertLoadError: "Error loading game: {0}.", alertLoadInvalidFormat: "Invalid save file format.", alertReadFileError: "Error reading file.", alertSaveVersionMismatch: "Save is from an older version and may not load correctly.",
        alertUnitMoveOccupied: "Cannot move unit: Tile is occupied!", alertMoveInvalid: "Cannot move there.", alertSelectedUnit: "Selected Unit: {0} ({1})",
        alertTameSuccess: "Successfully tamed a {0}!", alertTameNeedTech: "Need to research Animal Husbandry to tame animals!", alertTameNeedPawn: "Only Pawns can tame animals!", alertTameNeedWheat: "Need {0} Wheat to attempt taming!", alertTameNotAnimal: "Cannot tame this!",
        promptColonyName: "Welcome to Civilization Simulator! Please name your colony:", promptRenameColony: "Enter new colony name:", defaultColonyName: "New Settlement",
        logGameSaved: "Game state saved.", logNewGame: "New game started for colony:", logColonyRenamed: "Colony renamed to:", logGainedExp: "{0} ({1}) gained {2} Exp for building {3}.", logGainedExpResearch: "{0} units gained {1} Exp for completing {2}.", logGainedExpEvent: "Unit {0} gained {1} Exp for discovering cache.", logGainedExpTame: "{0} ({1}) gained {2} Exp for taming {3}.",
        logCapacityIncreased: "Total capacity for {0} increased to {1}.", logCapacityIncreasedWheat: "Wheat capacity increased to {1}.", logInvalidStartRegen: "Invalid start position (surrounded by water). Regenerating map...", logInvalidStartGiveUp: "Could not find valid start position after {0} attempts. Starting anyway.",
        unitExpLabel: "Exp:", upgradeSectionTitle: "Unit Upgrades", upgradeInfoSelectUnit: "Select a unit to see upgrades.", upgradeMovement1: "Movement I", upgradeMovement1Desc: "Allows moving +1 tile away (Cost: {0} Exp).", upgradeAutoGather: "Auto-Gather", upgradeAutoGatherDesc: "Automatically gathers resources on tile arrival (Cost: {0} Exp).", upgradeNoUpgradesAvailable: "No upgrades available or affordable for this unit.",
        alertNotEnoughExp: "Not enough Exp for {0}!", alertUpgradeSuccess: "{0} purchased for unit {1}!", alertUpgradeMaxLevel: "Upgrade {0} is already at max level.", unusedHouseTarget: "Target",
        tutorialTitle: "How to Play (Basics)", tutorialStep1: "Select your starting <code>Pawn</code> (blue 'P').", tutorialStep2: "Move by clicking adjacent land tiles.", tutorialStep3: "Move onto <code>Tree</code> (🌳) or <code>Stone</code> and click <code>Gather Resource</code>.", tutorialStep4: "Gather Wood/Pebbles. Note <code>Inventory</code> limits.", tutorialStep5: "Click <code>Research</code> and research <code>Settlement</code> (in the modal).", tutorialStep6: "Once done, click <code>Buildings</code>, select <code>House</code>.", tutorialStep7: "Click an empty <code>Grass</code> tile near your Pawn to build.", tutorialStep8: "A House provides one slot to deploy a unit later.", tutorialStep9: "Research <code>Exploration</code> to enable Scout deployment.", tutorialStep10: "Click the <code>Units</code> button (middle column).", tutorialStep11: "If tech is researched and an unused House exists, click <code>Deploy Worker/Scout</code>.", tutorialStep12: "Unused <code>Houses</code> will highlight. Click a highlighted House to deploy the unit nearby.", tutorialStep13: "Each House can deploy only one unit.", tutorialStep14: "Research <code>Agriculture</code> for Farms (built by Workers).", tutorialStep15: "Research <code>Storage</code> for <code>Warehouses</code> to increase capacity.", tutorialStep16: "Units gain <code>Exp</code>. Click <code>Upgrades</code> (right) to spend Exp.", closeButton: "Close", unlocksLabel: "Unlocks:",
        legendResearched: "Researched", legendAvailable: "Available", legendResearching: "Researching", legendUnavailable: "Unavailable", cheatMapRevealed: "Map Revealed", cheatMapHidden: "Map Hidden",
    },
    fr: {
        gameTitle: "Civilization Simulator", switchLanguageTooltip: "Changer de langue / Switch Language", switchToFrench: "Français", switchToEnglish: "English", colonyLabel: "Colonie :", renameColonyTitle: "Renommer la Colonie",
        inventoryTitle: "Inventaire", inventoryEmpty: "Vide",
        tutorialButton: "Tutoriel", researchButton: "Recherche", buildingsButton: "Bâtiments", unitsButton: "Unités", animalsButton: "Animaux", upgradeButton: "Améliorations", logsButton: "Journaux", saveButton: "Sauvegarder", loadButton: "Charger", cheatRevealMap: "Révéler Carte",
        // Resource names - KEEP THESE IN TRANSLATIONS (LOADED FROM XML)
        wood: "Bois", pebble: "Cailloux", flint: "Silex", wheat: "Blé", coal: "Charbon", iron: "Fer", copper: "Cuivre", nickel: "Nickel", zinc: "Zinc", milk: "Lait", wool: "Laine",
        gatherButton: "Récolter Ressource", tameButton: "Apprivoiser Animal ({0} Blé)",
        noUnitSelected: "Aucune unité sélectionnée", onTile: "Sur la case :", emptyTile: "Vide", unknownTile: "Inconnu",
        researchPointsLabel: "Points de Recherche :", researchStatusResearching: "⏳ Recherche en cours", researchStatusComplete: "✅", researchStatusInitial: "Commencez votre voyage ! Sélectionnez les unités et déplacez-les.",
        water: "Eau", sand: "Sable", grass: "Herbe", forest: "Forêt", desert: "Désert",
        tileResourceTree: "Arbre (Bois)", tileResourceStone: "Roche (Cailloux)", tileResourceFlint: "Silex", tileResourceWildPig: "Cochon Sauvage", tileResourceWildSheep: "Mouton Sauvage", tileResourceWildCow: "Vache Sauvage",
        researchPanelTitle: "Arbre Technologique", primitiveAge: "Âge Primitif", classicalAge: "Âge Classique", medievalAge: "Âge Médiéval",
        researchSettlement: "Colonisation", researchSettlementDesc: "Débloque Maisons & déploiement Ouvriers.", researchAgriculture: "Agriculture", researchAgricultureDesc: "Débloque Fermes (Blé).", researchMining: "Minage", researchMiningDesc: "Débloque Mines (Charbon).", researchMasonry: "Maçonnerie", researchMasonryDesc: "Débloque Carrières (Métaux).", researchStorage: "Stockage", researchStorageDesc: "Débloque Entrepôts (+Cap).", researchExploration: "Exploration", researchExplorationDesc: "Permet déploiement Éclaireurs.", researchToolMaking: "Fabrication d'Outils", researchToolMakingDesc: "Compréhension basique de l'artisanat.", researchAnimalHusbandry: "Élevage", researchAnimalHusbandryDesc: "Domestication des animaux. Débloque Apprivoisement & Pâturages.", researchWriting: "Écriture", researchWritingDesc: "Développe la communication écrite.", researchPottery: "Poterie", researchPotteryDesc: "Façonner et cuire l'argile, débloque Greniers.", researchBronzeWorking: "Travail du Bronze", researchBronzeWorkingDesc: "Combine cuivre et étain pour outils.", researchIronWorking: "Travail du Fer", researchIronWorkingDesc: "Fond le fer pour outils avancés.", researchPhilosophy: "Philosophie", researchPhilosophyDesc: "Étude systématique des questions.", researchMathematics: "Mathématiques", researchMathematicsDesc: "Développe systèmes numériques/géométrie.", researchConstruction: "Construction", researchConstructionDesc: "Techniques de construction avancées.", researchCurrency: "Monnaie", researchCurrencyDesc: "Systèmes d'échange, débloque Marchés.", researchArchery: "Tir à l'arc", researchArcheryDesc: "Armes à distance, débloque Archers.", researchEngineering: "Ingénierie", researchEngineeringDesc: "Principes scientifiques pour la conception.", researchMetalCasting: "Fonderie", researchMetalCastingDesc: "Techniques avancées de façonnage du métal.",
         // Building names - KEEP THESE IN TRANSLATIONS (LOADED FROM XML)
        buildingHouse: "Maison", buildingHouseDesc: "Fournit un emplacement pour déployer une unité.", buildingFarm: "Ferme", buildingFarmDesc: "Nécessite Ouvrier. Produit du Blé.", buildingMine: "Mine", buildingMineDesc: "Nécessite Ouvrier. Produit du Charbon.", buildingQuarry: "Carrière", buildingQuarryDesc: "Nécessite Ouvrier. Produit des Métaux.", buildingWarehouse: "Entrepôt", buildingWarehouseDesc: "Augmente la Capacité de Ressources de 50.", buildingGranary: "Grenier", buildingGranaryDesc: "Nécessite Ouvrier. Augmente la capacité de Blé.", buildingMarket: "Marché", buildingMarketDesc: "Nécessite Ouvrier. Facilite le commerce futur.", buildingPasture: "Pâturage", buildingPastureDesc: "Nécessite Ouvrier. Permet de gérer les animaux apprivosés.",
        noBuildingsAvailable: "Aucun bâtiment à construire. Recherchez d'abord.",
        unitsPanelTitle: "Déployer Unités", deployUnitButton: "Déployer {0}", noUnitsAvailablePanel: "Recherchez des unités d'abord !", noUnusedHouses: "Aucune maison inutilisée disponible pour déployer des unités.", unitPawn: "Colon", unitWorker: "Ouvrier", unitScout: "Éclaireur", unitArcher: "Archer", deployUnitMax: "Max",
        animalsPanelTitle: "Animaux Apprivoisés", noAnimalsTamed: "Aucun animal apprivoisé.", animalPig: "Cochon", animalSheep: "Mouton", animalCow: "Vache",
        logsPanelTitle: "Journal des Événements", logSearchPlaceholder: "Rechercher...", logFilterLabel: "Masquer messages récolte/coût",
        alertWelcome: "Bienvenue à {0} !", alertGameStarted: "Partie démarrée pour : {0}", alertGathered: "Récolté {1} {0} !", alertGatheredQuarry: "Carrière a produit 1 {0} !", alertGatheredEvent: "Cache trouvée : +{1} {0}!", alertProducedMilk: "Vache a produit 1 Lait !", alertProducedWool: "Mouton a produit 1 Laine !",
        alertStorageFull: "Stockage plein pour {0} !", alertStorageFullWheat: "Stockage de blé plein !", alertStorageFullMilk: "Stockage de lait plein !", alertStorageFullWool: "Stockage de laine plein !",
        alertNotEnoughResources: "Pas assez de ressources pour {0} !", alertCannotBuildNonEmpty: "Construction impossible : Case non vide !", alertCannotBuildExists: "{0} existe déjà ici !", alertCannotBuildOnResource: "Construction impossible sur un(e) {0} !", alertCannotBuildOnTerrain: "Construction impossible sur {0} !", alertBuildSelected: "Sélectionné : {0}. Cliquez une case vide.", alertBuildingBuilt: "{0} construit(e) !", alertSelectUnitToBuild: "Pas d'unité sélectionnée pour construire.", alertUnitCannotBuild: "{0} ne peut pas construire de {1}s !",
        alertResearchStarted: "Recherche commencée pour {0}.", alertAlreadyResearching: "Recherche déjà en cours : {0} !", alertResearchComplete: "Recherche {0} terminée !", alertNotEnoughResourcesTech: "Pas assez de ressources pour rechercher {0} !",
        alertUnitDeployed: "{0} déployé !", alertNoSpaceForUnit: "Pas d'espace près de la Maison sélectionnée pour déployer {0} !", alertSelectUnusedHouse: "Sélectionnez une Maison inutilisée (surlignée) pour déployer l'unité.", alertInvalidHouseTarget: "Cible invalide. Veuillez cliquer sur une Maison inutilisée.",
        alertGameSaved: "Partie Sauvegardée !", alertSaveError: "Erreur sauvegarde.", alertLoadSuccess: "Partie chargée : {0} !", alertLoadError: "Erreur chargement : {0}.", alertLoadInvalidFormat: "Format sauvegarde invalide.", alertReadFileError: "Erreur lecture fichier.", alertSaveVersionMismatch: "Sauvegarde d'une ancienne version, peut mal charger.",
        alertUnitMoveOccupied: "Déplacement impossible : Case occupée !", alertMoveInvalid: "Déplacement impossible.", alertSelectedUnit: "Unité sélectionnée : {0} ({1})",
        alertTameSuccess: "{0} apprivoisé(e) avec succès !", alertTameNeedTech: "Recherche Élevage nécessaire pour apprivoiser !", alertTameNeedPawn: "Seuls les Colons peuvent apprivoiser !", alertTameNeedWheat: "Besoin de {0} Blé pour tenter d'apprivoiser !", alertTameNotAnimal: "Impossible d'apprivoiser ceci !",
        promptColonyName: "Bienvenue ! Nommez votre colonie :", promptRenameColony: "Entrez le nouveau nom de la colonie :", defaultColonyName: "Nouvelle Colonie",
        logGameSaved: "État sauvegardé.", logNewGame: "Nouvelle partie démarrée :", logColonyRenamed: "Colonie renommée en :", logGainedExp: "{0} ({1}) gagne {2} Exp pour construction de {3}.", logGainedExpResearch: "Unités {0} gagnent {1} Exp pour recherche {2}.", logGainedExpEvent: "Unité {0} gagne {1} Exp pour découverte de cache.", logGainedExpTame: "{0} ({1}) gagne {2} Exp pour avoir apprivoisé {3}.",
        logCapacityIncreased: "Capacité totale pour {0} augmentée à {1}.", logCapacityIncreasedWheat: "Capacité Blé augmentée à {1}.", logInvalidStartRegen: "Position départ invalide (isolée par eau). Régénération map...", logInvalidStartGiveUp: "Impossible trouver position départ valide après {0} essais. Démarrage quand même.",
        unitExpLabel: "Exp :", upgradeSectionTitle: "Améliorations Unité", upgradeInfoSelectUnit: "Sélectionnez une unité.", upgradeMovement1: "Mouvement I", upgradeMovement1Desc: "Permet de se déplacer +1 case (Coût : {0} Exp).", upgradeAutoGather: "Récolte Auto", upgradeAutoGatherDesc: "Récolte auto à l'arrivée (Coût : {0} Exp).", upgradeNoUpgradesAvailable: "Aucune amélioration disponible/abordable.",
        alertNotEnoughExp: "Pas assez d'Exp pour {0} !", alertUpgradeSuccess: "{0} acheté pour unité {1} !", alertUpgradeMaxLevel: "Amélioration {0} au niveau max.", unusedHouseTarget: "Cible",
        tutorialTitle: "Comment Jouer (Bases)", tutorialStep1: "Sélectionnez votre <code>Colon</code> (bleu 'P').", tutorialStep2: "Déplacez-vous sur une case terrestre adjacente vide.", tutorialStep3: "Allez sur <code>Arbre</code>/<code>Roche</code> et cliquez <code>Récolter Ressource</code>.", tutorialStep4: "Récoltez Bois/Cailloux. Notez les limites d'<code>Inventaire</code>.", tutorialStep5: "Cliquez <code>Recherche</code> et recherchez <code>Colonisation</code> (dans le modal).", tutorialStep6: "Puis, cliquez <code>Bâtiments</code>, sélectionnez <code>Maison</code>.", tutorialStep7: "Cliquez sur une case <code>Herbe</code> vide près du Colon.", tutorialStep8: "Une Maison fournit un emplacement pour déployer une unité plus tard.", tutorialStep9: "Recherchez <code>Exploration</code> pour activer le déploiement d'Éclaireurs.", tutorialStep10: "Cliquez sur le bouton <code>Unités</code> (colonne centrale).", tutorialStep11: "Si la tech est recherchée et une Maison inutilisée existe, cliquez <code>Déployer Ouvrier/Éclaireur</code>.", tutorialStep12: "Les <code>Maisons</code> inutilisées seront surlignées. Cliquez une Maison surlignée pour déployer l'unité à proximité.", tutorialStep13: "Chaque Maison ne peut déployer qu'une seule unité.", tutorialStep14: "Recherchez <code>Agriculture</code> pour les Fermes (construites par Ouvriers).", tutorialStep15: "Recherchez <code>Stockage</code> pour les <code>Entrepôts</code> (+ capacité).", tutorialStep16: "Unités gagnent <code>Exp</code>. Cliquez <code>Améliorations</code> (droite) pour dépenser l'Exp.", closeButton: "Fermer", unlocksLabel: "Débloque :",
        legendResearched: "Recherché", legendAvailable: "Disponible", legendResearching: "En recherche", legendUnavailable: "Indisponible", cheatMapRevealed: "Carte Révélée", cheatMapHidden: "Carte Cachée",
    }
};

// Make the async loading function and configuration/translations globally available
window.loadResourcesFromXML = loadResourcesFromXML;
window.loadBuildingsFromXML = loadBuildingsFromXML; // Make the new function global
window.gameConfig = gameConfig;
window.translations = translations;