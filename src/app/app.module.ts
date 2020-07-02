import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule,NgbProgressbarModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './components/profile/profile.component';
//import { CommonModule } from '@angular/common';
import { ModalEditComponent } from './components/modalEdit/modalEdit.component';
import { ProductDetailComponent } from './components/productDetail/productDetail.component';
import { NewModuleComponent } from './new-module/new-module.component';
import { SubProfileComponent } from './components/profile/subProfile/subProfile.component';
import { FormsModule } from '@angular/forms';
import { PostServiceService } from './service/postService.service'
import { HttpModule} from '@angular/http';
import { ModalEditPostComponent } from './components/modalEditPost/modalEditPost.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
import { UidemoComponent } from './components/uidemo/uidemo.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { NgxTimerModule } from 'ngx-timer';
import { TinymceModule } from 'angular2-tinymce';

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
   declarations: [
      AppComponent,
      AdminComponent,
      AuthComponent,
      NavigationComponent,
      NavContentComponent,
      NavGroupComponent,
      NavCollapseComponent,
      NavItemComponent,
      NavBarComponent,
      NavLeftComponent,
      NavSearchComponent,
      NavRightComponent,
      ConfigurationComponent,
      ToggleFullScreenDirective,
      ProfileComponent,
      ModalEditComponent,
      ProductDetailComponent,
      NewModuleComponent,
      SubProfileComponent,
      ModalEditPostComponent,
      UidemoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      NgbDropdownModule,
      NgbTooltipModule,
      NgbButtonsModule,
      NgbTabsetModule,
      NgbProgressbarModule,
      FormsModule,
      HttpModule,
      DragDropModule,
      NgxTimerModule,
      TinymceModule
   ],
   providers: [
      NavigationItem,
      PostServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
