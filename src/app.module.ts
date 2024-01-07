import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { DatabaseModule } from './database/database.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  CatsModule, CoreModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
