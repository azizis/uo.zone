import { type NextRequest } from 'next/server';

import { apiMiddleware } from './middleware/api-middleware';
import { filterParamMiddleware } from './middleware/filter-param-middleware';
import { localeMiddleware } from './middleware/locale-middleware';
import { maintenanceMiddleware } from './middleware/maintenance-middleware';

const middlewares = [
  apiMiddleware,
  maintenanceMiddleware,
  filterParamMiddleware,
  localeMiddleware,
];

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/docs')) {
    return;
  }

  for (const m of middlewares) {
    const response = m(request);
    if (response) return response;
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|static|stats).*)',
};
