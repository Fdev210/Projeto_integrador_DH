module.exports = (sequelize, DataTypes) => sequelize.define("Cliente", 
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncremetn: true,
            primaryKey: true
        },
        NOME: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        EMAIL: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        TELEFONE: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        SENHA: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        DATA_NASCIMENTO: {
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    {
        tableName: 'clientes',
        timestamps: false
    }
)