export function html([first, ...strs], ...args) {
  return (
    first +
    args
      .map((arg, i) => (arg instanceof Array ? arg.join("") : arg) + strs[i])
      .join("")
  );
}
