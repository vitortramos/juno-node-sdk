import { GetListResponse } from "./GetListResponse";
import { Charge } from "../entities";
export declare type GetChargesResponse = GetListResponse<{
  charges: Charge[];
}>;
