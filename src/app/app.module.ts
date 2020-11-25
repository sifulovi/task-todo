import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoService} from './todo/service/todo.service';
import {FormsModule} from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './task-todo/assets/i18n/', '.json');
}
