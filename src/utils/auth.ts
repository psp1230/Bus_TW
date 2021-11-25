import jsSHA from 'jssha';

type AuthorizationHeader = {
  Authorization: string;
  'X-Date': string;
};

/**
 * PTX 認證 header
 */
function getAuthorizationHeader(): AuthorizationHeader {
  const appID = process.env.REACT_APP_PTX_ID || '';
  const appKey = process.env.REACT_APP_PTX_KEY || '';

  const shaObj = new jsSHA('SHA-1', 'TEXT', {
    hmacKey: {
      value: appKey,
      format: 'TEXT',
    },
  });

  const utcString = new Date().toUTCString();
  shaObj.update(`x-date: ${utcString}`);

  const HMAC = shaObj.getHMAC('B64');
  const Authorization = `hmac username="${appID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

  return {
    Authorization,
    'X-Date': utcString,
  };
}

export { getAuthorizationHeader };
