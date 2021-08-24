import { JunoEntity } from "../entities/JunoEntity";
export declare type UpdateDigitalAccountResponse = JunoEntity;
export declare type GetDigitalAccountResponse = JunoEntity;
export interface CreateDigitalAccountResponse extends JunoEntity {
  resourceToken: string;
}
