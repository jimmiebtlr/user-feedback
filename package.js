Package.describe({
    name: "elevatedevdesign:user-feedback",
    summary: "User feedback made simple.",
  	version: "0.0.1-rc.1",
    git: "https://github.com/ElevateDev/meteor-user-feedback.git"
});

Package.on_use(function (api) {
	api.versionsFrom("METEOR@1.0.2");

  api.use([
    'aldeed:simple-schema@1.3.3',
    'underscore',
    'accounts-base',
    'peppelg:on-login-logout@1.0.0',
    'deps',
    'mongo',
    'templating',
    'reactive-var',
    'ongoworks:security@1.2.0',
    'dburles:collection-helpers@1.0.3',
    'zimme:collection-timestampable@1.0.6',
    'aldeed:collection2',
    'aldeed:simple-schema',
    'aldeed:autoform',
    'peppelg:bootstrap-3-modal@1.0.3',
    'yagni:split-on-newlines@0.0.5'
  ]);

	
	api.add_files([
      'feedback.js'
  ],['client','server']);

	api.add_files([
      'client/templates.html',
      'client/templates.js',
      'client/templates.css'
  ],['client']);

	api.add_files([
      'publish.js'
  ],['server']);

  api.export('UserFeedback', ['client','server']);
});
