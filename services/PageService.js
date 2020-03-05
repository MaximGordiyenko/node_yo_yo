let data = require('../data');

const createPage = (some) => {
  data = {...data, ...some};
  console.log(data)
};
const updatePage = (id, params) => {

};
const deletePage = (id) => {

};
const readPage = (id) => data[id];

const readPages = () => Object.values(data);


module.exports.createPage = createPage;
module.exports.updatePage = updatePage;
module.exports.deletePage = deletePage;
module.exports.readPage = readPage;
module.exports.readPages = readPages;

