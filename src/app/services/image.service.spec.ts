import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ImageService', () => {
    let service: ImageService;
    let httpTestingCtrl: HttpTestingController;
    const name: string = 'Chris Webb Developer (v3)';
    let imgUrl: string;
    const errName: string = 'error';
    let errUrls: string[] = [];
    let getImgUrlSpy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule]
        });
        service = TestBed.inject(ImageService);
        httpTestingCtrl = TestBed.inject(HttpTestingController);
        //@ts-expect-error
        imgUrl = service.getImgUrl(name);
        //@ts-expect-error
        while (service.currentIndex < service.exts.length) {
            //@ts-expect-error
            errUrls.push(service.getImgUrl(errName));
            //@ts-expect-error
            service.currentIndex++;
        }
        //@ts-expect-error
        service.currentIndex = 0;
        //@ts-expect-error
        getImgUrlSpy = spyOn(service, 'getImgUrl').and.callThrough();
    });

    afterEach(() => {
        httpTestingCtrl.verify();
    });

    describe(`Service`, () => {
        it(`should be created`, () => {
            expect(service).toBeTruthy();
        });
    });

    describe(`exts`, () => {
        it(`should be included as a property`, () => {
            //@ts-expect-error
            expect(service.exts).toBeDefined();
        });

        it(`should be set to an array of image extension types`, () => {
            //@ts-expect-error
            expect(service.exts).toEqual(['jpg', 'gif', 'png']);
        });
    });

    describe(`currentIndex`, () => {
        it(`should be included as a property`, () => {
            //@ts-expect-error
            expect(service.currentIndex).toBeDefined();
        });

        it(`should be set to 0`, () => {
            //@ts-expect-error
            expect(service.currentIndex).toEqual(0);
        });
    });

    describe(`getImgUrl`, () => {
        it(`should be included as a method`, () => {
            //@ts-expect-error
            expect(service.getImgUrl).toBeDefined();
        });

        it(`should take the given name as lower case, remove any parentheses, replace spaces with hyphens, and return the result with the image assets path and extension based on the currentIndex`, () => {
            const val = name.toLowerCase().replaceAll(' ', '-').replaceAll('(', '').replace(')', '');
            //@ts-expect-error
            const imgUrlStr = `../../assets/images/${val}.${service.exts[service.currentIndex]}`;
            //@ts-expect-error
            expect(service.getImgUrl(name)).toEqual(imgUrlStr);
        });

        it(`should return an empty string if an empty string is provided`, () => {
            //@ts-expect-error
            expect(service.getImgUrl('')).toEqual('');
        });
    })

    describe(`getImage`, () => {
        it(`should be included as a method`, () => {
            expect(service.getImage).toBeDefined();
        });

        it(`should call the 'getImgUrl()' method, passing in the name`, () => {
            service.getImage(name).subscribe();
            expect(getImgUrlSpy).toHaveBeenCalledOnceWith(name);
            const req = httpTestingCtrl.expectOne(imgUrl);
            req.flush(new Blob());
        });

        it(`should call the HttpClient's 'get' method`, () => {
            service.getImage(name).subscribe();
            const req = httpTestingCtrl.expectOne(imgUrl);
            expect(req.request.method).toEqual('GET');
            req.flush(new Blob());
        });

        it(`should pass in the name formatted to a url`, () => {
            service.getImage(name).subscribe();
            const req = httpTestingCtrl.expectOne(imgUrl);
            expect(req.request.url).toEqual(imgUrl);
            req.flush(new Blob());
        });

        it(`should map the url back if successful`, () => {
            service.getImage(name).subscribe({
                next: val => expect(val).toEqual(imgUrl)
            });

            const req = httpTestingCtrl.expectOne(imgUrl);
            req.flush(new Blob());
        });

        it(`should iterate the currentIndex if it fails to find an image`,() => {
            service.getImage(errName).subscribe({
                next: val => {
                    //@ts-expect-error
                    expect(service.currentIndex).toBeGreaterThan(0);
                }
            });

            errUrls.forEach(err => {
                const req = httpTestingCtrl.match(err);
                if (req.length == 1) req[0].flush(new Blob(), {status: 404, statusText: 'Not Found'});
            });
        });

        it(`should call itself again if it fails to find an image and there are still extensions to test`, () => {
            service.getImage(errName).subscribe({
                next: val => {
                    //@ts-expect-error
                    expect(service.currentIndex).toBeGreaterThan(0);
                }
            });

            errUrls.forEach(err => {
                const req = httpTestingCtrl.match(err);
                if (req.length == 1) req[0].flush(new Blob(), {status: 404, statusText: 'Not Found'});
            });
        });

        it(`should return an Observable of undefined if there are no more extensions to check`, () => {
            service.getImage(errName).subscribe({
                next: val => expect(val).toBeUndefined()
            });

            errUrls.forEach(err => {
                const req = httpTestingCtrl.match(err);
                if (req.length == 1) req[0].flush(new Blob(), {status: 404, statusText: 'Not Found'});
            });
        });

        it(`should return an Observable of undefined if the url is empty`, () => {
            service.getImage('').subscribe({
                next: val => expect(val).toBeUndefined()
            });
        });
    });
});
