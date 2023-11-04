import { readPrzepisFiles } from '../files/read/read-przepis-files';
import { readSpzFiles } from '../files/read/read-spz-files';
import { readWypisFiles } from '../files/read/read-wypis-files';

const getUserFiles = async (userId: string) => {
  try {
    const spzFiles = await readSpzFiles(userId);
    const wypisFiles = await readWypisFiles(userId);
    const przepisFiles = await readPrzepisFiles(userId);

    return [...spzFiles, ...wypisFiles, ...przepisFiles];
  } catch (error) {
    console.log(error);
  }
};

export { getUserFiles };
