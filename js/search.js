const words = ['Roundlab', 'Cerave', 'Avon', 'Nivea', 'Anko']


function search() {
    let searchbtn = document.getElementById('searchInput').value.toLowerCase()
    let result = document.querySelector('#res');

    result.innerHTML = "";

    let filteredword = words.filter(words => words.toLowerCase().includes(searchbtn))
    filteredword.forEach(words => {
        let div = document.createElement('div');
        div.textContent = words;
        div.classList.add("result-item");
        result.appendChild(div);
    })
}
