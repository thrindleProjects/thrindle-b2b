export const useGenerateNumber = (start: number, end: number) => {
  const numArr = [];
  for (let i = start; i <= end; i++) {
    numArr.push(i);
  }

  return numArr;
};
