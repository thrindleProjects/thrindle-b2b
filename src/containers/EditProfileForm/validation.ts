import * as Yup from 'yup';
/**
 id: Joi.string().required(),
    companyName: Joi.string(),
    address: Joi.string(),
    state: Joi.string(),
    landmark: Joi.string(),
    logo: Joi.string(),
    contactPhone: Joi.string(),
    status: Joi.string(),
    alternateContactPhone: Joi.string()
 */

export type EditProfileFormValues = {
  companyName: string;
  address: string | undefined;
  contactPhone: string | undefined;
  alternateContactPhone: string | undefined;
};

export const initialValues: EditProfileFormValues = {
  companyName: '',
  address: '',
  contactPhone: '',
  alternateContactPhone: '',
};

export const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is required'),
  address: Yup.string().required('Address is required'),
  contactPhone: Yup.string()
    .required('Contact Phone is required')
    .matches(/^0[789][01]\d{8}$/, {
      message: 'Invalid phone number',
      excludeEmptyString: false,
    }),
  alternateContactPhone: Yup.string()
    .required('Alternate Phone is required')
    .matches(/^0[789][01]\d{8}$/, {
      message: 'Invalid phone number',
      excludeEmptyString: true,
    }),
});
