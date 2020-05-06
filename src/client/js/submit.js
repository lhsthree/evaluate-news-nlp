function submit(event){
    event.preventDefault()
    fetch('http://localhost:8080/')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML && name.value = res.message
    })
}


export{ submit }