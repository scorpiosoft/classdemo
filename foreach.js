I really like this example as it incorporates a number of concepts in a small package.

1. Extends JavaScript’s Array Class with our custom forEach implementation via the Array prototype
2. For Loop
3. Basic function
3. Callback function
4. This reference
5. Demistifies callback parameters (Common question is where are the parameters defined? Answer: Only in the declaration of the callback function)

```cars = ['Chevy', 'Ford', 'Honda', 'Nissan', 'Volvo', 'Subaru'];

var myCallbackFunction = function(el, i) {
  console.log('element: ', el, ', index: ', i);
}

Array.prototype.myForEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
}

cars.myForEach(myCallbackFunction);
```


Which is equivalent to:

```// Javascript's built-in forEach method
cars.forEach(myCallbackFunction);```

