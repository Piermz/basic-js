function Hello(name) {
    console.log('Hello ' + name + '!');
}

Hello('Asep');

// get data from api
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));