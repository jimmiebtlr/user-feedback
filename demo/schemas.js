UserFeedback.configure({
  readAuthorized: function(userId){
    return Roles.userIsInRole( userId, 'admin' );
  }
});
