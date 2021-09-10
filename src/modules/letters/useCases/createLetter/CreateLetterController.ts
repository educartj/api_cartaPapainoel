import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateLetterUseCase } from './CreateLetterUseCase';

class CreateLetterController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createLetterUseCase = container.resolve(CreateLetterUseCase);

    await createLetterUseCase.execute({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateLetterController };
