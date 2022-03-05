const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const formatAmount = (val: number) => formatter.format(val);
