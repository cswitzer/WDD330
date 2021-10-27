// declaration of generator, a special function used to produce iterators that maintain
// the state of a value
function* exampleGenerator() {}

// code will only continue execution when next() method is called
// yield allows the state of the value "returned" to be remembered next call
function fib(a, b) {
  let [prev, cur] = [a, b]
  while (true) {
    ;[prev, cur] = [cur, prev + cur]
    yield cur
  }
}

const seq = fib(1,1)

// e.g. fib(1, 1)
// [prev=1, current=1]
// yield current = (prev + current) = 2
// next()
// [prev=1, current=2]
// yield current = (prev + current) = 3
// next()
// [prev=2, current=3]
// yield current = (prev + current) = 5
