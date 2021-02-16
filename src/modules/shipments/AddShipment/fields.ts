import { useTranslation } from 'react-i18next'

import { FormDataOne, FormDataTwo, FormDataThree } from '../types'

interface FieldsOneProps {
  pageOne: FormDataOne
}

interface FieldsTwoProps {
  pageTwo: FormDataTwo
}

interface FieldsThreeProps {
  pageThree: FormDataThree
}

interface FieldsReturnType {
  defaultValue: string
  placeHolder: string
  name: string
}

export const FieldsOne = ({ pageOne }: FieldsOneProps): FieldsReturnType[] => {
  const { t } = useTranslation()
  const fields = [
    {
      defaultValue: pageOne.businessID,
      placeHolder: t('businessID'),
      name: 'businessID',
    },
    {
      defaultValue: pageOne.senderName,
      placeHolder: t('name'),
      name: 'senderName',
    },
    {
      defaultValue: pageOne.senderAddress,
      placeHolder: t('address'),
      name: 'senderAddress',
    },
    {
      defaultValue: pageOne.senderCity,
      placeHolder: t('city'),
      name: 'senderCity',
    },
    {
      defaultValue: pageOne.senderPostCode,
      placeHolder: t('postcode'),
      name: 'senderPostCode',
    },
    {
      defaultValue: pageOne.senderCountry,
      placeHolder: t('country'),
      name: 'senderCountry',
    },
    {
      defaultValue: pageOne.senderPhoneNumber,
      placeHolder: t('phone'),
      name: 'senderPhoneNumber',
    },
    {
      defaultValue: pageOne.senderEmail,
      placeHolder: t('email2'),
      name: 'senderEmail',
    },
  ]

  return fields
}

export const FieldsTwo = ({ pageTwo }: FieldsTwoProps): FieldsReturnType[] => {
  const { t } = useTranslation()
  const fields = [
    {
      defaultValue: pageTwo.receiverName,
      placeHolder: t('name'),
      name: 'receiverName',
    },
    {
      defaultValue: pageTwo.receiverAddress,
      placeHolder: t('address'),
      name: 'receiverAddress',
    },
    {
      defaultValue: pageTwo.receiverCity,
      placeHolder: t('city'),
      name: 'receiverCity',
    },
    {
      defaultValue: pageTwo.receiverPostCode,
      placeHolder: t('postcode'),
      name: 'receiverPostCode',
    },
    {
      defaultValue: pageTwo.receiverCountry,
      placeHolder: t('country'),
      name: 'receiverCountry',
    },
    {
      defaultValue: pageTwo.receiverPhoneNumber,
      placeHolder: t('phone'),
      name: 'receiverPhoneNumber',
    },
    {
      defaultValue: pageTwo.receiverEmail,
      placeHolder: t('email2'),
      name: 'receiverEmail',
    },
  ]

  return fields
}

export const FieldsThree = ({
  pageThree,
}: FieldsThreeProps): FieldsReturnType[] => {
  const { t } = useTranslation()
  const fields = [
    {
      defaultValue: pageThree.deliveryCompany,
      placeHolder: t('deliveryCompany'),
      name: 'deliveryCompany',
    },
    {
      defaultValue: pageThree.shippingMethod,
      placeHolder: t('shippingMethod'),
      name: 'shippingMethod',
    },
    {
      defaultValue: pageThree.weight,
      placeHolder: t('weight'),
      name: 'weight',
    },
    {
      defaultValue: pageThree.reference,
      placeHolder: t('reference'),
      name: 'reference',
    },
    {
      defaultValue: pageThree.description,
      placeHolder: t('description'),
      name: 'description',
    },
    {
      defaultValue: pageThree.invoiceNumber,
      placeHolder: t('invoiceNumber'),
      name: 'invoiceNumber',
    },
  ]

  return fields
}
