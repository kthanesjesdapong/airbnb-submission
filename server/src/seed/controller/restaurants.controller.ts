import { Request, Response } from "express";
import { getBusiness } from "@seed/service/business/business.service";
import { gqlClient } from "@seed/utils/gqlClient";

import { totalQuery } from "@seed/constants/totalQuery";
import { searchQuery } from "@seed/constants/searchQuery";

import { searchVars } from "@seed/utils/searchVars";

import { prisma } from "$prisma/client";

import { createRestaurant } from "@seed/service/restaurant/createRestaurant.service";

import { getTotalMatch } from "@seed/service/business/totalBusiness.service";
import { findLimit } from "@seed/utils/findLimit";
import { navigateTotalResults } from "@seed/utils/navigateTotalResults";



export const createRestaurantsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantsVars = searchVars("restaurants", "las vegas downtown freemont arts district", "Food", 1, 0);
    const totalCountData = await getTotalMatch(gqlClient, totalQuery, restaurantsVars);
    const limitOffsetArr = findLimit(totalCountData?.search.total);
    const [maxFactor, complementary] = limitOffsetArr;
    const newRestaurantData = await navigateTotalResults(maxFactor, complementary, getBusiness, searchQuery, gqlClient, restaurantsVars);

    newRestaurantData.forEach(restaurantData => {
      createRestaurant(restaurantData, { prisma });
    });
    res.status(200).json(newRestaurantData);
  } catch (e: unknown) {
    console.error(e);
  }
};