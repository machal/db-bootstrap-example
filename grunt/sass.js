// sass: kompilace do CSS
// ----------------------

module.exports = {
  dist: {
  	options: {
  	    sourceMap: true
  	},
    files: {
      'css/style.css': ['scss/index.scss']	
    }
  }
};