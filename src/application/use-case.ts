export abstract class UseCase<Request = void, Response = void> {
  abstract execute(request: Request): Response | Promise<Response>;
}
