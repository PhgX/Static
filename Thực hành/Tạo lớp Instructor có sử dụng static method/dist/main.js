"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const static_method_example_1 = require("./static-method-example");
let juniorInstructor = new static_method_example_1.Instructor('Brian');
let seniorInstructor = new static_method_example_1.Instructor('Alice', "classroom");
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
static_method_example_1.Instructor.helloWorld();
console.log(`${juniorInstructor.name} can teach: ${static_method_example_1.Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${static_method_example_1.Instructor.canTeach(seniorInstructor)}`);
//# sourceMappingURL=main.js.map