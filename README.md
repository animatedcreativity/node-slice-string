# node-slice-string
Search and slice string easily to get all remaining parts or the single one in any direction.

--------------------------------------------

**Usage:**

```
var slice = require("node-slice-string");
```

**leftSplit:**

```
var slice = require("node-slice-string");
var result = slice.leftSplit(inputString, splitString, caseSensitive);
console.log(result);
```

Get first split string from the left.

- inputString: String that needs to be split.
- splitString: Split by this string.
- caseSensitive: Whether to do a case sensitive split. Default: false

**rightSplit:**

```
var slice = require("node-slice-string");
var result = slice.rightSplit(inputString, splitString, caseSensitive);
console.log(result);
```

Get first split string from the right.

- inputString: String that needs to be split.
- splitString: Split by this string.
- caseSensitive: Whether to do a case sensitive split. Default: false

**leftRemaining:**

```
var slice = require("node-slice-string");
var result = slice.leftRemaining(inputString, splitString, caseSensitive);
console.log(result);
```

Get remaining string from the left, after split.

- inputString: String that needs to be split.
- splitString: Split by this string.
- caseSensitive: Whether to do a case sensitive split. Default: false


**rightRemaining:**

```
var slice = require("node-slice-string");
var result = slice.leftRemaining(inputString, splitString, caseSensitive);
console.log(result);
```

Get remaining string from the right, after split.

- inputString: String that needs to be split.
- splitString: Split by this string.
- caseSensitive: Whether to do a case sensitive split. Default: false

--------------------------------------------

**Example:**

```
var inputString = "This is a line. This is another line. This is third line.";
var splitString = "line";
var caseSensitive = false;
var slice = require("node-slice-string");
console.log(slice.leftSplit(inputString, splitString, caseSensitive));
console.log(slice.rightSplit(inputString, splitString, caseSensitive));
console.log(slice.leftRemaining(inputString, splitString, caseSensitive));
console.log(slice.rightRemaining(inputString, splitString, caseSensitive));
```

Output:
```
This is a 

.

This is a line. This is another line. This is third 

. This is another line. This is third line.
```
