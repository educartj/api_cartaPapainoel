import { getRepository, Repository } from 'typeorm';

import {
  ICreateLetterDTO,
  ILettersRepository,
} from '@modules/letters/repositories/ILettersRepository';

import { Letter } from '../entities/Letter';

class LettersRepository implements ILettersRepository {
  private repository: Repository<Letter>;

  constructor() {
    this.repository = getRepository(Letter);
  }

  async create({ description, name }: ICreateLetterDTO): Promise<void> {
    const letter = this.repository.create({ description, name });
    await this.repository.save(letter);
  }

  async list(): Promise<Letter[]> {
    const letters = await this.repository.find();
    return letters;
  }

  async findByName(name: string): Promise<Letter> {
    const letter = await this.repository.findOne({ name });
    return letter;
  }
}

export { LettersRepository };
