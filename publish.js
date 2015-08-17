Meteor.publish('userFeedback',function(){
  if( UserFeedback._config.readAuthorized( this.userId ) ){
    return UserFeedback.find();
  }
  this.ready(); this.stop(); return;
});
