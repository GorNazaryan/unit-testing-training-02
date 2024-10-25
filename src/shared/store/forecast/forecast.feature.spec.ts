import { ForecastActions } from "./forecast.actions";
import { forecastReducer } from "./forecast.feature";

describe('Forecast Feature', () => {
    it('should set loading to true when forecastPageLoaded is dispatched', () => {
        const result = forecastReducer(undefined, ForecastActions.forecastPageLoaded());
        expect(result.loading).toBe(true);
    });

    it('should set loading to false and set forecast when getForecastSuccess is dispatched', () => {
        const result = forecastReducer(undefined, ForecastActions.getForecastSuccess({ forecast: [] }));
        expect(result.loading).toBe(false);
        expect(result.forecast).toEqual([]);
        expect(result.error).toBe(null);
    });

    it('should set loading to false and set error when getForecastFailure is dispatched', () => {
        const result = forecastReducer(undefined, ForecastActions.getForecastFailure({ error: 'error' }));
        expect(result.loading).toBe(false);
        expect(result.error).toBe('error');
    });
});
