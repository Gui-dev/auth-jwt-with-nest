import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common'

import { Role } from '../decorators/role.decorator'
import { JwtGuard } from '../guard/jwt/jwt.guard'
import { RoleGuard } from '../guard/role/role.guard'
import { CreateSessionBody } from './../../dtos/create-session-body'
import { AuthService, IAuthServiceResponse } from './auth.service'


@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('login')
  @HttpCode(201)
  public async login (@Body() body: CreateSessionBody): Promise<IAuthServiceResponse> {
    const { username, password } = body

    const user = await this.authService.execute({
      username,
      password
    })

    return user
  }

  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test')
  public async test (@Req() request) {
    return request.user
  }
}
