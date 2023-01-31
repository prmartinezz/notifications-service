import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/htpp.module';
import { DatabaseModule } from './infra/database/database.module';


@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}