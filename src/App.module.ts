import { Module } from '@nestjs/common';
import { HealthcheckController } from './HealthcheckController';
import { ConfigModule } from '@Services/config/Config.module';

const httpControllers = [HealthcheckController];

@Module({
  imports: [ConfigModule],
  controllers: [...httpControllers],
  providers: [],
})
export class AppModule {}
