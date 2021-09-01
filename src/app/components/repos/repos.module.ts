import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReposComponent } from './repos.component';
import { SearchComponent } from '../search/search.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { RepoService } from '../../services/repo.service';
import { FilterPipe } from '../../pipe/filter.pipe';
import { ReposRoutes } from './repos-routing.module';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ReposRoutes],
    declarations: [ReposComponent, SearchComponent, ReposListComponent, FilterPipe],
    providers: [RepoService]
})
export class ReposModule { }