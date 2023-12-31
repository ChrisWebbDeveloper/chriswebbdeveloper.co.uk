import { Project } from './project';

describe('Project', () => {
    let project: Project;
    const title: string = 'Title';
    const formattedDescription: string = 'This\nis\na\description';
    const link: string = 'link.com';
    const img: string = 'img';
    const startDate: string = '2023-01-01';
    const endDate: string = '2023-12-31';
    const techStack: string[] = ['Tech 3', 'Tech 2', 'Tech 1'];
    let projectObj: {
        title: string,
        formatted_description: string,
        link?: string | null,
        start_date: string,
        end_date?: string | null,
        tech_stack: string[]
    }
    let getDateFormattedSpy: jasmine.Spy;

    beforeEach(async () => {
        projectObj = {
            title,
            formatted_description: formattedDescription,
            link,
            start_date: startDate,
            end_date: endDate,
            tech_stack: techStack
        };
        project = new Project(projectObj);
        project.img = img;
        //@ts-expect-error
        getDateFormattedSpy = spyOn(project, 'getDateFormatted').and.callThrough();
    });

    describe(`Component`, () => {
        it(`should create an instance`, () => {
            expect(project).toBeTruthy();
        });
    });

    describe(`title`, () => {
        it(`should be included as a property`, () => {
            expect(project.title).toBeTruthy();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(project.title).toEqual(title);
        });
    });

    describe(`description`, () => {
        it(`should be included as a property`, () => {
            expect(project.description).toBeTruthy();
        });

        it(`should be an array, with each item set to the value passed into the constructor split along line breaks (\\n)`, () => {
            const descAsArray = formattedDescription.split('\n');

            for (let i = 0; i < project.description.length; i++) {
                expect(project.description[i]).toEqual(descAsArray[i]);
            };
        });
    });

    describe(`link`, () => {
        it(`should be included as a property`, () => {
            expect(project.link).toBeTruthy();
        });

        it(`should be undefined if not set in constructor`, () => {
            projectObj.link = undefined;
            project = new Project(projectObj);
            expect(project.link).toBeUndefined();
        });

        it(`should be undefined if null in constructor`, () => {
            projectObj.link = null;
            project = new Project(projectObj);
            expect(project.link).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(project.link).toEqual(link);
        });
    });

    describe(`img`, () => {
        it(`should be included as a property`, () => {
            expect(project.img).toBeTruthy();
        });

        it(`should be undefined if not set`, () => {
            project.img = undefined;
            expect(project.img).toBeUndefined();
        });

        it(`should be set to the value provided`, () => {
            expect(project.img).toEqual(img);
        });
    });

    describe(`startDate`, () => {
        it(`should be included as a property`, () => {
            expect(project.startDate).toBeTruthy();
        });

        it(`should be set to the value provided in the constructor, formatted as a Date object`, () => {
            expect(project.startDate).toEqual(new Date(startDate));
        });
    });

    describe(`endDate`, () => {
        it(`should be included as a property`, () => {
            expect(project.endDate).toBeTruthy();
        });

        it(`should be undefined if not set`, () => {
            projectObj.end_date = undefined;
            project = new Project(projectObj);
            expect(project.endDate).toBeUndefined();
        });

        it(`should be set to the value provided in the constructor, formatted as a Date object`, () => {
            expect(project.endDate).toEqual(new Date(endDate));
        });
    });

    describe(`techStack`, () => {
        it(`should be included as a property`, () => {
            expect(project.techStack).toBeTruthy();
        });

        it(`should be set to the value provided in the constructor`, () => {
            expect(project.techStack).toEqual(techStack);
        });
    });

    describe(`getDateFormatted()`, () => {
        it(`should be included as a method`, () => {
            //@ts-expect-error
            expect(project.getDateFormatted).toBeTruthy();
        });

        it(`should return the date provided in MMM yyyy format`, () => {
            const vals = [
                {date: '2020-01-01', expected: 'Jan 2020'},
                {date: '2018-02-01', expected: 'Feb 2018'},
                {date: '2014-03-01', expected: 'Mar 2014'},
                {date: '2010-04-01', expected: 'Apr 2010'},
                {date: '2023-05-01', expected: 'May 2023'},
                {date: '2021-06-01', expected: 'Jun 2021'},
                {date: '2000-07-01', expected: 'Jul 2000'},
                {date: '1999-08-01', expected: 'Aug 1999'},
                {date: '1980-09-01', expected: 'Sept 1980'},
                {date: '2005-10-01', expected: 'Oct 2005'},
                {date: '2002-11-01', expected: 'Nov 2002'},
                {date: '2024-12-01', expected: 'Dec 2024'},
                {date: '20456775672412', expected: 'Invalid Date'},
                {date: 'abcd', expected: 'Invalid Date'},
                {date: '', expected: 'Invalid Date'},
            ];

            vals.forEach(val => {
                //@ts-expect-error
                expect(project.getDateFormatted(new Date(val.date))).toEqual(val.expected);
            });
        });
    });

    describe(`getStartDateFormatted()`, () => {
        it(`should be included as a method`, () => {
            expect(project.getStartDateFormatted).toBeTruthy();
        });

        it(`should call the 'getDateFormatted' method, passing in the startDate property`, () => {
            project.getStartDateFormatted();
            expect(getDateFormattedSpy).toHaveBeenCalledOnceWith(project.startDate);
        });
    });

    describe(`getEndDateFormatted()`, () => {
        it(`should be included as a method`, () => {
            expect(project.getStartDateFormatted).toBeTruthy();
        });

        it(`should return 'Present' if the endDate property is not available`, () => {
            projectObj.end_date = undefined;
            project = new Project(projectObj);
            expect(project.getEndDateFormatted()).toEqual('Present');
        });

        it(`should call the 'getDateFormatted' method, passing in the endDate property, if the endDate property is available`, () => {
            project.getEndDateFormatted();
            expect(getDateFormattedSpy).toHaveBeenCalledOnceWith(project.endDate);
        });
    });
});
