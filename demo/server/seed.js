if( Meteor.users.find().count() < 0 ){
  var aid = Accounts.createUser({email: 'admin@gmail.com', password: 'password1'});

  Roles.addUsersToRoles(aid,'admin');
}
