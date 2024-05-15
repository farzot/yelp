import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Owner } from './models/owner.model';
import { JwtAdminGuard } from '../common/guards/admin-auth.guard';

@ApiTags('Owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Create a new owner' })
  @ApiResponse({ status: 200, type: Owner })
  @Post()
  async createOwner(@Body() createOwnerDto: CreateOwnerDto) {
    try {
      return await this.ownerService.create(createOwnerDto);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get all owner' })
  @ApiResponse({ status: 200, type: [Owner] })
  @Get()
  async findAllOwner() {
    try {
      return this.ownerService.findAll();
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get owner by id' })
  @ApiResponse({ status: 200, type: Owner })
  @Get(':id')
  async findOneOwner(@Param('id') id: string) {
    try {
      return this.ownerService.findOne(+id);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Update owner by id' })
  @ApiResponse({ status: 200, type: Owner })
  @Patch(':id')
  async updateOwner(
    @Param('id') id: string,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ) {
    try {
      return this.ownerService.update(+id, updateOwnerDto);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Delete owner by id' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  async removeOwner(@Param('id') id: string) {
    try {
      return this.ownerService.remove(+id);
    } catch (error) {
      throw error.message;
    }
  }
}
