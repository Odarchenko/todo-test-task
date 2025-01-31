import { renderHook, act } from '@testing-library/react';
import { useAlert } from '../../hooks/useAlert';

describe('useAlert Hook', () => {
  test('should show alert and clear after timeout', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useAlert(1000));

    act(() => {
      result.current.showAlert('Test Alert', 'success');
    });

    expect(result.current.alert).toEqual({
      message: 'Test Alert',
      type: 'success',
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.alert).toBeNull();
  });

  test('should set alert manually', () => {
    const { result } = renderHook(() => useAlert());

    act(() => {
      result.current.setAlert({ message: 'Manual Alert', type: 'info' });
    });

    expect(result.current.alert).toEqual({
      message: 'Manual Alert',
      type: 'info',
    });
  });
});
