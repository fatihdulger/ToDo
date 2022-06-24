# ToDo
Built with HTML, CSS and JavaScript.
It utilises JSON for local data storage which is super useful for small scale projects.
This todo list app is a very good part of my software developing learning journey.

KEY TAKEAWAYS:
JSON (JavaScript Object Notation)
-	Used for storing date locally
-	Data types stored; primitive values ; string, number, Boolean, null, object ( not date and not functions stored)
-	JSON objects stored as Key and Value ( “name” : “John” / “age” : 13 birth: “25-04-1984” you cant store date as in normal object or date format instead you can sotre it as string and then convert it to date when use in however not recommended!!!!
JSON object literals are surrounded by curly braces {}.
JSON object literals contains key/value pairs.
Keys and values are separated by a colon.
Keys must be strings, and values must be a valid JSON data type:
•	string
•	number
•	object
•	array
•	boolean
•	null
Each key/value pair is separated by a comma.
-	{"name":"John", "age":30, "car":null}
-	A common use of JSON is to exchange data to/from a web server.
-	When sending data to a web server, the data has to be a string.
-	Convert a JavaScript object into a string with JSON.stringify().
-	Use the JavaScript function JSON.stringify() to convert it into a string.
-	Use the JavaScript function JSON.stringify() to convert it into a string.
-	const myJSON = JSON.stringify(arr); myJSON is now a string, and ready to be sent to a server:
-	When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.
-	JSON makes it possible to store JavaScript objects as text.
-	n JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.
-	Example
-	const obj = {name: "John", today: new Date(), city : "New York"};
const myJSON = JSON.stringify(obj);


