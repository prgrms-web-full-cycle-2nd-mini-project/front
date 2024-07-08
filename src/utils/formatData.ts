/**
 * ISO 8601 형식의 날짜 문자열을 YYYY-MM-DD 형식으로 변환
 * @param isoDateStr ISO 8601 형식의 날짜 문자열 (예: 2024-07-17T00:00:00.000Z)
 * @returns YYYY-MM-DD 형식의 날짜 문자열 (예: 2024-07-17)
 */

export const formatISODate = (isoDateStr: string): string => {
  const date = new Date(isoDateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
