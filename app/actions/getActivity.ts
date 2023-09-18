type Inputs = {
  type?: string;
  participants?: string;
  minPrice?: string;
  maxPrice?: string;
  minAccessibility?: string;
  maxAccessibility?: string;
};

export default async function getActivity({
  type = "",
  participants = "",
  minPrice = "",
  maxPrice = "",
  minAccessibility = "",
  maxAccessibility = "",
}: Inputs = {}): Promise<any> {
  try {
    const response = await fetch(
      `http://www.boredapi.com/api/activity/?type=${type}&participants=${participants}&minprice=${minPrice}&maxprice=${maxPrice}&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`,
      { referrerPolicy: "unsafe-url" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR", error);
  }
}
