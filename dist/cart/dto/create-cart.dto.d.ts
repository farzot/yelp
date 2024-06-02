export declare class CreateCartDto {
    client_id: number;
    business_id: number;
    totalPrice: number;
    status: 'active' | 'completed' | 'converted';
}
