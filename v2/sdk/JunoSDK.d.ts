import { JunoSDKConfig } from "../configs";
import {
  BalanceResource,
  ChargeResource,
  DataResource,
  DigitalAccountResource,
  NotificationsResource,
  TransfersResource,
  PaymentResource,
} from "../resources";
import { DocumentResource } from "../resources/DocumentResource";
/**
 * JunoSdk class
 *
 * Integration V2 for NodeJS
 */
export declare class JunoSDK {
  private readonly _balances;
  private readonly _charges;
  private readonly _data;
  private readonly _digitalAccount;
  private readonly _documents;
  private readonly _notifications;
  private readonly _transfers;
  private readonly _payment;
  constructor(config?: JunoSDKConfig);
  private static mergeConfigWithEnvironment;
  private static createJunoClient;
  private static createJunoAuthClient;
  private static validateEnvironment;
  private static setAuthEndpoint;
  private static setEndpoint;
  get balances(): BalanceResource;
  get charges(): ChargeResource;
  get data(): DataResource;
  get digitalAccount(): DigitalAccountResource;
  get documents(): DocumentResource;
  get notifications(): NotificationsResource;
  get transfers(): TransfersResource;
  get payment(): PaymentResource;
}
