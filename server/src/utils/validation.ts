import type { FileType, Form, PrzepisForm, SpzForm, WypisForm } from '../types';

const checkValidation = (type: FileType, form: Form) => {
  switch (type) {
    case 'spz': {
      const payload = checkIfSpzValid(form as SpzForm);
      if (payload) {
        return payload;
      }

      break;
    }

    case 'wypis': {
      const payload = checkIfWypisValid(form as WypisForm);
      if (payload) {
        return payload;
      }

      break;
    }

    case 'przepis': {
      const payload = checkIfPrzepisValid(form as PrzepisForm);
      if (payload) {
        return payload;
      }

      break;
    }

    default: {
      break;
    }
  }
};

const checkIfSpzValid = (form: SpzForm) => {
  const {
    info: {
      name,
      surname,
      albumNumber,
      fieldOfStudy,
      email,
      level,
      term,
      year,
      dean,
    },
    mainSubjects,
  } = form;

  if (
    !name ||
    !surname ||
    !albumNumber ||
    !fieldOfStudy ||
    !email ||
    !level ||
    !term ||
    !year ||
    !dean ||
    mainSubjects.length === 0
  ) {
    return { message: 'You need to provide all information' };
  }
};

const checkIfWypisValid = (form: WypisForm) => {
  const { name, surname, albumNumber, fieldOfStudy, email, faculty, dean } =
    form;

  if (
    !name ||
    !surname ||
    !albumNumber ||
    !fieldOfStudy ||
    !email ||
    !faculty ||
    !dean
  ) {
    return { message: 'You need to provide all information' };
  }
};

const checkIfPrzepisValid = (form: PrzepisForm) => {
  const {
    name,
    surname,
    albumNumber,
    fieldOfStudy,
    email,
    level,
    termType,
    year,
    dean,
    subjects,
  } = form;

  if (
    !name ||
    !surname ||
    !albumNumber ||
    !fieldOfStudy ||
    !email ||
    !year ||
    !termType ||
    !level ||
    !dean ||
    subjects.length === 0
  ) {
    return { message: 'You need to provide all information' };
  }
};

export { checkValidation };
