import { inject, injectable } from 'tsyringe';

import { ILettersRepository } from '@modules/letters/repositories/ILettersRepository';
import { AppError } from '@shared/errors';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateLetterUseCase {
  constructor(
    @inject('LettersRepository')
    private lettersRepository: ILettersRepository,
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const letterAlreadyExists = await this.lettersRepository.findByName(name);

    if (letterAlreadyExists) {
      throw new AppError('title_already_registered');
    }

    await this.lettersRepository.create({
      name,
      description,
    });
  }
}

export { CreateLetterUseCase };
