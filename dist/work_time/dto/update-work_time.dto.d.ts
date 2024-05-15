import { CreateWorkTimeDto } from './create-work_time.dto';
declare const UpdateWorkTimeDto_base: import("@nestjs/common").Type<Partial<CreateWorkTimeDto>>;
export declare class UpdateWorkTimeDto extends UpdateWorkTimeDto_base {
    Day: string;
    open_hour: string;
    close_hour: string;
    business_id: number;
}
export {};
