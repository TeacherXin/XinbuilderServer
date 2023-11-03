import { Message } from "./talk-record.interface"

export class createTalkRecord {
  readonly fromName: string
  readonly toName: string
  messageList: Array<Message>
}

export class addOneToTalkRecord {
  readonly fromName: string
  readonly toName: string
  readonly message: Message
}

export class findTalkRecord {
  readonly fromName: string
  readonly toName: string
}

export class findAllTalk {
  readonly fromName: string
}