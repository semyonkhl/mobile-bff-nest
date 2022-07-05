import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import Bottleneck from 'bottleneck';
import { ObjectWithKeyIteration } from 'src/types';
import { AppLogger } from 'src/log/log.service';
import { Request } from 'express';
import { chicagoIpAddress } from './constants';

@Injectable()
export class HelpersService {
  public constructor(private readonly appLogger: AppLogger) {}

  getParams(
    req: Request,
    filter: string[],
    clearEmptyParams?: boolean,
  ): Record<string, any> {
    const params = Object.assign({}, req.params, req.body, req.query);

    if (filter && typeof params === 'object') {
      Object.keys(params).forEach((key) => {
        if (!filter.find((filterKey) => key === filterKey)) {
          delete params[key];
        }
      });
    }

    if (clearEmptyParams) {
      Object.keys(params).forEach((key) => {
        if (
          params[key] === '' ||
          params[key] === null ||
          params[key] === undefined
        ) {
          delete params[key];
        }
      });
    }
    return params;
  }

  getIpAddress(req: { readonly ip: string | undefined }): string {
    // Return Chicago IP address when called from localhost or stage (e.g. for local development or QE testing) or IP address cannot be determined
    // '10.100.x.x' are internal corporate VPN IP addresses
    const localhostIpAddresses = ['127.0.0.1', '::ffff:127.0.0.1', '::1'];
    const internalVpnIpAddressPrefix = '10.100.';
    return !req.ip ||
      localhostIpAddresses.includes(req.ip) ||
      req.ip.startsWith(internalVpnIpAddressPrefix)
      ? chicagoIpAddress
      : req.ip;
  }

  isImagePayloadInvalid(
    queryString: string,
    data?: ObjectWithKeyIteration,
  ): boolean {
    if (
      !data ||
      ((!data.items || data.items.length < 1) &&
        (!data.relatedResources || data.relatedResources.length < 1))
    ) {
      this.appLogger.log({
        level: 'error',
        message: `DATA MISSING: asset resources are ${queryString} - ${JSON.stringify(
          data,
        )}`,
      });
      return true;
    }
    return false;
  }
}
