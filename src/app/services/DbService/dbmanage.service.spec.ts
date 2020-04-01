/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang xin
 * @Date: 2020-03-30 22:37:01
 * @LastEditors: zhang xin
 * @LastEditTime: 2020-03-31 15:02:51
 */
import { TestBed } from '@angular/core/testing';

import { DbmanageService } from './dbmanage.service';

describe('DbmanageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbmanageService = TestBed.get(DbmanageService);
    expect(service).toBeTruthy();
  });
});
