import { Test, TestingModule } from '@nestjs/testing';
import { SitemapController } from '../Sitemap.controller';

describe('SitemapController', () => {
  let controller: SitemapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitemapController],
    }).compile();

    controller = module.get<SitemapController>(SitemapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
