import moment from 'moment';
export const convertDateTimeToString = datetime => {
  return moment(datetime).format('DD-MM-YYYY');
};
