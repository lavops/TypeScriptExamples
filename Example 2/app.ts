enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string] // TUPLE TYPE
    something: any
} = {
    name: 'Example',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [Role.ADMIN, Role[0]],
    something: 'Something ' + 1
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}