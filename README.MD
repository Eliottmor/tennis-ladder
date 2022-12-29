## Server

To run the db in docker: 
```
docker-compose up -d
```

To seed the db: 
```
npx prisma db seed
```

to reset the db and seed:
```
npx prisma migrate reset
```

to run new migrations: 
```
npx prisma migrate dev
```

The db push command is helpful for prototyping and synchronizing a development database with a Prisma Schema. However, it does not generate a migration history, and you have no control over how schema changes impact your data.

to quickly prototype and change schema: 
```
npx prisma db push
```

open prisma studio: 
```
npx prisma studio
```