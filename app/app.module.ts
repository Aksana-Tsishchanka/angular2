import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/course/courseList.component';
import { CourseComponent } from './components/course/corse.component'
import { IconEditComponent } from './components/icon/iconEdit.component';
import { IconDeleteComponent } from './components/icon/iconDelete.component';
import { CommonButtonComponent } from './components/button/commonButton.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { IconSearchComponent } from  './components/icon/iconSearch.component';

@NgModule({
    imports:      [BrowserModule],
    declarations: [AppComponent, HeaderComponent, CourseListComponent, CourseComponent,
        CommonButtonComponent, FooterComponent, IconEditComponent, IconDeleteComponent,
        LogoComponent, SearchComponent, IconSearchComponent],
    bootstrap:    [AppComponent],
})
export class AppModule { }

