import { TransferTypes } from "../enums";
import { CreateTransferInput } from "../inputs";
import { Transfer } from "../entities";
import { BaseResource } from "./BaseResource";
export declare class TransfersResource extends BaseResource {
  protected readonly baseUri = "/transfers";
  readonly _requiredTokenTypes: TransferTypes[];
  /**
   * Requests a Transfer
   * @param token User token
   * @param requestTransferInput
   */
  create(requestTransferInput: CreateTransferInput): Promise<Transfer>;
}
