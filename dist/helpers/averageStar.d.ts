declare const Model: any, DataTypes: any;
declare class Star extends Model {
    static init(sequelize: any): void;
    static updateBusinessAverageStar(businessId: any, newStarValue: any): Promise<void>;
}
