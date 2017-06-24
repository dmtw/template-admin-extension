import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { <%= this.changeCase.pascal(moduleName) %>RoutingModule } from './<%= this.changeCase.pathCase(moduleName) %>-routing.module'
import { <%= this.changeCase.pascal(moduleName) %>Service } from './<%= this.changeCase.pathCase(moduleName) %>.service'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { ItemsComponent } from './components/items.component'

@NgModule({
  imports: [
    CommonModule,
    ColmenaUiModule,
    <%= this.changeCase.pascal(moduleName) %>RoutingModule,
  ],
  providers: [
    <%= this.changeCase.pascal(moduleName) %>Service,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    IndexComponent,
    ItemsComponent,
  ],
})
export class <%= this.changeCase.pascal(moduleName) %>Module { }
