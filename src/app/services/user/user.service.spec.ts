import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return a list of users', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        address: {
          street: '123 Main St',
          suite: 'Apt 4B',
          city: 'Anytown',
          zipcode: '12345',
          geo: {
            lat: '12.3456',
            lng: '-98.7654'
          }
        },
        phone: '555-123-4567',
        website: 'johndoe.com',
        company: {
          name: 'ABC Inc',
          catchPhrase: 'Making things happen',
          bs: 'Awesome'
        }
      },
    ];

    userService.getUsers().subscribe((users: User[]) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne(`${environment.API_URL}/users`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockUsers);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
