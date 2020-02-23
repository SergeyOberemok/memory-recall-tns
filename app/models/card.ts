export interface CardDto {
  id: string;
  title: string;
  body: string;
  repeatedAt?: string;
  repeatAfter?: number;
}

export class Card implements CardDto {
  id: string;
  title: string;
  body: string;
  repeatedAt?: string;
  repeatAfter?: number;
}
