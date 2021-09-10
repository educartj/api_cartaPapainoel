import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListLettersUseCase } from './ListLetterUseCase';

class ListLettersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLettersUseCase = container.resolve(ListLettersUseCase);
    const all = await listLettersUseCase.execute();

    return response.json(all);
  }
}

export { ListLettersController };
