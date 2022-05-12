import { Moment } from 'moment';

export interface EstimationVO {
  key: number;
  index: number;
  estimateDate: string;
  expirationDate: string;
  name: string;
  gender: string;
  birthday: string;
  phoneNumber: string;
  salesType: string;
  detail: string;
}

export interface GetEstimationsRequestParams {
  name?: string;
  estimatedateStDt?: string;
  estimatedateEndDt?: string;
  phoneNumber?: string;
  salesType?: string;
}

export interface EstimationFilterForm {
  discount?: string;
  estimateDate?: Array<Moment>;
  estimateStatus?: string;
  estimateType?: string;
  modelName?: string;
  name?: string;
  phoneNumber?: string;
  salesType?: string;
}
