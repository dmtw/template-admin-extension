import { Injectable } from '@angular/core'

import { <%= this.changeCase.pascal(moduleName) %>ItemApi } from '@colmena/admin-lb-sdk'

@Injectable()
export class <%= this.changeCase.pascal(moduleName) %>Service {

  constructor(private service: <%= this.changeCase.pascal(moduleName) %>ItemApi) {}

  getItems() {
    return this.service.find()
  }
}
