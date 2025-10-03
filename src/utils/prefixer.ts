const prefixStyle = (prefix: string, styles: string) => {
  return styles
    .split(/\s+/)
    .filter(Boolean)
    .map((style) =>
      style.includes(`${prefix}:`) ? style : `${prefix}:${style}`
    )
    .join(" ");
};
export { prefixStyle };
