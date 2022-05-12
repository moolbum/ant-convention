export type EstimationManagerResponse = Array<EstimationVO>;
import moment, { Moment } from 'moment';

export interface Column {
  title: string;
  dataIndex: string;
}

export interface EstimationVO {
  key: number;
  index: number;
  estimatedate: string;
  expirationDate: string;
  user: string;
  gender: string;
  birthday: string;
  phoneNumber: string;
  salesType: string;
  detail: string;
}

export interface List {
  key?: number;
  index?: number;
  estimateDate: string | Moment;
  expirationDate: string | Moment;
  name: string;
  gender?: string;
  birthday?: string;
  phoneNumber: string;
  salesType: string;
  detail?: string;
}

export interface GetFilterDataRequestParams {
  name?: string;
  estimatedateStDt?: string;
  estimatedateEndDtd?: string;
  gender?: string;
  birthday?: string;
  phoneNumber?: string;
  salesType?: string;
  detail?: string;
}

export interface FormItem {
  id: number;
  label: string;
  name: string;
  formItem: JSX.Element;
}
