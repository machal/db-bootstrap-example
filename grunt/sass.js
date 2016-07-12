// sass: kompilace do CSS
// ----------------------

module.exports = {
  dist: {
  	options: {
  	    sourceMap: true
  	},
    files: {
      'dist/css/style.css': ['src/scss/index.scss']	
    }
  }
};