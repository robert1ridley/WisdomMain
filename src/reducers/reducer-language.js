export default function (state = "zh", action) {
  switch (action.type) {
      case 'LANGUAGE_SELECT':
          return action.payload;
      default:
        return state;
  }
}
