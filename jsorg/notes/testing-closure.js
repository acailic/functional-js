function Hello(name) {


    var id = Math.random();
    function speak(lastName){
        console.log("Hello " + name);
        console.log("lastName " + lastName);
    }

    function upper(newName){
        name = newName;
    }

    function changeName(str){
        return str.toLocaleUpperCase()
    }

    function firstName(){
        return name;
    }
    // return {
    //     say: speak,
    //     firstName: firstName,
    // }

    var public_api = {
        say: speak,
    };
    return public_api;
}

var hello = Hello("World");

hello.say("ACO");
hello.firstName() // "World"