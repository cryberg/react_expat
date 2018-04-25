// Centralized propType definitions
import { shape, bool, string, oneOfType } from 'prop-types';

//I should probably rename this
export const weatherInfo = shape({
  location: string,
  isFetchingNewLocation: bool,
  errorMsg: string,
  savedLocations: oneOfType.array
})