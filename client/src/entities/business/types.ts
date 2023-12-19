export type BaseBusiness = {
  id: number;
  name: string;
  rating: number;
  photos: string[];
  display_phone: string;
};

export type HourArr = (string | number)[];

export type HoursArr = HourArr[];


export type BusinessResponse = {
  price: {
    edges: {
      node: {
        priceStr: string;
      };
    }[];
  };
  hours: {
    edges: {
      node: {
        start: string;
        end: string;
        day: number;
      };
    }[];
  };
  location: {
    edges: {
      node: {
        locationAddress: string;
      };
    }[];
  };
  category: {
    edges: {
      node: {
        categoryAlias: string;
      };
    }[];
  };
  latitude?: number;
  longitude?: number;
} & BaseBusiness;




export type BusinessEdge = {
  node: BusinessResponse;
};

export type BusinessListResponse = {
  [index: string]: {
    edges: BusinessEdge[];
    totalCount: number;
  };
};

export type BusinessEdgesTest = {
  edges: BusinessEdge[];
};

export type QueryResult = {
  data: BusinessListResponse;
};

export type FormattedBusiness = {
  price: string;
  hours: HoursArr;
  location: string;
  category: string[];
} & BaseBusiness;

export type FormattedBusinessList = {
  business: FormattedBusiness[],
};

export type FormattedBusinessResponse = {
  [index: string]: {
    business: FormattedBusiness[];
    totalCount: number;
  };
};

export type SingleBusiness = {
  longitude: number;
  latitude: number;
  price: string;
  hours: HoursArr;
  location: string;
  category: string[];
} & BaseBusiness;

export type SingleBusinessQueryResult = {
  data: {
    [index: string]: BusinessResponse;
  };
};
export type FormattedSingleBusiness = {
  price: string;
  hours: HoursArr;
  location: string;
  category: string[];
  latitude?: number;
  longitude?: number;
} & BaseBusiness;


export type FormattedSingleBusinessResponse = {
  data: SingleBusiness;
};

