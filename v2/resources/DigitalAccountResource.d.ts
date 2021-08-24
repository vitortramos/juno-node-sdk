import { CreatePaymentAccountInput, CreateReceivingAccountInput, UpdateDigitalAccountInput } from "../inputs";
import { CreateDigitalAccountResponse } from "../responses";
import { BaseResource } from "./BaseResource";
export declare class DigitalAccountResource extends BaseResource {
  protected readonly baseUri = "/digital-accounts";
  get(token: string): Promise<import("../entities/JunoEntity").JunoEntity>;
  create(
    payload: CreatePaymentAccountInput | CreateReceivingAccountInput,
    token: string,
  ): Promise<CreateDigitalAccountResponse>;
  update(payload: UpdateDigitalAccountInput, token: string): Promise<import("../entities/JunoEntity").JunoEntity>;
}
