import { CreateWorkTimeDto } from './dto/create-work_time.dto';
import { UpdateWorkTimeDto } from './dto/update-work_time.dto';
import { WorkTime } from './models/work_time.model';
export declare class WorkTimeService {
    private readonly workTimeRepo;
    constructor(workTimeRepo: typeof WorkTime);
    create(createWorkTimeDto: CreateWorkTimeDto): Promise<WorkTime>;
    findAll(): Promise<WorkTime[]>;
    findOne(id: number): Promise<WorkTime>;
    update(id: number, updateWorkTimeDto: UpdateWorkTimeDto): Promise<[affectedCount: number, affectedRows: WorkTime[]]>;
    remove(id: number): Promise<number>;
    findOneByBusinesID(id: number): Promise<WorkTime>;
}
