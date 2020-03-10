let data = require('../data');
const getHighestId = () => Math.max(...Object.keys(data));

const createPage = (some) => {
  const id = getHighestId() + 1;
  data = {...data, [id]:{...some}};
  return true
};
const updatePage = (id, params) => {
  if(!data[id]) {
    throw new Error(`there is no data by id ${id}`)
  }
  let {[id]: omit, ...res} = data;
  data = {...res, [id]: {...params}};
  return true
};

const deletePage = (id) => {
  if(!data[id]) {
    throw new Error(`there is no data by id ${id}`)
  }
  let {[id]: omit, ...res} = data;
  data = res;
  return true
};
const readPage = (id) => data[id];

const readPages = () => Object.values(data);


module.exports.createPage = createPage;
module.exports.updatePage = updatePage;
module.exports.deletePage = deletePage;
module.exports.readPage = readPage;
module.exports.readPages = readPages;

