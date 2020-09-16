import { Fleet } from './fleet';
import { LatLng } from './platform';

export type OrderStatus =
  | 'quote'
  | 'matching'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type DispatchingState =
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

export type PaymentStatus =
  | 'authorized_pending_capture'
  | 'captured'
  | 'refunded'
  | 'failed'
  | 'not_authorized';

export interface Fare {
  fleet: Fleet;
  courierFee: number; // in cents
  courierTip: number; // in cents
  platformFee: number; // in cents
  taxes: number; // (percent as decimal; ex: for 2%, set 0.02)
  financialFee: number; // (percent as decimal; ex: for 2%, set 0.02)
  total: number; // in cents
}

export interface Address {
  main: string;
  secondary: string;
  description: string;
  googlePlaceId?: string;
}

export interface Place {
  address?: Address;
  additionalInfo?: string;
  intructions?: string;
  location?: LatLng;
}

export interface OrderRequest {
  origin: Place;
  destination: Place;
}

export interface Order {
  id?: string;
  consumerId: string;
  consumerName?: string;
  status: OrderStatus;
  paymentStatus?: PaymentStatus;
  origin: Place;
  destination: Place;
  routePolyline: string;
  distance: number; // in meters
  duration: number; // in seconds
  fare?: Fare;
  quotes?: Fare[];
  courierId?: string;
  courierName?: string;
  dispatchingState?: DispatchingState;
  createdOn: firebase.firestore.FieldValue;
  updateOn?: firebase.firestore.FieldValue;
}
