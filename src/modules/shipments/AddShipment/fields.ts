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

export type FieldType = 'text' | 'dropdown'

interface FieldsReturnType {
  defaultValue: string
  placeHolder: string
  name: string
  fieldType: FieldType
}

export const FieldsOne = ({ pageOne }: FieldsOneProps): FieldsReturnType[] => {
  const { t } = useTranslation()
  const fields = [
    {
      defaultValue: pageOne.businessID,
      placeHolder: t('businessID'),
      name: 'businessID',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageOne.senderName,
      placeHolder: t('name'),
      name: 'senderName',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageOne.senderAddress,
      placeHolder: t('address'),
      name: 'senderAddress',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageOne.senderCity,
      placeHolder: t('city'),
      name: 'senderCity',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageOne.senderPostCode,
      placeHolder: t('postcode'),
      name: 'senderPostCode',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageOne.senderCountry,
      placeHolder: t('country'),
      name: 'senderCountry',
      fieldType: 'dropdown' as const,
    },
    {
      defaultValue: pageOne.senderPhoneNumber,
      placeHolder: t('phone'),
      name: 'senderPhoneNumber',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageOne.senderEmail,
      placeHolder: t('email2'),
      name: 'senderEmail',
      fieldType: 'text' as const,
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
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageTwo.receiverAddress,
      placeHolder: t('address'),
      name: 'receiverAddress',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageTwo.receiverCity,
      placeHolder: t('city'),
      name: 'receiverCity',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageTwo.receiverPostCode,
      placeHolder: t('postcode'),
      name: 'receiverPostCode',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageTwo.receiverCountry,
      placeHolder: t('country'),
      name: 'receiverCountry',
      fieldType: 'dropdown' as const,
    },
    {
      defaultValue: pageTwo.receiverPhoneNumber,
      placeHolder: t('phone'),
      name: 'receiverPhoneNumber',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageTwo.receiverEmail,
      placeHolder: t('email2'),
      name: 'receiverEmail',
      fieldType: 'text' as const,
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
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageThree.shippingMethod,
      placeHolder: t('shippingMethod'),
      name: 'shippingMethod',
      fieldType: 'dropdown' as const,
    },
    {
      defaultValue: pageThree.weight,
      placeHolder: t('weight'),
      name: 'weight',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageThree.reference,
      placeHolder: t('reference'),
      name: 'reference',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageThree.description,
      placeHolder: t('description'),
      name: 'description',
      fieldType: 'text' as const,
    },
    {
      defaultValue: pageThree.invoiceNumber,
      placeHolder: t('invoiceNumber'),
      name: 'invoiceNumber',
      fieldType: 'text' as const,
    },
  ]

  return fields
}
