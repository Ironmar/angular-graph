export interface RocketModel {
  id?: string;
  name?: string;
  description?: string;
  wikipedia?: string;
  cost_per_launch: number;
  height?: {meters: number};
  active?: boolean;
}
