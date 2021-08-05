module.exports = (sequelize, datatypes) => {
	const Genres = sequelize.define('Genres', 
	{
		id:{
			type: datatypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: datatypes.STRING,
		rating: datatypes.INTEGER,
		active: datatypes.INTEGER
	},
	{
		tableName: 'Genres',
		timestamps: true
	});
    return Genres;
}
	
	