import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = '<%= this.changeCase.pathCase(moduleName) %>'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: '<%= this.changeCase.pascal(moduleName) %>',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 2, label: '<%= this.changeCase.pascal(moduleName) %>',   icon: 'icon-control-play', link: link() }
  ],
  sidebarLinks: [
    { weight: 1, type: 'title', label: '<%= this.changeCase.pascal(moduleName) %>' },
    { weight: 2, label: '<%= this.changeCase.pascal(moduleName) %>',   icon: 'icon-control-play', link: link() }
  ],
  dashboardLinks: {},
}

@NgModule()
export class <%= this.changeCase.pascal(moduleName) %>ConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

