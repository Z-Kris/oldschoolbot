import { Plant } from '../../types';
import itemID from '../../../util/itemID';

const allotmentPlants: Plant[] = [
	{
		level: 1,
		plantXp: 8,
		checkXp: 0,
		harvestXp: 9,
		inputItems: { [itemID(`Potato seed`)]: 3 },
		outputCrop: itemID('Potato'),
		name: `Potato`,
		aliases: ['Potato'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 40,
		numOfStages: 4,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Compost')]: 2 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 5,
		plantXp: 9.5,
		checkXp: 0,
		harvestXp: 10.5,
		inputItems: { [itemID(`Onion seed`)]: 3 },
		outputCrop: itemID('Onion'),
		name: `Onion`,
		aliases: ['Onion'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 40,
		numOfStages: 4,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Potatoes(10)')]: 1 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 7,
		plantXp: 10,
		checkXp: 0,
		harvestXp: 10.5,
		inputItems: { [itemID(`Cabbage seed`)]: 3 },
		outputCrop: itemID('Cabbage'),
		name: `Cabbage`,
		aliases: ['Cabbage'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 40,
		numOfStages: 4,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Onions(10)')]: 1 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 12,
		plantXp: 12.5,
		checkXp: 0,
		harvestXp: 14,
		inputItems: { [itemID(`Tomato seed`)]: 3 },
		outputCrop: itemID('Tomato'),
		name: `Tomato`,
		aliases: ['Tomato'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 40,
		numOfStages: 4,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Cabbages(10)')]: 2 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 20,
		plantXp: 17,
		checkXp: 0,
		harvestXp: 19,
		inputItems: { [itemID(`Sweetcorn seed`)]: 3 },
		outputCrop: itemID('Sweetcorn'),
		name: `Sweetcorn`,
		aliases: ['Sweetcorn'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 60,
		numOfStages: 6,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Jute fibre')]: 10 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 31,
		plantXp: 26,
		checkXp: 0,
		harvestXp: 29,
		inputItems: { [itemID(`Strawberry seed`)]: 3 },
		outputCrop: itemID('Strawberry'),
		name: `Strawberry`,
		aliases: ['Strawberry'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 60,
		numOfStages: 6,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Apples(5)')]: 1 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 47,
		plantXp: 48.5,
		checkXp: 0,
		harvestXp: 54.5,
		inputItems: { [itemID(`Watermelon seed`)]: 3 },
		outputCrop: itemID('Watermelon'),
		name: `Watermelon`,
		aliases: ['Watermelon'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 80,
		numOfStages: 8,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Curry leaf')]: 10 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	},
	{
		level: 61,
		plantXp: 82,
		checkXp: 0,
		harvestXp: 82,
		inputItems: { [itemID(`Snape grass seed`)]: 3 },
		outputCrop: itemID('Snape grass'),
		name: `Snape grass`,
		aliases: ['Snape grass'],
		petChance: 173_977,
		seedType: 'allotment',
		growthTime: 70,
		numOfStages: 7,
		chance1: 154,
		chance99: 193.56,
		chanceOfDeath: 25,
		protectionPayment: { [itemID('Jangerberries')]: 5 },
		needsChopForHarvest: false,
		fixedOutput: false,
		givesLogs: false,
		givesCrops: true,
		defaultNumOfPatches: 6,
		canPayFarmer: true,
		canCompostPatch: true,
		canCompostandPay: true,
		// [QP, Patches Gained]
		additionalPatchesByQP: [
			[1, 2], // Canifs Patches (2)
			[15, 3], // Harmony Island Patch (1)
			[33, 5] // Prifddinas (2)
		],
		// [Farm Lvl, Patches Gained]
		additionalPatchesByFarmLvl: [
			[45, 2] // Farming Guide Low (2)
		]
	}
];

export default allotmentPlants;
