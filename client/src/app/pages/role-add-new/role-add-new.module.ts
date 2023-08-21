import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleAddNewRoutingModule } from './role-add-new-routing.module';
import { RoleAddNewComponent } from './role-add-new.component';
import {TuiExpandModule} from '@taiga-ui/core'
import {TuiAccordionModule} from '@taiga-ui/kit'
import {TuiDataListWrapperModule, TuiComboBoxModule} from '@taiga-ui/kit';


@NgModule({
  declarations: [
    RoleAddNewComponent
  ],
  imports: [
    CommonModule,
    RoleAddNewRoutingModule,
    TuiExpandModule,
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiComboBoxModule
  ]
})
export class RoleAddNewModule { }
