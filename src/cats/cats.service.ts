import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL') private readonly catModel: Model<Cat>
  ) {}
  
  
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    // const objectId = new ObjectId(id);
    return this.catModel.findOne({ where: { id: id } });
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.create(createCatDto);
  }

  async update(id: string, user: Partial<Cat>): Promise<Cat> {
    await this.catModel.updateOne({id}, user);
    // const objectId = new ObjectId(id);
    return this.catModel.findOne({where : {id: id}});
  }

  async delete(id: string): Promise<void> {
    await this.catModel.deleteOne({id: id}).exec();
  }
}
