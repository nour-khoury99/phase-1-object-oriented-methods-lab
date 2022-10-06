function BoadrMember(name,homeState,training){
    this.name=name;
    this.homeState=homeState;
    this.training=training;

    this.sayHi = function () {
        console.log(`Hi , my name is ${this.name} . Tam from ${this.homeState} , and I was trained in${this.training}`)
    };
}

const broadmember = BoadrMember("US" , "US","US");

broadmember.sayHi()