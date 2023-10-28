import type {
  MainSubject,
  MainSubjectField,
  SideSubject,
  SideSubjectField,
} from './types';

const adjustMainArraySize = (array: MainSubject[], length: number) => {
  if (array.length < length) {
    for (let i = array.length; i < length; i++) {
      array.push({
        name: '',
        wclps: '',
        ects: 0,
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
        ects: 0,
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
  value: string | number
) => {
  const newEntry = array[index];

  if (type === 'ects') {
    newEntry[type] = value as number;
  } else {
    newEntry[type] = value as string;
  }

  const newArray = [...array];
  newArray[index] = newEntry;

  return newArray;
};

const replaceSideArrayElement = (
  index: number,
  array: SideSubject[],
  type: SideSubjectField,
  value: string | number
) => {
  const newEntry = array[index];

  if (type === 'ects') {
    newEntry[type] = value as number;
  } else {
    newEntry[type] = value as string;
  }

  const newArray = [...array];
  newArray[index] = newEntry;

  return newArray;
};

const getTotalEcts = (subjects: MainSubject[]): number => {
  return subjects.reduce(
    (totalEcts, subject) => totalEcts + Number(subject.ects),
    0
  );
};

const getTotalHours = (subjects: MainSubject[]): number => {
  return subjects.reduce((totalHours, subject) => {
    const numbers = subject.wclps.split('/').map(Number);
    const hours = numbers.reduce((hours, number) => hours + number, 0);

    return totalHours + hours;
  }, 0);
};

export {
  adjustMainArraySize,
  adjustSideArraySize,
  replaceMainArrayElement,
  replaceSideArrayElement,
  getTotalEcts,
  getTotalHours,
};
