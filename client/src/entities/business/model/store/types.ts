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
  };
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

export type FormattedBusinessList = {
  price: string;
  hours: string[][];
  category: string[];
} & BaseBusiness;