"use server";

import { searchCacNames, CacSearchType, getTaxId } from "@/lib/cac-search";

export async function searchCacAction(query: string, type: CacSearchType) {
  const response = await searchCacNames(query, type);
  return {
    success: response.status === 200,
    data: response.data,
    message: response.message
  };
}

export async function getTaxIdAction(companyId: number, rcNumber: string, classificationId: number) {
  return await getTaxId(companyId, rcNumber, classificationId);
}
