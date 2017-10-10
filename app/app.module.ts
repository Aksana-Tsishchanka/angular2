import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/course/courseList.component';
import { CourseComponent } from './components/course/course.component';
import { IconEditComponent } from './components/icon/iconEdit.component';
import { IconDeleteComponent } from './components/icon/iconDelete.component';
import { CommonButtonComponent } from './components/button/commonButton.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { IconSearchComponent } from './components/icon/iconSearch.component';

@NgModule({
    imports:      [BrowserModule,  FormsModule],
    declarations: [AppComponent, HeaderComponent, CourseListComponent, CourseComponent,
        CommonButtonComponent, FooterComponent, IconEditComponent, IconDeleteComponent,
        LogoComponent, SearchComponent, IconSearchComponent],
    bootstrap:    [AppComponent],
})
export class AppModule { }
