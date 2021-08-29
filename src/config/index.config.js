export const baseURL = 'https://tracking.bosta.co/';
export const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: "2-digit"
};
export const shortDateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const shortDateNumbersOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

export const timeOptions = {timeStyle: "short"};
export const progressStatus = {
  TICKET_CREATED: {percentage: 0, stepsActive: 1, backgroundColor: 'green'},
  PACKAGE_RECEIVED: {percentage: 33, stepsActive: 2, backgroundColor: 'green'},
  OUT_FOR_DELIVERY: {percentage: 66, stepsActive: 3, backgroundColor: 'green'},
  DELIVERED_TO_SENDER: {percentage: 66, stepsActive: 3, backgroundColor: 'green'},
  DELIVERED: {percentage: 100, stepsActive: 4, backgroundColor: 'green'}
};
export const progressColorObject = {
  normal: 'green',
  canceled: 'red',
  waiting: 'yellow',
};

export const shipmentStatusColor = ['DELIVERED_TO_SENDER'];
export const stateToColor = {
  DELIVERED_TO_SENDER: 'canceled',

}
export const SOUQ = 'souq.com';