var submitted = new ReactiveVar(false);
Template.userFeedbackForm.created = function(){
  submitted.set( false );
};

Template.userFeedbackForm.helpers({
  submitted: function(){
    return submitted.get();
  }
});

AutoForm.addHooks(['userFeedbackForm'],{
  onSuccess: function(){
    submitted.set( true );

    // kind of hacky, would prefer a callback.
    Meteor.setTimeout(function(){
        Modal.hide('userFeedbackModal');
        submitted.set( false );
    }, 2500);
  }
});

Template.userFeedbackBtn.events({
  'click': function(){
    Modal.show('userFeedbackModal');
  }
});

Template.userFeedbackAdmin.created = function(){
  this.subscribe('userFeedback');
};

Template.userFeedbackAdmin.helpers({
  feedback: function(){
    return UserFeedback.find();
  }
});
