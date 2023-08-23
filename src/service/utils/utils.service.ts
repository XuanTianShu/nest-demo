import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
    double(num): number {
        return num * 2;
    }
}
