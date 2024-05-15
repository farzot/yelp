import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Business } from './models/business.model';
import { JwtAdminGuard } from '../common/guards/admin-auth.guard';

@ApiTags('Business')
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Create a new business' })
  @ApiResponse({ status: 200, type: Business })
  @Post()
  async createBusiness(@Body() createBusinessDto: CreateBusinessDto) {
    try {
      return this.businessService.create(createBusinessDto);
    } catch (error) {
      throw error.message;
    }
  }

  // @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get all business' })
  @ApiResponse({ status: 200, type: [Business] })
  @Get()
  async findAllBusiness() {
    try {
      return this.businessService.findAll();
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get business by id' })
  @ApiResponse({ status: 200, type: Business })
  @Get(':id')
  async findOneBusiness(@Param('id') id: string) {
    try {
      return this.businessService.findOne(+id);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Update business by id' })
  @ApiResponse({ status: 200, type: Business })
  @Patch(':id')
  async updateBusiness(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return this.businessService.update(+id, updateBusinessDto);
  }
  @ApiOperation({ summary: 'Delete business by id' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  async removeBusiness(@Param('id') id: string) {
    return this.businessService.remove(+id);
  }
}
