module.exports = (sequelize, datatypes) => {
	const Movies = sequelize.define('Movies', 
	{
		id:{
			type: datatypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: datatypes.STRING,
		rating: datatypes.FLOAT,
		realese_date: datatypes.DATE,
        length: datatypes.INTEGER
	},
	{
		tableName: 'Movies',
		timestamps: true
	});
    return Movies;
}
	
	
