# React components

React UI boilerplate.

##Usage

Install `bower` dependencies
```
npm install
```

Install `npm` dependencies
```
npm install
```

Run component example
```
gulp watch
````

Build a dist version

```
gulp
```

### Creating a component

 1 - Create a folder with the name of the component
 
 linux ex:
 ```
 	mkdir my-button
 ```

 2 - Create index.css, index.html and index.js file

 linux ex:
```
 touch index.css
 touch index.html
 touch index.js
```

3 - Open the index.html at components/my-button/index.html and write:
```html
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="index.css">
		<script type="text/javascript" src="index.js"></script>
	</head>
	<body>
	</body>
</html>
```

4 - Open the index.js file and create/register your react component. Ex:
```javascript
	var MyButton = React.createClass({
	
		render: function () {	
			return <button className="hey"> Hello </button>	
		}
	});

	document.registerReact('my-button', MyButton);
```
	
5 - To import the component

```html
<link rel="import" type="text/html" href="components/my-button/index.html" />
```

## Requirements

1. Node/NPM
2. Bower


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)