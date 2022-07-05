import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import Axios, { AxiosInstance } from 'axios';

@Injectable()
export class CatalogService extends HttpService {
  constructor() {
    const axiosInstance: AxiosInstance = Axios.create({
      baseURL:
        'https://catalog-service.corp.int.vividseats-staging.com/api/v1/',
    });
    super(axiosInstance);
  }
}
