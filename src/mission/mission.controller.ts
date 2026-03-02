import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('mission')
export class MissionController {
    constructor(private readonly missionservice : MissionService){}

        @Get('summary')
        getSummary(){
            return this.missionservice.getSummary()
        }
    
}
