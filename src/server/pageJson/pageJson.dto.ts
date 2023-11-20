export class CreatePage{
  readonly pageId: string;
  readonly pageName: string;
  readonly pageJson: Object;
  readonly username: string;
  readonly isMobile: boolean;
}

export class EditPage{
  readonly pageId: string;
  readonly pageName: string;
  readonly pageJson: Object
}

export class PageInfo {
  readonly pageId: string;
}

export class UserInfo {
  readonly username: string;
}