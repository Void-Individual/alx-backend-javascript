import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
  } catch (err) {
    photo = null;
  }
  try {
    user = await createUser();
  } catch (err) {
    user = null;
  }
  return { photo, user };
}
