import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  validateToken(): string {
    return 'Token Validated';
  }

  login(loginUserDto: LoginUserDto): string {
    return `Logined as email:${loginUserDto.email} password:${loginUserDto.password}`;
  }
}
