import { scanDir } from '../../../utils/fs';

const mutations = scanDir(__dirname).join('\n');

export default `
type Mutation {
    ${mutations}
}
`;
