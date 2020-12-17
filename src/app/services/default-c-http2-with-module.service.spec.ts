import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, defer } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DefaultCHttpService } from './default-c-http.service';

// Create async observable error that errors
//  after a JS engine turn
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('DefaultCHttpService', () => {
  let injector: TestBed;
  let service: DefaultCHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(DefaultCHttpService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should return expected string (HttpClient called once)', () => {
    const expectedResponse: string = 'hello';

    service.getValue().subscribe(value => {
      expect(value).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`assets/file/default`);
    expect(req.request.method).toBe("GET");
    req.flush(expectedResponse);
  });

  it('should return an error when the server returns a 404', () => {
    const mockErrorResponse = new HttpErrorResponse({
                                    status: 404,
                                    statusText: 'Not Found'
                                  });
    const data = 'Invalid request parameters';

    service.getValue().subscribe(
      value => { fail('expected an error, not response'); },
      error => { expect(error.error).toBe(data); }
    );

    httpMock.expectOne('assets/file/default').flush(data, mockErrorResponse);
  });
});
