module.exports = (sequelize, Datatypes) => {
    const Comic = sequelize.define("Comic", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: Datatypes.STRING(50), 
            allowNull: false
        },
        autor: {
            type: Datatypes.STRING(50),
            allowNull: false
        },
        ano: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        sinopse: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        capa: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        antevisao: {
            type: Datatypes.JSON,
            allowNull: false
        },
        endereço: {
            type: Datatypes.STRING,
            allowNull: false
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
        tableName: 'comics',
    });

    Comic.associate = function(models) {
        Comic.belongsToMany(models.Preferencia, {
            through: models.ComicPreferencia,
            foreignKey: 'comics_id',
         });
    }
    return Comic; 
}

