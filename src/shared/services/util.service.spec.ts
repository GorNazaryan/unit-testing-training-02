import { TestBed } from "@angular/core/testing";
import { UtilsService } from "./utils.service";

describe('UtilsService', () => {
    let service: UtilsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UtilsService]
        });
        service = TestBed.inject(UtilsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should clone object', () => {
        const obj = { test: 'test' };
        const clonedObj = service.clone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });
});