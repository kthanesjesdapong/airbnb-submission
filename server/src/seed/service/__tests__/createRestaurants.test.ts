import { createRestaurant } from "../restaurant/createRestaurant.service";
import { createMockContext } from '@config/prisma/context';
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
        latitude: 36.1579472959742,
        longitude: -115.153866894525
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
        is_open_now: true
      }],
      location: {
        address1: 'n/a',
        city: 'lv',
        state: 'nv',
        country: 'usa'
      },
      display_phone: '(000)-000-0000',
      categories: [
        {
          title: 'ex',
          parent_categories: [{ title: 'ex2', alias: 'n/a' }],
          alias: 'n/a'
        }
      ]
    };
    mockCtx.prisma.restaurant.create.mockResolvedValue(restaurant);

    await expect(createRestaurant(restaurant, ctx)).resolves.toEqual({
      id: 1,
      name: 'Terrible Restaurant',
      rating: 4,
      photos: ['https://s3-media4.fl.yelpcdn.com/bphoto/OXH3YZsT6qc707NOg39zAw/o.jpg'],
      coordinates: {
        latitude: 36.1579472959742,
        longitude: -115.153866894525
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
        is_open_now: true
      }],
      location: {
        address1: 'n/a',
        city: 'lv',
        state: 'nv',
        country: 'usa'
      },
      display_phone: '(000)-000-0000',
      categories: [
        {
          title: 'ex',
          parent_categories: [{ title: 'ex2', alias: 'n/a' }],
          alias: 'n/a'
        }
      ]
    });
  });
})

