import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  let fir = [];

  Promise.all([
    signUpUser(firstName, lastName)
      .then((response) => {
        data = {
          status: 'resolved',
          value: response
        };
        fir.push(data);
      }),

    uploadPhoto(fileName)
      .then((response) => fir.push(response)),
  ])
    .then(() => {
      console.log(fir);
      console.log(con);
    });

  return 'Temp';
}