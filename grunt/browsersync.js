// browserSync: sledovani zmen v souborech
// ---------------------------------------

module.exports = {
	dev: {
	    bsFiles: {
	        src : 'dist/css/*.css'
	    },
	    options: {
	        watchTask: true,
	        server: {
            	baseDir: "./"
          	}
	    }
	}
} 