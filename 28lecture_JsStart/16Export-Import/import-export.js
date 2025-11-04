// JavaScript Import-Export:

/*
    In JavaScript, the `import` and `export` statements are used to share code between different files or modules. This allows for better organization and modularity in your codebase.

    In simple words:
    - `export` is used to make functions, objects, or values available for use in other files.
    - `import` is used to bring those exported functions, objects, or values into another file.


    We have to types of modules for export and import:
    1. CJS (Common JavaScript)
       In CJS, we use `require` to import and `module.exports` to export.

    2. MJS (Module JavaScript)
        In MJS, we use `import` to import and `export` to export.


    In MJS modules, there are two types of exports:
    1. Named Exports: You can have multiple named exports in a single file. When importing, you need to use the same name as the exported name.
    2. Default Exports: You can have only one default export per file. When importing, you can choose any name for the imported value.
*/




// Default Import Example:

// sum(100, 200);  <-- before use a function/variable, we need to import it first


// Default Import Syntax:
// import NameYouChoose from 'path-to-file';
import add from './math1.js';  // importing default export
// import x from './math1.js';  // importing default export

add(100, 200);
// x(100, 200);





// Named Import Example:

// sub(200, 100);  <-- before use a function/variable, we need to import it first

// Default Import Syntax:
// import { exportedName1, exportedName2 } from 'path-to-file';
import { sub, multi, div, number } from './math2.js';  // importing named exports

sub(200, 100);
multi(10, 20);
div(100, 5);
console.log('Imported number:', number);