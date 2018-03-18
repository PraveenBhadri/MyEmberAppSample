import DS from 'ember-data';
import Ember  from 'ember';

export default DS.Model.extend({

	title: DS.attr('string'),
	description: DS.attr('string'),
	date: DS.attr('date'),
	created: DS.attr('string', {
		defaultValue : function(){
             return new Date();	
		}
	})

});
