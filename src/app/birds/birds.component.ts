// birds.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  birds = [
    {
      id: 1,
      name: 'American Robin',
      scientificName: 'Turdus migratorius',
      family: 'Turdidae',
      habitat: 'Woodlands',
      imageUrl: 'assets/images/american-robin.jpg' // Local image path
    },
    {
      id: 2,
      name: 'Bald Eagle',
      scientificName: 'Haliaeetus leucocephalus',
      family: 'Accipitridae',
      habitat: 'Near water bodies',
      imageUrl: 'assets/images/bald-eagle.jpg' // Local image path
    },
    {
      id: 3,
      name: 'Blue Jay',
      scientificName: 'Cyanocitta cristata',
      family: 'Corvidae',
      habitat: 'Forests',
      imageUrl: 'assets/images/blue-jay.jpg' // Local image path
    },
    {
      id: 4,
      name: 'Northern Cardinal',
      scientificName: 'Cardinalis cardinalis',
      family: 'Cardinalidae',
      habitat: 'Woodlands and gardens',
      imageUrl: 'assets/images/northern-cardinal.jpg' // Local image path
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
