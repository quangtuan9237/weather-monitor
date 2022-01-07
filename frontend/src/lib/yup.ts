import i18next from 'i18next';
import { setLocale, addMethod, string, date, StringSchema, DateSchema } from 'yup';

declare module 'yup' {
  interface StringSchema {
    removeNull(): StringSchema;
  }
  interface DateSchema {
    largerThan(targetField: string): DateSchema;
  }
}

addMethod<StringSchema>(string, 'removeNull', function () {
  return this.transform(function (value: StringSchema, _originalValue: string) {
    if (value === null) return undefined;
    if (this.isType(value)) return value;

    return value;
  });
});

addMethod<DateSchema>(date, 'largerThan', function (targetField: string) {
  return this.when(targetField, (targetValue: any, schema: any) => {
    if (!targetValue) return schema;
    return schema.min(targetValue);
  });
});

setLocale({
  mixed: {
    required: (values: any) => i18next.t('yup.mixed.required', values),
  },
  string: {
    length: (values: any) => i18next.t('yup.string.length', values),
    min: (values: any) => i18next.t('yup.string.min', values),
    max: (values: any) => i18next.t('yup.string.max', values),
    matches: (values: any) => i18next.t('yup.string.matches', values),
    email: (values: any) => i18next.t('yup.string.email', values),
    url: (values: any) => i18next.t('yup.string.url', values),
    uuid: (values: any) => i18next.t('yup.string.uuid', values),
    trim: (values: any) => i18next.t('yup.string.trim', values),
    lowercase: (values: any) => i18next.t('yup.string.lowercase', values),
    uppercase: (values: any) => i18next.t('yup.string.uppercase', values),
  },
  number: {
    min: (values: any) => i18next.t('yup.number.min', values),
    max: (values: any) => i18next.t('yup.number.max', values),
    lessThan: (values: any) => i18next.t('yup.number.lessThan', values),
    moreThan: (values: any) => i18next.t('yup.number.moreThan', values),
    positive: (values: any) => i18next.t('yup.number.positive', values),
    negative: (values: any) => i18next.t('yup.number.negative', values),
    integer: (values: any) => i18next.t('yup.number.integer', values),
  },
  date: {
    min: (values: any) => i18next.t('yup.date.min', values),
    max: (values: any) => i18next.t('yup.date.max', values),
  },
  boolean: {
    isValue: (values: any) => i18next.t('yup.boolean.isValue', values),
  },
  object: {
    noUnknown: (values: any) => i18next.t('yup.object.noUnknown', values),
  },
  array: {
    min: (values: any) => i18next.t('yup.array.min', values),
    max: (values: any) => i18next.t('yup.array.max', values),
    length: (values: any) => i18next.t('yup.array.length', values),
  },
});
