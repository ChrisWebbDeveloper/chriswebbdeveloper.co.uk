import { Skill } from './skill';

describe('Skill', () => {
    let skill: Skill;
    const name: string = 'Name';
    const exp: number = 50;
    let skillObj: {
        name: string,
        exp?: number | null
    }

    beforeEach(async () => {
        skillObj = {name, exp};
        skill = new Skill(skillObj)
    });

    describe(`Class`, () => {
        it(`should create an instance`, () => {
            expect(skill).toBeTruthy();
        });
    });

    describe(`name`, () => {
        it(`should be included as a property`, () => {
            expect(skill.name).toBeTruthy();
        });

        it(`should match the given value passed into the constructor if provided`, () => {
            expect(skill.name).toEqual(name);
        });
    });

    describe(`exp`, () => {
        it(`should be included as a property`, () => {
            expect(skill.exp).toBeTruthy();
        });

        it(`should match the given value passed into the constructor if provided`, () => {
            expect(skill.exp).toEqual(exp);
        });

        it(`should be set to 0 if a value is not passed into the constructor, or the value passed in is null`, () => {
            skillObj.exp = undefined;
            skill = new Skill(skillObj);
            expect(skill.exp).toEqual(0);

            skillObj.exp = null;
            skill = new Skill(skillObj);
            expect(skill.exp).toEqual(0);
        });
    });
});
