import { inject, injectable } from 'tsyringe';

import { Letter } from '@modules/letters/infra/typeorm/entities/Letter';
import { ILettersRepository } from '@modules/letters/repositories/ILettersRepository';

@injectable()
class ListLettersUseCase {
  constructor(
    @inject('LettersRepository')
    private lettersRepository: ILettersRepository,
  ) { }

  async execute(): Promise<Letter[]> {
    const letters = await this.lettersRepository.list();
    return letters;
  }
}

export { ListLettersUseCase };
