document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { background: white; width: 640px; height: 300px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 70%; }</style>');

App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();
 
module("Ember.js Library", {
  setup: function() {
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    App.reset();
  }
});

function exists(selector) {
  return !!find(selector).length;
}