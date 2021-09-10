import { Letter } from '@modules/letters/infra/typeorm/entities/Letter';

import { ILettersRepository, ICreateLetterDTO } from '../ILettersRepository';

class LettersRepositoryInMemory implements ILettersRepository {
  letters: Letter[] = [];

  async findByName(name: string): Promise<Letter> {
    const letter = this.letters.find(letter => letter.name === name);
    return letter;
  }

  async list(): Promise<Letter[]> {
    const all = this.letters;
    return all;
  }

  async create({ name, description }: ICreateLetterDTO): Promise<void> {
    const letter = new Letter();

    Object.assign(letter, {
      name,
      description,
    });

    this.letters.push(letter);
  }
}

export { LettersRepositoryInMemory };
