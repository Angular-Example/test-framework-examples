import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, defer } from 'rxjs';
import { DefaultCHttpService } from './default-c-http.service';

// Create async observable error that errors
//  after a JS engine turn
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('DefaultCHttpService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: DefaultCHttpService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DefaultCHttpService(httpClientSpy as any);
  });

  it('should return expected string (HttpClient called once)', () => {
    const expectedResponse: string = 'hello';

    httpClientSpy.get.and.returnValue(of(expectedResponse));

    service.getValue().subscribe(
      response => expect(response).toEqual(expectedResponse, 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

// see: https://stackoverflow.com/questions/53615585/angular-7-catching-httperrorresponse-in-unit-tests
//   it('should return an error when the server returns a 404', () => {
//     const errorResponse = new HttpErrorResponse({
//       error: 'test 404 error',
//       status: 404,
//       statusText: 'Not Found'
//     });
//
//     httpClientSpy.get.and.returnValue(asyncError(errorResponse));
//
//     service.getValue().subscribe(
//       response => fail('expected an error, not response'),
//       error  => expect(error.message).toContain('test 404 error')
//     );
//   });
});
