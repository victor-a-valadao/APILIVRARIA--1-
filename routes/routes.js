////////////////MÓDULOS /////////////////////
const express = require("express");
const router = express.Router();
//////CONTROLLERS
const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");
////////////////Requisições HTTP Principal /////////////////////
router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Livraria" });
});
////////////////Requisições HTTP Funcionario /////////////////////
//POST - CADASTRAR
router.post("/add_funcionario", funcionarioController.FuncionarioCreate);
//GET - LISTAR
router.get("/funcionario/:id?", funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);

router.post("/login", funcionarioController.FuncionarioVerificaLogin);

/////LIVRO////

//POST - CADASTRAR
router.post("/add_livro", livroController.livroCreate);

//GET - LISTAR
router.get("/livros/:id?", livroController.LivroListar);

module.exports = router;
