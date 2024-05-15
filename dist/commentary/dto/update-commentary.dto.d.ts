import { CreateCommentaryDto } from './create-commentary.dto';
declare const UpdateCommentaryDto_base: import("@nestjs/common").Type<Partial<CreateCommentaryDto>>;
export declare class UpdateCommentaryDto extends UpdateCommentaryDto_base {
    comment: string;
    client_id: number;
    business_id: number;
}
export {};
