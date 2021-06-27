module.exports = (sequelize, Datatypes) => {
    const ClientePreferencia = sequelize.define("ClientePreferencia", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          clientes_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
              model: 'clientes',
              key: 'id'
            }
          },
          preferencia_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
              model: 'preferencias',
              key: 'id'
            }
          },
          createdAt: {
            type: Datatypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Datatypes.DATE,
            allowNull: false,
          },
    }, {
        tableName: 'clientes_preferencias',
    });

    return ClientePreferencia
}