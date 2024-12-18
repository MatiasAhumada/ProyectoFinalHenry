import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { State } from 'src/state/entities/state.entity';
@Module({
  imports: [
    FileUploadModule,
    TypeOrmModule.forFeature([User, State])//importar la entidad User 
],
  controllers: [UserController],
  providers: [UserService, FileUploadService, CloudinaryService],
})
export class UserModule {}
