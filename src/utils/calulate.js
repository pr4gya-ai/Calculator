import { evaluate, sin, cos, tan } from "mathjs";

// Custom calculate function supporting Degrees/Radians
export const calculate = (expression, trigMode = "RAD") => {
  try {
    if (!expression) return "";

    // Wrap sin, cos, tan for degrees
    const scope = {};
    if (trigMode === "DEG") {
      scope.sin = (x) => sin(x * Math.PI / 180);
      scope.cos = (x) => cos(x * Math.PI / 180);
      scope.tan = (x) => tan(x * Math.PI / 180);
    }

    const result = evaluate(expression, scope);
    return result.toString();
  } catch {
    return "Error";
  }
};
