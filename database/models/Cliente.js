module.exports = (sequelize, DataTypes) => sequelize.define("Cliente", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    {
        tableName: 'clientes',
    }
)