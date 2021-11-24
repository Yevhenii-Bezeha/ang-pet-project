import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }: Params) => {
      this.server = this.serversService.getServer(id);
    });
  }

  onCLick() {
    this.route.params.subscribe(({id}: Params) => {
      this.router.navigate(['/servers', id, 'edit']);
    });
  }
}
