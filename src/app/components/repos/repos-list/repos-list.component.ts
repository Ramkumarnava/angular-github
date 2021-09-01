import { Component, Input, OnChanges } from '@angular/core';
import { RepoService } from '../../../services/repo.service';


@Component({
    selector: 'app-repos-list',
    templateUrl: './repos-list.component.html'
})
export class ReposListComponent implements OnChanges {
    @Input() groupFilters: Object;
    @Input() searchByKeyword: string;
    repos: any[] = [];
    filteredRepos: any[] = [];
    constructor(private repoService: RepoService) { }
    ngOnInit(): void {
        this.loadRepos();
    }
    ngOnChanges(): void {
        if (this.groupFilters) this.filterRepoList(this.groupFilters);
    }
    filterRepoList(filters: any): void {
        this.filteredRepos = this.repos;
        const keys = Object.keys(filters);
        const filterRepo = user => {
            let result = keys.map(key => {
                if (user[key]) {
                    return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
                } else {
                    return false;
                }
            });
            result = result.filter(it => it !== undefined);
            return result.reduce((acc, cur: any) => { return acc & cur }, 1)
        }
        this.filteredRepos = this.repos.filter(filterRepo);
    }

    loadRepos() {
        this.repoService.getRepos().subscribe(data => {
            let dataList = data.map(d => {
                return {
                    name: d.name,
                    language: d.language,
                    description: d.description,
                    size: d.size
                };
            })
            this.repos = dataList;
            this.filteredRepos = this.filteredRepos.length > 0 ? this.filteredRepos : this.repos;

        })

    }
}