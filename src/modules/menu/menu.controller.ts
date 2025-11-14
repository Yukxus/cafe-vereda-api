import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('categorias')
  async getCategorias() {
    return this.menuService.getCategorias();
  }

  @Get('productos')
  async getProductos() {
    return this.menuService.getProductos();
  }

  @Get('productos/:categoriaId')
  async getProductosByCategoria(@Param('categoriaId') categoriaId: number) {
    return this.menuService.getProductosByCategoria(categoriaId);
  }

  @Post('productos')
  async createProducto(@Body() data: any) {
    return this.menuService.createProducto(data);
  }

  @Put('productos/:id')
  async updateProducto(@Param('id') id: number, @Body() data: any) {
    return this.menuService.updateProducto(id, data);
  }

  @Delete('productos/:id')
  async deleteProducto(@Param('id') id: number) {
    return this.menuService.deleteProducto(id);
  }
}
