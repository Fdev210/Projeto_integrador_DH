module.exports = (sequelize, Datatypes) => {
    const ComicPreferencia = sequelize.define("ComicPreferencia", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comics_id: {
          type: Datatypes.INTEGER,
          allowNull: false,
          references: {
            model: 'comics',
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
        }
    }, {
        tableName: 'comics_preferencias',
    });

    return ComicPreferencia
}