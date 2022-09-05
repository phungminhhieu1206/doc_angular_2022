import { Component, OnInit } from '@angular/core';
import { Filter, FilterButton } from 'src/app/models/filtering.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filterButtons: FilterButton[] = [
    {type: Filter.All, label: "All", isActive: true},
    {type: Filter.Activate, label: "Active", isActive: false},
    {type: Filter.Completed, label: "Completed", isActive: false}
  ]

  length = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 * Trong footer có 3 nút: All, Active, Completed
 * Và 3 nút này lúc nào cũng hiện và chỉ là 3 nút mà thôi
 */
