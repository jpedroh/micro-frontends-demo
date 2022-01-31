import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-entry-lazy',
  templateUrl: './entry-lazy.component.html',
  styleUrls: ['./entry-lazy.component.css']
})
export class EntryLazyComponent implements OnInit {
  trollFace = assetUrl('troll-face.jpg')

  constructor() { }

  ngOnInit() {
  }

}
