const getPriceRange = (
  input: number
): { minPrice: string; maxPrice: string } => {
  let min: string;
  let max: string;
  switch (input) {
    case 1:
      min = "0";
      max = "0";
      break;
    case 2:
      min = "0.1";
      max = "0.4";
      break;
    case 3:
      min = "0.5";
      max = "1.0";
      break;
    default:
      min = "How is this even possible!";
      max = "I have no idea.";
      break;
  }
  return { minPrice: min, maxPrice: max };
};

export default getPriceRange;
