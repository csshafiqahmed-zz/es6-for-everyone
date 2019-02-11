// import { uniq } from 'lodash';
// import insane from 'insane';
// import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, age, dog } from './src/config';
import User, { createURL, gravatar, test } from './src/user';

const fidalgo = new User(
  'Fidalgo || sdd',
  'pedrofidalgo7@gmail.com',
  'https://www.instagram.com/fidalgo.dev'
);
console.log(fidalgo);

const profile = createURL(fidalgo.name);
console.log(profile);

const image = gravatar(fidalgo.email);
console.log(image);
