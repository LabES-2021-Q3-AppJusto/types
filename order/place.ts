import { LatLng } from '../platform';

export interface Address {
  main: string;
  secondary: string;
  description: string;
  googlePlaceId?: string;
  state: string;
  country: string;
}

export interface Place {
  address: Address;
  additionalInfo?: string;
  intructions?: string;
  location?: LatLng;
}
