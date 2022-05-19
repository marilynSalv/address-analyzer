import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinate } from './coordinate';


@Injectable({
  providedIn: 'root'
})
export class AddressDetailsService {

  constructor(private http: HttpClient) { }

  getLatitudeLongitude(): Observable<any>{
    return this.http.get('https://nominatim.openstreetmap.org/search?addressdetails=1&q=19212 breynia dr&format=geojson&limit=1');
  }

  getLandFeatures(min: Coordinate, max: Coordinate): Observable<any>{
    return this.http.get(`https://ca.dep.state.fl.us/arcgis/rest/services/OpenData/FGS_PUBLIC/MapServer/5/query?outFields=*&returnGeometry=false&resultOffset=0&resultRecordCount=10&f=json&where=1%3D1&inSR=4326&geometry={"spatialReference":{"latestWkid":4326,"wkid":102100},"xmin":${min.longitudeX},"ymin":${min.latitudeY},"xmax":${max.longitudeX},"ymax":${max.latitudeY}}&geometryType=esriGeometryEnvelope&spatialRel=esriSpatialRelIntersects`);
  }
}
