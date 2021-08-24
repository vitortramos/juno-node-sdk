import { BaseResource } from "./BaseResource";
import { BusinessArea } from "../entities/BusinessArea";
import { Bank } from "../entities/Bank";
import { GetListResponse } from "../responses";
export declare class DataResource extends BaseResource {
  protected readonly baseUri = "/data";
  getBanks(): Promise<
    GetListResponse<{
      banks: Bank[];
    }>
  >;
  getBusinessAreas(): Promise<
    GetListResponse<{
      businessAreas: BusinessArea[];
    }>
  >;
}
