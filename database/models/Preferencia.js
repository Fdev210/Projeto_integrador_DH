module.exports = (sequelize, Datatypes) => {
    const Preferencia = sequelize.define("Preferencia", {
        ID: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        PREFERENCIAS: {
            type: Datatypes.STRING(50),
            allowNull: false
        },   
    }, {
        tableName: 'preferencias',
        timestamps: false
    });

    Preferencia.associate = function(models) {
        Preferencia.belongsToMany(models.Comic, {
            through: models.ComicPreferencia,
            foreignKey: 'PREFERENCIAS_ID',
            otherKey: 'COMICS_ID'
         });
    }
    return Preferencia;

}