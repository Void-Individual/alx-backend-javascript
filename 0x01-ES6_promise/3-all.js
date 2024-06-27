import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  Promise.all([
    uploadPhoto()
      .then((response) => {
        body = response.body;
      })
      .catch(() => console.log('Signup system offline')),

    createUser()
      .then((response) => {
        firstName = response.firstName;
        lastName = response.lastName;
      })
      .catch(() => console.log('Signup system offline')),
  ])
    .then(() => console.log(body, firstName, lastName))
    .catch(() => console.log('Signup system offline'));
}
