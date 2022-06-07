export class Application {
    private name: string;
    static count : number = 0
    constructor (name: string, count: number){
        this.name = name;
        Application.count++;
    }
}

