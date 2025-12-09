// Modelo que representa una actividad registrada por el usuario
export interface Activity {
  id?: string;            // id opcional (se puede generar con Date.now() o uuid)
  type: 'transport' | 'energy' | 'recycling';
  description: string;
  date: string;           // ISO date string
  points: number;
}
