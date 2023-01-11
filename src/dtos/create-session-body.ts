import { IsNotEmpty } from 'class-validator'

export class CreateSessionBody {
  @IsNotEmpty()
  username: string
  @IsNotEmpty()
  password: string
}
