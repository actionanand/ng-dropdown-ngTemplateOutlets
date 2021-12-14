import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-tractor',
  templateUrl: './client-tractor.component.html',
  styleUrls: ['./client-tractor.component.sass']
})
export class ClientTractorComponent {
  tractors = [
    {
      name: 'New Holland T7',
      stars: 3,
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/New_Holland_T7_Series_Tractors_-_R.P._Motors_Pty_Ltd.jpg/320px-New_Holland_T7_Series_Tractors_-_R.P._Motors_Pty_Ltd.jpg',
    },
    {
      name: 'Doe Dual Drive',
      stars: 5,
      img:
        'https://upload.wikimedia.org/wikipedia/commons/9/9c/Doe_Dual_Drive_tractor_-_geograph.org.uk_-_572913.jpg',
    },
    {
      name: 'Massey Ferguson',
      stars: 1,
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Massey_Ferguson_6716S.jpg/310px-Massey_Ferguson_6716S.jpg',
    },
  ];
}
