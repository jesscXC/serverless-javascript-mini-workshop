function main(params) {
  let name = params.name || 'User';
  let place = params.place || 'Earth';
  return { greetings: 'Hello, ' + name + ' from location: ' + place };
}
