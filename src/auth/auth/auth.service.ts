import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { users } from './../../utils/users'

interface IAuthService {
  username: string
  password: string
}

export interface IAuthServiceResponse {
  user: {
    username: string
    role: string
  }
  token: string
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
  ) { }

  public async execute ({ username, password }: IAuthService): Promise<IAuthServiceResponse> {
    const user = await this.validateCredentials(username, password)
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role
    }
    const token = this.jwtService.sign(payload)

    return {
      user: {
        username,
        role: user.role
      },
      token
    }
  }

  private async validateCredentials (username: string, password: string) {
    const user = users.find(user =>
      user.username === username
    )
    if (!user) {
      throw new BadRequestException('User or password invalid')
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw new BadRequestException('User or password invalid')
    }
    return user
  }
}
