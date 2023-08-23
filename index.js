localStorage.setItem("Name","Mohit")

sessionStorage.setItem("Name","Mohit")
sessionStorage.removeItem('name')
localStorage.getItem("name")


document.cookie = 'Name=Sinha; expires=' + new Date(2024, 0, 1).toUTCString();


console.log(localStorage.Name)
console.log(document.cookie)

const object={
    Name:'Mohit',
    Email:'mohit@gmail.com'
}

const objectSerialized=JSON.stringify(object);
localStorage.setItem('myObject',objectSerialized);

const objectDeserialized=JSON.parse(localStorage.getItem('myObject'));
console.log(objectDeserialized)

