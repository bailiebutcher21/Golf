
export interface GolfCourse {
  id: string;
  status: string;
  membership_type: string;
  practice_area_id: number;
  measurement_type: string;
  media_id: number;
  hole_count: number;
  local_rank: number;
  local_max_rank: number;
  global_rank: number;
  global_max_rank: number;
  name: string;
  addr_1: string;
  city: string;
  state_or_province: string;
  country: string;
  zip_code: number;
  phone: number;
  website: string;
  description: string;
  thumbnail: string;
  inserted: string;
  updated: string;
  holes: any[];
  tee_types: any[];
  location: object;
  extras: any[];
  links: object;
  href: string;
  type: string;

}
