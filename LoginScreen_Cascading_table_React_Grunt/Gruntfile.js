module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: 'react_components_1/*.jsx',
                tasks: ['browserify']
            },
             react: {
                files: 'react_components_2/*.jsx',
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform: [require('grunt-react').browserify ]
            },
            client: {
            
                  files: [
        {src: ['react_components_1/**/*.jsx'], dest: 'scripts/app1.built.js'},
        {src: ['react_components_2/**/*.jsx'], dest: 'scripts/app2.built.js'},
       ],
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify']);
};
