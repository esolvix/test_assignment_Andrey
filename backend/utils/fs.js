import fs from 'fs';
import path from 'path';

const scanDir = dir => fs.readdirSync(dir)
  .filter(file => file.indexOf('.') !== 0)
  .filter(file => file.indexOf('index') !== 0)
  .reduce(
    (accum, file) => [
      ...accum,
      fs.readFileSync(path.join(dir, file)).toString(),
    ],
    [],
  );

export {
  scanDir,
};
