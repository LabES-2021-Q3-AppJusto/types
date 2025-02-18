import firebase from 'firebase';
import { Place } from '.';
import { LatLng } from './platform';
import { ProfileSituation } from './profile';

export interface Cuisine {
  name: string;
  imagePath: string;
  order?: number;
  enabled?: boolean;
}

export interface BusinessAddress {
  cep: string;
  address: string;
  number?: string;
  additional?: string;
  city: string;
  state: string;
  latlng?: LatLng;
}

export interface BusinessStatistics {
  totalOrders: number;
  averagePreparationTime: number; // in seconds
  averageTicketPrice: number;
  averageWaitingTime: number;
}

export type BusinessType = 'restaurant';
export type BusinessStatus = 'open' | 'closed';

export type ScheduleObject = {
  day: string;
  checked: boolean;
  schedule: { from: string; to: string }[];
};
export type BusinessSchedule = ScheduleObject[];

export interface Business {
  type: BusinessType;
  code?: string;
  name?: string;
  companyName?: string;
  cnpj?: string;
  phone?: string;
  managers?: string[]; // emails
  businessAddress?: BusinessAddress;
  status: BusinessStatus;
  situation: ProfileSituation;
  enabled: boolean;
  profileIssues?: string[];
  profileIssuesMessage?: string;
  cuisine?: string; // cuisine's name
  description?: string;
  minimumOrder?: number; // in cents
  averageCookingTime?: number; // in seconds
  orderAcceptanceTime?: number | null; // in seconds
  deliveryRange?: number; // in meters
  statistics?: BusinessStatistics;
  onboarding?: string;
  logoExists: boolean;
  coverImageExists: boolean;
  schedules: BusinessSchedule;
  orderPrinting?: boolean;
  slug?: string;
  // metadata
  keepAlive?: firebase.firestore.FieldValue;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}

export interface BusinessRecommendation {
  recommendedBusiness: Place;
  consumerId: string | null;
  instagram: string | null;
  phone: string | null;
  owner: string | null;
  createdOn: firebase.firestore.FieldValue;
}

export interface BusinessChange {
  before: Partial<Business>;
  after: Partial<Business>;
  timestamp: firebase.firestore.FieldValue;
}

export interface BusinessMenuMessage {
  title: string;
  description: string;
}
