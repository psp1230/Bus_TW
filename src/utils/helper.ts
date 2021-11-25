export const commaFormat = (value: string): string => {
  const response = String(value).split('.');
  response[0] = String(response[0]).replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'));
  return `${response[0]}${response[1] ? `.${response[1]}` : ''}`;
};

export const rounding = (value: number, n: number): number => {
  const baseNum = Math.pow(10, n);
  return Math.round(value * baseNum) / baseNum;
};

export const totalSiteRender = (value: number): string | 0 => value ? commaFormat(rounding(value, 0).toFixed(0)) : 0;
