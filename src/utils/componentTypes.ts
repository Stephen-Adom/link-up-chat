import { MouseEventHandler } from "react";

export type ButtonActionType = {
  actionName: string;
  actionFunc: MouseEventHandler<HTMLLIElement>;
};
