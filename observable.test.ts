import Observable from './observable';

describe('Observable', () => {
  it('should subscribe observers and notify them', () => {
    const observable = new Observable<number>();

    const observer1 = jest.fn();
    const observer2 = jest.fn();

    observable.subscribe(observer1);
    observable.subscribe(observer2);

    observable.notify(42);

    expect(observer1).toHaveBeenCalledWith(42);
    expect(observer2).toHaveBeenCalledWith(42);
  });

  it('should unsubscribe observers', () => {
    const observable = new Observable<number>();

    const observer1 = jest.fn();
    const observer2 = jest.fn();

    observable.subscribe(observer1);
    observable.subscribe(observer2);

    observable.unsubscribe(observer1);
    observable.notify(99);

    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).toHaveBeenCalledWith(99);
  });

  it('should not notify observers if none are subscribed', () => {
    const observable = new Observable<number>();

    const observer1 = jest.fn();

    observable.notify(100);

    expect(observer1).not.toHaveBeenCalled();
  });
});
