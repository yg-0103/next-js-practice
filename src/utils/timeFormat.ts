export function timeFormat(time: string) {
  const format = ['년', '월', '일'];

  return time
    .slice(0, 10)
    .split('-')
    .map((t, i) => t + format[i])
    .join(' ');
}
