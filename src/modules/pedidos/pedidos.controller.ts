import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  async getPedidos() {
    return this.pedidosService.getPedidos();
  }

  @Get(':id')
  async getPedidoById(@Param('id') id: number) {
    return this.pedidosService.getPedidoById(id);
  }

  @Get('usuario/:usuarioId')
  async getPedidosByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.pedidosService.getPedidosByUsuario(usuarioId);
  }

  @Post()
  async createPedido(@Body() data: any) {
    return this.pedidosService.createPedido(data);
  }

  @Put(':id')
  async updatePedido(@Param('id') id: number, @Body() data: any) {
    return this.pedidosService.updatePedido(id, data);
  }

  @Delete(':id')
  async deletePedido(@Param('id') id: number) {
    return this.pedidosService.deletePedido(id);
  }
}
