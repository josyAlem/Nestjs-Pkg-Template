import { DynamicModule, Module } from '@nestjs/common';
import { RandomNumberServiceOptions } from './random-number-service-options';
import { RandomNumberService } from './random-number.service';

@Module({})
export class NestrandModule {
    static forRoot(
        options: Partial<RandomNumberServiceOptions>,
    ): DynamicModule {
        const providers = [
            {
                provide: RandomNumberService,
                useValue: new RandomNumberService(options),
            },
        ];

        return {
            providers: providers,
            exports: providers,
            module: NestrandModule,
        };
    }
}