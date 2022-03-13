import { TestBed } from '@angular/core/testing';

import { GraphxService } from './graphx.service';

describe('GraphxService', () => {
  let service: GraphxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
