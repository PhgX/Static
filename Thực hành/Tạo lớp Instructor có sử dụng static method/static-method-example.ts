export class Instructor {
  private _role: string;
  private _name: string;
  constructor(name: string, role = "assistant") {
    this._role = role;
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get role() {
    return this._role;
  }
  set role(role: string) {
    this._role = role;
  }

  // Instance method
  renderDetails() {
    console.log(`${this.name} - ${this.role}`);
  }

  // Base case static method
  static helloWorld() {
    console.log("Hi there");
  }

  // Static method
  static canTeach(instructor: Instructor) {
    return instructor.role === "classroom";
  }
}
