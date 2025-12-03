import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(private userService: UserService) {}

	async validateUser(email: string, password: string) {
		const user = await this.userService.findByEmail(email);
		if (!user) throw new UnauthorizedException('Email not found');
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) throw new UnauthorizedException('Password is not correct');
		return user;
	}
}
