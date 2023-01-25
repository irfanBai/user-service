import { LoggerService } from "./logger.service";
import { Injectable } from "@angular/core"

@Injectable()
export class UserService {
    constructor( private logger: LoggerService) {}
    users = [
        {
            name: 'john',
            status: 'active'
        },
        {
            name: 'jmarkohn',
            status: 'inactive'
        },
        {
            name: 'steve',
            status: 'active'
        },
    ]

    AddNewuser(name:string, status: string) {
        this.users.push({name: name, status: status});
        this.logger.logMessage(name, status)
    }
}