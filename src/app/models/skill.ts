export class Skill {
    name: string;
    exp: number;

    constructor(skill: {name: string, exp?: number | null}) {
        this.name = skill.name;
        this.exp = skill.exp ?? 0;
    }
}
