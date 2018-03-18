import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('new');
    //this.route('edit',{path: '/edit/:task_id'});
    this.route('edit',{path: '/edit'});
  });

  this.route('task', function() {
    this.route('edit');
  });
});

export default Router;
