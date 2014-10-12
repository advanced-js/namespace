# Namespace exercise

Modify [`js/namespace.js`](js/namespace.js) to create a `namespace()` function, which should take a period-delimited string of arbitrary length and makes that namespace available globally. Example usage:

```javascript
function namespace(path){
  // ...
}

namespace('app.models');
// which is synonymous to:
//
//   var app = {};
//   app.models = {};

app.models.User = function(){};
```

Get all of the [tests](js/tests.js) to pass – you can run them by opening the local copy of [`index.html`](index.html) in your browser. Focusing on passing each test in order is recommended. The String [`split()`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/split) method will come in handy.
