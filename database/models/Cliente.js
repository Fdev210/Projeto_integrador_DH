const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(12),
                allowNull: false
            },
            senha: {
                type: DataTypes.VIRTUAL,
                allowNull: false
            },
            senha_hash: {
                type: DataTypes.STRING(100)
            },
            data_nascimento: {
                type: DataTypes.DATE,
                allowNull: false
            }

        },
        {
            tableName: 'clientes',
        }
    );

    Cliente.addHook('beforeSave', async cliente => {
        if(cliente.senha) {
            cliente.senha_hash = await bcrypt.hash(cliente.senha, 12);
        }
    });

    return Cliente
}