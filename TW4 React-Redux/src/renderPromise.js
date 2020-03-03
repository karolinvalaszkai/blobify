import React from 'react'
import ReactDOM from 'react-dom'

class RenderPromise {

  static render(promise, hyperscript, node) {
    if (this.cancelCallback) this.cancelCallback();
  	let doCancel = false;

  	ReactDOM.render(this.createSpinner(), node);

  	promise.then(result => {
  			if (doCancel) return;
        ReactDOM.render(hyperscript(result), node);
  		})
  	  .catch(error => {
  			if (doCancel) return;
  			const errorSpan = (<span>{error.message}</span>);
        ReactDOM.render(errorSpan, node);
  		})

  		this.cancelCallback = () => {doCancel = true;};
  }

  static createSpinner() {
  	return React.createElement("div", {className: "spinnerClass"},
            React.createElement("img", {height: 100,  alt: "", src: "http://cdn.lowgif.com/full/d9675675623d5f27-loading-gif-transparent-background-loading-gif.gif"}));
  }

}

export default RenderPromise;
