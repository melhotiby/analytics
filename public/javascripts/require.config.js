require.config({

  baseUrl: 'javascripts',
  paths: {

    'jquery': 'vendor/jquery-1.9.1',
    'jquery-ui': 'vendor/jquery-ui-1.10.2.custom',
    'd3': 'vendor/d3.v3',
    'nvd3': 'vendor/nv.d3',
    'hbs': 'vendor/handlebars',
    'ember': 'vendor/ember-1.0.0-rc.1',
    'ember-data': 'vendor/ember-data'
  },

  shim: {
    'ember': {
      deps: ['jquery', 'hbs'],
      exports: 'Ember'
    },

    'ember-data': ['ember'],
    'nvd3': ['d3'],
    'jquery-ui': ['jquery'],
    'd3': {
      exports: 'd3'
    }
  }
});


// Initial require to load the app
require([
  'app'
]);