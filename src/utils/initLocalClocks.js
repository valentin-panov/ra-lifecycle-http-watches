export default function initLocalClocks(timeZone) {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() + Number.parseInt(timeZone);

  const hands = {
    hours: hours * 30 + minutes / 2,
    minutes: minutes * 6,
    seconds: seconds * 6,
  };

  return hands;
}
