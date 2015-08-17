Schema = {};

Schema.userFeedback = new SimpleSchema({
  description: {
    type: String,
    autoform: {
      rows: 3
    }
  },
  userId:{
    type: SimpleSchema.RegEx.Id,
    optional: true
  }
});

UserFeedback = new Mongo.Collection("UserFeedback");
UserFeedback.attachSchema( Schema.userFeedback );

UserFeedback.configure = function configure( config ){
  this._config = config;
};

if( Meteor.isServer ){
  UserFeedback.permit(['insert']).apply();
}
