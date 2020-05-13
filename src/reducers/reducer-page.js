export default function (state = "/", action) {
  switch (action.type) {
      case 'PAGE_SELECT':
        return action.payload;
      default:
        return state;
  }
}