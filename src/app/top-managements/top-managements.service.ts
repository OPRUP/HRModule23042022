
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TopManagement } from './top-management';


@Injectable({
  providedIn: 'root'
})
export class TopManagementsService {
   private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getTopManagements(): Observable<TopManagement[]>{
    return this.http.get<TopManagement[]>(`${this.apiServerUrl}/topManagement/all`);
  }

  public getTopManagementById(topManagementId: number): Observable<TopManagement>{
    return this.http.get<TopManagement>(`${this.apiServerUrl}/topManagement/find/${topManagementId}`);
  }


  public addTopManagement(topManagement: TopManagement): Observable<TopManagement>{
    return this.http.post<TopManagement>(`${this.apiServerUrl}/topManagement/add`, topManagement);
  }

  public updateTopManagement(topManagement: TopManagement): Observable<TopManagement>{
    return this.http.put<TopManagement>(`${this.apiServerUrl}/topManagement/update`, topManagement);
  }

  public deleteTopManagement(topManagement: TopManagement): Observable<TopManagement>{
    return this.http.put<TopManagement>(`${this.apiServerUrl}/topManagement/delete`, topManagement);
  }


}
