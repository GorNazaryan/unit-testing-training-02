import { WeatherLocation } from "../../types/location.type";
import { LocationsActions } from "./locations.actions";
import { locationsReducer } from "./locations.feature";

describe('Locations Feature', () => {
    it('should set loading to true when searchLocations is dispatched', () => {
        const result = locationsReducer(undefined, LocationsActions.searchLocations({ query: 'query' }));
        expect(result.loading).toBe(true);
    });

    it('should set loading to false and set locations when searchLocationsSuccess is dispatched', () => {
        const searchLocationsResult = locationsReducer(undefined, LocationsActions.searchLocations({ query: 'query' }));
        expect(searchLocationsResult.loading).toBe(true);
        const result = locationsReducer(searchLocationsResult, LocationsActions.searchLocationsSuccess({ locations: [] }));
        expect(result.loading).toBe(false);
        expect(result.locations).toEqual([]);
        expect(result.error).toBe(null);
    });

    it('should set loading to false and set error when searchLocationsFailure is dispatched', () => {
        const result = locationsReducer(undefined, LocationsActions.searchLocationsFailure({ error: 'error' }));
        expect(result.loading).toBe(false);
        expect(result.error).toBe('error');
    });

    it('should add location to favoriteLocations when addToFavorites is dispatched', () => {
        const location: WeatherLocation = { 
            id: 1,
            name: 'name',
            region: 'region',
            country: 'country',
            lat: 1,
            lon: 1,
            url: 'url'
        };
        const result = locationsReducer(undefined, LocationsActions.addToFavorites({ location}));
        expect(result.favoriteLocations).toEqual([location]);
    });

    it('should remove location from favoriteLocations when removeFromFavorites is dispatched', () => {
        const location: WeatherLocation = { 
            id: 1,
            name: 'name',
            region: 'region',
            country: 'country',
            lat: 1,
            lon: 1,
            url: 'url'
        };
        const state = {
            favoriteLocations: [location],
            locations: [],
            loading: false,
            error: null
        }
        const result = locationsReducer(state, LocationsActions.removeFromFavorites({ location }));
        expect(result.favoriteLocations).toEqual([]);
    });

    it('should set favoriteLocations when setFavoritesBulk is dispatched', () => {
        const locations: WeatherLocation[] = [
            { 
                id: 1,
                name: 'name',
                region: 'region',
                country: 'country',
                lat: 1,
                lon: 1,
                url: 'url'
            },
            { 
                id: 2,
                name: 'name',
                region: 'region',
                country: 'country',
                lat: 2,
                lon: 2,
                url: 'url'
            }
        ];
        const currentState = {
            favoriteLocations: [
                {
                    id: 3,
                    name: 'name',
                    region: 'region',
                    country: 'country',
                    lat: 3,
                    lon: 3,
                    url: 'url'
                }
            ],
            locations: [],
            loading: false,
            error: null
        }
        const result = locationsReducer(currentState, LocationsActions.setFavoritesBulk({ locations }));
        expect(result.favoriteLocations).toEqual([...locations, ...currentState.favoriteLocations]);
    });
});