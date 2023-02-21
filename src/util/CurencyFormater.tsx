const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const CurencyFormater = (price: number) => CURRENCY_FORMATER.format(price);

export default CurencyFormater;
