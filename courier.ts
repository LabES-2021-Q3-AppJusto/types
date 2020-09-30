import { UserProfile } from './profile';
import { Fleet } from './fleet';
import { WithId } from './platform';
import {
  IuguBankName,
  IuguMarketplaceAccount,
  IuguMarketplaceAccountTokens,
  IuguMarketplaceAccountVerification,
} from './payment/iugu';

export interface Bank {
  id: string;
  name: IuguBankName;
}

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';
export type CourierMode =
  | 'motocycle'
  | 'bicycle'
  | 'scooter'
  | 'car'
  | 'walking';

export interface CourierStatistics {
  deliveries: number;
  canceled: number;
}

export interface CourierAddress {
  address: string;
  cep: string;
  city: string;
  state: string;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  mode?: CourierMode;
  fleet?: WithId<Fleet>;
  bankAccount?: Bank & {
    agency: string;
    account: string;
    digit: string;
    type: 'Corrente' | 'Poupança';
  };
  cnpj?: string;
  marketPlace?: {
    situation: 'created' | 'configured' | 'requested-verification' | 'verified';
    tokens: IuguMarketplaceAccountTokens;
    account?: IuguMarketplaceAccount;
    verification?: IuguMarketplaceAccountVerification;
  };
  address?: CourierAddress;
  statistics: CourierStatistics;
}
