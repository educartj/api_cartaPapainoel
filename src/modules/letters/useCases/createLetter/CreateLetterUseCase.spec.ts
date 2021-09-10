import { LettersRepositoryInMemory } from '@modules/letters/repositories/in-memory/LettersRepositoryInMemory';
import { AppError } from '@shared/errors';

import { CreateLetterUseCase } from './CreateLetterUseCase';

let createLetterUseCase: CreateLetterUseCase;
let lettersRepositoryInMemory: LettersRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    lettersRepositoryInMemory = new LettersRepositoryInMemory();
    createLetterUseCase = new CreateLetterUseCase(lettersRepositoryInMemory);
  });

  it('should be able to create a new letter', async () => {
    const letter = {
      name: 'Letter Test',
      description: 'Letter description Test',
    };

    await createLetterUseCase.execute({
      name: letter.name,
      description: letter.description,
    });

    const letterCreated = await lettersRepositoryInMemory.findByName(
      letter.name,
    );

    expect(letterCreated).toHaveProperty('id');
  });

  it('should not be able to create a new letter with name exists', async () => {
    const letter = {
      name: 'Letter Test',
      description: 'Letter description Test',
    };

    await createLetterUseCase.execute({
      name: letter.name,
      description: letter.description,
    });

    await expect(
      createLetterUseCase.execute({
        name: letter.name,
        description: letter.description,
      }),
    ).rejects.toEqual(new AppError('title_already_registered'));
  });
});
