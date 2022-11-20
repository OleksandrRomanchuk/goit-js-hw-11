const ACCESS_KEY = '30148042-04f4434198648da1763487888';
const SERVICE_URL = 'https://pixabay.com/api/';

const optionsForService = {
   key: ACCESS_KEY,
   q: '',
   page: 1,
   per_page: 40,
   image_type: 'photo',
   orientation: 'horizontal',
   safesearch: true,
};

const paramsForRequest = {
   method: 'get',
   url: SERVICE_URL,
   params: optionsForService,
};

export { optionsForService, paramsForRequest };
