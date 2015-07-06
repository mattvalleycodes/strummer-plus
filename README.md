#Strummer+
Strummer+ is a collection of common matchers for [Strummer](https://github.com/TabDigital/strummer).

##Matchers
- `ObjectId`: Validates ObjectIds.
- `Email`   : Validates valid email addresses.

##Installation
`npm install strummer-plus --save`


##Example
```javascript
var s = require('strummer');
var matchers = require('strummer-plus');

var matcher = s.object({
    email: new matchers.Email(),
    id   : new matchers.ObjectId()
});

var errors = matcher.match(req.body);

```


##Releases
- `2015-07-06 - 0.0.1`
    - Initial release
    - Matchers for ObjectId and Email

