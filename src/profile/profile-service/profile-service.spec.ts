import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile-service';

describe('ProfileService', () => {
  let provider: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileService],
    }).compile();

    provider = module.get<ProfileService>(ProfileService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
