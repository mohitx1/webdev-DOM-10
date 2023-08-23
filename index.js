localStorage.setItem("Name","Mohit")

sessionStorage.setItem("Name","Mohit")
sessionStorage.removeItem('name')
localStorage.getItem("name")


document.cookie = 'Name=Sinha; expires=' + new Date(2024, 0, 1).toUTCString();


console.log(localStorage.Name)
console.log(document.cookie)


