import express from "express"; 

const app = express();

app.get("/livros", (req, res) => {
    const livros = [
        {
            id: 1,
            nome: "O Senhor dos Anéis"
        },
        {
            id: 2,
            nome: "O Hobbit"
        },
        {
            id: 3, 
            nome: "O Silmarillion"
        }
    ]
    res.send(livros);
})

app.listen(3000, () => {
    console.log("API já está funcionando e aceitando requisições")
})
