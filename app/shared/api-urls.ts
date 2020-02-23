import { HOST } from 'app/environments/environment';

export const API_URLS = {
  cards: {
    cards: `${HOST}/cards`,
    card: `${HOST}/cards/\${id}`
  }
};
