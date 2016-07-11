// browsersync: sledovani zmen v souborech
// ---------------------------------------

module.exports = {
	dev: {
	    bsFiles: {
	        src : 'css/*.css'
	    },
	    options: {
	        watchTask: true,
	        server: {
            baseDir: "./"
          }
	    }
	}
} 