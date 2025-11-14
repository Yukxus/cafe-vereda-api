import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../common/supabase.service';

@Injectable()
export class PedidosService {
  constructor(private supabaseService: SupabaseService) {}

  async getPedidos() {
    const { data, error } = await this.supabaseService.query('pedidos');
    if (error) throw new Error(error.message);
    return data;
  }

  async getPedidoById(id: number) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('pedidos')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  async getPedidosByUsuario(usuarioId: string) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('pedidos')
      .select('*')
      .eq('usuario_id', usuarioId);
    if (error) throw new Error(error.message);
    return data;
  }

  async createPedido(data: any) {
    return this.supabaseService.insert('pedidos', data);
  }

  async updatePedido(id: number, data: any) {
    return this.supabaseService.update('pedidos', id, data);
  }

  async deletePedido(id: number) {
    return this.supabaseService.delete('pedidos', id);
  }
}
