export const USER_NAME_PLACEHOLDER = '회원명을 입력해주세요';
export const PHONE_NUMBER_PLACEHOLDER = '휴대폰번호를 입력해주세요';
export const MODEL_NAME_PLACEHOLDER = '모델명을 입력해주세요';
export const LOGOUT_MESSAGE = '로그아웃 되었습니다.';

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

export const estimateTypeOptionList = [{ id: 0, value: '전체' }];
export const estimateStatusOptionList = [{ id: 0, value: '전체' }];
export const discountOptionList = [{ id: 0, value: '전체' }];
export const salesTypeOptionList = [
  { id: 0, value: '전체' },
  { id: 1, value: 'Direct' },
  { id: 2, value: '당일배송' },
  { id: 3, value: '빠른배송' },
];
