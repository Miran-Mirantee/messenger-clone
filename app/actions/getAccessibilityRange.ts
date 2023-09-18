const getAccessibilityRange = (
  input: number
): { minAccessibility: string; maxAccessibility: string } => {
  let min: string;
  let max: string;
  switch (input) {
    case 1:
      min = "0";
      max = "0.3";
      break;
    case 2:
      min = "0.4";
      max = "0.7";
      break;
    case 3:
      min = "0.8";
      max = "1.0";
      break;
    default:
      min = "How is this even possible!";
      max = "I have no idea.";
      break;
  }
  return { minAccessibility: min, maxAccessibility: max };
};

export default getAccessibilityRange;
