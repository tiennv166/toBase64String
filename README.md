
# to-base-64-string

- Download data from a URL, then convert and respond with a base64 string.

## Installation

    $ npm install to-base-64-string

## Examples

```javascript
const url = 'https://example.com/image.jpg';
getBase64From(url)
    .then(base64String => {
        console.log('Base64 string:', base64String);
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
```
