import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('user/login')
	async login(@Body() data: { email: string; password: string }) {
		return this.authService.validateUser(data.email, data.password);
	}
}
