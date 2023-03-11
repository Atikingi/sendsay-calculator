export const sortArray = (arr: string[], currentElementId: string, movableElementId: string) => {
  const currentElementIndex = arr.indexOf(currentElementId);
  const movableElementIndex = arr.indexOf(movableElementId);

  const newArr: string[] = [];

  if (currentElementId == 'screen') {
    return Array.from(new Set(newArr.concat('screen', arr.slice(0, arr.length))));
  }

  if (movableElementIndex === 0) {
    return Array.from(new Set(newArr.concat('screen', currentElementId, arr.slice(1, arr.length))));
  }

  if (movableElementIndex === 1) {
    return Array.from(
      new Set(newArr.concat('screen', arr[1], currentElementId, arr.slice(2, arr.length)))
    );
  }

  if (movableElementIndex === 2 && currentElementIndex === 1) {
    return Array.from(
      new Set(newArr.concat('screen', arr[2], currentElementId, arr.slice(3, arr.length)))
    );
  }

  if (movableElementIndex === 2 && currentElementIndex === 3) {
    return arr;
  }

  if (movableElementIndex === 3 && currentElementIndex === 1) {
    return Array.from(new Set(newArr.concat('screen', arr.slice(2, 4), currentElementId)));
  }

  if (movableElementIndex === 3 && currentElementIndex === 2) {
    return Array.from(new Set(newArr.concat('screen', arr[1], arr[3], currentElementId)));
  }

  return arr;
};
