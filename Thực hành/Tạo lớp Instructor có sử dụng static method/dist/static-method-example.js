"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
class Instructor {
    constructor(name, role = "assistant") {
        this.role = role;
        this.name = name;
    }
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
    static helloWorld() {
        console.log('Hi there');
    }
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}
exports.Instructor = Instructor;
//# sourceMappingURL=static-method-example.js.map