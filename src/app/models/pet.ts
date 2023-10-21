export class Pet {
    id: number | null;
    name: string;
    type:string;
    age: number;
    pic: string;
    adopted: boolean;

    constructor(
        id: number,
        name: string,
        type:string,
        age: number,
        pic: string,
        adopted: boolean
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.age = age;
        this.pic = pic;
        this.adopted = adopted;
    } 
}