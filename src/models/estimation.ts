import { Moment } from 'moment';

export type EstimationManagerResponse = Array<EstimationVO>;

export interface Column {
  title: string;
  dataIndex: string;
}

export interface EstimationVO {
  key?: number;
  index?: number;
  estimateDate?: string;
  expirationDate?: string;
  name?: string;
  gender?: string;
  birthday?: string;
  phoneNumber?: string;
  salesType?: string;
  detail?: JSX.Element;
}

export interface GetEstimationsRequestParams {
  name?: string;
  estimatedateStDt?: string;
  estimatedateEndDt?: string;
  phoneNumber?: string;
  salesType?: string;
}

export interface EstimationFilterForm {
  estimateDate?: Array<Moment>;
  estimatedateStDt?: string;
  estimatedateEndDt?: string;
  name?: string;
  phoneNumber: string;
  salesType?: string;
  discount?: string;
  key?: number;
  index?: number;
  gender?: string;
  birthday?: string;
  detail?: JSX.Element;
}

export interface EstimationOption {
  id: number;
  label: string;
  name: string;
  formItem: JSX.Element;
}
