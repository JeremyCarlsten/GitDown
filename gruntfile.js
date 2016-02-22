module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            clean: ['distribution/', 'src/js/', 'test/src/js']
        },
        uglify: {
            options: {
                banner: '/*\n/  Author: Jeremy Carlsten \n/  Version: 0.1.1 \n*/\n'
            },
            dist: {
                files: [
                    {src: 'src/js/*.js', dest: 'distribution/gitDown-0.1.0.min.js'}
                ]
            }
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
                    'src/js/gitDown.js': 'src/coffee/*.coffee',
                    'test/src/js/mainTest.js': 'test/src/coffee/*.coffee'
                }
            }
        },
        watch:{
            scripts:{
                files: ['src/**/*.coffee', 'test/**/*.coffee'],
                tasks: ['clean', 'coffee']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['clean', 'coffee', 'jshint']);
    grunt.registerTask('compile', ['clean', 'coffee', 'jshint']);
    grunt.registerTask('default', ['clean', 'coffee', 'jshint', 'uglify']);

};
