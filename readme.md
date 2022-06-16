# Creator.js
>### An easier way to deal with document fragments

Create a new instance

The _Creator_ class takes in an element, and defaults to `document.body`
```js
var cr = new Creator(element)
```

There are 3 properties you can modify and use.

---

```js
cr.parentElement
```
This will return the element you pass into the Creator constructor.

<br>

```js
cr.created
```
This will return the element created by `Creator.create()`

<br>

```js
cr.selected
```
This will return the element selected with `Creator.select()`

There is also the getter `Creator.parent`, it is read-only

>#### Every method is chainable except `Creator.create()`
<br>

## _Create()_
Takes in an element type to create and data to fill the element with.
```js
cr.create("div", "hello, world!")
```
returns
```html
<div>hello, world!</div>
```

## _Append()_
Takes in an a child element to append to `Creator.parentElement`

Defaults to `Creator.created`
```js
cr.append() 
// appends element created via Creator.create()

cr.append(el)
// appends el
```

## _Remove()_
Takes in an element to remove from `Creator.parentElement`
```js
cr.remove() 
// appends element created via Creator.create()

cr.remove(el)
// appends el
```
_el_ must be a child of `Creator.parentElement`

## _Select()_
Selects an element and stores it in `Creator.selected`
```js
cr.select("div")
// sets Creator.selected
```