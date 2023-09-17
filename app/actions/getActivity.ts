type Inputs = {
  type?: string;
  participants?: number;
  priceRange?: number;
  accessibilityRange?: number;
};

export default async function getActivity({
  type,
  participants,
  priceRange,
  accessibilityRange,
}: Inputs = {}): Promise<any> {
  try {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
