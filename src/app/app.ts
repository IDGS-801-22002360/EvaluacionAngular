import { Component } from '@angular/core';

// app.ts
@Component({
    selector: 'app-root',
    template: `
    <h1>{{ title }}</h1>
    <app-validador>

    </app-validador>
    `
})
export class App {
    title = 'EvaluacionAngular';
}
