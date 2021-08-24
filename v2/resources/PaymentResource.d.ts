import { BaseResource } from "./BaseResource";
import { PaymentInput } from "../inputs";
import { PaymentPayResponse } from "../responses";
export declare class PaymentResource extends BaseResource {
  protected readonly baseUri = "/payments";
  pay(payment: PaymentInput): Promise<PaymentPayResponse>;
}
