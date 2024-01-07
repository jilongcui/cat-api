import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { DatabaseModule } from 'src/database/database.module';
import { catsProviders } from './cat.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [CatsController],
  providers: [CatsService, ...catsProviders],
})
export class CatsModule {}
