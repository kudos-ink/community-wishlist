import {
  fetchTopWishes,
  fetchNewWishes,
  fetchAllWishes,
} from "@/db/queries/wishes";
import { WishResponse } from "@/types";
import { sortByHot } from "@/utils/data";

export async function fetchWishes(sortBy?: string): Promise<WishResponse[]> {
  try {
    switch (sortBy) {
      case "top":
        return fetchTopWishes();
      case "new":
        return fetchNewWishes();
      case "hot":
      default:
        return fetchAllWishes().then((wishes) => wishes.sort(sortByHot));
    }
  } catch (error) {
    console.error("Error fetching wishes:", error);
    throw new Error("Failed to fetch wishes data");
  }
}
