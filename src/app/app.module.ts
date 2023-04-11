import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './my-components/child1/child1.component';
import { Child2Component } from './my-components/child2/child2.component';
import { ClickFunctionEventComponent } from './my-components/click-function-event/click-function-event.component';
import { PropertyBindingComponent } from './my-components/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './my-components/two-way-binding/two-way-binding.component';
import { ConditionStatementComponent } from './my-components/condition-statement/condition-statement.component';
import { PassvalueTypescriptComponent } from './my-components/passvalue-typescript/passvalue-typescript.component';
import { EventBindingComponent } from './my-components/event-binding/event-binding.component';
import { ClassBindingComponent } from './my-components/class-binding/class-binding.component';
import { CustomPipesComponent } from './my-components/custom-pipes/custom-pipes.component';
import { AngularPipesComponent } from './my-components/angular-pipes/angular-pipes.component';
import { HideshowDirective } from './directives/hideshow.directive';
import { SquarePipe } from './mycustom-pipes/square.pipe';
import { CustomDirectivesComponent } from './my-components/custom-directives/custom-directives.component';
import { DisplayUserComponent } from './my-components/display-user/display-user.component';
import { AngularRoutingDemoComponent } from './my-components/angular-routing-demo/angular-routing-demo.component';
import { HomeComponent } from './my-components/home/home.component';
import { AboutComponent } from './my-components/about/about.component';
import { BlogComponent } from './my-components/blog/blog.component';
import { ContactsComponent } from './my-components/contacts/contacts.component';
import { CustomRoutingComponent } from './my-components/custom-routing/custom-routing.component';
import { ModuleRoutingComponent } from './my-components/module-routing/module-routing.component';
import { GroupRoutingComponent } from './my-components/group-routing/group-routing.component';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { PagenotfoundComponent } from './my-components/pagenotfound/pagenotfound.component';
import { DisplayApiDataComponent } from './my-components/display-api-data/display-api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ClickFunctionEventComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    ConditionStatementComponent,
    PassvalueTypescriptComponent,
    EventBindingComponent,
    ClassBindingComponent,
    CustomPipesComponent,
    AngularPipesComponent,
    SquarePipe,
    HideshowDirective,
    CustomDirectivesComponent,
    DisplayUserComponent,
    AngularRoutingDemoComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    CustomRoutingComponent,
    ModuleRoutingComponent,
    GroupRoutingComponent,
    PagenotfoundComponent,
    DisplayApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
