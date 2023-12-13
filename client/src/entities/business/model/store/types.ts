export type BaseBusiness = {
  id: number;
  name: string;
  rating: number;
  photos: string[];
  display_phone: string;
};

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


export type QueryVariables = {
  cursorId: number;
};

export type QueryResult = {
  data: BusinessListResponse;
};

export type SingleBusiness = {
  latitude: number;
  longitude: number;
} & BaseBusiness;


export type FormattedBusiness = {
  price: string;
  hours: string[][];
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

export type BusinessListResponseQuery = {
  business: FormattedBusiness[];
  totalCount: number;
};
