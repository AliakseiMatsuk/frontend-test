'use strict';

module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src($.config.source.html)
            .pipe($.gp.pug({ 
                locals : {
                    itemsMen: JSON.parse($.fs.readFileSync('./data/itemsMen.json', 'utf8')),
                    itemsWomen: JSON.parse($.fs.readFileSync('./data/itemsWomen.json', 'utf8')),
                },
                pretty: true 
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest($.config.build.html));
    });
};
