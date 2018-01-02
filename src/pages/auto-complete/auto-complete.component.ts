import { Component } from '@angular/core';
import { CardService } from '../../services';
import { Row } from './row.model';

@Component({
    selector: 'auto-complete',
    templateUrl: 'auto-complete.component.html'
})

export class AutoCompleteComponent {

    text: string;

    results: string[] = [];

    formattedRows: Row[] = [];

    constructor(private cardService: CardService) {
        this.cardService.getDarkMag().subscribe((response) => this.man(response))
    }

    man(response) {
        const newRows : Row[] = [];
        var el = <HTMLElement> document.createElement('html');
        el.innerHTML = response._body;
        const rows =  el.querySelector(".SearchTable > tbody").children;

        for( let i = 0 ; i < rows.length ; i ++) {
            let newRow: Row = new Row();

            let row = rows[i];
            let cells = row.children;

            newRow.packName = cells[1].innerText;
            newRow.number = cells[2].innerText;
            newRow.cardName = cells[4].innerText;
            newRows.push(newRow);
        }
        console.log();
    }

    search(event) {
        console.log("Search triggered");
        this.results = [];
        const results: string[] = [
            'Daniel',
            'Paul'
        ]

        for (let i = 0; i < results.length; i++) {
            if (results[i].indexOf(event.query) >= 0) {
                this.results.push(results[i]);
            }
        }
    }

}