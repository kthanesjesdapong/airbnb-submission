import { createRestaurant } from "../restaurant/createRestaurant.service";
import { createMockContext } from '@config/prisma/mockContext';
import { MockContext, Context } from "@types";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe('restaurants service', () => {

  test('should create a new restaurant', async () => {
    const restaurant = {
      id: 1,
      name: 'Terrible Restaurant',
      rating: 4,
      photos: ['https://s3-media4.fl.yelpcdn.com/bphoto/OXH3YZsT6qc707NOg39zAw/o.jpg'],
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
      hours: [{
        open: [
          {
            start: '0700',
            end: '1900',
            day: 0
          },
          {
            start: '0700',
            end: '1900',
            day: 1
          },
          {
            start: '0700',
            end: '1900',
            day: 2
          },
          {
            start: '0700',
            end: '1900',
            day: 3
          },
          {
            start: '0700',
            end: '1900',
            day: 4
          },
          {
            start: '0700',
            end: '1900',
            day: 5
          },
          {
            start: '0700',
            end: '1900',
            day: 6
          }
        ],
      }],
      location: {
        address1: 'test street',
        city: 'city',
        state: 'state',
        country: 'usa'
      },
      display_phone: '(000)-000-0000',
      categories: [
        {
          title: 'n/a',
          alias: 'n/a'
        }
      ]
    };

    const prismaResolvedValue = {
      id: 1,
      name: 'Terrible Restaurant',
      rating: 4,
      photos: ['https://s3-media4.fl.yelpcdn.com/bphoto/OXH3YZsT6qc707NOg39zAw/o.jpg'],
      latitude: 0,
      longitude: 0,
      hours: [{
        open: [
          {
            start: '0700',
            end: '1900',
            day: 0
          },
          {
            start: '0700',
            end: '1900',
            day: 1
          },
          {
            start: '0700',
            end: '1900',
            day: 2
          },
          {
            start: '0700',
            end: '1900',
            day: 3
          },
          {
            start: '0700',
            end: '1900',
            day: 4
          },
          {
            start: '0700',
            end: '1900',
            day: 5
          },
          {
            start: '0700',
            end: '1900',
            day: 6
          }
        ],
      }],
      location: {
        address1: 'test street',
        city: 'city',
        state: 'state',
        country: 'usa'
      },
      display_phone: '(000)-000-0000',
      categories: [
        {
          title: 'n/a',
          alias: 'n/a'
        }
      ]
    };

    mockCtx.prisma.restaurant.create.mockResolvedValue(prismaResolvedValue);

    await expect(createRestaurant(restaurant, ctx)).resolves.toEqual({
      id: 1,
      name: 'Terrible Restaurant',
      rating: 4,
      photos: ['https://s3-media4.fl.yelpcdn.com/bphoto/OXH3YZsT6qc707NOg39zAw/o.jpg'],
      latitude: 0,
      longitude: 0,
      hours: [{
        open: [
          {
            start: '0700',
            end: '1900',
            day: 0
          },
          {
            start: '0700',
            end: '1900',
            day: 1
          },
          {
            start: '0700',
            end: '1900',
            day: 2
          },
          {
            start: '0700',
            end: '1900',
            day: 3
          },
          {
            start: '0700',
            end: '1900',
            day: 4
          },
          {
            start: '0700',
            end: '1900',
            day: 5
          },
          {
            start: '0700',
            end: '1900',
            day: 6
          }
        ],
      }],
      location: {
        address1: 'test street',
        city: 'city',
        state: 'state',
        country: 'usa'
      },
      display_phone: '(000)-000-0000',
      categories: [
        {
          title: 'n/a',
          alias: 'n/a'
        }
      ]
    });
  });
})

