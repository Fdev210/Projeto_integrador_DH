function CadastroModel(id, nome, email, telefone, senha, confirmaSenha, nascimento) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.senha = senha;
    this.confirmaSenha = confirmaSenha;
    this.nascimento = nascimento;
}

module.exports = CadastroModel;
