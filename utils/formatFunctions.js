export default function FormatSectionNumber(num) {
  return num < 10 ? `0${num}.` : `${num}.`;
}
