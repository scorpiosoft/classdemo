// Bubble Sort
Array.prototype.swap = function(a, b) {
    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
}

Array.prototype.bubbleSort = function() {
  var n = this.length;
  var swapped = true;
  var pass = 1;
  var comparisonsCount = 0;

  console.log('Unsorted Array: ', '|' + this.join('|') + '|');
  while (swapped === true) {
    swapped = false;
    console.log('========================================')
    console.log('Pass: ', pass++);
    for (var i = 1; i < n; i++) {
      comparisonsCount++;
      if (this[i-1] > this[i]) {
        console.log('swap index ' + (i-1) + ' for ' + i);
        this.swap(i-1, i);
        swapped = true;
      }
      console.log('|' + this.join('|') + '|');
    }
    n--;
  }

  console.log('comparisonsCount: ', comparisonsCount);
}

var a = [5, 8, 1, 4, 3, 9, 6, 2];

