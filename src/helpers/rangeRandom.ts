// https://stackoverflow.com/a/1527820/14904183

export default function rangeRandom(start: number, end: number): number {
  let min = Math.ceil(start);
  let max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
