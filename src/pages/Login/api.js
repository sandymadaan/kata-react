import nivedan from '../../util/nivedanConfig';

export const loginUser = ({ ...fields }) => {
  const body = {
    ...fields,
  };
  return nivedan.post('/login', body);
};