import { JunoSDKConfig } from "../configs";
import { BalancesResource, ChargesResource, PayeesResource, TransfersResource } from "../resources";
export declare class JunoSDK {
  private readonly _balanceResource;
  private readonly _chargeResource;
  private readonly _transferResource;
  private readonly _payees;
  constructor(config?: JunoSDKConfig);
  private static setEndpoint;
  private static validateEnvironment;
  /**
   * Balance resources
   */
  get balances(): BalancesResource;
  /**
   * ChargeV1 resources
   */
  get charges(): ChargesResource;
  /**
   * Transfer resources
   */
  get transfers(): TransfersResource;
  /**
   * Payee resources
   */
  get payees(): PayeesResource;
}
