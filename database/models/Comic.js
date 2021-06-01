module.exports = (sequelize, Datatypes) => {
    const Comic = sequelize.define("Comic", {
        ID: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        TITULO: {
            type: Datatypes.STRING(50),
            allowNull: false
        },
        AUTOR: {
            type: Datatypes.STRING(50),
            allowNull: false
        },
        ANO: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        SINOPSE: {
            type: Datatypes.STRING(100),
            allowNull: false
        },   
    }, {
        tableName: 'comics',
        timestamps: false
    });

    Comic.associate = function(models) {
        Comic.belongsToMany(models.Preferencia, {
            through: models.ComicPreferencia,
            foreignKey: 'COMICS_ID',
            otherKey: 'PREFERENCIAS_ID'
         });
    }
    return Comic;
}

