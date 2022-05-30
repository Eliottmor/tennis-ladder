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