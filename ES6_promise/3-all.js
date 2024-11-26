import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise1, promise2]).then(([values1, values2]) => {
    console.log(`${values1.body} ${values2.firstName} ${values2.lastName}`);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
