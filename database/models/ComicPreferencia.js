module.exports = (sequelize, Datatypes) => {
    const ComicPreferencia = sequelize.define("ComicPreferencia", {
        ID: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, {
        tableName: 'comics_preferencias',
        timestamps: false
    });

    ComicPreferencia.associate = function(models) {
        ComicPreferencia.belongsTo(models.Comic, {
            as: 'Comic',
            foreignKey: 'COMICS_ID'
        })
    }

    ComicPreferencia.associate = function(models) {
        ComicPreferencia.belongsTo(models.Preferencia, {
            as: 'Preferencia',
            foreignKey: 'PREFERENCIA_ID'
        })
    }

    return ComicPreferencia
}