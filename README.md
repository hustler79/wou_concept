# wou_media

Install modules:
```sh
npm install
```

Build project:
```sh
gulp build
```

JSON response:
```json
{"template":"test_template","items":[{"id":0,"title":"First node","value":"Example text 1  %FIELD% "},{"id":1,"title":"Second node","value":"Example test 2 %FIELD% year  %FIELD% "}]}
```


INFO: 
Each `%FIELD%` will be converted into editable component where `FIELD` is the name attribute and placeholder.

We can use: http://facebook.github.io/draft-js/