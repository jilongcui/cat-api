import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Cat } from './interfaces/cat.interface';

@ApiTags('Cats')
@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a cat' })
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all cats' })
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one cat with id' })
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a cat' })
  update(@Param('id') id: string, @Body() updateCatDto: Partial<Cat>) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cat with id' })
  remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
