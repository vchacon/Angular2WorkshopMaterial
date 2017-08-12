import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mrs. Nice'},
      {id: 12, name: 'The Narco'},
      {id: 13, name: 'Bombasto The DeNada'},
      {id: 14, name: 'Mr. Celeritas'},
      {id: 15, name: 'Dr. Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynamado The Man'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma The Grand Narco'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}
