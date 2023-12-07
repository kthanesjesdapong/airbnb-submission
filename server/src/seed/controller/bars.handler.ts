import { Request, Response } from "express";
import { getBusiness } from "@seed/service/business/business.service";
import { gqlClient } from "@seed/utils/gqlClient";

import { totalQuery } from "@seed/constants/totalQuery";
import { searchQuery } from "@seed/constants/searchQuery";

import { searchVars } from "@seed/utils/searchVars";

import { prisma } from "$prisma/client";

import { createBar } from "@seed/service/bar/createBar.service";


import { getTotalMatch } from "@seed/service/business/totalBusiness.service";
import { findLimit } from "@seed/utils/findLimit";
import { navigateTotalResults } from "@seed/utils/navigateTotalResults";


export const createBarsHandler = async (req: Request, res: Response): Promise<void> => {

  try {
    const barsVar = searchVars('bars', 'las vegas downtown freemont arts district', 'Bars', 1, 0);
    const totalCountData = await getTotalMatch(gqlClient, totalQuery, barsVar);
    const limitOffsetArr = findLimit(totalCountData?.search.total);
    const [maxFactor, complementary] = limitOffsetArr;
    const newBarData = await navigateTotalResults(maxFactor, complementary, getBusiness, searchQuery, gqlClient, barsVar);
    newBarData.forEach((barData) => {
      createBar(barData, { prisma });
    });
    res.status(200).json(newBarData);
  } catch (e: unknown) {
    console.error(e);
  }

};