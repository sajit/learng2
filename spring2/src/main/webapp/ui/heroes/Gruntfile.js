/**
 * Created by sajit.kunnumkal on 1/14/2016.
 */
module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['app/**/*.ts'],
                dest: 'app/**/*.js',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-typescript');
    grunt.registerTask('compile','typescript');
};

