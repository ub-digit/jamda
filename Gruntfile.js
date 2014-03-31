module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'css/<%= pkg.name %>.css',
        dest: 'css/<%= pkg.name %>.min.js'
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '/* Minified version of gu-bootstrap.css */'
        },
        files: {
          'css/<%= pkg.name %>.min.css': ['css/<%= pkg.name %>.css']
        }
      }
    },

    emberTemplates: {
      compile: {
          options: {
            templateName: function(sourceFile) {
              return sourceFile.replace(/templates\//, '');
            }
          },
          files: {
            "js/templates.js": ["templates/**/*.handlebars"]
          }
        }
    },


    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "css/<%=pkg.name%>.css": "bower_components/custom/custom-bootstrap.less"
        }
      }
    },

    watch: {
      emberTemplates: {
        files: 'templates/**/*.handlebars',
        tasks: ['emberTemplates'],
        options: {
          livereload:true
        }
      },
      less: {
        files: 'bower_components/custom/**/*.less',
        tasks: ['less'],
        options: {
          livereload:true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // load less plugin 
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
 // grunt.registerTask('default', ['cssmin']);

  // watch plugin 
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // load plugin for css-minification 
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //  load plugin for compiling ember templates
  grunt.loadNpmTasks('grunt-ember-templates');

};