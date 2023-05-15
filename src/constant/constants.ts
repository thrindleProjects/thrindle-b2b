// Input Types
export const PASSWORD = 'password';
export const TEXT = 'text';
export const EMAIL = 'email';
export const DATE = 'date';
export const FILE = 'file';
export const ALL = 'all';
export const COMPLETED = 'completed';

export const ITEMNAME = 'Item Name';
export const ITEMDESCRIPTION = 'Item Description';
export const IMAGE = 'Image';
export const SCHEDULED_PAYMENT = 'scheduled-payment';

export const POST_METHOD = 'POST';
export const GET_METHOD = 'GET';
export const PUT_METHOD = 'PUT';
export const DELETE_METHOD = 'DELETE';
export const PATCH_METHOD = 'PATCH';

// Update Password Endpoint
export const UPDATE_PASSWORD_ENDPOINT = '/user/updatePassword';
export const VERIFY_COMPANY_API = '/company/verify';
export const UPDATE_COMPANY_API = '/company/update';
export const LOGIN = '/user/signin';
export const PASSWORD_REQUEST = '/user/passwordResetRequest';
export const PASSWORD_RESET = '/user/resetPassword';
const IMAGES_SUB_LINK = '/images';

export const IMAGE_URL = `${process.env.NEXT_PUBLIC_DEV_URL}${IMAGES_SUB_LINK}`;

export const AXIOS_TIMEOUT_TIME = 30000;
export const REFETCH_TIME = 43200000;
export const AXIOS_TIMEOUT_MSG = 'Request Timeout';
export const TOKEN_EXPIRED_MSG = 'session expired. please login again';
export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

// API ENDPOINTS
export const CREATE_NEW_COMPANY_API = '/company/signup';
export const GET_ALL_ORDERS_PATH = '/order/getCompanyOrders';
export const GET_SINGLE_ORDER_PATH = '/order';
export const IMAGE_URL_PATH = '/images';

export const PHONE_NUMBER = 'phoneNumber';
export const ALTERNATE_PHONE = 'alternatePhone';
export const OFFICE_ADDRESS = 'officeAddress';
export const STATE = 'state';
export const LANDMARK = 'landmark';
export const LOGO = 'logo';
