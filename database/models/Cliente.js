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
                allowNull: false,
                unique: true,
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
            },
            tipo_usuario: {
                type: DataTypes.STRING,
                defaultValue: 'usuario',
                allowNull: false
            },
            createdAt: {
              type: DataTypes.DATE,
              allowNull: false,
            },
            updatedAt: {
              type: DataTypes.DATE,
              allowNull: false,
            }

        },
        {
            tableName: 'clientes',
        }
    ); 
     
    Cliente.associate = function(models) {
        Cliente.belongsToMany(models.Preferencia, {
            through: models.ClientePreferencia,
            foreignKey: 'clientes_id',
        });
    }

    Cliente.addHook('beforeSave', async cliente => {
        if(cliente.senha) {
            cliente.senha_hash = await bcrypt.hash(cliente.senha, 12);
        }
    });

    return Cliente
}