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

4. What are data types?
   Data types are the types of data we assign to a variable.

5. How many data types are there in TypeScript?
   There are 5 types of data types in TypeScript -

   1. Primitive type,
   2. Object type,
   3. Special type,
   4. Advance type,
   5. Function type, etc.

6. How many primitive type of data are there in TypeScript?
   There are 7 types of primitive data type in TypeScript -

   1. number (both int and float type),
   2. string (text type),
   3. boolean (either true or false),
   4. null (it doesn't have any value),
   5. undefined (it has a value which is yet not defined, i.e. uninitialized value),
   6. bigint (has length greater than number type),
   7. symbol (it creates unique memory addresses for identifiers, whether they have same values or not), etc.

7. How to generate a tsconfig.json file?
   open terminal, type and run the following command -
   "tsc --init"

8. How to set the JavaScript language version for our current TypeScript project?

   1. Open tsconfig.json file, and search for the "Language and Environment" properties,
   2. set the "target" property for the JavaScript version

9. How to generate a declaration file (.d.ts file) in TypeScript?
   1. Open tsconfig.json file, and search for the "Emit" properties,
   2. set the "declaration" property to "true" to generate declaration files i.e. .d.ts files against all .ts files.
