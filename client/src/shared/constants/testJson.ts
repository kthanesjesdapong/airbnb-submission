import { QueryResult } from "@entities/business";
const testJSON = `{
  "data": {
    "allRestaurants": {
      "edges": [
        {
          "node": {
            "price": {
              "edges": [
                {
                  "node": {
                    "priceStr": "$$"
                  }
                }
              ]
            },
            "hours": {
              "edges": [
                {
                  "node": {
                    "start": "09:00 AM",
                    "end": "06:00 PM"
                  }
                }
              ]
            },
            "category": {
              "edges": [
                {
                  "node": {
                    "categoryAlias": "restaurant"
                  }
                }
              ]
            },
            "id": 1,
            "name": "Example Restaurant 1",
            "rating": 4.5,
            "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
            "display_phone": "+1234567890"
          }
        },
        {
          "node": {
            "price": {
              "edges": [
                {
                  "node": {
                    "priceStr": "$$$"
                  }
                }
              ]
            },
            "hours": {
              "edges": [
                {
                  "node": {
                    "start": "10:00 AM",
                    "end": "08:00 PM"
                  }
                }
              ]
            },
            "category": {
              "edges": [
                {
                  "node": {
                    "categoryAlias": "cafe"
                  }
                }
              ]
            },
            "id": 2,
            "name": "Coffee House 2",
            "rating": 3.8,
            "photos": ["https://example.com/photo3.jpg", "https://example.com/photo4.jpg"],
            "display_phone": "+9876543210"
          }
        },
        {
          "node": {
            "price": {
              "edges": [
                {
                  "node": {
                    "priceStr": "$$$"
                  }
                }
              ]
            },
            "hours": {
              "edges": [
                {
                  "node": {
                    "start": "11:00 AM",
                    "end": "09:00 PM"
                  }
                }
              ]
            },
            "category": {
              "edges": [
                {
                  "node": {
                    "categoryAlias": "bar"
                  }
                }
              ]
            },
            "id": 3,
            "name": "Happy Hour Bar 3",
            "rating": 4.0,
            "photos": ["https://example.com/photo5.jpg", "https://example.com/photo6.jpg"],
            "display_phone": "+1122334455"
          }
        },
        {
          "node": {
            "price": {
              "edges": [
                {
                  "node": {
                    "priceStr": "$$$"
                  }
                }
              ]
            },
            "hours": {
              "edges": [
                {
                  "node": {
                    "start": "08:00 AM",
                    "end": "05:00 PM"
                  }
                }
              ]
            },
            "category": {
              "edges": [
                {
                  "node": {
                    "categoryAlias": "spa"
                  }
                }
              ]
            },
            "id": 4,
            "name": "Relaxing Spa 4",
            "rating": 4.2,
            "photos": ["https://example.com/photo7.jpg", "https://example.com/photo8.jpg"],
            "display_phone": "+9988776655"
          }
        },
        {
          "node": {
            "price": {
              "edges": [
                {
                  "node": {
                    "priceStr": "$"
                  }
                }
              ]
            },
            "hours": {
              "edges": [
                {
                  "node": {
                    "start": "07:00 AM",
                    "end": "03:00 PM"
                  }
                }
              ]
            },
            "category": {
              "edges": [
                {
                  "node": {
                    "categoryAlias": "gym"
                  }
                }
              ]
            },
            "id": 5,
            "name": "Fit & Healthy Gym 5",
            "rating": 4.8,
            "photos": ["https://example.com/photo9.jpg", "https://example.com/photo10.jpg"],
            "display_phone": "+6677889900"
          }
        }
      ],
      "totalCount": 5
    }
  }
}
`;

export const testParsedJson = JSON.parse(testJSON) as QueryResult;