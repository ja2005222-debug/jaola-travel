import { readFile } from 'fs/promises';
import path from 'path';

const getFileList = async () => {
  const filesDir = path.join(process.cwd(), 'public/files');
  const files = await readFile(filesDir, 'utf8');
  return JSON.parse(files);
};

export { getFileList };