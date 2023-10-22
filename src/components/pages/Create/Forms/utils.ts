import type { MainSubjectField, SideSubjectField } from './types';
import type { MainSubject, SideSubject } from '../../../../fetching/types';

const adjustMainArraySize = (array: MainSubject[], length: number) => {
  if (array.length < length) {
    for (let i = array.length; i < length; i++) {
      array.push({
        name: '',
        wclps: '',
        ects: '',
      });
    }
  } else if (array.length > length) {
    array.length = length;
  }

  return array;
};

const adjustSideArraySize = (array: SideSubject[], length: number) => {
  if (array.length < length) {
    for (let i = array.length; i < length; i++) {
      array.push({
        name: '',
        wclps: '',
        ects: '',
        faculty: '',
      });
    }
  } else if (array.length > length) {
    array.length = length;
  }

  return array;
};

const replaceMainArrayElement = (
  index: number,
  array: MainSubject[],
  type: MainSubjectField,
  value: string
) => {
  const newEntry = array[index];
  newEntry[type] = value;

  const newArray = [...array];
  newArray[index] = newEntry;

  return newArray;
};

const replaceSideArrayElement = (
  index: number,
  array: SideSubject[],
  type: SideSubjectField,
  value: string
) => {
  const newEntry = array[index];
  newEntry[type] = value;

  const newArray = [...array];
  newArray[index] = newEntry;

  return newArray;
};

export {
  adjustMainArraySize,
  adjustSideArraySize,
  replaceMainArrayElement,
  replaceSideArrayElement,
};
