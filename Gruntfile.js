var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-simple-mocha");
    grunt.loadNpmTasks("grunt-closure-compiler");
    grunt.loadNpmTasks("grunt-banner");
    grunt.loadNpmTasks("grunt-force-task");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: [ "build/cov" ],

        // see .jshintrc file for the options;
        // options are explained at http://www.jshint.com/docs/config/
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },

            core: [ "appframework.js" ],

            jq: [ "jq.appframework.js" ],

            plugins: [ "plugins/**/*.js" ],

            ui: ["ui/appframework.ui.js", "ui/transitions/**/*.js" ]
        },
        simplemocha: {
            all: {
                src: ["test/**/*.test.js"]
            }
        },
        cssmin: {
            all: {
                files: {
                    "build/css/af.ui.min.css": [
                        "css/main.css",
                        "css/appframework.css",
                        "css/lists.css",
                        "css/forms.css",
                        "css/buttons.css",
                        "css/badges.css",
                        "css/grid.css",
                        "css/android.css",
                        "css/win8.css",
                        "css/bb.css",
                        "css/ios7.css",
                        "css/ios.css",
                        "css/tizen.css",
                        "plugins/css/af.actionsheet.css",
                        "plugins/css/af.popup.css",
                        "plugins/css/af.scroller.css",
                        "plugins/css/af.selectbox.css"
                    ]
                }
            },
            base: {
                files: {
                    "build/css/af.ui.base.min.css": [
                        "css/main.css",
                        "css/appframework.css",
                        "css/lists.css",
                        "css/forms.css",
                        "css/buttons.css",
                        "css/badges.css",
                        "css/grid.css",
                        "plugins/css/af.actionsheet.css",
                        "plugins/css/af.popup.css",
                        "plugins/css/af.scroller.css",
                        "plugins/css/af.selectbox.css"
                    ]
                }
            },
            icons: {
                files: {
                    "build/css/icons.min.css": [
                        "css/icons.css"
                    ]
                }
            }
        },
        concat: {
            cssall: {
                files: {
                    "build/css/af.ui.css": [
                        "css/main.css",
                        "css/appframework.css",
                        "css/lists.css",
                        "css/forms.css",
                        "css/buttons.css",
                        "css/badges.css",
                        "css/grid.css",
                        "css/android.css",
                        "css/win8.css",
                        "css/bb.css",
                        "css/ios7.css",
                        "css/ios.css",
                        "plugins/css/af.actionsheet.css",
                        "plugins/css/af.popup.css",
                        "plugins/css/af.scroller.css",
                        "plugins/css/af.selectbox.css"
                    ]
                }
            },
            cssbase: {
                files: {
                    "build/css/af.ui.base.css": [
                        "css/main.css",
                        "css/appframework.css",
                        "css/lists.css",
                        "css/forms.css",
                        "css/buttons.css",
                        "css/badges.css",
                        "css/grid.css",
                        "plugins/css/af.actionsheet.css",
                        "plugins/css/af.popup.css",
                        "plugins/css/af.scroller.css",
                        "plugins/css/af.selectbox.css"
                    ]
                }
            },
            afui:{
                files: {
                    "build/ui/appframework.ui.js": [
                        "plugins/af.actionsheet.js",
                        "plugins/af.css3animate.js",
                        "plugins/af.passwordBox.js",
                        "plugins/af.scroller.js",
                        "plugins/af.selectBox.js",                                                
                        "plugins/af.touchEvents.js",
                        "plugins/af.touchLayer.js",
                        "plugins/af.popup.js",
                        "ui/appframework.ui.js",
                        "ui/transitions/**/*.js",
                        "plugins/af.8tiles.js"
                    ]
                }
            },
            afui_jquery:{
                files: {
                    "build/ui/af.ui.jquery.js": [
                        "jq.appframework.js",
                        "plugins/af.actionsheet.js",
                        "plugins/af.css3animate.js",
                        "plugins/af.passwordBox.js",
                        "plugins/af.scroller.js",
                        "plugins/af.selectBox.js",                                                
                        "plugins/af.touchEvents.js",
                        "plugins/af.touchLayer.js",
                        "plugins/af.popup.js",                        
                        "ui/appframework.ui.js",
                        "ui/transitions/**/*.js",
                        "plugins/af.8tiles.js"
                    ]
                }
            },
            af:{
                files:{
                    "build/appframework.js": [
                        "appframework.js",
                        "ayepromise.js"
                    ]
                }
            },
            icons:{
                files:{
                    "build/css/icons.css": [
                        "css/icons.css"
                    ]
                }
            }
        },
        "closure-compiler": {
            appframework: {
                closurePath: path.resolve(path.resolve("node_modules/google-closure-compiler-java")),
                js: ["appframework.js","ayepromise.js"],
                jsOutputFile: "build/appframework.min.js",
                maxBuffer: 500,
                options: {
                },
                noreport:true
            },
            "appframework-ui": {
                closurePath: path.resolve("node_modules/google-closure-compiler-java"),
                js: ["appframework.js","ayepromise.js","build/ui/appframework.ui.js"],
                jsOutputFile: "build/ui/appframework.ui.min.js",
                options: {
                },
                maxBuffer: 500,
                noreport:true
            },
            "af-ui-jquery": {
                closurePath: path.resolve("node_modules/google-closure-compiler-java"),
                js: ["build/ui/af.ui.jquery.js"],
                jsOutputFile: "build/ui/af.ui.jquery.min.js",
                options: {
                },
                maxBuffer: 500,
                noreport:true
            },
            plugins: {
                closurePath: path.resolve("node_modules/google-closure-compiler-java"),
                js:"plugins/*.js",
                jsOutputFile:"build/af.plugins.min.js",
                options: {
                },
                maxBuffer: 500,
                noreport:true
            },
            jq: {
                closurePath: path.resolve("node_modules/google-closure-compiler-java"),
                js:"jq.appframework.js",
                jsOutputFile:"build/jq.appframework.min.js",
                options: {
                },
                maxBuffer: 500,
                noreport:true
            }

        },
        usebanner: {
            taskName: {
                options: {
                    position: "top",
                    banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - "+
                        "<%= grunt.template.today('yyyy-mm-dd') %> */\n",
                    linebreak: true
                },
                files: {
                    src: [ "build/*.js","build/ui/*.js","build/css/*.css" ]
                }
            }
        }
    });

    
    grunt.registerTask("default", [
        "jshint",
        "test",
        "clean",
        "cssmin",
        "concat",
        "closure-compiler",
        "usebanner"
    ]);

    grunt.registerTask("test", ["simplemocha"]);
    grunt.registerTask("rebuild" , ["force:cssmin","concat","closure-compiler","usebanner"]);
    grunt.registerTask("hint" , ["jshint"]);
};
