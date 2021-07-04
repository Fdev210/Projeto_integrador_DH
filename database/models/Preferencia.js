module.exports = (sequelize, Datatypes) => {
    const Preferencia = sequelize.define("Preferencia", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        preferencias: {
            type: Datatypes.STRING(50),
            allowNull: false
        },   
    }, {
        tableName: 'preferencias',
    });

    Preferencia.associate = function(models) {
        Preferencia.belongsToMany(models.Cliente, {
            through: models.ClientePreferencia,
            foreignKey: 'preferencia_id',
        });

        Preferencia.belongsToMany(models.Comic, {
            through: models.ComicPreferencia,
            foreignKey: 'preferencia_id',
        });

    }

    return Preferencia;

}