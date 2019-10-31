function main(params) {
  let name = params.name || 'Friend';
  let place = params.place || 'World';
  return { greetings: 'Hello from ' + name + ' location: ' + place };
}
