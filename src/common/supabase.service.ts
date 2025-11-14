import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }

  async query(table: string) {
    return this.supabase.from(table).select('*');
  }

  async insert(table: string, data: any) {
    return this.supabase.from(table).insert([data]).select();
  }

  async update(table: string, id: number, data: any) {
    return this.supabase.from(table).update(data).eq('id', id).select();
  }

  async delete(table: string, id: number) {
    return this.supabase.from(table).delete().eq('id', id);
  }
}
