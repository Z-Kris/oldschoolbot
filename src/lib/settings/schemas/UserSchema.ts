import { Client, SchemaFolder } from 'klasa';

import defaultContracts from '../../minions/farming/defaultContracts';
import { FarmingPatchTypes } from '../../minions/farming/types';
import defaultBirdHouseTrap from '../../skilling/skills/hunter/defaultBirdHouseTrap';
import { SkillsEnum } from '../../skilling/types';

Client.defaultUserSchema
	.add('GP', 'integer', { default: 0 })
	.add('QP', 'integer', { default: 0 })
	.add('RSN', 'string', { default: null })
	.add('pets', 'any', { default: {} })
	.add('badges', 'integer', { array: true, default: [] })
	.add('bitfield', 'integer', { array: true, default: [] })
	.add('favoriteItems', 'integer', { array: true, default: [] })
	.add('lastDailyTimestamp', 'integer', { default: 1 })
	.add('sacrificedValue', 'integer', { default: 0, maximum: 100_000_000_000, minimum: 0 })
	.add('bank', 'any', { default: {} })
	.add('collectionLogBank', 'any', { default: {} })
	.add('creatureScores', 'any', { default: {} })
	.add('clueScores', 'any', { default: {} })
	.add('monsterScores', 'any', { default: {} })
	.add('lapsScores', 'any', { default: {} })
	.add('bankBackground', 'integer', { default: 1 })
	.add('sacrificedBank', 'any', { default: {} })
	.add('honour_level', 'integer', { default: 1 })
	.add('honour_points', 'integer', { default: 0 })
	.add('high_gambles', 'integer', { default: 0 })
	.add('patreon_id', 'string', { default: null })
	.add('github_id', 'integer', { default: null })
	.add('carpenter_points', 'integer', { default: 0 })
	.add('minion', folder =>
		folder
			.add('name', 'string')
			.add('hasBought', 'boolean', { default: false })
			.add('dailyDuration', 'integer', { default: 0 })
			.add('ironman', 'boolean', { default: false })
			.add('icon', 'string', { default: null })
			.add('equippedPet', 'integer', { default: null })
			.add('farmingContract', 'any', { default: defaultContracts })
			.add('defaultCompostToUse', 'string', { default: 'compost' })
			.add('defaultPay', 'boolean', { default: false })
			.add('birdhouseTraps', 'any', { default: defaultBirdHouseTrap })
	)
	.add('stats', (folder: SchemaFolder) =>
		folder
			.add('deaths', 'integer', { default: 0 })
			.add('diceWins', 'integer', { default: 0 })
			.add('diceLosses', 'integer', { default: 0 })
			.add('duelLosses', 'integer', { default: 0 })
			.add('duelWins', 'integer', { default: 0 })
			.add('fightCavesAttempts', 'integer', { default: 0 })
			.add('fireCapesSacrificed', 'integer', { default: 0 })
			.add('titheFarmsCompleted', 'integer', { default: 0 })
			.add('titheFarmPoints', 'integer', { default: 0 })
	)
	.add('skills', (folder: SchemaFolder) =>
		folder
			.add(SkillsEnum.Agility, 'integer', { default: 0 })
			.add(SkillsEnum.Cooking, 'integer', { default: 0 })
			.add(SkillsEnum.Fishing, 'integer', { default: 0 })
			.add(SkillsEnum.Mining, 'integer', { default: 0 })
			.add(SkillsEnum.Smithing, 'integer', { default: 0 })
			.add(SkillsEnum.Woodcutting, 'integer', { default: 0 })
			.add(SkillsEnum.Firemaking, 'integer', { default: 0 })
			.add(SkillsEnum.Runecraft, 'integer', { default: 0 })
			.add(SkillsEnum.Crafting, 'integer', { default: 0 })
			.add(SkillsEnum.Prayer, 'integer', { default: 0 })
			.add(SkillsEnum.Fletching, 'integer', { default: 0 })
			.add(SkillsEnum.Thieving, 'integer', { default: 0 })
			.add(SkillsEnum.Farming, 'integer', { default: 0 })
			.add(SkillsEnum.Herblore, 'integer', { default: 0 })
			.add(SkillsEnum.Hunter, 'integer', { default: 0 })
			.add(SkillsEnum.Construction, 'integer', { default: 0 })
			.add(SkillsEnum.Magic, 'integer', { default: 0 })
	)
	.add('gear', (folder: SchemaFolder) =>
		folder
			.add('melee', 'any', { default: null })
			.add('mage', 'any', { default: null })
			.add('range', 'any', { default: null })
			.add('misc', 'any', { default: null })
			.add('skilling', 'any', { default: null })
	)
	.add('farmingPatches', (folder: SchemaFolder) =>
		folder
			.add(FarmingPatchTypes.Herb, 'any', { default: null })
			.add(FarmingPatchTypes.FruitTree, 'any', { default: null })
			.add(FarmingPatchTypes.Tree, 'any', { default: null })
			.add(FarmingPatchTypes.Allotment, 'any', { default: null })
			.add(FarmingPatchTypes.Hops, 'any', { default: null })
			.add(FarmingPatchTypes.Cactus, 'any', { default: null })
			.add(FarmingPatchTypes.Bush, 'any', { default: null })
			.add(FarmingPatchTypes.Spirit, 'any', { default: null })
			.add(FarmingPatchTypes.Hardwood, 'any', { default: null })
			.add(FarmingPatchTypes.Seaweed, 'any', { default: null })
			.add(FarmingPatchTypes.Vine, 'any', { default: null })
			.add(FarmingPatchTypes.Calquat, 'any', { default: null })
			.add(FarmingPatchTypes.Redwood, 'any', { default: null })
			.add(FarmingPatchTypes.Crystal, 'any', { default: null })
			.add(FarmingPatchTypes.Celastrus, 'any', { default: null })
			.add(FarmingPatchTypes.Hespori, 'any', { default: null })
			.add(FarmingPatchTypes.Flower, 'any', { default: null })
			.add(FarmingPatchTypes.Mushroom, 'any', { default: null })
			.add(FarmingPatchTypes.Belladonna, 'any', { default: null })
	);
