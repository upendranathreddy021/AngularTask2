import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit {
  private map: L.Map;

  constructor() { }

  ngOnInit(): void {
    // Map initialization code as before
    
      this.initMap();
      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize();
        }
      }, 500);
    
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.map.invalidateSize();  // Adjust the map size after view is initialized
    }, 0);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 40.712776, -74.005974 ],
      zoom: 8
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    });

    tiles.addTo(this.map);
  }




  private addMarker(lat: number, lng: number): void {
    const marker = L.marker([lat, lng]);
    marker.addTo(this.map);
  }
  private addCircle(lat: number, lng: number): void {
    const circle = L.circle([lat, lng], 
      {radius: 1000,
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5
                  });
    circle.addTo(this.map);
  }
  private addPolygon(lat: number, lng: number): void {
    const polygon = L.polygon([ 
      [lat, lng],
      [lat + 0.001, lng + 0.001]
      ]);
    polygon.addTo(this.map);
  }
  private addPolyline(lat: number, lng: number): void {
    const polyline = L.polyline([
      [lat, lng],
      [lat + 0.001, lng + 0.001]
    ]);
    polyline.addTo(this.map);
  } 
  private addRectangle(lat: number, lng: number): void {
    const rectangle = L.rectangle([
      [lat, lng],
      [lat + 0.001, lng + 0.001]
    ]);
    rectangle.addTo(this.map);
  }
  private addCircleMarker(lat: number, lng: number): void {
    const circleMarker = L.circleMarker([lat, lng]
      );
    circleMarker.addTo(this.map);
  }







}
