import { Component, OnInit } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    singleSpaPropsSubject.pipe(map((props: any) => props.user)).subscribe(user => {
      this.user$ = user
    })
  }

  title = 'main';
  user$ = of(null);
}
