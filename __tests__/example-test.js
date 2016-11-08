import example from '../src/models/example';

test('it should save', () => {
  expect(example.reducers['example/save']({}, { payload: { a: 1 }}))
  .toEqual({ a: 1 });
});
