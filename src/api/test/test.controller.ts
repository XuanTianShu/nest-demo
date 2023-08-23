import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UtilsService } from '../../service/utils/utils.service'
import { promises } from 'dns';
import { DemoDto } from 'src/dto/demo';


@Controller('api/test')
export class TestController {
    constructor(private readonly UtilsService: UtilsService) { }

    @Post()
    async double(@Body(new ValidationPipe({
        whitelist: true,//开启过滤
    })) info: DemoDto): Promise<any> {
        return this.UtilsService.double(info.num);
    }
}
