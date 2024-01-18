  const ConceptData = {
    "concepts":[
      // JavaScript
      {
        "name":"Variables",
        "language":"JavaScript",
        "name_and_language":"Variables - JavaScript",
        "explanation":"Imagine you have a toy box and each toy has a name. You can use those names to refer to the toy you want to play with. In JavaScript, we can also name things we want to remember and use them later, we call these names \"variables\".",
        "code_snippet":"/code_snippet_images/javascript/variables.png",
        "code_snippet_explanation":"The line let favoriteToy = \"teddy bear\"; is creating a variable called favoriteToy and giving it the value \"teddy bear\". Then we're using the variable in console.log(\"My favorite toy is a \" + favoriteToy) to print the message \"My favorite toy is a teddy bear\" in the console.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables",
          "https://www.w3schools.com/js/js_variables.asp"
        ]
      },
      {
        "name":"Functions",
        "language":"JavaScript",
        "name_and_language":"Functions - JavaScript",
        "explanation":"A function is like a recipe in cooking. It has a list of ingredients (inputs) and tells you how to make something (outputs). For example, let's say you want to make a yummy sandwich. The ingredients you need are bread, cheese, and peanut butter. The steps to make the sandwich are: 1) take two pieces of bread, 2) put cheese and peanut butter on one of the pieces of bread, and 3) put the other piece of bread on top and press down. In the same way, we can write a function in code to make a sandwich.",
        "code_snippet":"/code_snippet_images/javascript/functions.png",
        "code_snippet_explanation":"We call this function by giving it the ingredients we need, and it will give us the output, or the yummy sandwich we made!",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions",
          "https://www.w3schools.com/js/js_functions.asp"
        ]
      },
      {
        "name":"Conditional Statements",
        "language":"JavaScript",
        "name_and_language":"Conditional Statements - JavaScript",
        "explanation":"A conditional statement is like a decision you make in your head. If you want ice cream, you ask yourself if you have enough money to buy it. If you do, you buy the ice cream. If you don't, you don't buy it. In computer programming, we can make decisions too using conditional statements. For example, let's say we want a computer program to decide if it's hot outside. The program could ask itself, \"Is the temperature higher than 80 degrees?\" If it is, the program might say \"It's hot outside!\" If the temperature isn't higher than 80 degrees, the program might say \"It's not hot outside.\"",
        "code_snippet":"/code_snippet_images/javascript/conditional_statements.png",
        "code_snippet_explanation":"In this example, if (temperature > 80) is the decision the program is making. If the temperature is greater than 80, the code inside the first set of curly braces {} will run. If the temperature isn't greater than 80, the code inside the else block will run.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals",
          "https://www.w3schools.com/js/js_if_else.asp"
        ]
      },
      {
        "name":"Loops",
        "language":"JavaScript",
        "name_and_language":"Loops - JavaScript",
        "explanation":"A loop is like when you're playing a game and you do the same thing over and over again until you finish it. In programming, a loop lets us repeat a set of instructions multiple times. Here's an example: imagine you want to count from 1 to 10. Instead of writing down each number one by one, we can use a loop to do it automatically.",
        "code_snippet":"/code_snippet_images/javascript/loops.png",
        "code_snippet_explanation":"This will print the numbers from 1 to 10 in the console. The for keyword starts the loop, let i = 1 sets the starting point of the loop, i <= 10 is the condition that determines when to stop the loop, and i++ is what we do after each iteration of the loop to move to the next number.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
          "https://www.w3schools.com/js/js_loop_for.asp"
        ]
      },
      {
        "name":"Arrays",
        "language":"JavaScript",
        "name_and_language":"Arrays - JavaScript",
        "explanation":"An array is like a basket where you can put many things inside. Let's say you have 5 toys and you want to keep them in a basket. You can put each toy in a separate slot in the basket. This basket with slots is called an \"Array\".",
        "code_snippet":"/code_snippet_images/javascript/arrays.png",
        "code_snippet_explanation":"In this example, the basket is named \"toys\" and it has 5 slots where each slot holds one toy. To access a toy from the basket, you just need to know the number of the slot where it is kept. The first slot has number 0, the second slot has number 1 and so on. So arrays allow us to store many values in a single basket and easily access them by their slot number.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
          "https://www.w3schools.com/js/js_arrays.asp"
        ]
      },
      {
        "name":"Objects",
        "language":"JavaScript",
        "name_and_language":"Objects - JavaScript",
        "explanation":"Imagine you have a toy box and inside the toy box, you have different toys. Each toy has its own name, shape, and color. The name of the toy is like the \"key\" and the shape and color of the toy are like the \"value\". In JavaScript, we can use objects to store information just like the toy box. Let's take the example of a \"person\" object.",
        "code_snippet":"/code_snippet_images/javascript/objects.png",
        "code_snippet_explanation":"Here, we created an object named \"person\" with 4 \"keys\": name, age, hairColor, and favoriteToy. Each key has its own value, for example, name has the value \"Susie\".\nTo access the information stored in an object, we can use the object's name and the key, separated by a dot.\nJust like in the toy box, we can add or remove toys, in the same way, we can add or remove \"keys\" and \"values\" to and from the object.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects",
          "https://www.w3schools.com/js/js_objects.asp"
        ]
      },
      {
        "name":"DOM Manipulation",
        "language":"JavaScript",
        "name_and_language":"DOM Manipulation - JavaScript",
        "explanation":"Okay, let's say you have a webpage and you want to change some things on it. Like, maybe you want to make the background blue or you want to put a new picture on the page. This is called \"manipulating the DOM\". \nThe DOM stands for \"Document Object Model\", and it's like a tree of all the things on your webpage. You can reach in and grab different branches of the tree and change things like the color or the text.\n\nFor example, let's say you have a webpage with a heading that says \"Hello World!\" and you want to change it to say \"Hello Cats!\" instead. In JavaScript, you can reach in and grab the branch of the tree that holds the text, and change it like this:",
        "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
        "code_snippet_explanation":"So now, the heading on your webpage will say \"Hello Cats!\" instead of \"Hello World!\".",
        "resources":[
          "https://www.w3schools.com/js/js_htmldom_methods.asp",
          "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
        ]
      },
      {
        "name":"Event handling",
        "language":"JavaScript",
        "name_and_language":"Event handling - JavaScript",
        "explanation":"Event handling is what happens when you interact with a website, like clicking a button. JavaScript can listen for these events and do something in response, like show an alert.",
        "code_snippet":"/code_snippet_images/javascript/event_handling.png",
        "code_snippet_explanation":"So, when someone clicks the button with the text \"Click me!\", a message will appear saying \"You clicked the button!\". This is an example of how we can handle events in JavaScript.",
        "resources":[
          "https://www.w3schools.com/js/js_events.asp",
          "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
        ]
      },
      {
        "name":"Callback functions",
        "language":"JavaScript",
        "name_and_language":"Callback functions - JavaScript",
        "explanation":"Imagine you have some ice cream and you want to share it with your friend. But your friend is playing with their toys and can't come right away to eat the ice cream.\nSo, you tell them, \"Hey friend! When you're done playing, come and eat the ice cream with me.\" And you keep the ice cream in the freezer.\nYour friend says, \"Okay, I'll come and eat it with you when I'm done playing.\"\nThis is like a \"callback function\" in computer talk. The ice cream is like a task that needs to be done and your friend is like a function that will do it. You give the task (ice cream) to your friend (function) and tell them to do it later, after they are done playing. And just like your friend came to eat the ice cream with you when they were done playing, the function in a computer program will run only after the task it was given is done.",
        "code_snippet":"/code_snippet_images/javascript/callback_functions.png",
        "code_snippet_explanation":"So, you can see the eatIceCream function takes another function, playWithToys, as a parameter and when eatIceCream is finished, it runs the playWithToys function by calling callback().",
        "resources":[
          "https://www.w3schools.com/js/js_callback.asp",
          "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
        ]
      },
      {
        "name":"Closures",
        "language":"JavaScript",
        "name_and_language":"Closures - JavaScript",
        "explanation":"Imagine you and your friend want to play hide and seek. You close your eyes and start counting, while your friend hides. You keep counting, but you also keep track of where your friend went so you can find them when you finish counting. This is like a \"closure\" in computer talk. The information about where your friend is hiding is \"closed\" inside the counting process, and you can still access it even after you finish counting. In JavaScript, a closure is when a function \"remembers\" the variables around it even after the function has finished running.",
        "code_snippet":"/code_snippet_images/javascript/closures.png",
        "code_snippet_explanation":"So, the hideAndSeek function returns another function findFriend, and even though hideAndSeek has finished running, the inner function findFriend still \"remembers\" the friend variable and can use it later.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          "https://www.javascripttutorial.net/javascript-closure/"
        ]
      },
      {
        "name":"Prototype inheritance",
        "language":"JavaScript",
        "name_and_language":"Prototype inheritance - JavaScript",
        "explanation":"Imagine you have a cookie recipe that you learned from your mom. You love making cookies, so you make them all the time. One day, you decide to make a special kind of cookie, with chocolate chips. So, you take your mom's recipe and add chocolate chips to it. Now, you have your own recipe for cookies with chocolate chips that is based on your mom's original recipe. And, you can still make regular cookies using your mom's recipe. This is like \"prototype inheritance\" in computer talk. The new recipe with chocolate chips is like an object that inherits properties and methods from another object, which is the original cookie recipe.",
        "code_snippet":"/code_snippet_images/javascript/prototype_inheritance.png",
        "code_snippet_explanation":"So, you can see that the ChocolateChipCookieRecipe object inherited the bake method and the ingredients property from the CookieRecipe object, and added its own special ingredient \"chocolate chips\".",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
          "https://javascript.info/prototype-inheritance"
        ]
      },
      {
        "name":"this keyword",
        "language":"JavaScript",
        "name_and_language":"this keyword - JavaScript",
        "explanation":"Imagine you and your friends are playing a game of tag. One of your friends is \"it\" and they are trying to tag the rest of you. When you say \"you're it!\", you point to the person you want to be \"it\". That person now knows they are \"it\" because you pointed at them. In computer talk, when we use the word \"this\", we're kind of like pointing at an object to say \"you're it!\". \"This\" refers to the object that the code is currently inside of.",
        "code_snippet":"/code_snippet_images/javascript/this_keyword.png",
        "code_snippet_explanation":"So, you can see that when we use the this keyword inside the bark method, it refers to the specific Dog object that the method is called on. Whether it's myDog or yourDog, \"this\" will always point to the correct object, just like you pointing at the correct friend when you say \"you're it!\" in the game of tag.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
          "https://www.javascripttutorial.net/javascript-this/"
        ]
      },
      {
        "name":"Object-Oriented Programming",
        "language":"JavaScript",
        "name_and_language":"Object-Oriented Programming - JavaScript",
        "explanation":"Imagine you have a bunch of toys, like action figures, stuffed animals, and building blocks. Each toy is special and unique, and you can play with them in different ways. When you play with your toys, you might use them to act out different scenarios, or build different structures, or just cuddle with them. But, no matter what you do, you always know what each toy is, and what you can do with it. In computer talk, this is kind of like \"object oriented programming\". We have different objects, like toys, that have their own special qualities and abilities. We can use these objects to do different things, just like you use your toys to play in different ways.",
        "code_snippet":"/code_snippet_images/javascript/object_oriented_programming.png",
        "code_snippet_explanation":"So, you can see that we have different objects, like ActionFigure and StuffedAnimal, that are based on a common type of object, like Toy. These objects have their own special qualities and abilities, like the superhero property and the play method, and we can use them in different ways, just like you use your toys in different ways when you play.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
          "https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/"
        ]
      },
      {
        "name":"Asynchronous Programming",
        "language":"JavaScript",
        "name_and_language":"Asynchronous Programming - JavaScript",
        "explanation":"Sometimes we want to do many things at the same time, like having a picnic and playing with friends at the same time. In JavaScript, we can do many things at the same time too, this is called asynchronous programming.",
        "code_snippet":"/code_snippet_images/javascript/asynchronous_programming.png",
        "code_snippet_explanation":"This code helps you use asynchronous programming to run two tasks at the same time. The first task will print 'I am having a picnic' and the second task will print 'I am playing with friends' at the same time.",
        "resources":[
        "https://www.w3schools.com/js/js_asynchronous.asp",
        "https://nodejs.dev/en/learn/javascript-asynchronous-programming-and-callbacks/"
        ]
      },
      {
        "name":"Promises",
        "language":"JavaScript",
        "name_and_language":"Promises - JavaScript",
        "explanation":"Sometimes when we ask for something, like a cookie, we don't get it right away. But the person who gives us the cookie will promise to give it to us later. In JavaScript, we can also ask for things and get a promise to get them later, this is called Promises.",
        "code_snippet":"/code_snippet_images/javascript/promises.png",
        "code_snippet_explanation":"This code demonstrates using Promises. We ask for a cookie and the promise will resolve with the value 'cookie' after 2 seconds, then we log 'Yay, I got a cookie!'",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
          "https://javascript.info/promise-basics"
        ]
      },
      {
        "name":"Fetch API",
        "language":"JavaScript",
        "name_and_language":"Fetch API - JavaScript",
        "explanation":"Sometimes we want to get things from the internet, like a picture of a cat. In JavaScript, we can use the Fetch API to get things from the internet.",
        "code_snippet":"/code_snippet_images/javascript/fetch_api.png",
        "code_snippet_explanation":"This code demonstrates using the Fetch API to get a picture of a cat and log it in the console.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          "https://www.geeksforgeeks.org/javascript-fetch-method/"
        ]
      },
      {
        "name":"Map and Set",
        "language":"JavaScript",
        "name_and_language":"Map and Set - JavaScript",
        "explanation":"Imagine you have a collection of toys and you want to keep track of the names of all the toys. In JavaScript, we can use a Map to keep track of keys and values, like the name of the toy and the toy itself. A Set is similar but it only keeps track of unique values.",
        "code_snippet":"/code_snippet_images/javascript/map_and_set.png",
        "code_snippet_explanation":"This code demonstrates using a Map to store the name of a toy and the toy itself, and using a Set to store the names of toys. We can access the values in the Map and Set using keys and values.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
          "https://www.w3schools.com/js/js_maps.asp",
          "https://www.w3schools.com/js/js_sets.asp"
        ]
      },
      {
        "name":"Spread and Rest operators",
        "language":"JavaScript",
        "name_and_language":"Spread and Rest operators - JavaScript",
        "explanation":"Imagine you have a bag of toys and you want to share them with your friends. The spread operator allows you to spread the toys in the bag and give one toy to each friend, while the rest operator allows you to gather multiple toys into a new bag.",
        "code_snippet":"/code_snippet_images/javascript/spread_and_rest.png",
        "code_snippet_explanation":"This code demonstrates using the spread operator to spread the values in an array (toys) to separate variables (friends), and using the rest operator to gather multiple variables (friends) into a new array.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters",
          "https://www.w3schools.com/js/js_array_methods.asp"
        ]
      },
      {
        "name":"Template literals",
        "language":"JavaScript",
        "name_and_language":"Template literals - JavaScript",
        "explanation":"Imagine you want to write a letter to your friend about your toys. In JavaScript, we can use template literals to easily combine text and values to create a string, just like writing a letter.",
        "code_snippet":"/code_snippet_images/javascript/template_literals.png",
        "code_snippet_explanation":"This code demonstrates using template literals to combine text and values to create a string, then log it in the console. Template literals are wrapped in backticks (``) and the variables are started with a dollar sign and wrapped in curly braces ${}. ",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
          "https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript"
        ]
      },
      {
        "name":"Destructuring",
        "language":"JavaScript",
        "name_and_language":"Destructuring - JavaScript",
        "explanation":"Imagine you want to play with specific toys from your toy box. In JavaScript, we can use destructuring to easily access specific values from an object or an array and store them in separate variables, just like picking out specific toys from your toy box.",
        "code_snippet":"/code_snippet_images/javascript/destructuring.png",
        "code_snippet_explanation":"This code demonstrates using destructuring to access specific values from an object and an array and store them in separate variables.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
          "https://javascript.info/destructuring-assignment"
        ]
      },
      {
        "name":"Classes and Inheritance",
        "language":"JavaScript",
        "name_and_language":"Classes and Inheritance - JavaScript",
        "explanation":"Imagine you have different types of toys, like cars and dolls, and you want to create specific instances of those toys. In JavaScript, we can use classes to define specific types of objects and create instances of those objects, and use inheritance to create new classes that inherit properties and behaviors from existing classes, just like creating new types of toys based on existing toys.",
        "code_snippet":"/code_snippet_images/javascript/classes_and_inheritance.png",
        "code_snippet_explanation":"This code creates a base class Toy with a constructor method that takes a name as an argument, and sets the name property of the instance. The derived class Car extends the Toy class, and has a constructor that takes both a name and a wheels argument. The super method is called to invoke the constructor of the parent class and pass the name argument. The Car class also adds a wheels property to the instances it creates. When the code creates a new instance of the Car class and assigns it to carToy, it passes the arguments 'Race Car' and 4 to the constructor. You can then log the name and wheels properties of the carToy instance to the console.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
          "https://www.w3schools.com/js/js_classes.asp"
        ]
      },
      {
        "name":"Modules",
        "language":"JavaScript",
        "name_and_language":"Modules - JavaScript",
        "explanation":"Imagine you have a toy box with multiple compartments to keep your toys organized. In JavaScript, we can use modules to organize code into separate, reusable files, just like using multiple compartments to keep your toys organized.",
        "code_snippet":"/code_snippet_images/javascript/modules.png",
        "code_snippet_explanation":"TThis code demonstrates using modules to organize code into separate, reusable files. The toybox.js file exports the toys array, which can then be imported into the playroom.js file and logged in the console.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          "https://www.w3schools.com/js/js_modules.asp"
        ]
      },
      {
        "name":"Web Storage API",
        "language":"JavaScript",
        "name_and_language":"Web Storage API - JavaScript",
        "explanation":"Imagine you have a toy box that you can access from different rooms in your house. The Web Storage API allows you to store data in the browser and access it from any page on the same website, just like being able to access your toy box from different rooms in your house.",
        "code_snippet":"/code_snippet_images/javascript/web_storage_api.png",
        "code_snippet_explanation":'This code demonstrates using the Web Storage API to store data in the local storage and retrieve it later. The localStorage object allows you to store key-value pairs in the browser, which persist even after the page is reloaded. In this example, we store an object with a key of toybox and a value of { toys: ["cars", "dolls"] }. We can then retrieve the data using the getItem method, and remove it using the removeItem method.',
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
          "https://www.w3schools.com/html/html5_webstorage.asp"
        ]
      },
      {
        "name":"Regular expressions",
        "language":"JavaScript",
        "name_and_language":"Regular expressions - JavaScript",
        "explanation":"Imagine you have a toy box with toys of different colors, and you want to pick out toys of a specific color. In JavaScript, regular expressions are like special patterns that help us match and manipulate strings, just like finding toys of a specific color in your toy box.",
        "code_snippet":"/code_snippet_images/javascript/regular_expressions.png",
        "code_snippet_explanation":'In this example, the code uses a regular expression pattern to test if the string contains the word "brown" and to replace all instances of "the" with "a". The test method returns a boolean indicating if the string matches the pattern, and the replace method returns a new string with replacements made based on the pattern. The /brown/ and /the/gi are examples of regular expression patterns.',
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",
          "https://www.w3schools.com/js/js_regexp.asp"
        ]
      },
      {
        "name":"Error handling",
        "language":"JavaScript",
        "name_and_language":"Error handling - JavaScript",
        "explanation":"Imagine you're playing with your toys and you accidentally break one. In JavaScript, we can use error handling to catch and handle unexpected errors or mistakes in our code, just like knowing what to do when you accidentally break one of your toys.",
        "code_snippet":"/code_snippet_images/javascript/error_handling.png",
        "code_snippet_explanation":"This code demonstrates using try-catch blocks to handle potential errors in the code and provide a fallback behavior.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
          "https://www.w3schools.com/js/js_errors.asp"
        ]
      },
      {
        "name":"Higher-order functions",
        "language":"JavaScript",
        "name_and_language":"Higher-order functions - JavaScript",
        "explanation":"Imagine you have a toy that can control other toys, like a remote control car. In JavaScript, higher-order functions are functions that can take other functions as arguments or return functions as results, just like a remote control car that can control other toys.",
        "code_snippet":"/code_snippet_images/javascript/higher_order_functions.png",
        "code_snippet_explanation":"In this code, pickCandy is a higher-order function that takes a type and a list of candies as arguments, and returns a new list of candies of the specified type. giveCandy is a function that takes a candy and a person as arguments and adds the candy to the person's candies list. giveCandyByType is a higher-order function that takes a type, a list of candies, and a person as arguments, and uses pickCandy and giveCandy to give the person all the candies of the specified type.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
          "https://www.w3schools.com/js/js_errors.asp"
        ]
      },
      {
        "name":"Generators",
        "language":"JavaScript",
        "name_and_language":"Generators - JavaScript",
        "explanation":"Generators are like recipes that you can use to make food. In JavaScript, we can create a generator function that can be used to produce a sequence of values, one value at a time. These values can be generated as they are needed, rather than generating all values at once.",
        "code_snippet":"/code_snippet_images/javascript/generators.png",
        "code_snippet_explanation":'This code demonstrates using a generator function to produce a sequence of food items, one item at a time. The generator function "recipe" yields the values "pizza", "burger", and "salad", one at a time, each time the generator is called. The generator is called using the generator.next() method, which returns the next food item in the sequence each time it is called. The generator continues to run until it encounters the end of the function, or a return statement.',
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators",
          "https://www.geeksforgeeks.org/javascript-generator/"
        ]
      },
      {
        "name":"Iterators",
        "language":"JavaScript",
        "name_and_language":"Iterators - JavaScript",
        "explanation":"Iterators are like a magical kitchen tool that can help you get to every food item in your lunchbox one by one. In JavaScript, we can use iterators to access each item in a data structure, such as an array or an object, one by one.",
        "code_snippet":"/code_snippet_images/javascript/iterators.png",
        "code_snippet_explanation":'In this code snippet, we have created an array of food items called lunchbox. We then use the values() method to get an iterator for the lunchbox array. The next() method is then used to access each item in the lunchbox array one by one. Each time the next() method is called, it returns an object with a value property that contains the next value in the array. The code continues to log each value in the array until all values have been retrieved.',
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators",
          "https://www.w3schools.com/js/js_iterators.asp"
        ]
      },
      {
        "name":"Default parameters",
        "language":"JavaScript",
        "name_and_language":"Default parameters - JavaScript",
        "explanation":"Default parameters are like backup toys you can use if you forget your favorite toy at home. In JavaScript, we can set default values for function parameters, so that if a value is not provided for that parameter, the default value will be used instead.",
        "code_snippet":"/code_snippet_images/javascript/default_parameters.png",
        "code_snippet_explanation":'we have defined a function play that takes an optional parameter toy with a default value of "backup toy". When the function is called without passing any arguments, it uses the default value. But when we pass an argument, such as "robot", the value of toy becomes "robot". The function simply logs the value of toy to the console.',
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters",
          "https://www.javascripttutorial.net/es6/javascript-default-parameters/"
        ]
      },
      {
        "name":"Spread Operator",
        "language":"JavaScript",
        "name_and_language":"Spread Operator - JavaScript",
        "explanation":"Let's say you have a bag of 5 red marbles and you want to put each of them into separate cups. To do this, you can use the spread operator.",
        "code_snippet":"/code_snippet_images/javascript/spread_operator.png",
        "code_snippet_explanation":"In this example, each red marble is placed in its own cup, with the help of the spread operator.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
          "https://www.w3schools.com/js/js_array_methods.asp"
        ]
      },
      {
        "name":"Nullish Coalescing Operator",
        "language":"JavaScript",
        "name_and_language":"Nullish Coalescing Operator - JavaScript",
        "explanation":"The nullish coalescing operator (??) is used to check if a value is null or undefined. If it is, it will use the value on the right side of the operator, otherwise it will use the original value. It's like having a backup plan in case something is missing.",
        "code_snippet":"/code_snippet_images/javascript/nullish_coalescing_operator.png",
        "code_snippet_explanation":"The code defines a variable favoriteColor with a value of null and another variable backupColor with a value of 'blue'. Then it uses the nullish coalescing operator ?? to check if favoriteColor is null or undefined. Since it is null, it will use the value of backupColor which is 'blue'. The result is logged to the console and outputs blue.",
        "resources":[
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator",
          "https://dev.to/sanchithasr/what-is-a-nullish-coalescing-operator-in-javascript-52pj"
        ]
      },
      // Python




      {
        "name":"Functions",
        "language":"Python",
        "name_and_language":"Functions - Python",
        "explanation":"A function is like a machine that takes some things in, does some work, and gives you something back. In Python, you start a function with the word def.",
        "code_snippet":"/code_snippet_images/python/functions.png",
        "code_snippet_explanation":"The code defines a function say_hello that takes a parameter name and prints a greeting message. Then the function is called with the argument \"John\" and the output is Hello, John.",
        "resources":[
          "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
          "https://www.tutorialspoint.com/python/python_functions.htm"
        ]
      },
      {
        "name":"Conditional Statements",
        "language":"Python",
        "name_and_language":"Conditional Statements - Python",
        "explanation":"Conditional statements are like if-then rules in our everyday life. For example, if it's raining outside, then we carry an umbrella. In python, we use conditional statements to make the computer do different things based on whether certain conditions are true or false. ",
        "code_snippet":"/code_snippet_images/python/conditional_statements.png",
        "code_snippet_explanation":'In the code above, the condition is 5 > 2. This is a true statement, so the indented code under it gets executed and the output is Five is greater than two. So, when using conditional statements in python, we write if followed by a condition, and then the code we want to run if the condition is true must be indented under the if statement.',
        "resources":[
          "https://docs.python.org/3/tutorial/controlflow.html#if-statements",
          "https://www.w3schools.com/python/python_conditions.asp"
        ]
      },
      {
        "name":"Loops",
        "language":"Python",
        "name_and_language":"Loops - Python",
        "explanation":'Loops are like when you repeat something over and over again. For example, you might want to say "I love ice cream" five times. In python, we use loops to repeat a block of code multiple times.',
        "code_snippet":"/code_snippet_images/python/loops.png",
        "code_snippet_explanation":"The code above uses a for loop and the range function to repeat the code inside the loop 5 times. On each iteration of the loop, the value of i increases by 1. In python, when using loops, we write for followed by a variable name, in and a sequence, and then the code we want to repeat must be indented under the for statement.",
        "resources":[
          "https://docs.python.org/3/tutorial/controlflow.html#for-statements",
          "https://docs.python.org/3/tutorial/controlflow.html#the-range-function",
          "https://docs.python.org/3/reference/compound_stmts.html#the-while-statement"
        ]
      },
      {
        "name":"Lists",
        "language":"Python",
        "name_and_language":"Lists - Python",
        "explanation":"Lists are like a collection of things, just like how we keep our toys in a toy box. We use lists to store a collection of items, which can be numbers, strings, or even other lists. In Python, lists are declared using square brackets [].",
        "code_snippet":"/code_snippet_images/python/lists.png",
        "code_snippet_explanation":"The code above creates a list of three strings, apple, banana, and cherry, and stores them in a variable called fruits. The print statement then outputs the entire list. So, in python, a list is created by putting a comma-separated sequence of items inside square brackets []. To access individual items in the list, we use the variable name followed by square brackets containing the index of the item we want to access. For example, to access the first item in the fruits list, we would write fruits[0].",
        "resources":[
          "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
          "https://www.tutorialspoint.com/python/python_lists.htm"
        ]
      },
      {
        "name":"Tuples",
        "language":"Python",
        "name_and_language":"Tuples - Python",
        "explanation":"Tuples are like a collection of things that you can't change, just like how your birthday stays the same. In python, we use tuples to store a collection of items that we don't want to change.",
        "code_snippet":"/code_snippet_images/python/tuples.png",
        "code_snippet_explanation":"The code above creates a tuple of three strings, Monday, Tuesday, and Wednesday, and stores them in a variable called days. The print statement then outputs the entire tuple. So, in python, a tuple is created by putting a comma-separated sequence of items inside parentheses (). To access individual items in the tuple, we use the variable name followed by square brackets containing the index of the item we want to access. For example, to access the first item in the days tuple, we would write days[0]. Just like your birthday, once a tuple is created, you can't change its values. This makes tuples a good choice for storing values that shouldn't be changed by mistake.",
        "resources":[
          "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences",
          "https://www.tutorialspoint.com/python/python_tuples.htm"
        ]
      },
      {
        "name":"Dictionaries",
        "language":"Python",
        "name_and_language":"Dictionaries - Python",
        "explanation":'Dictionaries are like a special toy box where each toy has a label. In python, we use dictionaries to store a collection of items, where each item has a label (or "key") and a value.',
        "code_snippet":"/code_snippet_images/python/dictionaries.png",
        "code_snippet_explanation":"The code above creates a dictionary with three key-value pairs, where the keys are 'name', 'age', and 'city' and the values are 'Alice', 30, and 'New York', respectively. The entire dictionary is stored in a variable called person. The print statement then outputs the entire dictionary. So, in python, a dictionary is created by putting key-value pairs inside curly braces {}. To access the value associated with a specific key in the dictionary, we use the variable name followed by square brackets containing the key. For example, to access the value associated with the 'name' key in the person dictionary, we would write person['name'].",
        "resources":[
          "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
          "https://www.tutorialspoint.com/python/python_dictionaries.htm"
        ]
      },
      {
        "name":"File I/O",
        "language":"Python",
        "name_and_language":"File I/O - Python",
        "explanation":"File I/O is like when you put your toys away in a toy box and then take them out later. In python, we use file I/O to read from files and write to files.",
        "code_snippet":"/code_snippet_images/python/file_io.png",
        "code_snippet_explanation":'The first code block uses the open function to open a file called "toys.txt" in "read" mode ("r"). The with statement is used to create a context in which the file is automatically closed when we\'re done with it. The file.read() method reads the entire contents of the file into a string, which is stored in the variable toys. The print statement then outputs the contents of the toys variable, which would be the contents of the "toys.txt" file. The second code block uses the open function to open a file called "toys.txt" in "write" mode ("w"). The with statement is used to create a context in which the file is automatically closed when we\'re done with it. The file.write("teddy bear\n") method writes the string "teddy bear\n" to the file. The file.write("lego blocks\n") method writes the string "lego blocks\n" to the file. The \n at the end of each string is a special character called a newline that represents a line break, so the two strings will be written on separate lines in the file. So, in python, file I/O is done using the open function to open a file and then using methods such as file.read() and file.write() to read from and write to the file, respectively.',
        "resources":[
          "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
          "https://www.tutorialspoint.com/python/python_files_io.htm"
        ]
      },
      {
        "name":"Exception handling",
        "language":"Python",
        "name_and_language":"Exception handling - Python",
        "explanation":"Exception handling is like when you catch your toys before they fall to the ground. In python, we use exception handling to catch errors that occur in our code and handle them in a controlled way, so that our program doesn't crash.",
        "code_snippet":"/code_snippet_images/python/exception_handling.png",
        "code_snippet_explanation":'The code above uses a try-except block to handle an IndexError, which occurs when we try to access an index that is out of bounds for a list. The try block contains the code that we want to execute, and the except block contains the code that we want to run if an error occurs. In this case, we try to access the fourth item in the list toys by using the index 3, but since the list only has three items, this causes an IndexError. The except block catches the error and runs the code inside it, which outputs the message "Oops! That toy doesn\'t exist." So, in python, exception handling is done using a try-except block, where the code that we want to execute goes inside the try block and the code that we want to run if an error occurs goes inside the except block. The type of error that we want to catch is specified after the except keyword.',
        "resources":[
          "https://docs.python.org/3/tutorial/errors.html",
          "https://www.tutorialspoint.com/python/python_exceptions.htm"
        ]
      },
      {
        "name":"Modules",
        "language":"Python",
        "name_and_language":"Modules - Python",
        "explanation":"Modules are like toy boxes that have different toys inside them. In python, we use modules to store code that we can reuse in different parts of our program.",
        "code_snippet":"/code_snippet_images/python/modules.png",
        "code_snippet_explanation":"In this example, we have two files: toys.py and main.py. The toys.py file contains two functions, teddy_bear and lego_blocks, that print messages about different toys. The main.py file uses the import statement to import the toys module. This makes the functions in the toys module available for us to use in the main.py file. We can call the functions in the toys module by using the dot notation, like this: toys.teddy_bear() and toys.lego_blocks(). When we run the main.py file, it outputs the messages that are defined in the teddy_bear and lego_blocks functions in the toys module. So, in python, modules are collections of code that can be reused in different parts of a program. To use a module, we use the import statement to import it, and then we can call the functions and use the data that are defined in the module by using dot notation.",
        "resources":[
          "https://docs.python.org/3/tutorial/modules.html",
          "https://www.tutorialspoint.com/python/python_modules.htm"
        ]
      },
      {
        "name":"Packages",
        "language":"Python",
        "name_and_language":"Packages - Python",
        "explanation":"Packages are like big toy boxes that have many smaller toy boxes inside them. In python, we use packages to organize our code into related groups, just like how we organize our toys into different toy boxes.",
        "code_snippet":"/code_snippet_images/python/packages.png",
        "code_snippet_explanation":"In this example, we have a package named toys that contains two submodules, bears.py and blocks.py. The bears.py module contains two functions, teddy_bear and polar_bear, that print messages about different types of bear toys. The blocks.py module contains two functions, lego_blocks and wooden_blocks, that print messages about different types of block toys. The main.py file uses the import statement to import the bears and blocks submodules from the toys package. This makes the functions in the bears and blocks submodules available for us to use in the main.py file. We can call the functions in the bears and blocks submodules by using the dot notation, like this: toys.bears.teddy_bear(), toys.bears.polar_bear(), toys.blocks.lego_blocks(), and toys.blocks.wooden_blocks(). When we run the main.py file, it outputs the messages that are defined in the functions in the bears and blocks submodules. So, in python, packages are collections of related modules that can be organized in a hierarchical way to make it easier to manage large programs. To use a package, we use the import statement to import the modules that we need, and then we can call the functions and use the data that are defined in the modules by using dot notation.",
        "resources":[
          "https://docs.python.org/3/tutorial/modules.html#packages",
          "https://realpython.com/python-modules-packages/"
        ]
      },
      {
        "name":"Classes and Objects",
        "language":"Python",
        "name_and_language":"Classes and Objects - Python",
        "explanation":"Classes and objects are like toys and toy models. A class is a blueprint for a toy, it defines what the toy looks like and what it can do. An object is a specific toy made from the blueprint of the class.",
        "code_snippet":"/code_snippet_images/python/classes_and_objects.png",
        "code_snippet_explanation":"In this example, we have a class named Toy defined in the toy.py file. The Toy class has two attributes, name and color, which are defined in the __init__ method, and a method named play that prints a message about the toy. In the main.py file, we use the from statement to import the Toy class from the toy.py file. Then, we create two toy objects named toy1 and toy2 by calling the Toy class and passing in values for the name and color attributes. Finally, we use the dot notation to call the play method on the toy1 and toy2 objects, which outputs messages about the toys. So, in python, classes are used to define blueprints for objects, and objects are specific instances of a class. To use a class, we create objects by calling the class and passing in values for its attributes, and then we can use the objects to access the methods and data that are defined in the class.",
        "resources":[
          "https://docs.python.org/3/tutorial/classes.html",
          "https://www.tutorialspoint.com/python/python_classes_objects.htm"
        ]
      },
      {
        "name":"Inheritance",
        "language":"Python",
        "name_and_language":"Inheritance - Python",
        "explanation":"Inheritance is like getting a new toy that is similar to an old toy, but with some new features. Just like how a new toy car could be similar to an old toy car, but with a new color or design.",
        "code_snippet":"/code_snippet_images/python/inheritance.png",
        "code_snippet_explanation":"In this example, we have a class named Toy defined in the toy.py file. This class has two attributes, name and color, and a method named play that prints a message about the toy. We also have a class named Car that inherits from the Toy class. This means that the Car class has all the attributes and methods of the Toy class, and we can add new attributes and methods to the Car class if we need to. In this case, we have added a new method named drive to the Car class. In the main.py file, we use the from statement to import the Car class from the toy.py file. Then, we create a car object named car by calling the Car class and passing in values for the name and color attributes. Finally, we use the dot notation to call the play and drive methods on the car object, which outputs messages about the car toy. So, in python, inheritance allows us to create a new class that is similar to an existing class, but with new or additional features. The new class is called a derived class or a subclass, and the existing class is called a base class or a superclass. To use inheritance, we write the name of the base class in parentheses after the name of the derived class when defining the class.",
        "resources":[
          "https://docs.python.org/3/tutorial/classes.html#inheritance",
          "https://www.tutorialspoint.com/python/python_classes_objects.htm"
        ]
      },
      {
        "name":"Polymorphism",
        "language":"Python",
        "name_and_language":"Polymorphism - Python",
        "explanation":"Polymorphism means that different objects can be treated the same, even if they have different types. In Python, this is achieved by defining a common interface for classes, which can then be treated interchangeably.",
        "code_snippet":"/code_snippet_images/python/polymorphism.png",
        "code_snippet_explanation":"In this example, we have two classes Dog and Cat that both have a method speak(). We can create a list of objects from these classes and call the speak() method on each object in the list, even though they are of different types.",
        "resources":[
          "https://docs.python.org/3/tutorial/classes.html#polymorphism",
          "https://www.geeksforgeeks.org/polymorphism-in-python/"
        ]
      },
      {
        "name":"Decorators",
        "language":"Python",
        "name_and_language":"Decorators - Python",
        "explanation":"Decorators are like stickers that you can put on a toy to make it look different or to give it new features. Just like how you could put a sticker of a flag on a toy car to make it look like a race car, you can use a decorator in Python to change the behavior of a function or a class.",
        "code_snippet":"/code_snippet_images/python/decorators.png",
        "code_snippet_explanation":"In this example, we have two functions, make_bold and make_italic, that are used as decorators. The make_bold function takes a function as an argument and returns a new function that adds <b> and </b> tags around the output of the original function. The make_italic function does the same thing, but adds <i> and </i> tags instead. The hello function is decorated with both make_bold and make_italic using the @ symbol. This means that when the hello function is called, the output of the function is passed to the make_italic decorator first, which adds the <i> and </i> tags. Then, the output of the make_italic function is passed to the make_bold decorator, which adds the <b> and </b> tags. Finally, we call the hello function and print the output, which shows that the function has been decorated with both make_bold and make_italic decorators and the output is displayed with both bold and italic styles. So, in Python, decorators allow us to add new behavior to a function or a class by wrapping the original behavior in a new function. We use the @ symbol followed by the name of the decorator function to apply a decorator to a function or a class.",
        "resources":[
          "https://docs.python.org/3/library/functools.html#functools.partial",
          "https://realpython.com/primer-on-python-decorators/"
        ]
      },
      {
        "name":"Generators",
        "language":"Python",
        "name_and_language":"Generators - Python",
        "explanation":"Generators in Python are like magic boxes that can create things for you! They can create a list of items, one at a time, whenever you ask for them.",
        "code_snippet":"/code_snippet_images/python/generators.png",
        "code_snippet_explanation":"In this example, we have a function countdown that takes a number n as an argument. The function uses a while loop to count down from n to 1. But instead of returning the result, it uses the yield keyword to create the items one at a time, whenever they are asked for. Then, we use a for loop to ask for each item from the countdown generator. The for loop starts at 5 and goes through each item, printing each one until there are no more items left. So, in Python, generators allow us to create a sequence of items, one at a time, whenever they are needed, without having to store all of the items in memory at once. We use the yield keyword to create a generator and the for loop to ask for the items one at a time.",
        "resources":[
          "https://docs.python.org/3/glossary.html#term-generator",
          "https://www.geeksforgeeks.org/generators-in-python/"
        ]
      },
      {
        "name":"Iterators",
        "language":"Python",
        "name_and_language":"Iterators - Python",
        "explanation":"Iterators in Python are like robots that can go through a list of things and pick them up one by one.",
        "code_snippet":"/code_snippet_images/python/iterators.png",
        "code_snippet_explanation":'In this example, we have a list of fruits fruits that contains three items: "apple", "banana", and "cherry". Then, we create an iterator from the list of fruits using the iter function. This creates a fruit_iterator that we can use to pick up each fruit one by one. Finally, we use the next function to get the next fruit from the iterator. The first time we call next, it returns "apple". The second time it returns "banana", and the third time it returns "cherry". If we try to call next again, it will raise a StopIteration error, which means that there are no more items in the list. So, in Python, iterators allow us to pick up each item from a list one by one, without having to worry about the details of how the list is stored in memory. We use the iter function to create an iterator from a list, and the next function to get the next item from the iterator.',
        "resources":[
          "https://docs.python.org/3/glossary.html#term-iterator",
          "https://www.w3schools.com/python/python_iterators.asp"
        ]
      },
      {
        "name":"List comprehensions",
        "language":"Python",
        "name_and_language":"List comprehensions - Python",
        "explanation":"List comprehensions are a concise way to create a new list in Python. They are a compact for loop that creates a new list and fills it with values based on some expression.",
        "code_snippet":"/code_snippet_images/python/list_comprehensions.png",
        "code_snippet_explanation":"This is an example of a list comprehension that creates a new list of squares. The expression x**2 is evaluated for each value in the input list and the results are collected into a new list.",
        "resources":[
          "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions",
          "https://www.w3schools.com/python/python_lists_comprehension.asp"
        ]
      },
      {
        "name":"Lambda Functions",
        "language":"Python",
        "name_and_language":"Lambda Functions - Python",
        "explanation":"Lambda functions in Python are small, one-line functions that can be used to perform simple tasks. They're like regular functions, but they're written in a special way that makes them shorter and easier to read.",
        "code_snippet":"/code_snippet_images/python/lambda_functions.png",
        "code_snippet_explanation":"Let's say you want to add two numbers together. The first code block is how you would do it with a regular function. The second is how you would do it with a lambda function. See the difference? The lambda function is shorter and doesn't have a name, so it's easier to read and write. Plus, it can be used just like a regular function.",
        "resources":[
          "https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions",
          "https://www.w3schools.com/python/python_lambda.asp"
        ]
      },
      {
        "name":"Context Managers",
        "language":"Python",
        "name_and_language":"Context Managers - Python",
        "explanation":"Context managers in Python are like helpers that help you open and close things, like doors or windows. For example, when you go to bed, you might close your bedroom door so you can sleep in peace. When you wake up in the morning, you open the door so you can start your day. Context managers work the same way in Python! They help you open and close things, like files.",
        "code_snippet":"/code_snippet_images/python/context_managers.png",
        "code_snippet_explanation":"In the first example, you open the file example.txt in write mode and write the text \"Hello World\". But you have to remember to close the file, or you could cause problems. In the second example, you use a context manager to open the file example.txt in write mode. The context manager takes care of closing the file for you, so you don't have to remember to do it yourself. Context managers are like helpers that make your life easier, and they help make sure that you don't forget to close things that need to be closed.",
        "resources":[
          "https://docs.python.org/3/library/contextlib.html",
          "https://www.python.org/dev/peps/pep-0343/"
        ]
      },
      {
        "name":"Properties",
        "language":"Python",
        "name_and_language":"Properties - Python",
        "explanation":"Properties in Python are like special boxes that can hold a value and protect it. For example, imagine you have a toy box where you keep your favorite toys. You don't want just anyone to come and take your toys, so you put a lock on the box. Only you have the key to open the box and get the toys. In Python, properties work the same way. They let you create a special box that holds a value, and you can decide who gets to change the value and who doesn't.",
        "code_snippet":"/code_snippet_images/python/properties.png",
        "code_snippet_explanation":"In this example, you create a class ToyBox that has a property toys. The property toys has a getter method that returns the value of self._toys, and a setter method that sets the value of self._toys if the number of toys is less than or equal to 10. Properties let you control who can change the value of a box, and they help protect the values inside the box.",
        "resources":[
          "https://docs.python.org/3/library/functions.html#property",
          "https://www.python.org/dev/peps/pep-0232/"
        ]
      },
      {
        "name":"Data Structures",
        "language":"Python",
        "name_and_language":"Data Structures - Python",
        "explanation":'A data structure is like a big box where we can store our things. Python has different boxes or data structures to store different types of things.For example, a "list" is a type of box where we can store many things one after the other, like a list of things to buy at the grocery store. Another type of box is called a "dictionary". A dictionary is like a special list where instead of having a number to access each item, we can use a word. It\'s like a real dictionary where you look up a word to find its meaning, instead of just counting down to the right page.',
        "code_snippet":"/code_snippet_images/python/data_structures.png",
        "code_snippet_explanation":"The first code block is a list and the second is a dictionary.",
        "resources":[
          "https://docs.python.org/3/tutorial/datastructures.html",
          "https://www.tutorialspoint.com/python/python_data_structure.htm"
        ]
      },
      {
        "name":"Regular expressions",
        "language":"Python",
        "name_and_language":"Regular expressions - Python",
        "explanation":"Regular expressions are like special codes that help us find and match certain things in a big piece of text. For example, let's say we have a big list of fruits and we want to find all the red fruits. We can use a regular expression to help us do that.",
        "code_snippet":"/code_snippet_images/python/regular_expressions.png",
        "code_snippet_explanation":"In this example, the regular expression r'red\w+' helps us find all the fruits that have the word \"red\" in them. And the re.findall function gives us a list of all the matches it found in the big list of fruits.",
        "resources":[
          "https://docs.python.org/3/library/re.html",
          "https://www.tutorialspoint.com/python/python_reg_expressions.htm"
        ]
      },
      {
        "name":"Debugging and testing",
        "language":"Python",
        "name_and_language":"Debugging and testing - Python",
        "explanation":"Debugging and testing in programming means making sure your code is working the way it should. It's like finding and fixing mistakes in a big puzzle. For example, let's say you wrote a code that adds two numbers together, but every time you run it, it gives you the wrong answer. This means there's a mistake in your code, and you need to find it and fix it.",
        "code_snippet":"/code_snippet_images/python/debugging_testing.png",
        "code_snippet_explanation":"In this example, you wrote a function called add_numbers that takes two numbers a and b, and returns their sum. To make sure your code is working correctly, you can run some tests by calling the function and checking the result. In this case, you're calling the add_numbers function with the numbers 3 and 5, and the result should be 8. If the result is not 8, it means there's a mistake in your code, and you need to find it and fix it. The test_add_numbers function tests the add_numbers function by calling it with different input values and checking the results. The assert statement is used to check if the result is what you expect. If the result is not what you expect, the assert statement raises an error and stops the test. The error message explains what went wrong.",
        "resources":[
          "https://docs.python.org/3/tutorial/datastructures.html",
          "https://www.tutorialspoint.com/python/python_data_structure.htm"
        ]
      },
      {
        "name":"Concurrent programming",
        "language":"Python",
        "name_and_language":"Concurrent programming - Python",
        "explanation":"Concurrent programming is like having multiple friends play different games together at the same time. In programming, we can have multiple processes run at the same time, just like multiple friends playing different games. In Python, concurrent programming can be achieved using various methods such as multithreading, asynchronous programming, or using the concurrent.futures library. Here's a simple example of concurrent programming in Python using the threading module:",
        "code_snippet":"/code_snippet_images/python/concurrent_programming.png",
        "code_snippet_explanation":'In this example, the count_to_ten function counts from 0 to 9 and waits 1 second between each number. The threading.Thread class is used to start a new thread to run the count_to_ten function. The main thread continues to run and prints "Main thread running" and "Main thread done". The two threads run at the same time, so you will see the numbers from count_to_ten printed at the same time as the messages from the main thread.',
        "resources":[
          "https://docs.python.org/3/library/concurrent.futures.html",
          "https://docs.python.org/3/library/asyncio.html"
        ]
      },
      {
        "name":"Multithreading",
        "language":"Python",
        "name_and_language":"Multithreading - Python",
        "explanation":'Imagine you have a cookie factory and you want to make two kinds of cookies at the same time, chocolate chip cookies and sugar cookies. To make these cookies, you have two workers, one for making chocolate chip cookies and another for making sugar cookies. In computer programming, we call each worker a "thread". Just like the two workers in the cookie factory, two threads in a computer program can work on two different tasks at the same time.',
        "code_snippet":"/code_snippet_images/python/multithreading.png",
        "code_snippet_explanation":'In the code above, we have two functions, make_chocolate_chip_cookies and make_sugar_cookies, that represent the tasks we want to run in parallel. We create two threads, thread1 and thread2, and assign each thread to run one of the functions. Finally, we start both threads and wait for them to finish before printing "All cookies are ready!".',
        "resources":[
          "https://docs.python.org/3/library/threading.html"
        ]
      },
      {
        "name":"Asynchronous programming",
        "language":"Python",
        "name_and_language":"Asynchronous programming - Python",
        "explanation":"Asynchronous programming is like having many helpers who can do many tasks at the same time. Instead of waiting for one helper to finish a task, we can ask many helpers to do their tasks at the same time and then wait for all of them to finish.\n\nFor example, let's say we want to make a sandwich and also want to play a video game. But making a sandwich takes time, and we don't want to wait for it to be ready before starting the video game.",
        "code_snippet":"/code_snippet_images/python/asynchronous_programming.png",
        "code_snippet_explanation":"Here, we have two tasks - making a sandwich and playing a video game. We can run both of these tasks at the same time using asyncio.gather(). While one task is running, the other task can also start running. In the end, we wait for both tasks to finish and then the program stops.",
        "resources":[    "https://docs.python.org/3/library/asyncio.html"  ]
      }
      ,
      {
        "name":"Metaclasses",
        "language":"Python",
        "name_and_language":"Metaclasses - Python",
        "explanation":"A metaclass is like a blueprint for creating classes. Just like how you use a blueprint to build a house, you use a metaclass to build a class. Let's say you have a class called \"Animal\" and you want to create a new class called \"Dog\" that inherits from \"Animal\". You can use a metaclass to create the \"Dog\" class.",
        "code_snippet":"/code_snippet_images/python/metaclasses.png",
        "code_snippet_explanation":"In this example, AnimalMetaclass is the metaclass and Animal is the class that uses it. When we create the Dog class, it automatically gets the is_animal attribute from the Animal class.",
        "resources":[
          "https://docs.python.org/3/reference/datamodel.html#metaclasses",
          "https://stackoverflow.com/questions/100003/what-are-metaclasses-in-python"
        ]
      },
      {
        "name":"Descriptors",
        "language":"Python",
        "name_and_language":"Descriptors - Python",
        "explanation":"Descriptors are like special functions in Python that help define how an object's data is accessed and manipulated. They work behind the scenes to control things like getting and setting values, and can be used to enforce rules or limits on what data can be stored in an object. Here's a simple example of using descriptors to control the age of a person:",
        "code_snippet":"/code_snippet_images/python/descriptors.png",
        "code_snippet_explanation":"In this example, the AgeDescriptor class defines how the age data is accessed and manipulated for the Person class. When we try to set the age to a negative number, it raises a ValueError, which helps ensure that the age is always a positive number.",
        "resources":[
          "https://docs.python.org/3/reference/datamodel.html#descriptors",
          "https://towardsdatascience.com/python-descriptors-and-how-to-use-them-5167d506af84"
        ]
      },
      // Java
      // {
      //   "name":"Variables",
      //   "language":"Java",
      //   "name_and_language":"Variables - Java",
      //   "explanation":"A variable is a named storage location that holds a value. In Java, the value of a variable can change during the execution of a program.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"So now, the heading on your webpage will say \"Hello Cats!\" instead of \"Hello World!\".",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_variables.asp"
      //   ]
      // },
      // {
      //   "name":"Methods",
      //   "language":"Java",
      //   "name_and_language":"Methods - Java",
      //   "explanation":"A method is like a recipe. It tells the computer what to do. You give the method a name, like 'makeCake', and then you write the steps of what to do when someone asks to make a cake.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of a method in Java. It takes two numbers as input, adds them, and returns the result.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_methods.asp"
      //   ]
      // },
      // {
      //   "name":"Conditional statements",
      //   "language":"Java",
      //   "name_and_language":"Conditional statements - Java",
      //   "explanation":"Conditional statements are like making choices. They help you tell the computer what to do if something is true or false. For example, if it's raining outside, you might want to bring an umbrella.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of a conditional statement in Java. If the variable 'x' is greater than 0, it prints 'positive', otherwise it prints 'negative'.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_conditions.asp"
      //   ]
      // },
      // {
      //   "name":"Loops",
      //   "language":"Java",
      //   "name_and_language":"Loops - Java",
      //   "explanation":"Loops are like repeating a task many times. Imagine you want to eat 5 cookies. You can either eat one cookie 5 times or you can use a loop to automate the process.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of a for loop in Java. It prints the numbers from 1 to 5.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_loops.asp"
      //   ]
      // },
      // {
      //   "name":"Arrays",
      //   "language":"Java",
      //   "name_and_language":"Arrays - Java",
      //   "explanation":"Arrays are like a big box that can store many things. You can have an array of numbers, an array of names, or an array of anything you want. It makes it easy to keep track of lots of things.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of an array in Java. It creates an array of 5 integers and initializes it with values.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_arrays.asp"
      //   ]
      // },
      // {
      //   "name":"Classes",
      //   "language":"Java",
      //   "name_and_language":"Classes - Java",
      //   "explanation":"A class is like a blueprint for creating objects. You create a class, and then you use it to make many objects. Think of it like making a cookie cutter. You make the cookie cutter, then you use it to make many cookies.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of a class in Java. It defines a class 'Person' with name and age attributes, and a method to display the person's information.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_classes.asp"
      //   ]
      // },
      // {
      //   "name":"Objects",
      //   "language":"Java",
      //   "name_and_language":"Objects - Java",
      //   "explanation":"Objects are instances of classes. It's like making a cookie from the cookie cutter. Each cookie is an object, and the cookie cutter is a class. Objects have properties and can perform actions.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of an object in Java. It creates an object 'person1' from the class 'Person', and sets the name and age attributes.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_objects.asp"
      //   ]
      // },
      // {
      //   "name":"Inheritance",
      //   "language":"Java",
      //   "name_and_language":"Inheritance - Java",
      //   "explanation":"Inheritance is like getting a gift from your parents. A child class gets all the properties and actions from the parent class, and can also have its own properties and actions.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of inheritance in Java. The class 'Student' inherits from the class 'Person', and adds a 'school' attribute.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_inheritance.asp"
      //   ]
      // },
      // {
      //   "name":"Polymorphism",
      //   "language":"Java",
      //   "name_and_language":"Polymorphism - Java",
      //   "explanation":"Polymorphism is like having many forms. One object can perform many actions, depending on the context in which it is used.",
      //   "code_snippet":"/code_snippet_images/javascript/dom_manipulation.png",
      //   "code_snippet_explanation":"This is a simple example of polymorphism in Java. The method 'display' can display information for different types of objects, such as a person, student, or employee.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.w3schools.com/java/java_polymorphism.asp"
      //   ]
      // },
      // {
      //   "name":"Interfaces",
      //   "language":"Java",
      //   "name_and_language":"Interfaces - Java",
      //   "explanation":"An interface is like a blueprint for a building. It tells you what a building should look like, but not how it should be built. In Java, you use interfaces to define what a class should do, but not how it should do it.",
      //   "code_snippet":"/code_snippet_images/java/interface.png",
      //   "code_snippet_explanation":"This is an example of an interface in Java, which defines what methods a class must have if it wants to implement this interface.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.tutorialspoint.com/java/java_interfaces.htm"
      //   ]
      // },
      // {
      //   "name":"Abstract Classes",
      //   "language":"Java",
      //   "name_and_language":"Abstract Classes - Java",
      //   "explanation":"An abstract class is like a blueprint for a building, but it can also have some of its own rooms built. In Java, you use abstract classes to define what a class should do, but also allow it to have some code to get started with.",
      //   "code_snippet":"/code_snippet_images/java/abstract_class.png",
      //   "code_snippet_explanation":"This is an example of an abstract class in Java, which defines what methods a class must have if it wants to extend this abstract class.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.tutorialspoint.com/java/java_abstract_class.htm"
      //   ]
      // },
      // {
      //   "name":"Exception Handling",
      //   "language":"Java",
      //   "name_and_language":"Exception Handling - Java",
      //   "explanation":"Exception handling is like having a safety net when you're doing something dangerous. In Java, you use exception handling to protect your program from things that can go wrong, and make sure your program doesn't stop working if something unexpected happens.",
      //   "code_snippet":"/code_snippet_images/java/exception_handling.png",
      //   "code_snippet_explanation":"This is an example of exception handling in Java, which uses a try-catch block to catch any exceptions that might occur and handle them gracefully.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.tutorialspoint.com/java/java_exceptions.htm"
      //   ]
      // },
      // {
      //   "name":"Packages",
      //   "language":"Java",
      //   "name_and_language":"Packages - Java",
      //   "explanation":"A package is like a box where you can put things inside. In Java, you use packages to organize your code and keep it organized.",
      //   "code_snippet":"/code_snippet_images/java/package.png",
      //   "code_snippet_explanation":"This is an example of a package declaration in Java, which tells the compiler that the class belongs to the specified package.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.tutorialspoint.com/java/java_package.htm"
      //   ]
      // },
      // {
      //   "name":"Access Modifiers",
      //   "language":"Java",
      //   "name_and_language":"Access Modifiers - Java",
      //   "explanation":"Access modifiers are like locks on doors. In Java, you use access modifiers to control who can enter a room and who can't. There are different access modifiers, like private and public, which allow different levels of access.",
      //   "code_snippet":"/code_snippet_images/java/access_modifier.png",
      //   "code_snippet_explanation":"This is an example of an access modifier in Java, which specifies that the variable can only be accessed within the class it is declared in.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.tutorialspoint.com/java/java_access_modifiers.htm"
      //   ]
      // },
      // {
      //   "name":"Encapsulation",
      //   "language":"Java",
      //   "name_and_language":"Encapsulation - Java",
      //   "explanation":"Encapsulation is like wrapping a gift in a box. In Java, you use encapsulation to wrap up data and behavior inside an object, so that it can be protected and used in a controlled way.",
      //   "code_snippet":"/code_snippet_images/java/encapsulation.png",
      //   "code_snippet_explanation":"This is an example of encapsulation in Java, which uses getter and setter methods to control access to the private variables in a class.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/String.html",
      //     "https://www.tutorialspoint.com/java/java_encapsulation.htm"
      //   ]
      // },
      // {
      //   "name":"Data Structures",
      //   "language":"Java",
      //   "name_and_language":"Data Structures - Java",
      //   "explanation":"Data structures are like boxes to store things. In Java, you use different data structures like stacks, queues, and linked lists to store and organize data in different ways.",
      //   "code_snippet":"/code_snippet_images/java/data_structure.png",
      //   "code_snippet_explanation":"This is an example of a linked list data structure in Java, which stores data in a chain of nodes.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/LinkedList.html",
      //     "https://www.tutorialspoint.com/java/java_linked_list.htm"
      //   ]
      // },
      // {
      //   "name":"Collections Framework",
      //   "language":"Java",
      //   "name_and_language":"Collections Framework - Java",
      //   "explanation":"The Collections framework is like a big shelf to store things. In Java, the Collections framework provides a way to store and manage collections of objects.",
      //   "code_snippet":"/code_snippet_images/java/collections_framework.png",
      //   "code_snippet_explanation":"This is an example of using the Collections framework in Java, which creates a list and adds elements to it.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/Collections.html",
      //     "https://www.tutorialspoint.com/java/java_collections.htm"
      //   ]
      // },
      // {
      //   "name":"Generics",
      //   "language":"Java",
      //   "name_and_language":"Generics - Java",
      //   "explanation":"Generics are like containers that can hold different things. In Java, you use generics to create classes, interfaces, and methods that can work with different types of data.",
      //   "code_snippet":"/code_snippet_images/java/generics.png",
      //   "code_snippet_explanation":"This is an example of using generics in Java, which creates a generic class that can work with different types of data.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/List.html",
      //     "https://www.tutorialspoint.com/java/java_generics.htm"
      //   ]
      // },
      // {
      //   "name":"Enumerations",
      //   "language":"Java",
      //   "name_and_language":"Enumerations - Java",
      //   "explanation":"Enumerations are like lists of special words that only have certain allowed values. In Java, you use enumerations to declare a set of named constants, so that you can use them in your code instead of using magic numbers.",
      //   "code_snippet":"/code_snippet_images/java/enumerations.png",
      //   "code_snippet_explanation":"This is an example of using enumerations in Java, which declares an enumeration type with a list of named constants.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/Enum.html",
      //     "https://www.tutorialspoint.com/java/java_enumerations.htm"
      //   ]
      // },
      // {
      //   "name":"Annotations",
      //   "language":"Java",
      //   "name_and_language":"Annotations - Java",
      //   "explanation":"Annotations are like special notes or tags that you attach to your code. In Java, you use annotations to provide additional information about the code, such as how to handle it during compilation or runtime.",
      //   "code_snippet":"/code_snippet_images/java/annotations.png",
      //   "code_snippet_explanation":"This is an example of using annotations in Java, which declares an annotation type and uses it to annotate a method.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/annotation/Annotation.html",
      //     "https://www.tutorialspoint.com/java/java_annotations.htm"
      //   ]
      // },
      // {
      //   "name":"I/O Streams",
      //   "language":"Java",
      //   "name_and_language":"I/O Streams - Java",
      //   "explanation":"I/O streams are like pipes to transfer data in and out of your program. In Java, you use I/O streams to read from and write to files, network connections, and other data sources.",
      //   "code_snippet":"/code_snippet_images/java/io_streams.png",
      //   "code_snippet_explanation":"This is an example of using I/O streams in Java, which reads data from a file and writes it to the console.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/io/InputStream.html",
      //     "https://www.tutorialspoint.com/java/java_io_streams.htm"
      //   ]
      // },
      // {
      //   "name":"Reflection",
      //   "language":"Java",
      //   "name_and_language":"Reflection - Java",
      //   "explanation":"Reflection is like looking into a mirror and seeing yourself. In Java, you use reflection to look into your code and see what it's made of, such as its classes, methods, and fields, and even to change it at runtime.",
      //   "code_snippet":"/code_snippet_images/java/reflection.png",
      //   "code_snippet_explanation":"This is an example of using reflection in Java, which inspects a class and retrieves its methods.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/reflect/Reflect.html",
      //     "https://www.tutorialspoint.com/java/java_reflection.htm"
      //   ]
      // },
      // {
      //   "name":"Lambda Expressions",
      //   "language":"Java",
      //   "name_and_language":"Lambda Expressions - Java",
      //   "explanation":"Lambda expressions are like shortcuts to write small pieces of code. In Java, you use lambda expressions to write anonymous functions, which are functions without a name, that can be passed as arguments or returned as values.",
      //   "code_snippet":"/code_snippet_images/java/lambda_expressions.png",
      //   "code_snippet_explanation":"This is an example of using lambda expressions in Java, which defines a functional interface and uses a lambda expression to implement it.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/function/package-summary.html",
      //     "https://www.tutorialspoint.com/java/java_lambda_expressions.htm"
      //   ]
      // },
      // {
      //   "name":"Stream API",
      //   "language":"Java",
      //   "name_and_language":"Stream API - Java",
      //   "explanation":"Stream API is like a conveyor belt to process data. In Java, you use the Stream API to process collections of data, such as lists, arrays, or maps, in a functional and parallel way.",
      //   "code_snippet":"/code_snippet_images/java/stream_api.png",
      //   "code_snippet_explanation":"This is an example of using the Stream API in Java, which calculates the sum of squares of a list of numbers.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/stream/Stream.html",
      //     "https://www.tutorialspoint.com/java/java_streams.htm"
      //   ]
      // },
      // {
      //   "name":"Concurrent Programming",
      //   "language":"Java",
      //   "name_and_language":"Concurrent Programming - Java",
      //   "explanation":"Concurrent programming is like having lots of helpers work together on a big project at the same time. In Java, concurrent programming helps the computer to do many things at the same time and makes it faster.",
      //   "code_snippet":"/code_snippet_images/java/concurrent_programming.png",
      //   "code_snippet_explanation":"This code helps you run two tasks at the same time, making your program faster.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/concurrent/package-summary.html",
      //     "https://www.tutorialspoint.com/java/java_concurrency.htm"
      //   ]
      // },
      // {
      //   "name":"Multithreading",
      //   "language":"Java",
      //   "name_and_language":"Multithreading - Java",
      //   "explanation":"Multithreading is like having many hands work on a big project at the same time. In Java, multithreading helps the computer to run multiple tasks at the same time, making it faster.",
      //   "code_snippet":"/code_snippet_images/java/multithreading.png",
      //   "code_snippet_explanation":"This code helps you run two tasks at the same time, making your program faster.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/lang/Thread.html",
      //     "https://www.tutorialspoint.com/java/java_multithreading.htm"
      //   ]
      // },
      // {
      //   "name":"Synchronization",
      //   "language":"Java",
      //   "name_and_language":"Synchronization - Java",
      //   "explanation":"Synchronization is like making sure everyone is working together in a synchronized manner. In Java, synchronization helps make sure that multiple threads access shared resources without any conflicts.",
      //   "code_snippet":"/code_snippet_images/java/synchronization.png",
      //   "code_snippet_explanation":"This code helps you synchronize multiple threads so that they work together without any conflicts.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/concurrent/locks/Lock.html",
      //     "https://www.tutorialspoint.com/java/java_thread_synchronization.htm"
      //   ]
      // },
      // {
      //   "name":"Reentrant Locks",
      //   "language":"Java",
      //   "name_and_language":"Reentrant Locks - Java",
      //   "explanation":"Reentrant Locks are like keys that you can use to lock a room and then unlock it later. In Java, reentrant locks help make sure that only one thread can access a shared resource at a time.",
      //   "code_snippet":"/code_snippet_images/java/reentrant_locks.png",
      //   "code_snippet_explanation":"This code helps you use a reentrant lock to make sure that only one thread can access a shared resource at a time.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html",
      //     "https://www.tutorialspoint.com/java/java_reentrant_locks.htm"
      //   ]
      // },
      // {
      //   "name":"Futures and Callables",
      //   "language":"Java",
      //   "name_and_language":"Futures and Callables - Java",
      //   "explanation":"Futures and Callables are like promises that you make to do something in the future. In Java, Futures and Callables help you to run a task in the background and get its result later.",
      //   "code_snippet":"/code_snippet_images/java/futures_and_callables.png",
      //   "code_snippet_explanation":"This code helps you run a task in the background and get its result later using Futures and Callables.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/concurrent/Future.html",
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/concurrent/Callable.html",
      //     "https://www.tutorialspoint.com/java/java_thread_callable_future.htm"
      //   ]
      // },
      // {
      //   "name":"Date and Time API",
      //   "language":"Java",
      //   "name_and_language":"Date and Time API - Java",
      //   "explanation":"The Date and Time API is like a calendar that helps you keep track of time. In Java, the Date and Time API helps you keep track of the date and time, and make calculations with it.",
      //   "code_snippet":"/code_snippet_images/java/date_and_time_api.png",
      //   "code_snippet_explanation":"This code helps you use the Date and Time API to get the current date and time.",
      //   "resources":[
      //     "https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/time/package-summary.html",
      //     "https://www.tutorialspoint.com/java/java_date_time.htm"
      //   ]
      // }
    ]
  }

  export default ConceptData