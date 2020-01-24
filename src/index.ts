// index.ts

export default () => {
  return (
    // eslint-disable-next-line no-undefined
    Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' })
      .formatToParts(0)
      .filter(part => part.type === 'fraction')[0]?.value.length ?? 0
  );
};
