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

export const findMagicBus = (busIds: string): number => {
  const ids = busIds.split(',');
  const max = Math.max(...ids.filter((id) => id != 'x').map((id) => Number(id)));
  const maxIndex = ids.indexOf(max.toString());
  let magicTime = max;
  while(!foundMagicBus(ids, magicTime - maxIndex)) {
    magicTime += max;
  }
  return magicTime - maxIndex;
}

const foundMagicBus = (busIds: string[], time: number): boolean => {
  for (let i = 0; i < busIds.length; i++) {
    if (busIds[i] != 'x' && (time + i) % Number(busIds[i]) != 0) {
      return false;
    }
  }
  return true;
}