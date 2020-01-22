Package.describe({
  name: 'std:accounts-ui',
  version: '1.4.0',
  summary: 'Accounts UI for React in Meteor 1.9+',
  git: 'https://github.com/studiointeract/accounts-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.9');
  api.use('ecmascript');
  api.use('accounts-base');
  api.use('check');
  api.use('random');
  api.use('email');
  api.use('session');
  api.use('react-meteor-data@2.0.1');

  api.imply('accounts-base');

  api.use('accounts-oauth', {weak: true});
  api.use('accounts-password', {weak: true});

  api.mainModule('main_client.js', 'client');
  api.mainModule('main_server.js', 'server');
});
