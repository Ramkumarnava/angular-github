import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepoService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  configUrl = 'https://api.github.com/orgs/octo-org/repos';

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}