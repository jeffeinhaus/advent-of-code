export const findBus = (busInformation: string[]): number => {
  const earliestTime = Number(busInformation[0]);
  const busIds = busInformation[1].split(',').filter((info) => info != 'x').map((info) => Number(info));
  let busId = busIds[0];
  let minTime = Number.MAX_SAFE_INTEGER;
  busIds.forEach((id) => {
    let counter = id;
    
    while (counter < earliestTime) {
      counter += id;
    }
    const closestTime = counter - earliestTime;
    if (closestTime < minTime) {
      minTime = closestTime;
      busId = id;
    }
  });

  return busId * minTime;
}