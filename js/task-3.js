function getElementWidth(_content, _padding, _border) {
  const contentWidth = parseFloat(_content);
  const paddingTotalWidth = parseFloat(_padding) * 2;
  const borderTotalWidth = parseFloat(_border) * 2;

  const result = contentWidth + paddingTotalWidth + borderTotalWidth;
  return result;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
