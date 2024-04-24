# Window object
The window object represents an open window in a browswer. it is browser's object (not javascript's) and is automatically created by browser.   
it is a global object with lots of properties and methods
   
from the below code we can see the hole html code in the brosower
```json
window.console.log("salam")   
console.dir(window.document)
```
# DOM 
when a web page is loaded the broswer creates a document object model (dom) of the page.   
its mean that when can access the hole code of our html in the broswer
# DOM Manipulation
## selecting with id
you can access by elementid you give to your element
```json
document.getElementById("myId")
```
## selecting with class
here you can see your abject by classname
``` 
document.getElementsByClassName("MyClass")
 ```json

 ## selecting with tag
 by this you can see that what is inside in the html tags
```
document.getElementsByTagName("TagName")
```json

## Query Selector
```
document.querySelector("#id/.myclass/tag")

```json
let element = document.querySelector("p"); //1st element
console.dir(element);

let all = document.querySelectorAll("p"); //all element
console.dir(all);

```
   

### the above is different method by which we can access our element in browser 
 