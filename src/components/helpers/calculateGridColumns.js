export const createMoreGridColumns = function (exercises, calculateAllColumns) {
  let out = "";

  for (let i = 0; i < calculateAllColumns(exercises) - 2; i++) {
    out += `1fr `;
  }
  return out;
};
