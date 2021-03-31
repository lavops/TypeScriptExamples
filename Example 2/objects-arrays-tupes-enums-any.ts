// OBJECTS, NESTED OBJECTS, ARRAYS, TUPES, ENUMS, ANY

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string] // TUPLE TYPE
    something: any,
    details: {
        title: string;
        description: string;
    }
} = {
    name: 'Example',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [Role.ADMIN, Role[0]],
    something: 'Something ' + 1,
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
      }
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}