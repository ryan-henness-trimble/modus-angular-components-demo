import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="container">
      <div *ngIf="showAlert" class="alert">
        <modus-alert [dismissible]="true" [message]="alertMessage" (dismissClick)="handleDismissClick()"></modus-alert>
      </div>
      <modus-card [height]="'350px'" [width]="'300px'">
        <div class="card-body">
          <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
          <div class="name">
            Addisyn Blumberg
          </div>
          <div *ngIf="mode === 'view'" class="title">{{title}}</div>
          <modus-text-input *ngIf="mode === 'edit'" class="title" [value]="title" [clearable]="false" (valueChange)="handleValueChange($event)"></modus-text-input>
          <div class="badges">
            <modus-badge [color]="'primary'">TypeScript</modus-badge>
            <modus-badge [color]="'danger'">Angular</modus-badge>
            <modus-badge [color]="'secondary'">StencilJS</modus-badge>
          </div>
        </div>
      </modus-card>
      <modus-button [buttonStyle]="'outline'" class="button" [color]="'primary'" [disabled]="false" (buttonClick)="handleButtonClick()">
        {{mode === 'view' ? 'Edit Card' : 'Finish'}}
      </modus-button>
    </div>
  `
})
export class AppComponent {
  alertMessage = 'You are currently viewing the Modus Angular Components demo!';
  showAlert = true;
  title: string = 'Senior Web Developer';
  mode: 'view' | 'edit' = 'view';
  newTitle: string = this.title;

  handleButtonClick = (): void => {
    if (this.mode === 'edit') {
      this.title = this.newTitle;
    }

    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

  handleDismissClick = (): void => {
    this.showAlert = false;
  }

  handleValueChange = (e: Event) => {
    this.newTitle = (e as CustomEvent).detail;
  }
}
