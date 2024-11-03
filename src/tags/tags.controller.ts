import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tags.dto';
import { TagsService } from './providers/tags.service';

@Controller('tags')
export class TagsController {
  constructor(
    /**
     * inject the TagService
     */
    private readonly tagService: TagsService,
  ) {}
  @Post()
  public createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagService.createTag(createTagDto);
  }
}
