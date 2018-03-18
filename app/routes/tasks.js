//import Route from '@ember/routing/route';

//export default  Route.extend({model:function(){return  this.store.findAll('task');}});



import Ember from 'ember';

export default Ember.Route.extend({ 
        model: function() {
        return this.store.findAll('task');
    }
});