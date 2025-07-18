1. What is TypeScript?
   TypeScript is a superset of JavaScript. It has all the features of JavaScript with some additional features.

   TypeScript is not just a language, but a very powerful compiler that compiles the TypeScript code into the JavaScript code. TypeScript compiler compiles the TS code to JavaScript code and any JavaScript runtime environment like Web Browsers or Node JS can run that JavaScript code.
   
   It adds type checking facility and more features to JavaScript. It helps developers catch errors early by applying data type checking before code execution. It improves the code quality and maintainability.

2. Different features of TypeScript?

   1. Data type of a variable can be specified,
   2. The concept of Interface is here,
   3. The concept of access-modifiers is here,
   4. The concept of Decorators is here,
   5. The concept of Type-inference is here,
   6. Some additional features over the vanila javascript are also here,
   7. TypeScript is highly configurable, we can configure the TypeScript compiler as per our requirement to make sure it behaves in a way that we want it to behave.
   8. Code maintainability, and code quality are also the factors here in TypeScript.

   Disadvantage -
   1. The only disadvantage is, there is one more step i.e. to compile the TypeScript code to JavaScript code before the JavaScript code can be executes by JavaScript runtime.

3. Syntax of a TypeScript code -
   let username: string = "AMITTRIVEDI29";
   let age: number = 29;

4. What is a variable?
   A variable is a name storage where we can store values that are required for our program.

5. Rules of naming variables?
   - Variable names can only contain letters, digits, underscores, and dollar signs,
   - The first character of a variable name must not be a digit,
   - A variable name can start with a letter (a-z or A-Z), underscore (_), or a dollar sign ($),
   - TypeScript variable names are case sensitive,
   - TypeScript language reserved keywords cannot be used as variable names

6. What are data types?
   Data types are the types of data we assign to a variable.

7. How many data types are there in TypeScript?
   There are 5 types of data types in TypeScript -

   1. Primitive type,
   2. Object type,
   3. Special type,
   4. Advance type,
   5. Function type, etc.

8. How many primitive type of data are there in TypeScript?
   There are 7 types of primitive data type in TypeScript -

   1. number (both int and float type)(in TypeScript all mumerical datatypes are converted to floating point numbers by the TS compiler),
   2. string (text type),
   3. boolean (either true or false)(including truthy and falsy values),
   4. null (it doesn't have any value),
   5. undefined (it has a value which is yet not defined, i.e. uninitialized value),
   6. bigint (has length greater than number type),
   7. symbol (it creates unique memory addresses for identifiers, whether they have same values or not), etc.

9. What is Type-Inference in TypeScript?
   When we declare a variable by initializing a value to it, TypeScript automatically inferse the datatype of the value that we were initialized with into that variable. Later we cannot change the datatype of that variable. This feature is called Type-Inference.

9. How to generate a tsconfig.json file?
   open terminal, type and run the following command -
   "tsc --init"

10. How to set the JavaScript language version for our current TypeScript project?

   1. Open tsconfig.json file, and search for the "Language and Environment" properties,
   2. set the "target" property for the JavaScript version

11. How to generate a declaration file (.d.ts file) in TypeScript?
   1. Open tsconfig.json file, and search for the "Emit" properties,
   2. set the "declaration" property to "true" to generate declaration files i.e. .d.ts files against all .ts files.
