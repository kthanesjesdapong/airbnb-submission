import { graphql, HttpResponse } from 'msw';

/*
// Intercept an HTTP GET request which path
// matches the "predicate", and resolve it
// using the given "resolver" function.
http.get(predicate, resolver)
 
// A similar request handler for a GraphQL mutation.
graphql.mutation(predicate, resolver)

*/



const singleBar = {
  data: {
    getBar: {
      data: {
        id: 44,
        name: 'Le Thai',
        rating: 4,
        price: {
          edges: [
            {
              node: {
                priceStr: "$$"
              }
            }
          ]
        },
        photos: [
          "https://s3-media3.fl.yelpcdn.com/bphoto/GGpX0LB3_XFttIGXnmZAYw/o.jpg"
        ],
        hours: {
          edges: [
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
            {
              node: {
                start: 1100,
                end: 2200,
                day: 0
              }
            },
          ]
        },
        location: {
          edges: [
            {
              node: {
                locationAddress: '523 Fremont St'
              }
            }
          ]
        },
        display_phone: '(702) 778-0888',
        category: {
          edges: [
            {
              node: {
                categoryAlias: {
                  categoryAlias: "beergardens"
                }
              }
            },
            {
              node: {
                categoryAlias: {
                  categoryAlias: "thai"
                }
              },
            }
          ]
        }
      }
    }
  }
};



export const handlers = [
  graphql.query('GetBar', ({ query, variables }) => {
    console.log('Intercepted a /"GetBar"/ GraphQL query:', query,
      variables);
  })
];