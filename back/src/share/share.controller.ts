import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShareService } from './share.service';
import { CreateShareDto } from './dto/create-share.dto';
import { UploadShareDto } from './dto/update-share.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

// @ApiBearerAuth()
// @UseGuards(AuthGuard)
@ApiTags('Shares')
@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  // @Post()
  // create(@Body() createShareDto: CreateShareDto) {
  //   return this.shareService.create(createShareDto);
  // }

  @Get()
  findAll() {
    return this.shareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shareService.findOne(id);
  }

  @Get('paid/:id')
  paidById(@Param('id') id: string) {
    return this.shareService.paidById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UploadShareDto: UploadShareDto) {
    return this.shareService.update(id, UploadShareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shareService.remove(id);
  }
}
