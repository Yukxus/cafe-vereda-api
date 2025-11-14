import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../common/supabase.service';

@Injectable()
export class MenuService {
  constructor(private supabaseService: SupabaseService) {}

  async getCategorias() {
    const { data, error } = await this.supabaseService.query('categorias_menu');
    if (error) throw new Error(error.message);
    return data;
  }

  async getProductos() {
    const { data, error } = await this.supabaseService.query('productos_menu');
    if (error) throw new Error(error.message);
    return data;
  }

  async getProductosByCategoria(categoriaId: number) {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('productos_menu')
      .select('*')
      .eq('categoria_id', categoriaId);
    if (error) throw new Error(error.message);
    return data;
  }

  async createProducto(data: any) {
    return this.supabaseService.insert('productos_menu', data);
  }

  async updateProducto(id: number, data: any) {
    return this.supabaseService.update('productos_menu', id, data);
  }

  async deleteProducto(id: number) {
    return this.supabaseService.delete('productos_menu', id);
  }
}
