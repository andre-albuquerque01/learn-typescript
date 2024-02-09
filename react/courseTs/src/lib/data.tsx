export const fetchAll = async () => {
    try {
        const response = await fetch("https://api.origamid.dev/json/transacoes.json", {
            method: 'GET',
        });
        const reqJson = await response.json();
        return reqJson
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
