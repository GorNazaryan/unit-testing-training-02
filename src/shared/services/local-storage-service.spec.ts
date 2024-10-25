import { TestBed } from "@angular/core/testing";
import { LocalStorageService } from "./local-storage.service";

describe('LocalStorageService', () => {
    let service: LocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalStorageService]
        });
        service = TestBed.inject(LocalStorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set item', () => {
        service.setItem('test', 'test');
        expect(service.getItem('test')).toEqual('test');
    });

    it('should remove item', () => {
        service.setItem('test', 'test');
        service.removeItem('test');
        expect(service.getItem('test')).toEqual([]);
    });
});