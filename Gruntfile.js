module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var randomPort = getRandomInt(3000,65536);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      main: {
        options: ['>1% in US'],
        src: 'public/css/main.css'
      }
    },
    babel: {
      dev: {
        options: {
          sourceMap: 'inline'
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    bower_concat: {
      main: {
        dest: 'public/lib/build.js',
        cssDest: 'public/lib/build.css'
      }
    },
    clean: ['public'],
    connect: {
      main: {
        options: {
          port: randomPort,
          base: 'public/',
          open: true,
          livereload: true
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '**',
              '!**/*.jade',
              '!**/*.scss',
              '!**/*.css',
              '!**/*.js',
            ],
            dest: 'public/',
            filter: 'isFile'
          }
        ]
      }
    },
    cssmin: {
      main: {
        files: {
          'public/css/main.css': 'public/css/main.css'
        }
      }
    },
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      }
    },
    sass: {
      prod: {
        options: {
          includePaths: ['bower_components/foundation/scss'],
          outputStyle: 'compressed'
        },
        files: {
          'public/css/main.css': 'src/scss/main.scss'
        }
      },
      dev: {
        options: {
          includePaths: ['bower_components/foundation/scss'],
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'public/css/main.css': 'src/scss/main.scss',
          'public/lib/build.css': 'src/css/main.css'
        }
      }
    },
    uglify: {
      bower: {
        files: {
          'public/lib/build.js': 'public/lib/build.js'
        }
      },
      main: {
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'public/css/main.css',
          'public/js/**/*.js',
          'public/**/*.html'
        ]
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade:dev']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['babel:dev']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'babel:prod',
    'bower_concat',
    'jade:prod',
    'sass:prod',
    'autoprefixer',
    'uglify',
    'cssmin'
  ]);
  grunt.registerTask('build-dev', [
    'clean',
    'copy',
    'sass:dev',
    'babel:dev',
    'bower_concat',
    'jade:dev',
    'autoprefixer'
  ]);

  grunt.registerTask('serve', [
    'build-dev',
    'connect',
    'watch'
  ]);

};