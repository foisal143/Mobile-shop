import { getLocalData } from './utilitis/utilitis';

const shopLoader = async () => {
  const loadProducts = await fetch(
    'https://openapi.programming-hero.com/api/phones?search=iphone'
  );
  const products = await loadProducts.json();
  return products;
};

const reviewLoader = async () => {
  const data = await shopLoader();
  const phones = data.data;
  const localData = await getLocalData();
  const newPhones = [];
  for (const slug in localData) {
    if (localData) {
      const phone = phones.find(item => item.slug === slug);
      newPhones.push(phone);
    }
  }
  return newPhones;
};
export { shopLoader, reviewLoader };
