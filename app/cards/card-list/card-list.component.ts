import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'app/models/card';
import { CardService } from 'app/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards$: Observable<Card[]>;

  constructor(private readonly cardService: CardService) {}

  ngOnInit(): void {
    this.cards$ = this.cardService.fetchCards();
  }
}
