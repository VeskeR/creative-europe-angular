'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      serve: {
        src: ['.tmp/']
      },
      dist: {
        src: ['dist/']
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: {
          'dist/scripts/main.js': ['app/scripts/**/*.js', 'app/states/**/*.js'],
          'dist/scripts/vendor/bower.js': [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/angular-translate/angular-translate.min.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js'
          ],
          'dist/styles/vendor/bower.css': []
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: true
      },
      serve: {
        options: {
          open: 'http://localhost:9000/app/index.html',
          base: [
            '.',
            'app',
            '.tmp'
          ]
        }
      },
      dist: {
        options: {
          livereload: false,
          keepalive: true,
          open: 'http://localhost:9000/dist/index.html',
          base: [
            '.'
          ]
        }
      }
    },
    copy: {
      options: {
        encoding: 'utf-8'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'app',
          src: '**/*.{jpg,png,svg,gif,json}',
          dest: 'dist'
        }]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      serve: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: 'styles/**/*.css',
          dest: '.tmp'
        }]
      },
      dist: {
        options: {
          map: false,
          processors: [
            require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] }),
            require('cssnano')()
          ]
        },
        files: {
          'dist/styles/main.min.css': ['dist/styles/main.css']
        }
      }
    },
    processhtml: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app',
          src: '**/*.html',
          dest: 'dist'
        }]
      }
    },
    sass: {
      serve: {
        options: {
          sourceMap: true
        },
        files: {
          '.tmp/styles/main.css': ['app/styles/main.scss']
        }
      },
      dist: {
        files: {
          'dist/styles/main.css': ['app/styles/main.scss']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/scripts/main.min.js': ['dist/scripts/main.js'],
          'dist/scripts/vendor/bower.min.js': ['dist/scripts/vendor/bower.js']
        }
      }
    },
    watch: {
      options: {
        interrupt: true
      },
      bower: {
        files: ['bower.json'],
        tasks: [
          'wiredep'
        ]
      },
      sass: {
        files: ['app/**/*.{scss,sass}'],
        tasks: [
          'sass:serve',
          'postcss:serve'
        ]
      },
      serve: {
        options: {
          livereload: '<%= connect.options.livereload %>',
          interrupt: false
        },
        files: [
          '.tmp/**/*.{js,css,html,jpg,png,svg,gif,json}',
          'app/**/*.{js,html,jpg,png,svg,gif,json}'
        ]
      }
    },
    wiredep: {
      options: {
        ignorePath: /^(\.\.\/)*\.\./
      },
      task: {
        src: ['app/**/*.html']
      }
    },
  });

  grunt.registerTask('serve', [
    'clean',
    'sass:serve',
    'postcss:serve',
    'connect:serve',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'concat:dist',
    'sass:dist',
    'uglify:dist',
    'postcss:dist',
    'copy:dist',
    'processhtml:dist'
  ]);

  grunt.registerTask('serve:dist', [
    'build',
    'connect:dist'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
}
