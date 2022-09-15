import { InvalidPaginationParamsException } from '@application/password/exceptions/invalid-pagination-params-exception';
import { IPasswordGateway } from '@domain/password/gateways/password-gateway';
import { FindAllPasswordsPaginatedResponseMapper } from '@domain/password/mappers/find-all-passwords-paginated-response-mapper';
import { FindAllPasswordsPaginatedResponse } from '@domain/password/types/find-all-passwords-paginated-response';
import { IHttpExceptionGateway } from '@domain/shared/gateways/http-exception-gateway';
import { Pagination } from '@domain/shared/types/pagination';
import { BaseFindAllPasswordsPaginatedUseCase } from './base-find-all-passwords-paginated-use-case';
import { FindAllPasswordsPaginatedDto } from './find-all-passwords-paginated-dto';

export class FindAllPasswordsPaginatedUseCase extends BaseFindAllPasswordsPaginatedUseCase {
  private mapper: FindAllPasswordsPaginatedResponseMapper;
  constructor(
    private readonly passwordGateway: IPasswordGateway,
    private readonly httpExceptionGateway: IHttpExceptionGateway,
  ) {
    super();
    this.mapper = new FindAllPasswordsPaginatedResponseMapper();
  }

  async execute({
    userId,
    page = 1,
    size = 10,
  }: FindAllPasswordsPaginatedDto): Promise<
    Pagination<FindAllPasswordsPaginatedResponse>
  > {
    const pageFormat = Number(page);
    const sizeFormat = Number(size);

    if (pageFormat <= 0 || sizeFormat <= 0) {
      throw new InvalidPaginationParamsException(this.httpExceptionGateway);
    }

    const [passwords, total] = await this.passwordGateway.findAllPaginated({
      page: pageFormat - 1,
      size: sizeFormat,
      userId,
    });

    const totalPages = Math.ceil(total / sizeFormat);
    const data = passwords.map(this.mapper.mapFrom);

    return {
      data,
      page: pageFormat,
      firstPage: pageFormat === 1,
      elementsPerPage: sizeFormat,
      elementsInPage: passwords.length,
      totalPages,
      lastPage: pageFormat === totalPages,
      totalElements: total,
    };
  }
}
