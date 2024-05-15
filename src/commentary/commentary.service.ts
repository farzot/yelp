import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Commentary } from './models/commentary.model';

@Injectable()
export class CommentaryService {
  constructor(@InjectModel(Commentary) private readonly commentRepo: typeof Commentary){}

  async create(createCommentaryDto: CreateCommentaryDto) {
    try {
      return await this.commentRepo.create(createCommentaryDto);
    } catch (error) {
      throw error.message
    }
  }

  async findAll() {
    try {
      return await this.commentRepo.findAll({include: {all: true}});
    } catch (error) {
      throw error.message;
    }
  }

  async findOne(id: number) {
     try {
       return await this.commentRepo.findByPk(id,{ include: { all: true } });
     } catch (error) {
       throw error.message;
     }
  }

 async update(id: number, updateCommentaryDto: UpdateCommentaryDto) {
   try {
    const check = await this.findOne(id)
    if(!check){
      throw new NotFoundException('Comment not found' )
    }
     return await this.commentRepo.update(updateCommentaryDto, {where: {id:id}, returning: true});
   } catch (error) {
     throw error.message;
   }
  }

  async remove(id: number) {
    try {
       const check = await this.findOne(id);
       if (!check) {
         throw new NotFoundException('Comment not found');
       }
      return await this.commentRepo.destroy({
        where: { id: id },
      });
    } catch (error) {
      throw error.message;
    }
  }
}
