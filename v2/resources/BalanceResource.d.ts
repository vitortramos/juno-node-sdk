import { BaseResource } from "./BaseResource";
import { Balance } from "../entities";
export declare class BalanceResource extends BaseResource {
  protected readonly baseUri = "/balance";
  getBalance(token: string): Promise<Balance>;
}
