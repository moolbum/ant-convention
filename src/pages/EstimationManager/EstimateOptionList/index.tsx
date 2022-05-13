import { DatePicker, Input, Select } from 'antd';
import {
  labelList,
  USER_NAME_PLACEHOLDER,
  PHONE_NUMBER_PLACEHOLDER,
  MODEL_NAME_PLACEHOLDER,
  estimateTypeOptionList,
  salesTypeOptionList,
  discountOptionList,
  estimateStatusOptionList,
  SALE_TYPE_PLACEHOLDER,
  ESTIMATE_STATUS_PLACEHOLDER,
  DISCOUNT_TYPE_PLACEHOLDER,
  ESTIMATE_TYPE_PLACEHOLDER,
} from '../constants';
import { EstimationOption } from '../../../models/estimation';

const { RangePicker } = DatePicker;

const estimateOptionList: Array<EstimationOption> = [
  {
    id: 0,
    label: labelList[0].label,
    name: labelList[0].name,
    formItem: (
      <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" />
    ),
  },
  {
    id: 1,
    label: labelList[1].label,
    name: labelList[1].name,
    formItem: <Input placeholder={USER_NAME_PLACEHOLDER} />,
  },
  {
    id: 2,
    label: labelList[2].label,
    name: labelList[2].name,
    formItem: <Input placeholder={PHONE_NUMBER_PLACEHOLDER} />,
  },
  {
    id: 3,
    label: labelList[3].label,
    name: labelList[3].name,
    formItem: (
      <Select placeholder={ESTIMATE_TYPE_PLACEHOLDER}>
        <Select.Option value={estimateTypeOptionList[0].value}>
          {estimateTypeOptionList[0].value}
        </Select.Option>
      </Select>
    ),
  },
  {
    id: 4,
    label: labelList[4].label,
    name: labelList[4].name,
    formItem: (
      <Select placeholder={SALE_TYPE_PLACEHOLDER}>
        {salesTypeOptionList.map(data => {
          return (
            <Select.Option key={data.id} value={data.value}>
              {data.label}
            </Select.Option>
          );
        })}
      </Select>
    ),
  },
  {
    id: 5,
    label: labelList[5].label,
    name: labelList[5].name,
    formItem: (
      <Select placeholder={ESTIMATE_STATUS_PLACEHOLDER}>
        <Select.Option value={estimateStatusOptionList[0].value}>
          {estimateStatusOptionList[0].value}
        </Select.Option>{' '}
      </Select>
    ),
  },
  {
    id: 6,
    label: labelList[6].label,
    name: labelList[6].name,
    formItem: <Input placeholder={MODEL_NAME_PLACEHOLDER} />,
  },
  {
    id: 7,
    label: labelList[7].label,
    name: labelList[7].name,
    formItem: (
      <Select placeholder={DISCOUNT_TYPE_PLACEHOLDER}>
        <Select.Option value={discountOptionList[0].value}>
          {discountOptionList[0].value}
        </Select.Option>
      </Select>
    ),
  },
];

export default estimateOptionList;
