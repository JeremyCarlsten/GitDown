module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n/  Author: Jeremy Carlsten \n/  Version: <%= pkg.version %> \n*/\n'
            },
            dist: {
                files: [
                    {src: 'src/js/gitdown.js', dest: 'distribution/gitdown-<%= pkg.version %>.min.js'}
                ]
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        coffee: {
            compile: {
                files: {
                    'src/js/gitdown.js': 'src/coffee/gitdown.coffee',
                    'test/src/js/mainTest.js': 'test/src/coffee/mainTest.coffee'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.coffee'],
                tasks: ['coffee'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['coffee', 'jshint', 'qunit']);
    grunt.registerTask('compile', ['coffee', 'jshint']);
    grunt.registerTask('default', ['coffee', 'jshint', 'qunit', 'uglify']);

};