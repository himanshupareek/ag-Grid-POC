import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";
import { HttpService } from "./shared/services/http.service";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        )
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
