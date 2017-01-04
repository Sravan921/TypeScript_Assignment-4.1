class Greeter {
    greeting: string;
    constructor(private message: string){
        this.greeting =  message;
    }

    greet() {
        return this.greeting;
    }
}

let greeter = new Greeter('Hello World! This is Sravan!!');

$(document).ready(function (){
    document.getElementById('status').innerHTML = greeter.greet();
})
