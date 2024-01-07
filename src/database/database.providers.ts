import * as mongoose from 'mongoose';

/*
TypeOrmModule.forRoot({
    type: 'mongodb',
    host: '1.117.145.247',
    port: 27017,
    database: 'chattest',
    entities: [CatEntity],
    username: 'chattest',
    password: 'MeiMei*123',
    synchronize: true,
  }),
  */
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://1.117.145.247/chattest', {user:'chattest', pass: 'MeiMei*123'}),
  },
];