import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsService } from './service/utils/utils.service';
import { TestController } from './api/test/test.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, UtilsService],
})
export class AppModule { }
