export const listarUfs = async () => {
    let estados;
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
    await fetch(url, { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(dados => {            
            estados = dados.map((uf) => {return {...uf, data: new Date().toString()}});
        });
    return estados;
}
