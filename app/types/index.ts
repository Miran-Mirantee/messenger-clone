import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User;
  seen: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};

export type ActivityInputs = {
  type?: string;
  participants?: number;
  priceRange?: string;
  accessibilityRange?: string;
};

export type ActivityParams = {
  type?: string;
  participants?: string;
  minPrice?: string;
  maxPrice?: string;
  minAccessibility?: string;
  maxAccessibility?: string;
};

export type Activity = {
  key: number;
  activity: string;
  type: string;
  participants: number;
  price: number;
  accessibility: number;
  link?: string;
  error?: string;
};
