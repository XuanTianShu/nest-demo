import { IsNotEmpty, IsNumberString } from 'class-validator';
import { isNumberObject } from 'util/types';

export class DemoDto {
    @IsNotEmpty()
    @IsNumberString({}, { message: '参数要求是数字!' })
    num: any;

}