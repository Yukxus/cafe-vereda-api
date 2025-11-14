import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Get()
  async getReservas() {
    return this.reservasService.getReservas();
  }

  @Get(':id')
  async getReservaById(@Param('id') id: number) {
    return this.reservasService.getReservaById(id);
  }

  @Get('usuario/:usuarioId')
  async getReservasByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.reservasService.getReservasByUsuario(usuarioId);
  }

  @Post()
  async createReserva(@Body() data: any) {
    return this.reservasService.createReserva(data);
  }

  @Put(':id')
  async updateReserva(@Param('id') id: number, @Body() data: any) {
    return this.reservasService.updateReserva(id, data);
  }

  @Delete(':id')
  async deleteReserva(@Param('id') id: number) {
    return this.reservasService.deleteReserva(id);
  }

  @Get('fecha/:fecha')
  async getReservasByFecha(@Param('fecha') fecha: string) {
    return this.reservasService.getReservasByFecha(fecha);
  }
}
