export const USER_NAME_PLACEHOLDER = '회원명을 입력해주세요';
export const PHONE_NUMBER_PLACEHOLDER = '휴대폰번호를 입력해주세요';
export const MODEL_NAME_PLACEHOLDER = '모델명을 입력해주세요';
export const ESTIMATE_TYPE_PLACEHOLDER = '견적유형을 선택해주세요';
export const SALE_TYPE_PLACEHOLDER = '판매유형을 선택해주세요';
export const ESTIMATE_STATUS_PLACEHOLDER = '견적상태를 입력해주세요';
export const DISCOUNT_TYPE_PLACEHOLDER = '할인방법을 선택해주세요';

export const LOGOUT_MESSAGE = '로그아웃 되었습니다.';
export const DATE_FORMAT = 'YY/MM/DD HH:mm';

export const columns = [
  { id: 0, title: '순서', dataIndex: 'index' },
  { id: 1, title: '견적일시', dataIndex: 'estimateDate' },
  { id: 2, title: '만료일', dataIndex: 'expirationDate' },
  { id: 3, title: '회원명', dataIndex: 'name' },
  { id: 4, title: '성별', dataIndex: 'gender' },
  { id: 5, title: '생년월일', dataIndex: 'birthday' },
  { id: 6, title: '휴대폰번호', dataIndex: 'phoneNumber' },
  { id: 7, title: '판매유형', dataIndex: 'salesType' },
  { id: 8, title: '관리', dataIndex: 'detail' },
];

export const labelList = [
  {
    id: 0,
    label: '견적기간',
    name: 'estimateDate',
  },
  { id: 1, label: '회원명', name: 'name' },
  {
    id: 2,
    label: '휴대폰번호',
    name: 'phoneNumber',
  },
  {
    id: 3,
    label: '견적유형',
    name: 'estimateType',
  },
  {
    id: 4,
    label: '판매유형',
    name: 'salesType',
  },
  {
    id: 5,
    label: '견적상태',
    name: 'estimateStatus',
  },
  {
    id: 6,
    label: '모델명',
    name: 'modelName',
  },
  {
    id: 7,
    label: '임직원할인',
    name: 'discount',
  },
];

export const estimateTypeOptionList = [{ id: 0, label: '전체', value: '' }];
export const estimateStatusOptionList = [{ id: 0, label: '전체', value: '' }];
export const discountOptionList = [
  { id: 0, label: '전체', value: '' },
  { id: 1, label: '포인트적립', value: '포인트적립' },
  { id: 2, label: '무이자', value: '무이자' },
];
export const salesTypeOptionList = [
  { id: 0, label: '전체', value: '' },
  { id: 1, label: 'Direct', value: 'Direct' },
  { id: 2, label: '당일배송', value: '당일배송' },
  { id: 3, label: '빠른배송', value: '빠른배송' },
];
