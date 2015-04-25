'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src: 'src',
    dist: 'dist',

    watch : {
      grunt: {files: ['Gruntfile.js']},
      postcss: {
        files: 'src/*.css',
        tasks: ['postcss']
      }
    },
    
    postcss: {
      options: {
        map: false,
        processors: [
          require('postcss-import')(),
          require('postcss-simple-vars')(),
          require('postcss-simple-extend')(),
          require('postcss-nested')(),
          require('postcss-media-minmax')(),
          require('postcss-merge-rules')(),
          require('autoprefixer-core')({browsers: 'last 2 version'}).postcss,
          // require('csswring').postcss,
        ]
      },
      dist: {
        files: {
          'dist/styles.css': 'src/all.css'
        }
      }
    }


  });



  grunt.registerTask('default', ['postcss', 'watch']);

};
