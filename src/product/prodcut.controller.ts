import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.server';
import { Producto } from './interface.product';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  recibidosLosDos(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
  ) {
    return this.productService.getProductOne(Number(page), Number(limit));
  }

  @Get()
  getProducts() {
    return this.productService.getProduct();
  }
  @HttpCode(418)
  @Get('coffe')
  getCoffe() {
    return 'lo siento no puedo hacer un cafe por que soy una tetera';
  }
  @HttpCode(200)
  @Get(':id')
  extraerId(@Param('id') id: string) {
    return this.productService.getId(Number(id));
  }

  @Post()
  @UseGuards(AuthGuard)
  creandoBodys(@Body() user: Producto) {
    return this.productService.creadoBody(user);
  }
  @Put(':id')
  @UseGuards(AuthGuard)
  updateProductos(@Param('id') id: number, @Body() user: Partial<Producto>) {
    return this.productService.updateProduct(Number(id), user);
  }
  @HttpCode(200)
  @Delete(':id')
  @UseGuards(AuthGuard)
  methodDelete(@Param('id') id: string) {
    return this.productService.deleteProduct(Number(id));
  }
}
