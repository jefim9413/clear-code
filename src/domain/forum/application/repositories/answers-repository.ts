import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>
  delete(answer: Answer): Promise<void>
  save(answer: Answer): Promise<void>
  create(answer: Answer): Promise<void>
}
