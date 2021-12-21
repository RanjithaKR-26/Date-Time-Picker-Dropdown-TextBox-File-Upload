import { Component, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
  title = 'k1';
  public textboxValue = "";
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl("", Validators.email),
    acceptNews: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }
  public toggleText = "Hide";
  private show = true;

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }
  public clearForm(): void {
    this.registerForm.reset();
  }
  public value: Date = new Date(2019, 5, 1, 22);
  public format = "MM/dd/yyyy HH:mm";

  uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint
  
}
