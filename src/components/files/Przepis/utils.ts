import type { Subject, SubjectField } from './types';

const adjustSubjectArraySize = (array: Subject[], length: number) => {
  if (array.length < length) {
    for (let i = array.length; i < length; i++) {
      array.push({
        name: '',
        type: '',
        grade: 2,
        dateOfCompletion: '',
      });
    }
  } else if (array.length > length) {
    array.length = length;
  }

  return array;
};

const replaceSubjectArrayElement = (
  index: number,
  array: Subject[],
  type: SubjectField,
  value: string | number
) => {
  const newEntry = array[index];

  if (type === 'grade') {
    newEntry[type] = value as number;
  } else {
    newEntry[type] = value as string;
  }

  const newArray = [...array];
  newArray[index] = newEntry;

  return newArray;
};

export { adjustSubjectArraySize, replaceSubjectArrayElement };
