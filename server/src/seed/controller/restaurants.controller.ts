import { Request, Response } from "express";
import { getRestaurants } from "@seed/service/restaurants.service";
import { gqlClient } from "@seed/utils/gqlClient";
import { searchQuery } from "@seed/constants/searchQuery";
import { searchTerm } from "@seed/utils/searchTerm";
import { prisma } from "$prisma/client";
import { createRestaurant } from "@seed/service/createRestaurant.service";

const restaurantsSearchTerm = searchTerm("restaurants", "las vegas downtown freemont arts district", "Food");

export const getRestaurantsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantsData = await getRestaurants(gqlClient, searchQuery, restaurantsSearchTerm);

    const restaurantArray = restaurantsData?.search.business;

    restaurantArray?.forEach((restaurant) => {
      createRestaurant(restaurant, { prisma: prisma });
    });

    console.log(restaurantsData);
    console.log({ restaurantArray });
    res.status(200).json(restaurantsData);
  } catch (e: unknown) {
    console.error(e);
  }
};