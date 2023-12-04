import { Button } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  selectCounterValue,
} from '../model/selectors/selectCounterValue/selectCounterValue'
import { increment, decrement } from '../model/slice/counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const value = useSelector(selectCounterValue)

  return (
    <div>
      <h2 data-testid='value-title'>{value}</h2>
      <Button
        onClick={() => dispatch(increment())}
        data-testid='increment-btn'
      >
        {t('increment')}
      </Button>
      <Button
        onClick={() => dispatch(decrement())}
        data-testid='decrement-btn'
      >
        {t('decrement')}
      </Button>
    </div>
  )
}
