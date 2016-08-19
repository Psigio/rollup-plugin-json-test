# What is this?
This is a simple project to reproduce an issue I seem to be having wih the rollup-plugin-jason NPM module (https://github.com/rollup/rollup-plugin-json)

# What does it show?
The bundle is produced by the rollup command which attempts to define a variable called name.  However, in the browser, name already exists within the global scope, so it is not reassigned.  This is shown in the simple output where the "name" tag has become "[Object object]" rather than the value assigned.

You can see the output in this screenshot, the output of which is generated by a call to the following function code: `    return "The Name value is " + JSON.stringify(preset_data.fields.name) + " and the address is " + JSON.stringify(preset_data.fields.address);`

![Screenshot](/output.png)

As you can see in the watch window, "name" is assigned in the global scope, so it appears that the rolled-up `var name = {"key":"name-tag","value":"Mr Jones"};` code does not reassign the global "name" value.

# How to run
Clone the repo, `npm install` to grab the dependencies, then run `npm start` to carry out the rollup (produces an output file called bundle.js) then runs Python's SimpleHTTPServer.  You can test the output by navigating to http://localhost:8000

# What's the original setup?
I'm using:
* Chrome 52.0.2743.116 (64-bit)
* Ubuntu 16.04.1 LTS (Linux 4.4.0-28-generic)
* rollup-plugin-json 2.0.1
* rollup 0.34.10
