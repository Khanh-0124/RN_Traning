// https://randomuser.me/api/
import axios from 'axios';
const SERVER_NAME = 'randomuser.me';
const urlGetUserDitail = `https://${SERVER_NAME}/api`;
const getUserDetail = async () => {
  try {
    let response = await axios.get(urlGetUserDitail);
    if (response.status != 200) {
      throw 'Failed request';
    }
    if (response.data.results.length > 0) {
      let responseUser = response.data.results[0];
      let User = {};
      debugger;
      User.dateOfBirth = new Date(responseUser.dob.date);
      User.email = responseUser.email ?? '';
      User.gender = responseUser.gender ?? 'male';
      User.userid = `${responseUser.id.name} ${responseUser.id.value}`;
      User.useraddress = `${responseUser.location.state}, ${responseUser.location.street.name}`;
      User.username = responseUser.login.username ?? '';
      User.url = responseUser.picture.large ?? '';
      User.userphone = responseUser.phone ?? '';
      User.userRegisteredDate = new Date(responseUser.registered.date);
      return User;
    }
  } catch (error) {
    debugger;
    throw error;
  }
};

const login = ({email, password}) => {};
export {getUserDetail, login};
