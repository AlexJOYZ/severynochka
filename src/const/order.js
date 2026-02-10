import { CheckIcon } from '../components/UI/icons/checkbox/CheckIcon';
import { ConfirmedStatusIcon } from '../components/UI/icons/orderStatus/ConfirmedStatusIcon';
import { DeliveredStatusIcon } from '../components/UI/icons/orderStatus/DeliveredStatusIcon';
import { NewStatusIcon } from '../components/UI/icons/orderStatus/NewStatusIcon';
import { NotConfirmedStatusIcon } from '../components/UI/icons/orderStatus/NotConfirmedStatusIcon';
import { NotDeliveredStatusIcon } from '../components/UI/icons/orderStatus/NotDeliveredStatusIcon';
import { RefundStatusIcon } from '../components/UI/icons/orderStatus/RefundStatusIcon';
import { ReturnedStatusIcon } from '../components/UI/icons/orderStatus/ReturnedStatusIcon';
import { SuppliedStatusIcon } from '../components/UI/icons/orderStatus/SuppliedStatusIcon';

export const ORDER_STATUS = {
  NEW: { title: 'Новый', icon: NewStatusIcon },
  PICKED: { title: 'Собран', icon: CheckIcon },
  DELIVERED: { title: 'Доставляется', icon: DeliveredStatusIcon },
  CONFIRMED: { title: 'Подтверждён', icon: ConfirmedStatusIcon },
  NOT_CONFIRMED: { title: 'Не подтвердили', icon: NotConfirmedStatusIcon },
  REFUND: { title: 'Возврат', icon: RefundStatusIcon },
  RETURNED: { title: 'Вернули', icon: ReturnedStatusIcon },
  SUPPLIED: {
    title: 'Получен',
    icon: SuppliedStatusIcon,
  },
  NOT_DELIVERED: {
    title: 'Не доставили',
    icon: NotDeliveredStatusIcon,
  },
};
