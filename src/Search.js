function Search(){
    function searchInput(){
        let currentValue = document.querySelector("input[name=searchInput]").value;
        
    }

    return(
        <div className="search">
            <h2>Digite a cidade que você quer ver a previsão</h2>
            <input onKeyUp={searchInput} type="text" name="searchInput" placeholder="Digite a cidade..."/>
        </div>
    )
}

export default Search