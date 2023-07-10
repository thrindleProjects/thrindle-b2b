export const getMonthFromNumber = (val: number) => {
  if (val === 0) {
    return 'Jan';
  } else if (val === 1) {
    return 'Feb';
  } else if (val === 2) {
    return 'Mar';
  } else if (val === 3) {
    return 'Apr';
  } else if (val === 4) {
    return 'May';
  } else if (val === 5) {
    return 'Jun';
  } else if (val === 6) {
    return 'Jul';
  } else if (val === 7) {
    return 'Aug';
  } else if (val === 8) {
    return 'Sep';
  } else if (val === 9) {
    return 'Oct';
  } else if (val === 10) {
    return 'Nov';
  } else if (val === 11) {
    return 'Dec';
  } else {
    return '';
  }
};
