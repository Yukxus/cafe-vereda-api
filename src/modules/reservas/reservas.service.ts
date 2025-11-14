import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../common/supabase.service';

@Injectable()
export class ReservasService {
  constructor(private supabaseService: SupabaseService) {}

  async getReservas() {
    const { data, error } = await this.supabaseService.query('reservas');
    if (error) throw new Error(error.message);
    return data;
  }

  async getReservaById(id: number) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('reservas')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  async getReservasByUsuario(usuarioId: string) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('reservas')
      .select('*')
      .eq('usuario_id', usuarioId);
    if (error) throw new Error(error.message);
    return data;
  }

  async getReservasByFecha(fecha: string) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('reservas')
      .select('*')
      .eq('fecha', fecha);
    if (error) throw new Error(error.message);
    return data;
  }

  async createReserva(data: any) {
    return this.supabaseService.insert('reservas', data);
  }

  async updateReserva(id: number, data: any) {
    return this.supabaseService.update('reservas', id, data);
  }

  async deleteReserva(id: number) {
    return this.supabaseService.delete('reservas', id);
  }
}
