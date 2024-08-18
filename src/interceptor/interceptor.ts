import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OmitirPassword implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          return data.map(({ password, ...rest }) => rest);
        } else if (data && typeof data === 'object') {
          //eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...rest } = data;
          return rest;
        }
        return data;
      }),
    );
  }
}
