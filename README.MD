## Server

To run the db in docker: 
```
docker-compose up -d
```

To seed the db: 
```
yarn prisma db seed
```

to reset the db and seed:
```
yarn prisma migrate reset
```

to run new migrations: 
```
yarn prisma migrate dev
```

The db push command is helpful for prototyping and synchronizing a development database with a Prisma Schema. However, it does not generate a migration history, and you have no control over how schema changes impact your data.

to quickly prototype and change schema: 
```
yarn prisma db push
```

open prisma studio: 
```
yarn prisma studio
```