export abstract class Mapper<Input, Output> {
  abstract mapFrom(input: Input): Output;
}
