// Input Types
export const PASSWORD = 'password';
export const TEXT = 'text';
export const EMAIL = 'email';
export const DATE = 'date';
export const FILE = 'file';
export const ALL = 'all';
export const COMPLETED = 'completed';
export const PENDING = 'pending';
export const IN_PROGRESS = 'in-progress';

export const ITEMNAME = 'Item Name';
export const ITEMDESCRIPTION = 'Item Description';
export const IMAGE = 'Image';
export const SCHEDULED_PAYMENT = 'scheduled-payment';

// Methods
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
export const DELETE_ORDER_ITEM_PATH = '/order/item';
export const IMAGE_URL_PATH = '/images';
export const RESEND_ORDER_PATH = '/order/resend';
export const GET_DASHBOARD_DATA_PATH = '/order/getDashboardData';
export const GET_DASHBOARD_RECENT_PURCHASES_API_PATH = '/order/recentPurchases';
export const QUICK_BUY_API_PATH = '/order/quickBuy';

// Recurrent List Api Endpoints
export const CREATE_RECURRENT_LIST = '/order/item/create';
export const CREATE_RECURRENT_ORDER = '/recurrent/create';
export const DELETE_ITEM_FROM_RECURRENT_ORDER = '/order/item';
export const ADD_ITEM_TO_RECURRENT_ORDER = '/recurrent/addItemToRecurrentOrder';
export const GET_RECURRENT_ITEMS = '/recurrent/getRecurrentItems';
export const GET_COMPANY_RECURRENT_ORDERS =
  '/recurrent/getRecurrentCompanyOrders';
export const GET_SINGLE_RECURRENT_ORDER = '/recurrent';
export const GET_ITEM_BY_ITEM = '/order/item';

export const PHONE_NUMBER = 'phoneNumber';
export const ALTERNATE_PHONE = 'alternatePhone';
export const OFFICE_ADDRESS = 'officeAddress';
export const STATE = 'state';
export const LANDMARK = 'landmark';
export const LOGO = 'logo';

// SHOPPING LIST ENDPOINTS START
export const BASE_URL_SHOPPING_LIST_PATH = '/order/item' as const;
export const CREATE_SHOPPING_LIST_ITEM_PATH =
  `${BASE_URL_SHOPPING_LIST_PATH}/create` as const;
export const GET_ALL_SHOPPING_LIST_ITEMS_PATH =
  `${BASE_URL_SHOPPING_LIST_PATH}/getAllItems` as const;
export const CREATE_ORDER_PATH = '/order/create' as const;

export const DELETE_IMAGE_SHOPPING_LIST_ITEM_PATH = '/order/itemImage' as const;

// SHOPPING LIST ENDPOINTS END

// ROLES AND PERMISSIONS ENDPOINTS START
export const DELETE_TEAM_MEMBER_PATH = '/user';
export const GET_ALL_COMPANY_USERS_PATH = '/user/getAllCompanyUsers';
export const CREATE_TEAM_MEMBER_PATH = '/user/create';
// ROLES AND PERMISSIONS ENDPOINTS END
