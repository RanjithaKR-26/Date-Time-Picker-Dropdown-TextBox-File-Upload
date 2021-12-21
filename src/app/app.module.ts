import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AppComponent } from "./app.component";
import { PopupModule } from "@progress/kendo-angular-popup";
import { UploadsModule, UploadModule } from "@progress/kendo-angular-upload";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    DropDownsModule,
    LabelModule,
    UploadModule,
    HttpClientModule,
  ],
})
export class AppModule {}