# how to use

@Module({
imports: [
NestrandModule.forRoot({
min: 100,
max: 200
})],
controllers: [AppController],
providers: [AppService],
})
export class AppModule { }
