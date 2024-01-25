import { randomUUID } from "node:crypto"

interface QuestionProps {
  title: string
  content: string
  
}

export class Question {
  public id: string
  public title: string
  public content: string

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.id = id ?? randomUUID()
  }
}