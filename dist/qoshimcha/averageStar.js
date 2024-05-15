const { Model, DataTypes } = require('sequelize');
class Star extends Model {
    static init(sequelize) {
        super.init({
            client_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            business_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            star: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Star',
        });
        this.belongsTo(require('./Business'), { foreignKey: 'business_id' });
    }
    static async updateBusinessAverageStar(businessId, newStarValue) {
        const business = await this.findOne({
            where: { business_id: businessId },
            include: [
                {
                    model: require('./Business'),
                },
            ],
        });
        if (!business) {
            throw new Error('Business not found');
        }
        const currentStars = await this.findAll({
            where: { business_id: businessId },
        });
        const totalStars = currentStars.length + 1;
        const newAverageStar = ((business.dataValues.average_star || 0) * (totalStars - 1) +
            newStarValue) /
            totalStars;
        await business.Business.update({ average_star: newAverageStar }, { where: { id: businessId } });
    }
}
module.exports = Star;
//# sourceMappingURL=averageStar.js.map