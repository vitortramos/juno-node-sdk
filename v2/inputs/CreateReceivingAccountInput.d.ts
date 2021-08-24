import { Address, BankAccount, LegalRepresentative } from "../entities";
import { JunoEntity } from "../entities/JunoEntity";
declare type AddressInput = Omit<Address, keyof JunoEntity>;
declare type BankAccountInput = Omit<BankAccount, keyof JunoEntity>;
declare type LegalRepresentativeInput = Omit<LegalRepresentative, keyof JunoEntity>;
export interface CreateReceivingAccountInput {
  companyType: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  businessArea: number;
  tradingName: string;
  birthDate: string;
  address: AddressInput;
  bankAccount: BankAccountInput;
  legalRepresentative: LegalRepresentativeInput;
  type: "RECEIVING";
  businessUrl: string;
}
export {};
