import { Component, OnInit } from '@angular/core';
import { AddressDetailsService } from './address-details.service';
import { flatMap, map } from 'rxjs/operators';
import { Coordinate } from './coordinate';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  landDescription = '';
  address = '';

  constructor(private addressdetailsService: AddressDetailsService) { }

  ngOnInit(): void {
    chrome.tabs.query({ currentWindow: true, active: true }, this.getTabTitleAddress);
  }

  getTabTitleAddress(tabs: any) {
    var title = tabs[0].title;
    var titleArr = title?.split('|');
    if (titleArr != undefined) {
      this.address = titleArr[0].trim();
      let addressParts = this.address.split(', ');
      let searchAddress = addressParts[0] + ' ' + addressParts[2] + ' ' + addressParts[3];
    }
  }



  getLandFeatures() {
    this.addressdetailsService.getLatitudeLongitude()
    .subscribe(
      (data): void => {
        // var lat = data[0]?.lat;
        // var lon = data[0]?.lon;
        // console.log(lat);
        // console.log(lon);
        console.log(data?.features[0]?.bbox);
        var coordinates = data?.features[0]?.bbox;
        var minLatLon: Coordinate = { longitudeX: coordinates[0], latitudeY: coordinates[1]};
        var maxLatLon: Coordinate = { longitudeX: coordinates[2], latitudeY: coordinates[3]};

        this.addressdetailsService.getLandFeatures(minLatLon, maxLatLon).subscribe(
          (landFeatures): void => {
            this.landDescription = landFeatures?.features[0]?.attributes?.DESC_2;
          }
        );
      }
  );
  }
}
