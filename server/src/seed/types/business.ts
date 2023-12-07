export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Open = {
  start: string;
  end: string;
  day: number;
};

export type Hours = {
  open: Open[];
};

export type Location = {
  address1: string;
  city: string;
  state: string;
  country: string;
};

export type Phone = {
  display_phone: string;
};

export type Category = {
  title: string;
  alias: string;
};

export type Business = {
  name: string;
  rating: number;
  price: string;
  photos: string[];
  coordinates: Coordinates;
  hours: Hours[];
  location: Location;
  display_phone: string;
  categories: Category[];
};

export type Search = {
  total: number;
  business: Business[];
};

export type QueryDataResponse = {
  search: Search;
};

export type Total = {
  total: number;
};

export type TotalDataResponse = {
  search: Total;
};

