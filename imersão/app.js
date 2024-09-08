
function pesquisar() {
    
    // Obtém a seção onde os resultados serão inseridos
    let section = document.getElementById("resultados-pesquisa"); 
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    console.log(campoPesquisa);
    
    if (!campoPesquisa){
        section.innerHTML = " <p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
        
    console.log(section);
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
        let resultados = ""; 
        let titulo = "";
        let descricao = "";
        let tags = "";


        // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo. toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

       //se no dado titulo includes campoPesquisa
         if (titulo.includes(campoPesquisa)  || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {   
            
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a> 
                    </h2> 
                    <p class="descrição-meta">${dado.descricao}</p>
    
                    <a href=${dado.link} target="_blank">Para mais informações</a>
                </div>
            `;
            }
            
        }
            
        if (!resultados ) {
             resultados = "<p>Nenhuma informação encontrada</p>"
        }
    
        // Atribui o HTML gerado para a seção de resultados
        section.innerHTML = resultados;
    }