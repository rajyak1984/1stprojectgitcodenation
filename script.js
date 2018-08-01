class vehicle {
    constructor(name,maker,engine,color){
        this.name =name;
        this.maker=maker;
        this.engine=engine;
    }
    start(){
        console.log("starting...");
    }
}
let bike = new vehicle('harley','bullet','1340cc')
bike.start();