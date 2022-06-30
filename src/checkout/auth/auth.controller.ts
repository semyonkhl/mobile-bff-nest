import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('token')
  validateToken(): string {
    return this.authService.validateToken();
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto): string {
    return this.authService.login(loginUserDto);
  }
}
