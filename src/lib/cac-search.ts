
export type CacSearchType = 'ALL' | 'BUSINESS NAME' | 'COMPANY' | 'INCORPORATED TRUSTEE' | 'LIMITED LIABILITY' | 'LIMITED LIABILITY PARTNERSHIP';

export interface CacCompany {
  id: number;
  approvedName: string;
  rcNumber: string | null;
  companyRegistrationDate: string;
  companyId: number | null;
  classificationName: string;
  natureOfBusiness: string;
  classificationId: number;
  status: string;
}

export interface CacSearchResponse {
  status: number;
  message: string;
  data: CacCompany[];
  success: boolean;
}

const CLASSIFICATION_MAP: Record<string, number> = {
  'BUSINESS NAME': 1,
  'COMPANY': 2,
  'INCORPORATED TRUSTEE': 3,
  'LIMITED LIABILITY': 4,
  'LIMITED LIABILITY PARTNERSHIP': 5,
};

export async function searchCacNames(searchTerm: string, searchType: CacSearchType = 'ALL'): Promise<CacSearchResponse> {
  const url = "https://icrp.cac.gov.ng/name_similarity_app/api/public_search/search";
  
  const payload: any = {
    searchTerm,
    SearchType: searchType === 'ALL' ? 'ALL' : searchType,
  };

  if (searchType !== 'ALL' && CLASSIFICATION_MAP[searchType]) {
    payload.classificationId = CLASSIFICATION_MAP[searchType];
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://icrp.cac.gov.ng/public-search"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`CAC API responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("CAC Search Error:", error);
    return {
      status: 500,
      message: error instanceof Error ? error.message : "Unknown error",
      data: [],
      success: false
    };
  }
}

export async function getTaxId(companyId: number, rcNumber: string, classificationId: number): Promise<{ success: boolean; data?: any; message?: string }> {
  const url = `https://icrp.cac.gov.ng/tin_service/api/v1/public/tin/generate-tax-id/${companyId}?rc=${rcNumber}&type=${classificationId}`;
  
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://icrp.cac.gov.ng/public-search"
      }
    });

    if (!response.ok) {
      throw new Error(`Tax ID API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Tax ID Error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error"
    };
  }
}
