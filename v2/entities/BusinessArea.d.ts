import { JunoEntity } from "./JunoEntity";
export interface BusinessArea extends JunoEntity {
  code?: number;
  activity?: string;
  category?: string;
}
