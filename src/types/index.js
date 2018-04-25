// Centralized propType definitions
import { shape, bool, string, oneOfType } from 'prop-types';

export const weatherInfo = shape({
  location: string,
  isFetchingNewLocation: bool,
  errorMsg: string,
  savedLocations: oneOfType.array
})