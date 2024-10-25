import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { LocationsComponent } from "./locations.component";
import { TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormsModule } from "@angular/forms";
import { provideRouter } from "@angular/router";
import { provideMockStore } from '@ngrx/store/testing';

describe('LocationsComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                LocationsComponent,
                MatFormFieldModule,
                MatInputModule,
                MatTableModule,
                MatIconModule,
                MatTooltipModule,
                MatCardModule,
                MatProgressSpinnerModule,
                FormsModule,
            ],
            providers: [provideRouter([]), provideMockStore({
                initialState: {
                    locations: {
                        locations: [],
                        loading: false,
                        error: null
                    }
                }
            })],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(LocationsComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'Locations' title`, () => {
        const fixture = TestBed.createComponent(LocationsComponent);
        const title = fixture.nativeElement.querySelector('mat-card-title');
        expect(title.textContent).toContain('Locations');
    });
}
);

