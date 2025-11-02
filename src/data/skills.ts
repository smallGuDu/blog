// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	
	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: [],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"用了很多年了",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 3, months: 10 },
		color: "#3776AB",
		projects:['很多项目']
	},
	{
		id: "csharp",
		name: "C#",
		description:
			"只会一点点",
		icon: "devicon:csharp",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["游戏mod"],
		color: "#239120",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"第二常用的语言了",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["目前没什么大项目"],
		color: "#00599C",
	},{
		id: "txh",
		name: "图形化",
		description:
			"从小就在玩",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["很多游戏"],
		color: "#00599C",
	}
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
