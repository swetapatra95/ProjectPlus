import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../interfaces/IProject';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private apiUrl = 'https://quiz-3-server-nithya-1ww6.vercel.app';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IResponse> {
    return this.http.get<IResponse>(this.apiUrl + '/projects');
  }

  addProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.apiUrl + '/projects', project);
  }
}
