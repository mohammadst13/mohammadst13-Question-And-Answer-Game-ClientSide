import { Component } from '@angular/core';

@Component({
selector : 'nav',
template: `
<mat-toolbar>
<mat-toolbar-row>
<button mat-button routerLink="/">Quiz</button>
<span style="flex: 1 1 auto;"></span>
<button mat-button routerLink="/register">Register</button>
</mat-toolbar-row>
</mat-toolbar>
`
})

export class NavComponent{}
