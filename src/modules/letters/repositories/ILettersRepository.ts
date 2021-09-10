import { ICreateLetterDTO } from '../dtos/ICreateLetterDTO';
import { Letter } from '../infra/typeorm/entities/Letter';

interface ILettersRepository {
  findByName(name: string): Promise<Letter>;
  list(): Promise<Letter[]>;
  create({ name, description }: ICreateLetterDTO): Promise<void>;
}

export { ILettersRepository, ICreateLetterDTO };
