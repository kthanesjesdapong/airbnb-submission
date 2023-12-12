export type Business = {
  id: number;
  name: string;
  rating: number;
  price: {
    edges: {
      node: {
        priceStr: string;
      };
    }[];
  };
  photos: string[];
  hours: {
    edges: {
      node: {
        start: string;
        end: string;
      };
    }[];
  };
  display_phone: string;
  category: {
    edges: {
      node: {
        categoryAlias: string;
      };
    }[];
  };
};

export type BusinessEdge = {
  node: Business;
};

export type AllBusinessResponse = {
  [index: string]: {
    edges: BusinessEdge[];
  };
};

export type QueryVariables = {
  cursorId: number;
};

export type QueryResult = {
  data: AllBusinessResponse;
};

export type SingleBusiness = {
  latitude: number;
  longitude: number;
} & Business;
