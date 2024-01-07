import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
  CatsModule, CoreModule, DatabaseModule],
})
export class AppModule {}
