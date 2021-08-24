import { AxiosInstance } from "axios";
interface AuthResourceConstructor {
  junoAuthClient: AxiosInstance;
  clientId: string;
  secret: string;
}
export declare class AuthResource {
  private readonly basicToken;
  private oAuthTokenData;
  private junoClient;
  private oAuthToken;
  constructor({ junoAuthClient, clientId, secret }: AuthResourceConstructor);
  private doRequest;
  private generateOAuthToken;
  private refreshOAuthToken;
  getOAuthToken(): Promise<string>;
}
export {};
