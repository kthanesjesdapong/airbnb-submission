import { Request, Response } from "express";
import { getRestaurants } from "@seed/service/restaurants.service";
import { gqlClient } from "@seed/utils/gqlClient";
import { restraurantsQuery } from "@seed/constants/restaurantsQuery";

import { searchTerm } from "@seed/utils/searchTerm";


const restaurantsSearchTerm = searchTerm("restaurants", "las vegas downtown freemont arts district", "Food");

export const getRestaurantsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantsData = await getRestaurants(gqlClient, restraurantsQuery, restaurantsSearchTerm);
    console.log(restaurantsData);
    res.json(restaurantsData);
  } catch (e: unknown) {
    console.error(e);
  }
};