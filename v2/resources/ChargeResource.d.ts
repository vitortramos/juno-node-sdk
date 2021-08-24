import { BaseResource } from "./BaseResource";
import { GetChargeByIdResponse, GetChargesInput, GetChargesResponse, CreateChargesResponse } from "../responses";
import { CreateChargeInput } from "../inputs";
export declare class ChargeResource extends BaseResource {
  protected readonly baseUri = "/charges";
  get(filter: GetChargesInput): Promise<GetChargesResponse>;
  getById(id: string): Promise<GetChargeByIdResponse>;
  create(charge: CreateChargeInput): Promise<CreateChargesResponse>;
}
