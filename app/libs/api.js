import config from './config.js';
//import auth from 'shared/auth';
//import action from 'components/lock-screen/lockAction'
import Promise from 'bluebird';
//import stringify from 'qs/lib/stringify';
import superagent from "superagent";

var SuperagentPromiseError = function(message, originalError) {
  var stack;
  this.message = message;
  this.name = 'SuperagentPromiseError';
  this.originalError = originalError;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
    stack = this.stack;
  }
  else {
    stack = (new Error(message)).stack;
  }

  if (Object.defineProperty) {
    Object.defineProperty(this, 'stack', {
      get: function() {
        if (this.originalError) {
          return stack + '\nCaused by:  ' + this.originalError.stack;
        }

        return stack;
      }
    });
  }
};

SuperagentPromiseError.prototype = new Error();
SuperagentPromiseError.prototype.constructor = SuperagentPromiseError;
superagent.SuperagentPromiseError = SuperagentPromiseError;

var Request = superagent.Request;

Request.prototype.promise = function() {
  var req = this;
  var error;

  return new Promise(function(resolve, reject) {
      req.end(function(err, res) {
        if (typeof res !== "undefined" && res.status >= 400) {

          var msg = res.body? res.body.message: 'cannot ' + req.method + ' ' + req.url + ' (' + res.status + ')';
          error = new SuperagentPromiseError(msg);
          error.status = res.status;
          error.body = res.body;
          error.res = res;
          reject(error);
        } else if (err) {
          reject(new SuperagentPromiseError('Bad request', err));
        } else {
          resolve(res);
        }
      });
    });
};

Request.prototype.then = function() {
  var promise = this.promise();
  return promise.then.apply(promise, arguments);
};

export default {
  raw: function (url, data, method, files) {

    var request = superagent(method, config.apiUrl + url)
      //.set("authorization", auth.token)
      .type("json");      

        
    request = method == "GET" ? 
      request.query(data):
      request.send(data);
    
    return request
      .then((response)=>{
        //action.pulse(); //tell lockscreen we're alive
        return Promise.resolve(response.body);
      });

  },
  post: function (url, data) {
    return this.raw(url, data, 'POST');
  },
  get: function (url, data) {
    return this.raw(url, data, 'GET');
  },
  delete: function (url, data) {
    return this.raw(url, data, 'DELETE');
  },
  getFormat: function(url, data, format, title){
    url = config.apiUrl + url;
    //url = url + `?${format}=true&token=${auth.token}&` + stringify(data);
    if(title){
      this.openWindow(url, title);
    }else{
      window.open(url, '_blank');
    }
  },
  upload: function(url, data, files){
    var request = superagent('POST', config.apiUrl + url)
      .set("authorization", auth.token);

    if(files){
      files.forEach(file=>{
        request.attach(file.fieldName, file);
      })
    }
    //can only use field to add additional data
    //request.field('model', JSON.stringify(data)); 
    
    return request
      .then((response)=>{
        //action.pulse(); //tell lockscreen we're alive
        return Promise.resolve(response.body);
      });
  }
}