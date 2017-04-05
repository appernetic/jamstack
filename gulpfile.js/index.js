/**
 * gulpfile.js
 * -----------
 *
 * Each task has been split out into it's own file in ./gulp/tasks. Any
 * files in that directory get automatically required by the code in this
 * file. To add a new task, add a new task file to that directory.
 *
 * ./gulp/tasks/default.js is the default task used when you run
 * `gulp` without a task argument.
*/

`use strict`;

var requireDir = require('require-dir');

// Require all tasks in ./tasks, including subfolders
requireDir('./tasks', { recurse: true });
