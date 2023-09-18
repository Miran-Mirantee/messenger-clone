import { ActivityInputs, ActivityParams } from "../types";
import getAccessibilityRange from "./getAccessibilityRange";
import getPriceRange from "./getPriceRange";

const getActivityParams = (inputs: ActivityInputs): ActivityParams => {
  const priceRange = getPriceRange(inputs.priceRange);
  const accessibilityRange = getAccessibilityRange(inputs.accessibilityRange);
  console.log("price range krub", inputs.priceRange);
  console.log("price range krub2", priceRange);
  const params: ActivityParams = {
    type: inputs.type,
    participants: String(inputs.participants),
    ...priceRange,
    ...accessibilityRange,
  };
  return params;
};

export default getActivityParams;
