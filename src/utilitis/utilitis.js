const getLocalData = () => {
  let allData = {};
  const data = JSON.parse(localStorage.getItem('phones'));
  if (data) {
    allData = data;
  }
  return allData;
};

const addToDb = slug => {
  const localData = getLocalData();
  const quantity = localData[slug];
  if (quantity) {
    localData[slug] = quantity + 1;
    localStorage.setItem('phones', JSON.stringify(localData));
  } else {
    localData[slug] = 1;
    localStorage.setItem('phones', JSON.stringify(localData));
  }
  return localData;
};
const deleteLocalCart = () => {
  localStorage.removeItem('phones');
};
const removeItemLocaL = id => {
  const localData = getLocalData();
  if (id in localData) {
    delete localData[id];
    localStorage.setItem('phones', JSON.stringify(localData));
  }
};
export { getLocalData, addToDb, deleteLocalCart, removeItemLocaL };
