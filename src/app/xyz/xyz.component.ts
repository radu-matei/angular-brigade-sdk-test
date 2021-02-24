import { Component, OnInit } from '@angular/core';
import * as brigade from '@brigadecore/brigade-sdk';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],
})
export class XyzComponent implements OnInit {
  apiAddress = '';
  rootPassword = '';

  constructor() {}

  ngOnInit(): void {}

  async getToken() {
    let client = new brigade.APIClient(this.apiAddress, '');

    let token = await client
      .authn()
      .sessions()
      .createRootSession(this.rootPassword);
    console.log(token);
  }
}
