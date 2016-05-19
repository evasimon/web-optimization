module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Store the project settings from the package.json file into the pkg property
        pkg: grunt.file.readJSON('package.json'),

        // Minify javascript
        uglify: {
            // Generate banner comment 
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            target: {
                // Grunt will search for "**/*.js" under "src/" when the "uglify" task
                // runs and build the appropriate src-dest file mappings then, hence, 
                // no need to update the Gruntfile when files are added or removed.
                files: [{
                    expand: true,
                    cwd: 'src/',
                    ext: '.js',
                    src: ['**/*.js',
                        '!**/*.min.js'
                    ],
                    dest: 'dist/'
                }]
            }
        },

        // Minify CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    ext: '.css',
                    src: ['**/*.css',
                        '!**/*.min.css'
                    ],
                    dest: 'dist/'
                }]
            }
        },

        // Minify Images
        imagemin: {
            target: {
                files: [{
                    expand: true, // Enable dynamic expansion 
                    cwd: 'src/', // Src matches are relative to this path 
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match 
                    dest: 'dist/' // Destination path prefix 
                }]
            }
        },

        // Copy html files
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.html',
                        '**/*.html'
                    ],
                    dest: 'dist/'
                }]
            }
        }
    }); // Project Configuration End

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s): the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'copy']);

};