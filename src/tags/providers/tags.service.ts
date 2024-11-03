import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Tag } from '../tag.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTagDto } from '../dtos/create-tags.dto';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject model
     */
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>,
  ) {}
  public async createTag(createTagDto: CreateTagDto) {
    const newTag = new this.tagModel(createTagDto);
    return await newTag.save();
  }
}
