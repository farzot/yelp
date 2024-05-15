import { WorkTimeService } from './work_time.service';
import { CreateWorkTimeDto } from './dto/create-work_time.dto';
import { UpdateWorkTimeDto } from './dto/update-work_time.dto';
import { WorkTime } from './models/work_time.model';
export declare class WorkTimeController {
    private readonly workTimeService;
    constructor(workTimeService: WorkTimeService);
    createWorkTime(createWorkTimeDto: CreateWorkTimeDto): Promise<WorkTime>;
    findAllWorkTime(): Promise<WorkTime[]>;
    findOneWorkTime(id: string): Promise<WorkTime>;
    updateWorkTime(id: string, updateWorkTimeDto: UpdateWorkTimeDto): Promise<[affectedCount: number, affectedRows: WorkTime[]]>;
    removeWorkTime(id: string): Promise<number>;
}
