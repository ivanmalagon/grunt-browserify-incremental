module.exports = function (grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({

    clean: {
      tests: ['tmp']
    },

    jshint: {
      all: ['Gruntfile.js', 'tasks/**/*.js', 'lib/**/*.js'],
      options: {
        jshintrc: ".jshintrc"
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['jshint']);
};
