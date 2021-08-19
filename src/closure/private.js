const person = () => {
    let name = "Sergio";
    return {
        getName: () => {
            return name;
        },
        setName: (newName) => {
            name = newName;
        }
    }
}
const newPerson = person();
console.log(newPerson);
console.log(newPerson.getName());
newPerson.setName("Andrés");
console.log(newPerson.getName());