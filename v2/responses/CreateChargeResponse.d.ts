import { GetListResponse } from "./GetListResponse";
import { Charge } from "../entities";
export declare type CreateChargesResponse = GetListResponse<{
  charges: Charge[];
}>;
